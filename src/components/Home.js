import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import NotesList from "./notes-list.component";
import NoteCreator from "./NoteCreator";

export default function Home() {
  const [update, setUpdate] = useState();
  const [notes, setNotes] = useState();

  useEffect(() => {
      axios.get('/notes/')
          .then(res => {
              setNotes(res.data);
          })
          .catch(err => console.log(err));
  })

  const deleteNote = (id) => {
    axios.delete(`notes/${id}`)
        .then(console.log("Note deleted!"))
        .catch(err => console.log(err));
    
    const newNotes = notes.filter(note => note._id !== id);
    setNotes(newNotes);
  }

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
        <h3>HELLO HELLO HELLO WORLD</h3>
        <NoteCreator onUpdate={setUpdate}/>
        <NotesList notes={notes} handleDelete={deleteNote}/>
    </Container>
  );
}
