import { useState } from 'react';
import { LkForm } from './lkForm';
import PersonRow from './personRow';

const LK = () => {
	const [tabs, setTabs] = useState<boolean>(false);

	return (
		<>
			<h2 className='lk-heading'>Личный кабинет</h2>
			<ul className='lk-tabs'>
				<li
          className='lk-tabs__tab'
          onClick={() => setTabs(false)}
          style={!tabs ? {color: '#ffae00', borderBottom: '1px solid #ffae00'} : undefined}
				>Все люди</li>
				<li
          className='lk-tabs__tab'
          onClick={() => setTabs(true)}
          style={tabs ? {color: '#ffae00', borderBottom: '1px solid #ffae00'} : undefined}
        >Добавить человека</li>
			</ul>
			{tabs ? <LkForm /> : <PersonRow />}
		</>
	);
}

export { LK }