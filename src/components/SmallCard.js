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
    cursor: pointer;
    background-color: #f0f2f5;
    border: none;
    border-radius: 5px;
    padding: 20px;
    min-width: 300px;
    min-height: 200px;

    :hover {
        transform: scale(1.02);
    }
`;

const Tag = styled.div`
    display: inline-block;
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 2px 8px;
    margin-right: 5px;
    margin-bottom: 5px;
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

const CardDetails = styled.div`
    visibility: ${props => props.visible ? "visible" : "hidden"};
`;

const SmallCard = (props) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [tags, setTags] = useState(props.tags);
    const [stringTags, setStringTags] = useState();
    const [hover, setHover] = useState(false);
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
        <Card onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <React.Fragment>
                <div className="d-flex justify-content-between mb-2">
                    <p className="m-0" style={{color: "gray"}}>{lastCreated}</p>
                    <CardDetails visible={hover ? true : false} className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faTrash} className="mr-2" color="gray" onClick={() => props.handleDelete(props.id)} cursor="pointer"/>                
                        <FontAwesomeIcon icon={faPencilAlt} color="gray" onClick={() => setEditing(!editing)} cursor="pointer"/>
                        {/* {props.createdAt != props.updatedAt 
                            ? <p style={{color: "gray"}} className="m-0 ml-2">{lastUpdated}</p>
                            : null
                        } */}
                    </CardDetails>                    
                </div>

                <h4>{title}</h4>
                {!tags ? null : 
                    <div className="mb-4">{                
                        tags.map((tag) => {
                            return <Tag>{tag}</Tag>
                        })}
                    </div>
                }
            </React.Fragment>
        </Card>
    )
}

export default SmallCard;