import React, { useEffect, useState } from 'react';
import {getNoteByID} from '../utils/api';
import NoteCard from './NoteCard';

const FullPageNote = (props) => {
    const id = window.location.pathname.split("/").pop();
    const [note, setNote] = useState();
    useEffect(() => {
        getNoteByID(id)
            .then((res) => setNote(res))
    }, [])
    return (
        <div className="px-4 d-flex flex-column justify-content-center align-items-center">
            {!note ? null
            :<NoteCard
                key={note._id}
                id={note._id}
                title={note.title}
                content={note.content}
                category={note.category}
                tags={note.tags? note.tags : null}
                createdAt={note.createdAt}
                updatedAt={note.updatedAt}
            />
            }            
        </div>

    )
}

export default FullPageNote;