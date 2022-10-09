import { FC } from 'react';
import { IMainCard } from '../../interfaces';

const MainCard: FC<IMainCard> = (props) => {
  const {
    name,
    surname,
    birthdate,
    image,
    father_id,
    mother_id,
    sisters,
    brothers,
    goToProfile,
    children,
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
        {birthdate && (
          <div className='mainCard-mainInfo-birthDate'>{birthdate}</div>
        )}
      </div>
      <div className='mainCard-siblings'>
        {father_id && (
          <div className='mainCard-siblings-parent'>
            <p>Папа:</p>
            <ul>
              <li onClick={(e) => profileLink(e, father_id)}>
                {findName(father_id)}
              </li>
            </ul>
          </div>
        )}
        {mother_id && (
          <div className='mainCard-siblings-parent'>
            <p>Мама:</p>
            <ul>
              <li onClick={(e) => profileLink(e, mother_id)}>
                {findName(mother_id)}
              </li>
            </ul>
          </div>
        )}
        {brothers && brothers?.length !== 0 && (
          <div className='mainCard-siblings-brothers'>
            <p>Братья:</p>
            <ul>
              {brothers.map((item: any) => (
                <li key={item} onClick={(e) => profileLink(e, item)}>
                  {findName(item)}
                </li>
              ))}
            </ul>
          </div>
        )}
        {sisters && sisters?.length !== 0 && (
          <div className='mainCard-siblings-sisters'>
            <p>Сестры:</p>
            <ul>
              {sisters.map((item: any) => (
                <li key={item} onClick={(e) => profileLink(e, item)}>
                  {findName(item)}
                </li>
              ))}
            </ul>
          </div>
        )}
        {children && children?.length !== 0 && (
          <div className='mainCard-siblings-children'>
            <p>Дети:</p>
            <ul>
              {children.map((item: any) => (
                <li key={item} onClick={(e) => profileLink(e, item)}>
                  {findName(item)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainCard;
