import React, {useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import NotesList from "./notes-list.component";
import NoteCreator from "./NoteCreator";

const InputField = styled.input`
    border-radius: 3px;
    border: none;
    padding: 5px;
    background-color: #f0f2f5;
    margin-bottom: 10px;
    width: 50%;
    @media(max-width: 768px){
        min-width: 0;
    }
`;

export default function Home() {
  const [update, setUpdate] = useState();
  const [notes, setNotes] = useState();
  const [filter, setFilter] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

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

  return (
    <Container style={{width: "90%", maxWidth:"800px"}} className="d-flex flex-column justify-content-center align-items-center">
        <h6 style={{fontFamily:'Roboto Mono, monospace'}} className="mt-4 mb-4">🌎 HELLO HELLO HELLO WORLD 🌎</h6>
        {/* <InputField type="text" placeholder="Filter by tag" onChange={(e) => setFilter(e.target.value)}/> */}
        <NoteCreator onUpdate={() => setUpdate(true)}/>
        {!dataLoaded ? <p>Loading...</p> :
          <NotesList notes={notes} handleDelete={deleteNote}/>
        }
        <a className="mb-4" href="https://github.com/cowjuh/stream-of-consciousness">Built by Jenny Zhang</a>
    </Container>
  );
}
