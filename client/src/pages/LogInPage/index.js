import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { MAIN_URL } from '../../api';
import Button from '@mui/material/Button';


const LogInPage = () => {
    const data = {
        username: 'user',
        email: 'email',
        password: 'password'
    }

    const login = async () => {
        const res = await axios({
            method: 'POST',
            url: MAIN_URL + '/login',
            data: data
        })
        console.log(res)
    }

    return (
        <div>
            hello login page
            <Button onClick={login}>login</Button>
            <br />
            <Link to='/'>main page</Link>
        </div>
    )
}

export { LogInPage }