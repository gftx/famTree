import express, {Request, Response} from 'express';
import {pool} from "../config";
import {IPerson} from "../types";
import {QueryResult} from "pg";

const router = express.Router();

router.get('/persons', (request: Request, response: Response) => {
    pool.query('SELECT * FROM public.person', (err: Error, res: QueryResult) => {
        if (err) {
            return console.error('Error executing query', err.stack)
        }
        return response.send({
            data: res.rows,
            message: 'успешно получен список людей'
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
    }
})

const upload = multer({
    storage: storage
})


router.post('/persons', upload.single('image'), (request: Request, response: Response) => {
    const person:any = request.body;
    const {
        name,
        surname,
        birthdate,
        fatherId = null,
        motherId = null,
        brothersIds = null,
        sistersIds = null,
        childrenIds = null
    } = person

    //@ts-ignore
    const image = request.file?.filename
    console.log('person', person)
    console.log('image', image)

    pool.query(`INSERT INTO public.person (name, surname, birthdate, image, father_id, mother_id, brothers, sisters, children)
        VALUES (\'${name}\', \'${surname}\', \'${birthdate}\', \'${image}\', \'${fatherId}\',
        \'${motherId}\', \'${brothersIds}\', \'${sistersIds}\', \'${childrenIds}\');`,
        (err: Error, res: QueryResult) => {
            if (err) {
                console.error('Error executing query', err.stack);
                return response.send({
                    message: 'произошла ошибка при создании'
                })
            }
            return response.send({
                data: request.body,
                message: 'человек успешно создан',
            });
        }
    )
});

router.put('/persons', (request: Request, response: Response) => {
    const person: IPerson = request.body;
    const {
        id,
        name,
        surname,
        birthdate,
        image,
        fatherId,
        motherId,
        brothersIds,
        sistersIds,
        childrenIds
    } = person

    pool.query(`UPDATE public.person SET "name"=\'${name}\', "surname"=\'${surname}\', "birthdate"=\'${birthdate}\', 
                "image"=\'${image}\', "father_id"=\'${fatherId}\', "mother_id"=\'${motherId}\', "brothers"=\'${brothersIds}\',
                "sisters"=\'${sistersIds}\', "children"=\'${childrenIds}\'  WHERE "id"=\'${id}\';`,
        (err: Error, res: QueryResult) => {
            if (err) {
                console.error('Error executing query', err.stack);
                return response.send({
                    message: err.stack
                })
            }
            console.log('post response', res)

            return response.send({
                message: 'человек успешно обновлен',
            });
        }
    )
});


router.delete('/persons', (request: Request, response: Response) => {
    const { id } = request.body

    pool.query(`DELETE from public.person WHERE id=${id}`,
        (err: Error, res: QueryResult) => {
            if (err) {
                console.error('Error executing query', err.stack);
                return response.send({
                    message: err.stack
                })
            }

            return response.send({
                message: 'человек успешно удален',
            });
        }
    )
});

export {router as personsRouter};
