import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import NotePreview from './NotePreview';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

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
    @media(max-width: 768px){
        min-width: 0;
    }
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
    @media(max-width: 768px){
        min-width: 0;
        min-height: 60vh;
    }
`;

const Button = styled.button`
    display: inline-block;
    text-align: center;
    border-radius: 5px;
    border: none;
    background-color: black;
    padding: 5px 20px;
    color: white;
`;

const NoteCard = (props) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [tags, setTags] = useState(props.tags);
    const [stringTags, setStringTags] = useState();
    const [deleteCard, setDeleteCard] = useState(false);
    const [inputPassword, setInputPassword] = useState();
    var createdAt = (new Date(props.createdAt)).toDateString();
    var updatedAt = (new Date(props.updatedAt)).toDateString();
    dayjs.extend(relativeTime);
    var lastUpdated = dayjs().to(props.updatedAt);
    var lastCreated = dayjs().to(props.createdAt);

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
            {!editing
                ? <React.Fragment>
                    <h2>{title}</h2>
                    <p style={{color: "gray"}}>{lastCreated}</p>
                    <NotePreview content={content}/>
                    {!tags ? null : 
                        <div className="mb-4">{                
                            tags.map((tag) => {
                                return(
                                    <Tag>{tag}</Tag>
                                )
                            })}
                        </div>
                    }
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faTrash} className="mr-2" color="gray" onClick={() => setDeleteCard(!deleteCard)} cursor="pointer"/> 
                        {deleteCard
                            ? <form onSubmit={inputPassword === "del" ? () => props.handleDelete(props.id) : () => setDeleteCard(false)}>
                                <input placeholder="Password" onChange={(e) => setInputPassword(e.target.value)}/>
                            </form>
                            : null}
                        <FontAwesomeIcon icon={faPencilAlt} color="gray" onClick={() => setEditing(!editing)} cursor="pointer"/>
                        {props.createdAt != props.updatedAt ? <p style={{color: "gray"}} className="m-0 ml-2">{lastUpdated}</p> : null}
                    </div>
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