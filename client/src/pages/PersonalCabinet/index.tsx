import { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import LoginForm from '../../components/loginForm';
import LK from "../../components/lk";

const PersonalCabinet = () => {

    // TODO: set isLogin to false!
    const [isLogin, setIsLogin] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogin(true)
        }
    }, [])

    return (
        <div className='lk'>
            <button className='lk-backLink'>
                <Link to='/'>Вернуться на главную</Link>
            </button>
            {isLogin ? <LK/> : <LoginForm />}
        </div>
    )
}

export { PersonalCabinet }