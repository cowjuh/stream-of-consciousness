import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Tag from './Atoms/Tag';
import Button from './Atoms/Button';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {getAllNotes, getAllTags} from '../utils/api';

const SidebarContainer = styled.div`
    height: 100vh;
    width: 250px;
    padding: 20px;
    position: fixed;
    background-color: white;
    z-index: 1;
    overflow-x: hidden;
    border-right: 1px solid #E6E6E6;

    ::-webkit-scrollbar{
        display: none;
    }
`
const SidebarSection = styled.div`
    margin-top: 30px;
`;

const ListItem = styled.div`
    cursor: pointer;
    width: 250px;
    height: 50px;
    padding: 10px 0px;
    overflow: hidden; 
    border-bottom: 1px solid #E6E6E6;
    border-top: 1px solid #E6E6E6;
    margin-top: -1px;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: gray;

    :hover {
        color: #333333;
    }
`;

const Sidebar = (props) => {
    const tags = props.tags;
    const notes = props.notes;
    // const [tags, setTags] = useState();
    // const [notes, setNotes] = useState();
    const [active, setActive] = useState();

    return(
        <SidebarContainer>
            <Button value="New Note"/>
            <SidebarSection>
                <Link to={{ pathname: `/`}}>All Notes</Link>
                <h5>Recent Notes</h5>
                {!notes ? null : notes.slice(0).reverse().slice(0, 8).map((note) => {
                    return (
                        <Link to={{ pathname: `/note/${note._id}`}}>
                            <ListItem>
                                {note.title}
                            </ListItem>                        
                        </Link>
                    )
                })}                
            </SidebarSection>
            <SidebarSection>
                <h5>All Tags</h5>
                {!tags ? null : tags.map((tag) => {
                    return <Tag key={tag.id} onClick={() => console.log("Clicked tag: ", tag)} value={tag}/>
                })}                
            </SidebarSection>
        </SidebarContainer>            
    )
}

export default Sidebar;