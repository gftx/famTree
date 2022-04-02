import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import LoginForm from '../../components/loginForm';
import LK from "../../components/lk";
import {ColorButton} from "../../views/buttons/colorButton";

const LogInPage = () => {

    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogin(true)
        }
    }, [])

    return (
        <div>
            <ColorButton>
                <Link to='/'>Вернуться на главную</Link>
            </ColorButton>
            {isLogin ? (
                <>
                    <LK/>
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