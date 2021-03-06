import React, { useEffect, useState } from 'react';
import {getNoteByID} from '../utils/api';
import NoteCard from './NoteCard';
import NoteEditor from './NoteEditor'

const FullPageNote = (props) => {
    const id = window.location.pathname.split("/").pop();
    const [note, setNote] = useState();
    useEffect(() => {
        getNoteByID(id)
            .then((res) => setNote(res))
    }, [])
    return (
        <>
            {note && 
                <NoteEditor
                        key={note._id}
                        id={note._id}
                        title={note.title}
                        content={note.content}
                        category={note.category}
                        tags={note.tags && note.tags}
                        createdAt={note.createdAt}
                        updatedAt={note.updatedAt}
                        handleUpdate={props.handleUpdate}
                    />
                }            
        </>

    )
}

export default FullPageNote;