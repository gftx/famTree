import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import { MAIN_URL } from '../../api';

const MainPage = () => {
    const [persons, setPersons] = useState([])

    const get = async () => {
        const res = await axios({
            method: 'get',
            url: MAIN_URL + '/persons',
            headers: {
                "Content-Type": "application/json",
            },
        })
        console.log('res', res)
        setPersons(res.data.persons)
    }
    useEffect(() => get(), [])

    useEffect(() => {
        console.log('persons', persons)
    }, [persons])

    const post = async () => {

        let data = {
            name: 'name',
            surname: 'surname',
            birthDate: '25.05.2000',
        }

        const res = await axios({
            method: 'post',
            url: MAIN_URL + '/persons',
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                name: 'name',
                surname: 'surname',
                birthDate: '25.05.2000',
            }
        })
        console.log('res', res)
    }

    return (
        <main>
            <Button onClick={post}>кнопка</Button>
        </main>
    )
}

export { MainPage }