import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faThLarge, faCalendar, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import './noteEditor.css'
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import {splitByCommas} from '../utils/api';
import axios from 'axios';
import {useHistory, useParams, BrowserRouter as Router} from 'react-router-dom';
import Tag from './Atoms/Tag';
import NotePreview from './NotePreview';
import ClickableIcon from './Atoms/ClickableIcon';
import { parse } from 'path';

const EditorContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    padding: 0px 30px;
    position: relative;
    
    @media (max-width: 768px) {
        height: 95vh;
    }
`;

const EditorSection = styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid #F6F6F6;
`;

const Toolbar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #F6F6F6;
    background-color: white;
    position: fixed;
`;

const TextContainer = styled.div`
    height: auto;
    width: 100%;
    border: none;
    resize: none;
    margin: 0px;

    :focus {
        outline: none !important;
        color: black;
    }
`;

const FieldInputContainer = styled.div`
    display: flex;
    height: 30px;
    align-items: center;
`;

const InputIcon = styled(FontAwesomeIcon)`
    font-size: 14px;
    margin-right: 10px;
`;

const InputName = styled.p`
    cursor: default;
    margin: 0;
    color: gray;
    margin-right: 10px;
    display: inline-block;
    min-width: 120px;
`;

const NoteEditor = (props) => {
    const [title, setTitle] = useState(props && props.title);
    const [content, setContent] = useState(props && props.content);
    const [category, setCategory] = useState(props && props.category);
    const [tags, setTags] = useState(props && props.tags);
    const [stringTags, setStringTags] = useState();
    const [editing, setEditing] = useState(false);
    const [newNote, setNewNote] = useState(props.newNote ? true : false);
    const id = props && props.id;
    dayjs.extend(relativeTime);
    var lastUpdated = props && dayjs().to(props.updatedAt);
    var lastCreated = props && dayjs().to(props.createdAt);
    const history = useHistory();
    let params = new URLSearchParams(window.location.search);
    const queryCategory = params.get('category');

    const routeChange = (route) =>{ 
        let path = `${route}`; 
        history.push(path);
    }

    const handleSave = () => {
        props.handleUpdate();
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
        axios.post(`api/notes/update/${id}`, updatedNote)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
        setEditing(false);
    }

    const handleNewNote = () => {
        props.handleUpdate();
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
        axios.post(`api/notes/add`, updatedNote)
            .then(res => {
                console.log(res.data);
                routeChange(`/note/${res.data}`);
            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleDelete = () => {
        routeChange('/');
        props.handleUpdate();
        axios.delete(`api/notes/${id}`)
            .then(console.log("Note deleted!"))
            .catch(err => {console.log(err)})
    }

    return(
        <Router>

        <EditorContainer>
            <Toolbar>
                {newNote
                    ? <Button onClick={handleNewNote} value="Create"/>
                    : editing
                        ? <>
                            <Button onClick={handleSave} value="Save"/>
                            <ClickableIcon onClick={handleDelete} color={"#e91e63"} icon={faTrash}/>
                        </>
                        : <>
                            <ClickableIcon margin onClick={() => setEditing(true)} color={"#3f51b5"} icon={faPencilAlt}/>
                            <ClickableIcon onClick={handleDelete} color={"#e91e63"} icon={faTrash}/>
                        </>
                }
            </Toolbar>               
            <EditorSection style={{marginTop: "50px"}}>
                <FieldInputContainer>
                    <InputIcon color="#C4C6C8" icon={faCalendar}/>
                    <InputName>Updated</InputName>
                    <TextContainer style={{color: "#888888"}} contentEditable={false}>
                        {lastUpdated && !newNote ? lastUpdated : "-"}
                    </TextContainer>
                </FieldInputContainer>
                <FieldInputContainer>
                    <InputIcon color="#C4C6C8" icon={faTag}/>
                    <InputName>Tags</InputName>
                    {editing || newNote
                    ? <TextContainer
                        id="note-tags"
                        onInput={(e) => setStringTags(e.currentTarget.textContent)}
                        className="text-editor"
                        contentEditable={true}
                        placeholder="None"
                    >
                        {tags && tags.map((tag) => {
                            return <span>{tag ? tag + "," : ""}</span>
                        })}
                    </TextContainer>
                    : <TextContainer>
                        {tags && tags.map((tag) => {
                            return <Tag value={tag} onClick={() => console.log("Clicked tag: ", tag)}/>
                        })}
                    </TextContainer>
                    }

                </FieldInputContainer>                
                <FieldInputContainer>
                    <InputIcon color="#C4C6C8" icon={faThLarge}/>
                    <InputName>Category</InputName>
                    <TextContainer
                        id="note-category"
                        suppressContentEditableWarning={true}
                        onBlur={(e) => setCategory(e.currentTarget.textContent)}
                        className="text-editor"
                        contentEditable={editing || newNote}
                        placeholder="None"
                    >
                        {category && category}
                        {newNote && queryCategory}
                    </TextContainer>
                </FieldInputContainer>
            </EditorSection>
            <EditorSection className="flex-grow-1">
                <TextContainer
                    id="note-title"
                    onBlur={(e) => setTitle(e.currentTarget.textContent)}
                    style={{fontSize: "40px"}}
                    className="text-editor"
                    contentEditable={editing || newNote}
                    placeholder="Untitled"
                >
                    {title && title}
                </TextContainer>
                {editing || newNote
                    ? <TextContainer 
                        id="note-content"
                        suppressContentEditableWarning={true}
                        onBlur={(e) => setContent(e.currentTarget.textContent)}
                        className="text-editor flex-grow-1"
                        contentEditable={true}
                        placeholder="This supports Markdown!"
                        spellCheck='true'
                        >
                        {content && content}
                    </TextContainer>   
                    : <NotePreview content={content}/>
                    }  
            </EditorSection>
        </EditorContainer>
        </Router>
    )
}

export default NoteEditor;