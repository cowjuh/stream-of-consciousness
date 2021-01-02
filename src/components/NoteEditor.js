import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faThLarge, faCalendar, faTrash } from '@fortawesome/free-solid-svg-icons';
import './noteEditor.css'
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import {splitByCommas} from '../utils/api';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const EditorContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    padding: 0px 30px;
    position: relative
`;

const EditorSection = styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid #F6F6F6;
`;

const Toolbar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #F6F6F6;
    background-color: white;
    position: fixed;
`;

const TextContainer = styled.div`
    height: auto;
    width: 100%;
    border: none;
    resize: none;
    magin: 0px;

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
    width: 30px;
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

const ActionIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
`;

const NoteEditor = (props) => {
    const [title, setTitle] = useState(props ? props.title : null);
    const [content, setContent] = useState(props ? props.content : null);
    const [category, setCategory] = useState(props ? props.category : null);
    const [tags, setTags] = useState(props ? props.tags : null);
    const [stringTags, setStringTags] = useState();
    const [editing, setEditing] = useState(false);
    const [newNote, setNewNote] = useState(props.newNote ? true : false);
    const id = props ? props.id : null;
    dayjs.extend(relativeTime);
    var lastUpdated = props ? dayjs().to(props.updatedAt) : null;
    var lastCreated = props ? dayjs().to(props.createdAt) : null;
    const history = useHistory();

    const routeChange = (route) =>{ 
        let path = `${route}`; 
        history.push(path);
    }

    const handleSave = () => {
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
        axios.post(`notes/update/${id}`, updatedNote)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
        props.handleUpdate();
    }

    const handleNewNote = () => {
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
        setTitle(null);
        setContent(null);
        setCategory(null);
        setStringTags(null);
        setTags(null);
        axios.post(`notes/add`, updatedNote)
            .then(res => {
                console.log(res.data);
                routeChange(`/note/${res.data}`);
            })
            .catch(err => {
                console.log(err)
            })
        props.handleUpdate();
    }


    const handleDelete = () => {
        routeChange('/');
        axios.delete(`notes/${id}`)
            .then(console.log("Note deleted!"))
            .catch(err => {console.log(err)})
        props.handleUpdate(2);
    }

    return(
        <EditorContainer>
            <Toolbar>
                {newNote
                    ? <Button onClick={handleNewNote} value="Create"/>
                    
                    : <React.Fragment>
                        <Button onClick={handleSave} value="Save"/>
                        <ActionIcon onClick={handleDelete} className="ml-4" icon={faTrash}/>
                    </React.Fragment>
                }
                
                
            </Toolbar>               
            <EditorSection style={{marginTop: "80px"}}>
                <FieldInputContainer>
                    <InputIcon color="gray" icon={faCalendar}/>
                    <InputName>Updated</InputName>
                    <TextContainer style={{color: "#888888"}} contentEditable={false}>
                        {lastUpdated ? lastUpdated : "-"}
                    </TextContainer>
                </FieldInputContainer>
                <FieldInputContainer>
                    <InputIcon color="gray" icon={faTag}/>
                    <InputName>Tags</InputName>
                    <TextContainer
                        id="note-tags"
                        suppressContentEditableWarning={true}
                        onBlur={(e) => setStringTags(e.currentTarget.textContent)}
                        className="text-editor"
                        contentEditable={true}
                        placeholder="None"
                    >
                        {stringTags ? stringTags : null}
                    </TextContainer>
                </FieldInputContainer>                
                <FieldInputContainer>
                    <InputIcon color="gray" icon={faThLarge}/>
                    <InputName>Category</InputName>
                    <TextContainer
                        id="note-category"
                        suppressContentEditableWarning={true}
                        onBlur={(e) => setCategory(e.currentTarget.textContent)}
                        className="text-editor"
                        contentEditable={true}
                        placeholder="None"
                    >
                        {category ? category : null}
                    </TextContainer>
                </FieldInputContainer>
            </EditorSection>
            <EditorSection className="flex-grow-1">
                <TextContainer
                    id="note-title"
                    suppressContentEditableWarning={true}
                    onBlur={(e) => setTitle(e.currentTarget.textContent)}
                    style={{fontSize: "40px"}}
                    className="text-editor"
                    contentEditable={true}
                    placeholder="Untitled"
                >
                    {title ? title : null}
                </TextContainer>
                <TextContainer 
                    id="note-content"
                    suppressContentEditableWarning={true}
                    onBlur={(e) => setContent(e.currentTarget.textContent)}
                    className="text-editor flex-grow-1"
                    contentEditable={true}
                    placeholder="This supports Markdown!"
                >
                    {content ? content : null}
                </TextContainer>
            </EditorSection>
        </EditorContainer>
    )
}

export default NoteEditor;