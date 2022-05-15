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

router.post('/persons', (request: Request, response: Response) => {
    const person: IPerson = request.body;
    const {
        name,
        surname,
        birthdate,
        image = null,
        fatherId = null,
        motherId = null,
        brothersIds = null,
        sistersIds = null,
        childrenIds = null
    } = person

    pool.query(`INSERT INTO public.person (name, surname, birthdate, image, father_id, mother_id, brothers, sisters, children)
        VALUES (\'${name}\', \'${surname}\', \'${birthdate}\', \'${image}\', \'${fatherId}\',
        \'${motherId}\', \'${brothersIds}\', \'${sistersIds}\', \'${childrenIds}\');`,
        (err: Error, res: QueryResult) => {
            if (err) {
                console.error('Error executing query', err.stack);
                return response.send({
                    message: err.stack
                })
            }
            return response.send({
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
