import { useState, useEffect } from 'react'
import axios from 'axios'

const MainPage = () => {
    const [persons, setPersons] = useState([])
    const [data, setData] = useState({
        title: 'title',
        content: 'content',
        postDate: new Date(),
    })

    const getPersons = async () => {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:3001/api/posts'
        })
        console.log('res', res.data)
        // setPersons(res.data)
    }

    useEffect(() => {
        getPersons()
    }, [persons])

    const post = async () => {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:3001/api/posts',
            data: data
        })
        console.log(res)
    }



    return (
        <main>
            <ul>
                <button onClick={post}>post</button>
                {/* {persons.map(person => {
                    const { id, name, age, father, mother, son, daughter, img } = person
                    return (
                        <li key={id}>
                            <img src={img}/>
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
                })} */}
            </ul>
            <br />

        </main>
    )
}

export { MainPage }