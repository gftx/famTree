import { Pool } from 'pg'

export const pool = new Pool({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DB,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
})

// init database
pool.connect((err:any, client: any, release: () => void) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err: any, result: any) => {
        release()
        if (err) {
            return console.error('Error executing query', err.stack)
        }
        console.log(result.rows)
    })
})
