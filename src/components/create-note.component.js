import React, {useState} from 'react';
import axios from 'axios';

export default function CreateNote(props){
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            title: title,
            content: content
        }
        setTitle("");
        setContent("");
        axios.post('http://localhost:5000/notes/add', newNote)
            .then(res => console.log(res.data));
    }

    return (
      <div>
        <h1>New Note</h1>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <textarea type="text" placeholder="Content" onChange={(e) => setContent(e.target.value)} value={content}/>
            <input type="submit" placeholder="Submit"/>
        </form>
      </div>
    )
}