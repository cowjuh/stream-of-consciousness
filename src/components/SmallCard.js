import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import NotePreview from './NotePreview';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {Link} from 'react-router-dom';
import Tag from './Atoms/Tag';
import Flair from './Atoms/Flair';

const Card = styled.div`
    position: relative;
    cursor: pointer;
    background-color: #F9F9F9;
    border: none;
    border-radius: 5px;
    padding: 20px;
    min-width: 250px;
    min-height: 250px;

    @media(max-width: 768px){
        min-width: 0;
    }

    :hover {
        transform: scale(1.02);
    }
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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
`;

const CardDetails = styled.div`
    visibility: ${props => props.visible ? "visible" : "hidden"};
`;

const ContentPreview = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    color: #7A7F89;
`;

const TagsContainer = styled.div`
    display: inline-block;
    width: 100%;
    padding: 60px 20px 5px 20px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    background-image: linear-gradient(rgba(249,249,249,0), rgba(249,249,249,1) ,rgba(249,249,249,1));
`;

const SmallCard = (props) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [category, setCategory] = useState(props.category);
    const [tags, setTags] = useState(props.tags);
    const [stringTags, setStringTags] = useState();
    const [hover, setHover] = useState(false);
    const id = props.id;
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
        <StyledLink style={{textDecoration: 'none'}} to={`/note/${id}`}>
            <Card onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <>
                    <div className="d-flex justify-content-between mb-2">
                        <p className="m-0" style={{color: "#7A7F89"}}>{lastCreated}</p>
                        {category && <Flair value={category}/>}
                    </div>

                    <h4 style={{color: "#272E40"}}>{title}</h4>
                    <ContentPreview>{content}</ContentPreview>
                    {tags || hover && 
                        <TagsContainer className="mb-4">{                
                            tags.map((tag) => {
                                return <Tag value={tag}/>
                            })}
                        </TagsContainer>
                    }
                </>
            </Card>

        </StyledLink>

    )
}

export default SmallCard;