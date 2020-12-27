import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faTrash } from '@fortawesome/free-solid-svg-icons';
import NotePreview from './NotePreview';

const Card = styled.div`
    background-color: #f0f2f5;
    border: none;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
`;

const Tag = styled.div`
    display: inline-block;
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 2px 8px;
    margin-right: 5px;
`;

const NoteCard = (props) => {
    return(
        <Card>
            <h2>{props.title}</h2>
            <p>{props.createdAt}</p>
            <NotePreview content={props.content}/>
            {!props.tags ? null : 
                <div>{                
                    props.tags.map((tag) => {
                    return(
                        <Tag>{tag}</Tag>
                    )
                    })}
                </div>
            }
            {/* <FontAwesomeIcon icon={faClipboard} color="gray"/> */}
            <FontAwesomeIcon icon={faTrash} color="gray" onClick={() => props.handleDelete(props.id)}/>
        </Card>
    )
}

export default NoteCard;