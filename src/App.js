import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RichTextEditor from "./components/RichTextEditor";

import NotesList from "./components/notes-list.component";
import CreateNote from "./components/create-note.component";

function App() {
  return (
    <div className="container">
      <CreateNote/>
      <NotesList/>
      <RichTextEditor/>
    </div>
  );
}

export default App;