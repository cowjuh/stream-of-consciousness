import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import NotePreview from './NotePreview';
import axios from 'axios';

const Card = styled.div`
    background-color: #f0f2f5;
    border: none;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    width: 100%;
`;

const Tag = styled.div`
    display: inline-block;
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 2px 8px;
    margin-right: 5px;
`;

const Container = styled.div`
    width: 100%;
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
    background-color: white;
    margin-bottom: 10px;
    min-width: 500px;
    width: 100%;
`;

const TextArea = styled.textarea`
    border-radius: 3px;
    border: none;
    padding: 5px;
    margin-bottom: 10px;
    background-color: white;
    min-height: 150px;
    min-width: 500px;
    width: 100%;
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

const NoteCard = (props) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [tags, setTags] = useState(props.tags);
    const [stringTags, setStringTags] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        let tagArray;
        if(stringTags) {
            tagArray = (stringTags.split(",")).filter(i => /\S/.test(i));
            setTags(tagArray);
        }
        else {
            tagArray = tags;
        }
        const updatedNote = {
            title: title,
            content: content,
            tags: tagArray
        }
        console.log(updatedNote);
        axios.post(`notes/update/${props.id}`, updatedNote)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
        setEditing(false);
    }

    return(
        <Card>
            <FontAwesomeIcon icon={faPencilAlt} onClick={() => setEditing(!editing)} cursor="pointer"/>
            {!editing
                ? <React.Fragment>
                    <h2>{title}</h2>
                    <p>{props.createdAt}</p>
                    <NotePreview content={content}/>
                    {!tags ? null : 
                        <div>{                
                            tags.map((tag) => {
                                return(
                                    <Tag>{tag}</Tag>
                                )
                            })}
                        </div>
                    }
                    {/* <FontAwesomeIcon icon={faClipboard} color="gray"/> */}
                    <FontAwesomeIcon icon={faTrash} color="gray" onClick={() => props.handleDelete(props.id)} cursor="pointer"/>                
                </React.Fragment>
                : <Container>
                    <NoteEditor onSubmit={onSubmit}>
                        <InputField placeholder="Title" defaultValue={props.title} onChange={(e) => setTitle(e.target.value)} value={title}/>
                        <TextArea placeholder="Content" defaultValue={props.content} onChange={(e) => setContent(e.target.value)} value={content}/>
                        <InputField placeholder="Tags (optional)" defaultValue={props.tags} onChange={(e) => setStringTags(e.target.value)} value={stringTags}/>
                        <Button type="submit">Update</Button>
                    </NoteEditor>
                </Container> 
                }
        </Card>
    )
}

export default NoteCard;