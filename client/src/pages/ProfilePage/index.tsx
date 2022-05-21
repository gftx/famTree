import { useEffect, useState } from 'react';
import {
	useNavigate,
	createSearchParams,
	useLocation,
	Link,
} from 'react-router-dom';
import { api } from '../../api';
import arrow from '../../images/arrow.png';
import { IProfile } from '../../interfaces';
import ParentView from '../../views/profile/parentView';

const queryString = require('query-string');

export function ProfilePage() {
	const [profile, setProfile] = useState<IProfile>();
	const [persons, setPersons] = useState<[]>([]);

	const getPersons = async () => {
		const res: any = await api.getPersons();
		setPersons(res.data.data);
	};
    
	useEffect(() => {
		getPersons();
	}, []);

	const location = useLocation();
	useEffect(() => {
		const parsed = queryString.parse(location.search);

		for (let i = 0; i < persons.length; i++) {
			const el: any = persons[i];
			if (el.id === +parsed.id) {
				setProfile(el);
			}
		}
	}, [location.search, persons]);

	const findPerson = (id: number) => {
		for (let i = 0; i < persons.length; i++) {
			const el: any = persons[i];
			if (el.id === id) {
				return el;
			}
		}
	};

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
		<main>
			<button>
				<Link to='/'>Вернуться на главную</Link>
			</button>
			{profile !== undefined && (
				<>
					<div className='profilePage'>
						<div className='profilePage-mainScreen-container'>
							{(profile.fatherID || profile.motherID) && (
								<div className='profilePage-mobile'>
									{profile.fatherID && (
										<ParentView
											goToProfile={goToProfile}
											findPerson={findPerson}
											id={profile.fatherID}
											parent='Папа'
										/>
									)}
									{profile.motherID && (
										<ParentView
											goToProfile={goToProfile}
											findPerson={findPerson}
											id={profile.motherID}
											parent='Мама'
										/>
									)}
								</div>
							)}
							<div className='profilePage-profile'>
								<img
									src={profile.image}
									alt='profile'
									className='profilePage-profile-image'
								/>
								<h2>
									{profile.name} {profile.surname}
								</h2>
								<h3>{profile.birth_date}</h3>
								{profile.brothersIDs?.length !== 0 && (
									<div className='profilePage-children-container'>
										<p>Братья:</p>
										<ul>
											{profile.brothersIDs?.map((item: number) => (
												<li key={item} onClick={() => goToProfile(`${item}`)}>
													{findPerson(item).name} {findPerson(item).surname}
												</li>
											))}
										</ul>
									</div>
								)}
								{profile.sistersIDs?.length !== 0 && (
									<div className='profilePage-children-container'>
										<p>Сестры:</p>
										<ul>
											{profile.sistersIDs?.map((item: number) => (
												<li key={item} onClick={() => goToProfile(`${item}`)}>
													{findPerson(item).name} {findPerson(item).surname}
												</li>
											))}
										</ul>
									</div>
								)}
								{profile.childrenIds?.length !== 0 && (
									<div className='profilePage-children-container'>
										<p>Дети:</p>
										<ul>
											{profile.childrenIds?.map((item: number) => (
												<li key={item} onClick={() => goToProfile(`${item}`)}>
													{findPerson(item).name} {findPerson(item).surname}
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
							{(profile.fatherID || profile.motherID) && (
								<>
									<div className='profilePage-arrows'>
										<img src={arrow} alt='arrow' width='174px' height='24px' />
										<img src={arrow} alt='arrow' width='174px' height='24px' />
									</div>
									<div className='profilePage-parents'>
										{profile.fatherID && (
											<ParentView
												goToProfile={goToProfile}
												findPerson={findPerson}
												id={profile.fatherID}
												parent='Папа'
											/>
										)}
										{profile.motherID && (
											<ParentView
												goToProfile={goToProfile}
												findPerson={findPerson}
												id={profile.motherID}
												parent='Мама'
											/>
										)}
									</div>
								</>
							)}
						</div>
					</div>
				</>
			)}
		</main>
	);
}
