import { FC, useState, useEffect } from 'react';
import { IPerson } from '../../interfaces';
import { api } from '../../api';

const PersonRow:FC = () => {
  const [persons, setPersons] = useState<IPerson[]>([]);

  const getPersons: () => void = async () => {
    const res: any = await api.getPersons();
    setPersons(res.data.data);
  };

  useEffect(() => {
    getPersons();
  }, []);

  const optionsHandler = (id: number) => {
    console.log('optionsHandler id',id)
  }

  return (
    <ul className='lk-personsRow'>
      {persons.map(item => (
        <li key={item.id} className='lk-personsRow-item'>
          <div className='lk-personsRow-item__name'>{item.name} {item.surname}</div>
          <button className='lk-personsRow-item__options' onClick={() => optionsHandler(item.id)}>.</button>
        </li>
      ))}
    </ul>
  )
}

export default PersonRow;