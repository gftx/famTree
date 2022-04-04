export default function MainCard(props: any) {
	const {
		name,
		surname,
		birth_date,
		image,
		fatherID,
		motherID,
		sistersIDs,
		brothersIDs,
		goToProfile,
		childrenIds,
        persons
	} = props;

	const findName = (id: any) => {
		for (let i = 0; i < persons.length; i++) {
			const el = persons[i];
			if (el.id === id) {
				return el.name;
			}
		}
	};

	const profileLink = (e: any, item: any) => {
		e.stopPropagation();
		goToProfile(item);
	};

	return (
		<div className='mainCard-container'>
			<img src={image} alt='profile' className='mainCard-image' />
			<div className='mainCard-mainInfo'>
				<div className='mainCard-mainInfo-name'>
					{name} {surname}
				</div>
				<div className='mainCard-mainInfo-birthDate'>{birth_date}</div>
			</div>
			<div className='mainCard-siblings'>
				{fatherID && (
					<div className='mainCard-siblings-parent'>
						<p>Папа:</p>
						<ul>
							<li onClick={e => profileLink(e, fatherID)}>
								{findName(fatherID)}
							</li>
						</ul>
					</div>
				)}
				{motherID && (
					<div className='mainCard-siblings-parent'>
						<p>Мама:</p>
						<ul>
							<li onClick={e => profileLink(e, motherID)}>
								{findName(motherID)}
							</li>
						</ul>
					</div>
				)}
				{brothersIDs.length !== 0 && (
					<div className='mainCard-siblings-brothers'>
						<p>Братья:</p>
						<ul>
							{brothersIDs.map((item: any) => (
								<li key={item} onClick={e => profileLink(e, item)}>
									{findName(item)}
								</li>
							))}
						</ul>
					</div>
				)}
				{sistersIDs.length !== 0 && (
					<div className='mainCard-siblings-sisters'>
						<p>Сестры:</p>
						<ul>
							{sistersIDs.map((item: any) => (
								<li key={item} onClick={e => profileLink(e, item)}>
									{findName(item)}
								</li>
							))}
						</ul>
					</div>
				)}
				{childrenIds.length !== 0 && (
					<div className='mainCard-siblings-children'>
						<p>Дети:</p>
						<ul>
							{childrenIds.map((item: any) => (
								<li key={item} onClick={e => profileLink(e, item)}>
									{findName(item)}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
