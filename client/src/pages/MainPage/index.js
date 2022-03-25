// import { useState, useEffect } from 'react'
import MainCard from '../../views/main/mainCard';
import { useNavigate, createSearchParams } from "react-router-dom";
import { MOCK_DATA } from '../../constants';


const MainPage = () => {

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
        <main className='main'>
            <p  className='main-shout'>
                Сайт - дерево семьи Дубановых. для просмотра родственных связей, 
                переходите к человеку и все увидите, приятного времяпрепровождения!
            </p>
            {MOCK_DATA.map(item => (
                <div className='mainCard' key={item.id} onClick={() => goToProfile(item.id)}>
                    <MainCard
                        goToProfile={goToProfile}
                        {...item}
                    />
                </div>
            ))}
        </main>
    )
}

export { MainPage, MOCK_DATA }