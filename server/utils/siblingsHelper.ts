import { pool } from '../config';
import { QueryResult } from 'pg';
import { SIBLING_TYPES } from '../const';
import { query } from 'express';

const updateSiblings = (
	siblingId: string,
	newPersonId: string,
	type: string
) => {

	switch (type) {
		case SIBLING_TYPES.FATHER || SIBLING_TYPES.MOTHER: {
			pool.query(
				`SELECT * FROM public.person WHERE "id"=\'${siblingId}\'`,
				(err, res) => {
					if (err) {
						console.error(err);
						return;
					}
					if (res.rows.length !== 0) {
						const person = res.rows[0];
						const oldChildren = JSON.parse(person.children);
						let newChildren;

						if (oldChildren && oldChildren !== 0) {
							newChildren = [...oldChildren, newPersonId];
						} else {
							newChildren = [newPersonId];
						}
            const data = JSON.stringify(newChildren)

						pool.query(
							`UPDATE public.person SET "children"=\'${data}\' WHERE "id"=${siblingId};`,
							(error: Error, response: QueryResult) => {
								if (error) console.error(error);
							}
						);
					}
				}
			);

			break;
		}
		// case (SIBLING_TYPES.BROTHERS): {
		//   pool.query(`UPDATE public.person SET "children"=\'${newPersonId}\'  WHERE "id"=${siblingId};`,
		//     (err: Error, res: QueryResult) => {
		//       console.log('upd');
		//     });
		//   break;
		// }
		//
		// case (SIBLING_TYPES.SISTERS): {
		//
		//   pool.query(`UPDATE public.person SET "children"=\'${newPersonId}\'  WHERE "id"=${siblingId};`,
		//     (err: Error, res: QueryResult) => {
		//       console.log('upd');
		//     });
		//   break;
		// }
		//
		// case (SIBLING_TYPES.CHILDREN): {
		//
		//   pool.query(`UPDATE public.person SET "children"=\'${newPersonId}\'  WHERE "id"=${siblingId};`,
		//     (err: Error, res: QueryResult) => {
		//       console.log('upd');
		//     });
		//   break;
		// }
	}
};

export { updateSiblings };
