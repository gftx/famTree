import express, { Request, Response } from 'express'
import { pool } from '../config'
import { IPerson } from '../types'
import { QueryResult } from 'pg'

const router = express.Router()

router.get('/persons', (request: Request, response: Response) => {
  pool.query('SELECT * FROM public.person', (err: Error, res: QueryResult) => {
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    return response.send({
      data: res.rows,
      message: 'успешно получен список людей',
    })
  })
})

const multer = require('multer')
const storage = multer.diskStorage({
  destination(req: any, file: any, cb: (arg0: any, arg1: any) => void) {
    cb(null, './')
  },
  filename(req: any, file: any, cb: (arg0: any, arg1: any) => void) {
    cb(null, `uploads/${Date.now()}-${file.originalname}`)
  },
})

const upload = multer({
  storage: storage,
})

router.post(
  '/persons',
  upload.single('image'),
  (request: Request, response: Response) => {
    const person: any = request.body
    const {
      name,
      surname,
      birthdate,
      father_id,
      mother_id,
      brothers,
      sisters,
      children,
    } = person

    //@ts-ignore
    const image = request.file?.filename

    pool.query(
      `INSERT INTO public.person (name, surname, birthdate, image, father_id, mother_id, brothers, sisters, children)
        VALUES (\'${name}\', \'${surname}\', \'${birthdate}\', \'${image}\', \'${father_id}\',
        \'${mother_id}\', \'${brothers}\', \'${sisters}\', \'${children}\');`,
      (err: Error, res: QueryResult) => {
        if (err) {
          console.error('Error executing query', err.stack)
          return response.status(400).send({
            message: 'произошла ошибка при создании',
          })
        }
        return response.status(201).send({
          data: request.body,
          message: 'человек успешно создан',
        })
      },
    )
  },
)

router.put('/persons', (request: Request, response: Response) => {
  const person: IPerson = request.body
  const {
    id,
    name,
    surname,
    birthdate,
    image,
    father_id = null,
    mother_id = null,
    brothers = null,
    sisters = null,
    children = null,
  } = person

  pool.query(
    `UPDATE public.person SET "name"=\'${name}\', "surname"=\'${surname}\', "birthdate"=\'${birthdate}\', 
                "image"=\'${image}\', "father_id"=\'${father_id}\', "mother_id"=\'${mother_id}\', "brothers"=\'${brothers}\',
                "sisters"=\'${sisters}\', "children"=\'${children}\'  WHERE "id"=\'${id}\';`,
    (err: Error, res: QueryResult) => {
      if (err) {
        console.error('Error executing query', err.stack)
        return response.status(400).send({
          message: err.stack,
        })
      }
      console.log('post response', res)

      return response.send({
        message: 'человек успешно обновлен',
      })
    },
  )
})

router.delete('/persons', (request: Request, response: Response) => {
  const { id } = request.body

  pool.query(
    `DELETE from public.person WHERE id=${id}`,
    (err: Error, res: QueryResult) => {
      if (err) {
        console.error('Error executing query', err.stack)
        return response.status(400).send({
          message: err.stack,
        })
      }

      return response.send({
        message: 'человек успешно удален',
      })
    },
  )
})

export { router as personsRouter }
