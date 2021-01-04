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
    transition: all 250ms;

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
        color: #e91e63;
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
        color: black;
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

const Logo = styled.h2`
    color: black;
    display: inline-block;
    margin: 0;
    transition: all 250ms;
    :hover {
        background: -webkit-linear-gradient(110deg, #e1f549, #29d0be, #6cb8ea, #ff5959);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const Sidebar = (props) => {
    const tags = props.tags;
    const notes = props.notes;
    const categories = props.categories;
    const [recentExpanded, setRecentExpanded] = useState(5);

    const handleClick = () => {
        if(props.toggleSidebar) {
            props.toggleSidebar();
        }
    }

    return(
        <SidebarContainer mobile={props.mobile ? true : false}>
            <SidebarSection>
                {props.mobile 
                ? <HamburgerContentHeader>
                    <StyledLink to={{pathname: `/`}} onClick={handleClick}>
                        <Logo>Jot.</Logo>
                    </StyledLink>
                    <FontAwesomeIcon icon={faTimes} style={{fontSize: "18px"}} onClick={handleClick}/>   
                </HamburgerContentHeader>
                : <>
                    <StyledLink to={{pathname: `/`}}>
                        <Logo>Jot.</Logo>
                    </StyledLink>
                    {/* <a href="https://github.com/cowjuh/stream-of-consciousness" style={{color:"gray", fontSize:"12px"}}>By Jenny Zhang</a> */}
                </>
                }
            </SidebarSection>
            <SidebarSection>
                <StyledLink to={{pathname: `/new`}} onClick={handleClick}>
                    <Button value="New Note"/>
                </StyledLink>
            </SidebarSection>
            <SidebarSection>
                <SectionText>CATEGORY</SectionText> 
                <StyledLink  onClick={handleClick} to={{ pathname: `/category/All`}}>
                    <ListText>All</ListText>                        
                </StyledLink>
                {categories && categories.map((category) => {
                    return (
                        <StyledLink onClick={handleClick} to={{ pathname: `/category/${category}`}}>
                            <ListText>{category}</ListText>                        
                        </StyledLink>
                    )
                })}  
            </SidebarSection>
            <SidebarSection>
                <SectionText>RECENT</SectionText>
                {notes && notes.slice(0).reverse().slice(0, recentExpanded).map((note) => {
                    return (
                        <StyledLink onClick={handleClick} to={{ pathname: `/note/${note._id}`}}>
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