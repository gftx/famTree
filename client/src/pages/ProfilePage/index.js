import React, { useEffect, useState } from 'react'
import { useNavigate, createSearchParams, useLocation, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { MOCK_DATA } from '../../constants';
import arrow from '../../images/arrow.png'
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
    <>
      <Button>
        <Link to='/'>Вернуться на главную</Link>
      </Button>
      {profile !== undefined && (
        <>
          <div className='profilePage'>
            <div className='profilePage-mainScreen-container'>
              <div className='profilePage-profile'>
                <img src={profile.image} alt='profile' className='profilePage-profile-image' />
                <h2>{profile.name} {profile.surname}</h2>
                <h3>{profile.birth_date}</h3>
              </div>
              {profile.fatherID && profile.motherID && (
                <>
                  <div className='profilePage-arrows'>
                    <img src={arrow} alt='arrow' width='174px' height='24px' />
                    <img src={arrow} alt='arrow' width='174px' height='24px' />
                  </div>
                  <div className='profilePage-parents'>
                    {profile.fatherID && (
                      <div className='profilePage-parents-parent' onClick={() => goToProfile(profile.fatherID)}>
                        <p>Папа:</p>
                        <img src={findPerson(profile.fatherID).image} alt='father' className='profilePage-parents-parent__image' />
                        <ul>
                          <li>{findPerson(profile.fatherID).name} {findPerson(profile.fatherID).surname}</li>
                          <li>{findPerson(profile.fatherID).birth_date}</li>
                        </ul>
                      </div>
                    )}
                    {profile.motherID && (
                      <div className='profilePage-parents-parent' onClick={() => goToProfile(profile.fatherID)}>
                        <p>Мама:</p>
                        <img src={findPerson(profile.motherID).image} alt='mother' className='profilePage-parents-parent__image' />
                        <ul>
                          <li>{findPerson(profile.motherID).name} {findPerson(profile.motherID).surname}</li>
                          <li>{findPerson(profile.motherID).birth_date}</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
            {profile.childrenIds?.length !== 0 && (
              <div className='profilePage-children-container'>
                <img src={arrow} alt='arrow' width='58px' height='8px' />
                <p>Дети:</p>
                <ul>
                  {profile.childrenIds.map(item => (
                    <li key={item} onClick={() => goToProfile(item)}>{findPerson(item).name} {findPerson(item).surname}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}
