import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import NotePreview from './NotePreview';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Tag from './Atoms/Tag';
import Flair from './Atoms/Flair';
import Button from './Atoms/Button';
import {splitByCommas} from '../utils/api';

const Card = styled.div`
    background-color: #F9F9F9;
    border: none;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    width: 100%;

    background-image: radial-gradient(#E7E7E7 1px, #F9F9F9 1px);
    background-size: 20px 20px;
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
    min-height: 300px;
    min-width: 500px;
    width: 100%;
    @media(max-width: 768px){
        min-width: 0;
        min-height: 60vh;
    }
`;

const NoteCard = (props) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [category, setCategory] = useState(props.category);
    const [tags, setTags] = useState(props.tags);
    const [stringTags, setStringTags] = useState();
    const [deleteCard, setDeleteCard] = useState(false);
    const [inputPassword, setInputPassword] = useState();
    dayjs.extend(relativeTime);
    var lastUpdated = dayjs().to(props.updatedAt);
    var lastCreated = dayjs().to(props.createdAt);

    const onSubmit = (e) => {
        e.preventDefault();
        let tagArray;
        if(stringTags) {
            tagArray = splitByCommas(stringTags);
            setTags(tagArray);
        }
        else {
            tagArray = tags;
        }
        const updatedNote = {
            title: title,
            content: content,
            category: category,
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
                ? <>
                    <p style={{color: "gray"}}>{lastCreated}</p>
                    {!category ? <p style={{color: "gray"}}>No Category</p> : <Flair value={category}/>}
                    <h2>{title}</h2>
                    <NotePreview content={content}/>
                    {tags &&
                        <div className="mb-4">{                
                            tags.map((tag) => {
                                return(
                                    <Tag value={tag}/>
                                )
                            })}
                        </div>
                    }
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faTrash} className="mr-2" color="gray" onClick={() => setDeleteCard(!deleteCard)} cursor="pointer"/> 
                        {deleteCard && 
                            <form onSubmit={inputPassword === "del" ? () => props.handleDelete(props.id) : () => setDeleteCard(false)}>
                                <input placeholder="Password" onChange={(e) => setInputPassword(e.target.value)}/>
                            </form>
                        }
                        <FontAwesomeIcon icon={faPencilAlt} color="gray" onClick={() => setEditing(!editing)} cursor="pointer"/>
                        {props.createdAt != props.updatedAt && <p style={{color: "gray"}} className="m-0 ml-2">{lastUpdated}</p>}
                    </div>
                </>
                : <Container>
                    <NoteEditor onSubmit={onSubmit}>
                        <InputField placeholder="Title" defaultValue={props.title} onChange={(e) => setTitle(e.target.value)} value={title}/>
                        <InputField placeholder="Category" defaultValue={props.category} onChange={(e) => setCategory(e.target.value)} value={category}/>
                        <TextArea placeholder="Content" defaultValue={props.content} onChange={(e) => setContent(e.target.value)} value={content}/>
                        <InputField placeholder="Tags (optional)" defaultValue={props.tags} onChange={(e) => setStringTags(e.target.value)} value={stringTags}/>
                        <div className="d-flex align-items-center">
                            <Button value="Update" className="mr-2" type="submit"/>
                            <p style={{cursor: "pointer"}} onClick={() => setEditing(false)} className="m-0">Cancel</p>                            
                        </div>

                    </NoteEditor>
                </Container> 
                }
        </Card>
    )
}

export default NoteCard;