import React, {useState, useEffect } from 'react';
import axios from 'axios';

export default function NotesList () {
    const [notes, setNotes] = useState();
    useEffect(() => {
        axios.get('http://localhost:5000/notes/')
            .then(res => {
                setNotes(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const deleteNote = (id) => {
        axios.delete(`http://localhost:5000/notes/${id}`)
            .then(console.log("Note deleted!"))
            .catch(err => console.log(err));
        
        const newNotes = notes.filter(note => note._id !== id);
        setNotes(newNotes);
    }

    return (
        <div>
        {!notes ? null : notes.map((note) => {
            return(
                <div>
                    <h2>{note.title}</h2>
                    <p>{note.createdAt}</p>
                    <p>{note.content}</p>
                    <button onClick={() => deleteNote(note._id)}>Delete</button>
                </div>
            )
        })}
        </div>
    )
}