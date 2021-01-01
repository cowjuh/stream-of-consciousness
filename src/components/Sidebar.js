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
    padding: 30px;
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
    margin-bottom: 20px;
`;

const ListText = styled.div`
    cursor: pointer;
    padding: 5px 0px;
    overflow: hidden; 
    margin-top: -1px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    color: #555555;

    :hover {
        color: #000000;
    }
`;

const SectionText = styled.h5`
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 12px;
    color: gray;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
`;

const Sidebar = (props) => {
    const tags = props.tags;
    const notes = props.notes;
    const categories = props.categories;
    const [active, setActive] = useState();
    const [recentExpanded, setRecentExpanded] = useState(5);

    return(
        <SidebarContainer>
            <SidebarSection>
                <StyledLink to={{pathname: `/`}}>
                    <h2>🖋️Jot.</h2>
                    <a href="https://github.com/cowjuh/stream-of-consciousness">By Jenny Zhang</a>
                </StyledLink>
            </SidebarSection>
            {/* <SidebarSection>
                <Button value="New Note"/>
            </SidebarSection> */}
            <SidebarSection>
                <SectionText>CATEGORIES</SectionText> 
                {!categories ? null : categories.map((category) => {
                    return (
                        <StyledLink to={{ pathname: `/category/${category}`}}>
                            <ListText>{category}</ListText>                        
                        </StyledLink>
                    )
                })}  
            </SidebarSection>
            <SidebarSection>
                {/* <Link to={{ pathname: `/`}}>All Notes</Link> */}
                <SectionText>RECENT</SectionText>
                {!notes ? null : notes.slice(0).reverse().slice(0, recentExpanded).map((note) => {
                    return (
                        <StyledLink to={{ pathname: `/note/${note._id}`}}>
                            <ListText>{note.title}</ListText>                        
                        </StyledLink>
                    )
                })}                
                <a 
                    style={{cursor: "pointer"}}
                    className="link"
                    onClick={() => {
                        recentExpanded === 5 ? setRecentExpanded(notes.length) : setRecentExpanded(5)
                    }}>
                    {recentExpanded === 5 ? "Show all..." : "Show less..."}
                </a>
            </SidebarSection>
            <SidebarSection>
                <SectionText>All Tags</SectionText>
                {!tags ? null : tags.map((tag) => {
                    return <Tag key={tag.id} onClick={() => console.log("Clicked tag: ", tag)} value={tag}/>
                })}                
            </SidebarSection>
        </SidebarContainer>            
    )
}

export default Sidebar;