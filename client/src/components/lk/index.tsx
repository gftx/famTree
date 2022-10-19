import { useState } from 'react';
import { LkForm } from './lkForm';
import PersonRow from './personRow';

const LK = () => {
  // если true то вкладка все люди
  // если false то вкладка добавить человека
  const [tabs, setTabs] = useState(false);

  return (
    <>
      <h2 className='lk-heading'>Личный кабинет</h2>
      <ul className='lk-tabs'>
        <li
          className='lk-tabs__tab'
          onClick={() => setTabs(false)}
          style={
            !tabs
              ? { color: '#333', borderBottom: '1px solid #333' }
              : undefined
          }
        >
          Все люди
        </li>
        <li
          className='lk-tabs__tab'
          onClick={() => setTabs(true)}
          style={
            tabs ? { color: '#333', borderBottom: '1px solid #333' } : undefined
          }
        >
          Добавить человека
        </li>
      </ul>
      {tabs ? <LkForm setTabs={setTabs}/> : <PersonRow />}
    </>
  );
};

export { LK };
