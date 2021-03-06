import React, {useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faThList, faThLarge } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import NotesList from "./NotesList";
import CardView from "./CardView";
import NoteCreator from "./NoteCreator";

const InputField = styled.input`
    border-radius: 3px;
    border: none;
    padding: 5px;
    background-color: #f0f2f5;
    width: 100%;
    @media(max-width: 768px){
        min-width: 0;
    }
`;

const Configurable = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const ViewIcon = styled(FontAwesomeIcon)`
    color: #D6D6D6;
    cursor: pointer;
    :hover {
      color: gray;
    }
`;

export default function MainContent() {
  const [update, setUpdate] = useState();
  const [notes, setNotes] = useState();
  const [filter, setFilter] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [view, setView] = useState("list");

  useEffect(() => {
    axios.get('/notes/')
        .then(res => {
            setNotes(res.data);
            setDataLoaded(true);
            setUpdate(false);
        })
        .catch(err => console.log(err));        
  }, [update])

  const deleteNote = (id) => {
    axios.delete(`notes/${id}`)
        .then(console.log("Note deleted!"))
        .catch(err => console.log(err));
    
    const newNotes = notes.filter(note => note._id !== id);
    setNotes(newNotes);
  }

  const handleFilter = (e) => {
    e.preventDefault();
    axios.get(`notes/filterByTag/?tag=${filter}`)
      .then(res => {
        setNotes(res.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <Container className="px-4 d-flex flex-column justify-content-center align-items-center">
        <Configurable>
          <form onSubmit={handleFilter} className="mt-4">
            <InputField type="text" placeholder="Filter by tag" onChange={(e) => setFilter(e.target.value)}/>
          </form>
        </Configurable>
        <CardView notes={notes} handleDelete={deleteNote}/>
    </Container>
  );
}
