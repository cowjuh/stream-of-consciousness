import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    max-width: 800px;
`;

const NoteEditor = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`;

const InputField = styled.input`
    border-radius: 3px;
    border: none;
    padding: 5px;
    background-color: #f0f2f5;
    margin-bottom: 10px;
    min-width: 500px;
`;

const TextArea = styled.textarea`
    border-radius: 3px;
    border: none;
    padding: 5px;
    margin-bottom: 10px;
    background-color: #f0f2f5;
    min-height: 80px;
    min-width: 500px;
`;

const Button = styled.button`
    display: inline-block;
    text-align: center;
    border-radius: 5px;
    border: none;
    background-color: blue;
    padding: 5px 20px;
    color: white;
`;

export default function NoteCreator(props){
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [tags, setTags] = useState();
    const [open, setOpen] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        let tagArray = (tags.split(",")).filter(i => /\S/.test(i));
        const newNote = {
            title: title,
            content: content,
            tags: tagArray
        }
        axios.post('https://powerful-tor-65274.herokuapp.com/notes/add', newNote)
            .then(res => {
                console.log(res.data);
                setTitle("");
                setContent("");
                setTags("");
            });
        setOpen(false);
        props.onUpdate();
    }

    return (
      <Container>
        {!open
            ? <Button onClick={() => setOpen(true)}>New Note</Button>
            : <React.Fragment>
                <FontAwesomeIcon icon={faTimes} onClick={() => setOpen(false)}/>
                <h2>New Note</h2>
                <NoteEditor onSubmit={onSubmit}>
                    <InputField type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    <TextArea type="text" placeholder="Content" onChange={(e) => setContent(e.target.value)} value={content}/>
                    <InputField type="text" required={false} placeholder="Tags (Optional)" onChange={(e) => setTags(e.target.value)} value={tags}/>
                    <Button type="submit" placeholder="Submit">Submit</Button>
                </NoteEditor>                
            </React.Fragment>
        }   
      </Container>
    )
}