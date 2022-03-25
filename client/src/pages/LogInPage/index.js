import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import LoginForm from '../../components/loginForm';
import LK from "../../components/lk";


const LogInPage = () => {

    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('token')) {
            setIsLogin(true)
        }
    },[])

    return (
        <div>
            <Button>
                <Link to='/'>Вернуться на главную</Link>
            </Button>
            {isLogin ? (
                <>
                    <LK />
                </>
            ) : (
                <>
                    <LoginForm setIsLogin={setIsLogin}/>
                </>
            )}
        </div>
    )
}

export {LogInPage}