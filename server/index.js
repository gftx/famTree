const express = require("express")
const cors = require("cors")
const lowDb = require("lowdb")
const FileSync = require('lowdb/adapters/FileSync')
const bodyParser = require('body-parser')
const { nanoid } = require('nanoid')

const db = lowDb(new FileSync('db.json'))

db.defaults({ persons: [] }).write()

const app = express()

app.use(cors())

app.use(bodyParser.json())

const PORT = 4000

app.get('/persons', (req, res) => {
    const data = db.get('persons').value()
    return res.json(data)
})

app.post('/persons', (req, res) => {
    const person = req.body
    db.get("persons").push({
        ...person, id: nanoid(),
    }).write()
    res.json({ success: 'новый человек успешно добавлен' })
})

app.listen(PORT, () => {
    console.log(`Backend is running on PORT ${PORT}`)
})