import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";



const MainPage = () => {
    const [persons, setPersons] = useState([])

    const getPersons = async () => {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:4000/persons'
        })
        console.log('persons', res.data)
        setPersons(res.data)
    }

    useEffect(() => {
        getPersons()
    }, [])




    return (
        <div>
            hello world
            <ul>
                {persons.map(person => {
                    const { id, name, age, father, mother, son, daughter } = person
                    return (
                        <li key={id}>
                            <h3>{name}</h3>
                            <p>возраст {age}</p>
                            <p>родители {father} и {mother}</p>
                            {son && (
                                <p>сын {son} </p>
                            )}
                            {daughter && (
                                <p>дочь {daughter} </p>
                            )}
                        </li>
                    )
                })}
            </ul>
            <br />
            <Link to='/login'>login page</Link>
        </div>
    )
}

export { MainPage }