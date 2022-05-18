import MainCard from '../../views/main/mainCard';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../api';
import { IProfile } from '../../interfaces';

const MainPage = () => {
	const [persons, setPersons] = useState<[]>([]);

	const getPersons = async () => {
		const res: any = await api.getPersons();
		setPersons(res.data.data);
	};

	useEffect(() => {
		getPersons();
	}, []);

	const navigate = useNavigate();
	const goToProfile = (value: string) => {
		navigate({
			pathname: '/profile',
			search: createSearchParams({
				id: value,
			}).toString(),
		});
	};

	return (
		<main className='main'>
			<p className='main-shout'>
				Сайт - дерево семьи Дубановых. для просмотра родственных связей,
				переходите к человеку и все увидите, приятного времяпрепровождения!
			</p>
			<div className='main-container'>
				{persons.map((item: IProfile) => (
					<div
						className='mainCard'
						key={item.id}
						onClick={() => goToProfile(`${item.id}`)}
					>
						<MainCard 
                            persons={persons}
                            goToProfile={goToProfile}  
                            {...item} 
                        />
					</div>
				))}
			</div>
		</main>
	);
};

export { MainPage };
