import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Tag from './Atoms/Tag';
import Button from './Atoms/Button';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {getAllNotes, getAllTags} from '../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.div`
    height: 100vh;
    width: ${props => props.mobile ? "300px" : "250px"};
    padding: ${props => props.mobile ? "0px 30px 30px 30px" : "30px"};
    position: fixed;
    background-color: white;
    z-index: 2;
    overflow-x: hidden;
    border-right: 1px solid #E6E6E6;

    ::-webkit-scrollbar{
        display: none;
    }
`
const SidebarSection = styled.div`
    margin-bottom: 20px;
    position: relative;
`;

const ListText = styled.div`
    cursor: pointer;
    padding: 2px 0px;
    overflow: hidden; 
    margin-top: -1px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    color: ${props => props.active ? "#3f51b5" : "#555555"};

    :hover {
        color: #3f51b5;
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

const HamburgerContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 10px 0px;
    border-bottom: 1px solid #F6F6F6;
    background-color: white;
`;

const Sidebar = (props) => {
    const tags = props.tags;
    const notes = props.notes;
    const categories = props.categories;
    const [active, setActive] = useState("none");
    const [recentExpanded, setRecentExpanded] = useState(5);

    return(
        <SidebarContainer mobile={props.mobile ? true : false}>
            <SidebarSection>
                {props.mobile 
                ? <HamburgerContentHeader>
                    <h3 style={{margin: "0"}}>Jot.</h3>
                    <FontAwesomeIcon icon={faTimes} onTouchEnd={() => props.toggleSidebar()}/>   
                </HamburgerContentHeader>
                : <>
                    <StyledLink to={{pathname: `/`}}>
                        <h2>Jot.</h2>
                    </StyledLink>
                    <a href="https://github.com/cowjuh/stream-of-consciousness" style={{color:"gray", fontSize:"12px"}}>By Jenny Zhang</a>
                </>
                }
            </SidebarSection>
            <SidebarSection>
                <StyledLink onTouchEnd={() => props.toggleSidebar()} to={{pathname: `/new`}}>
                    <Button value="New Note"/>
                </StyledLink>
            </SidebarSection>
            <SidebarSection>
                <SectionText>CATEGORIES</SectionText> 
                <StyledLink  onTouchEnd={() => props.toggleSidebar()} onClick={() => setActive("All")} to={{ pathname: `/category/All`}}>
                    <ListText active={active == "All" ? true : false}>All</ListText>                        
                </StyledLink>
                {categories && categories.map((category) => {
                    return (
                        <StyledLink onTouchEnd={() => props.toggleSidebar()} onClick={() => {setActive(category)}} to={{ pathname: `/category/${category}`}}>
                            <ListText active={active == category ? true : false}>{category}</ListText>                        
                        </StyledLink>
                    )
                })}  
            </SidebarSection>
            <SidebarSection>
                <SectionText>RECENT NOTES</SectionText>
                {notes && notes.slice(0).reverse().slice(0, recentExpanded).map((note) => {
                    return (
                        <StyledLink onTouchEnd={() => props.toggleSidebar()} to={{ pathname: `/note/${note._id}`}}>
                            <ListText>{note.title}</ListText>                        
                        </StyledLink>
                    )
                })}                
                <a 
                    style={{cursor: "pointer"}}
                    className="link"
                    onClick={() => {
                        recentExpanded === 5 ? setRecentExpanded(notes.length) : setRecentExpanded(5);
                    }}>
                    {recentExpanded === 5 ? "Show all..." : "Show less..."}
                </a>
            </SidebarSection>
            {/* <SidebarSection>
                <SectionText>All Tags</SectionText>
                {tags && tags.map((tag) => {
                    return <Tag key={tag.id} onClick={() => console.log("Clicked tag: ", tag)} value={tag}/>
                })}                
            </SidebarSection> */}
        </SidebarContainer>            
    )
}

export default Sidebar;