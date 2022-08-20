import { pool } from '../config';
import { QueryResult } from 'pg';
import { SIBLING_TYPES } from '../const';

const updateSiblings = (
  siblingId: string,
  newPersonId: string,
  type: string
) => {


  // TODO: доделать для массивов + брать уже существующую дату и добавлять к ней новые айдишки
  switch (type) {

    case (SIBLING_TYPES.FATHER || SIBLING_TYPES.MOTHER): {
      pool.query(`UPDATE public.person SET "children"=\'${newPersonId}\'  WHERE "id"=${siblingId};`,
        (err: Error, res: QueryResult) => {
          console.log('upd');
        });
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