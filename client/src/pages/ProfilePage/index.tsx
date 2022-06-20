import { useEffect, useState } from 'react';
import {
	useNavigate,
	createSearchParams,
	useLocation,
	Link,
} from 'react-router-dom';
import { api } from '../../api';
import { IPerson } from '../../interfaces';
import ParentView from '../../views/profile/parentView';

const queryString = require('query-string');

export function ProfilePage() {
	const [profile, setProfile] = useState<IPerson>();
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

	const findPerson = (id: number | string) => {
		for (let i = 0; i < persons.length; i++) {
			const el: any = persons[i];
			if (el.id == id) {
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
			<Link className='header-backLink' to='/'> на главную</Link>
			{profile !== undefined && (
				<>
					<div className='profilePage'>
						<div className='profilePage-mainScreen-container'>
							{(profile.father_id || profile.father_id) && (
								<div className='profilePage-mobile'>
									{profile.father_id && (
										<ParentView
											goToProfile={goToProfile}
											findPerson={findPerson}
											id={profile.father_id}
											parent='Папа'
										/>
									)}
									{profile.mother_id && (
										<ParentView
											goToProfile={goToProfile}
											findPerson={findPerson}
											id={profile.mother_id}
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
								<h3>{profile.birthdate}</h3>
								{profile.brothers !== undefined && (
									<div className='profilePage-children-container'>
										<p>Братья:</p>
										<ul>
											{profile.brothers?.map((item: number | string) => (
												<li key={item} onClick={() => goToProfile(`${item}`)}>
													{findPerson(item).name} {findPerson(item).surname}
												</li>
											))}
										</ul>
									</div>
								)}
								{profile.sisters !== undefined && (
									<div className='profilePage-children-container'>
										<p>Сестры:</p>
										<ul>
											{profile.sisters?.map((item: number) => (
												<li key={item} onClick={() => goToProfile(`${item}`)}>
													{findPerson(item).name} {findPerson(item).surname}
												</li>
											))}
										</ul>
									</div>
								)}
								{profile.children !== undefined && (
									<div className='profilePage-children-container'>
										<p>Дети:</p>
										<ul>
											{profile.children?.map((item: number) => (
												<li key={item} onClick={() => goToProfile(`${item}`)}>
													{findPerson(item).name} {findPerson(item).surname}
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
							{(profile.father_id || profile.mother_id) && (
								<>
									<div className='profilePage-parents'>
										{profile.father_id && (
											<ParentView
												goToProfile={goToProfile}
												findPerson={findPerson}
												id={profile.father_id}
												parent='Папа'
											/>
										)}
										{profile.mother_id && (
											<ParentView
												goToProfile={goToProfile}
												findPerson={findPerson}
												id={profile.mother_id}
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
