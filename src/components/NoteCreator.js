import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from './Atoms/Button';

const Container = styled.div`
    max-width: 800px;
    width: 100%;
`;

const NoteEditor = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-bottom: 20px;
`;

const InputField = styled.input`
    border-radius: 3px;
    border: none;
    padding: 5px;
    background-color: #f0f2f5;
    margin-bottom: 10px;
    width: 100%;
`;

const TextArea = styled.textarea`
    border-radius: 3px;
    border: none;
    padding: 5px;
    margin-bottom: 10px;
    background-color: #f0f2f5;
    min-height: 80px;
    box-sizing:border-box;
    -webkit-box-sizing: border-box;
    width: 100%;
    @media(max-width: 768px){
        min-height: 60vh;
    }
`;

export default function NoteCreator(props){
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [tags, setTags] = useState();
    const [open, setOpen] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        let tagArray = null;
        if (tags) {
            tagArray = (tags.split(",")).filter(i => /\S/.test(i));
        }
        const newNote = {
            title: title,
            content: content,
            tags: tagArray
        }
        axios.post('/notes/add', newNote)
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
            ? <Button value="New Note" onClick={() => setOpen(true)} style={{marginBottom: "20px"}}/>
            : <div>
                <FontAwesomeIcon icon={faTimes} onClick={() => setOpen(false)}/>
                <h2>New Note</h2>
                <NoteEditor onSubmit={onSubmit}>
                    <InputField type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    <TextArea type="text" placeholder="Content" onChange={(e) => setContent(e.target.value)} value={content}/>
                    <InputField type="text" required={false} placeholder="Tags (Optional)" onChange={(e) => setTags(e.target.value)} value={tags}/>
                    <Button value="Submit" type="submit" placeholder="Submit"/>
                </NoteEditor>                
            </div>
        }   
      </Container>
    )
}