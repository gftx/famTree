import React, { useEffect, useState } from 'react'
import { useNavigate, createSearchParams, useLocation, Link } from "react-router-dom";
import { MOCK_DATA } from '../../constants';
import arrow from '../../images/arrow.png'
import { ColorButton } from "../../views/buttons/colorButton";
import ParentView from "../../views/profile/parentView";

const queryString = require("query-string");

export function ProfilePage(props) {
    const location = useLocation()
    useEffect(() => {
        const parsed = queryString.parse(location.search);

        for (let i = 0; i < MOCK_DATA.length; i++) {
            const el = MOCK_DATA[i];
            if (el.id === +parsed.id) {
                setProfile(el)
            }
        }
    }, [location.search])

    const findPerson = (id) => {
        for (let i = 0; i < MOCK_DATA.length; i++) {
            const el = MOCK_DATA[i];
            if (el.id === id) {
                return el
            }
        }
    }
    const [profile, setProfile] = useState()

    const navigate = useNavigate()
    const goToProfile = (value) => {
        navigate({
            pathname: "/profile",
            search: createSearchParams({
                id: value
            }).toString()
        });
    }

    return (
        <main>
            <ColorButton>
                <Link to='/'>Вернуться на главную</Link>
            </ColorButton>
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
                                <img src={profile.image} alt='profile' className='profilePage-profile-image' />
                                <h2>{profile.name} {profile.surname}</h2>
                                <h3>{profile.birth_date}</h3>
                                {profile.brothersIDs?.length !== 0 && (
                                    <div className='profilePage-children-container'>
                                        <p>Братья:</p>
                                        <ul>
                                            {profile.brothersIDs.map(item => (
                                                <li key={item}
                                                    onClick={() => goToProfile(item)}>
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
                                            {profile.sistersIDs.map(item => (
                                                <li key={item}
                                                    onClick={() => goToProfile(item)}>
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
                                            {profile.childrenIds.map(item => (
                                                <li key={item}
                                                    onClick={() => goToProfile(item)}>
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
    )
}
