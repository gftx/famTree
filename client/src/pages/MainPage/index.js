import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";



const MainPage = () => {
    const [notes, setNotes] = useState([])

    const getNotes = async () => {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:4000/notes'
        })
        setNotes(res.data)
    }

    useEffect(() => {
        getNotes()
    }, [])


    const postNote = async () => {
        const res = await axios({
            method: "POST",
            url: 'http://localhost:4000/notes/new',
            data: {
                text: 'new note'
            },
        })
        console.log('post note res:', res)
        getNotes()
    }

    return (
        <div>
            hello world
            <ul>
                {notes.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
            <button onClick={postNote}>add note</button>
            <br />
            <Link to='/login'>login page</Link>
        </div>
    )
}

export { MainPage }