import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";



const LogInPage = () => {

    const newPerson = async () => {
        const res = await axios({
            method: "POST",
            url: 'http://localhost:4000/persons',
            data: {
                name: 'Родион',
                age: '21',
                father: 'Юрий',
                mother: 'Гузель',
                son: null,
                daughter: null,
            },
        })
        console.log('post note res:', res)
    }

    return (
        <div>
            hello login page
            <button onClick={newPerson}>new person</button>
            <br />
            <Link to='/'>main page</Link>
        </div>
    )
}

export { LogInPage }