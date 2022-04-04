import express, { Request, Response } from 'express';
import { MOCK_DATA } from '../mockData';

const router = express.Router();

interface IPerson {
	id: number;
	name: string;
	surname: string;
	birth_date: string;
	image: string;
	fatherID: number;
	motherID: number;
	sistersIDs: number[];
	brothersIDs: number[];
	childrenIds: number[];
}

router.get('/persons', (req: Request, res: Response) => {

    return res.send({
        data: MOCK_DATA,
        message: 'успешно получен список людей'
    })
})

router.post('/persons', (req: Request, res: Response) => {
	const person: IPerson = req.body;

	return res.send({
		data: {
			id: person.id,
			name: person.name,
			surname: person.surname,
			birth_date: person.birth_date,
			image: person.image,
			fatherID: person.fatherID,
			motherID: person.motherID,
			sistersIDs: person.sistersIDs,
			brothersIDs: person.brothersIDs,
			childrenIds: person.childrenIds,
		},
		message: 'человек успешно создан',
	});
});

export { router as personsRouter };
