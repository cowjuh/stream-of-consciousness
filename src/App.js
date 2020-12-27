import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import RichTextEditor from "./components/RichTextEditor";
import 'bootstrap/dist/css/bootstrap.min.css';

import NotesList from "./components/notes-list.component";
import NoteCreator from "./components/NoteCreator";
import Home from './components/Home';

function App() {
  return (
    <Home/>
  );
}

export default App;