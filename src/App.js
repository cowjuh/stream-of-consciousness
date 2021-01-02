import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar';
import {getAllNotes, getAllTags, getAllCategories} from './utils/api';
import MainContent from './components/MainContent';
import FullPageNote from './components/FullPageNote';
import CategoryPage from './components/CategoryPage';
import NoteEditor from './components/NoteEditor';

function App() {
  const [notes, setNotes] = useState();
  const [tags, setTags] = useState();
  const [categories, setCategories] = useState();
  const [update, setUpdate] = useState(false);

  const handleUpdate = () => {
    console.log("ran??/");
    setUpdate(!update);
  }

  useEffect(() => {
      getAllNotes()
          .then(res => setNotes(res));

      getAllTags()
          .then(res => setTags(res));

      getAllCategories()
      .then(res => setCategories(res));
  }, [update])

  return (
    <Router>
      <div>
        <Sidebar notes={notes} tags={tags} categories={categories}/>
        <div style={{marginLeft:"250px"}}>
          <Switch>
            <Route exact path="/" children={<MainContent setNotes={setNotes} notes={notes}/>}/>
            <Route exact path="/new" children={<NoteEditor newNote handleUpdate={setUpdate}/>}/>
            <Route path="/note/:id" render={(props) => <FullPageNote handleUpdate={handleUpdate} key={props.location.key}/>}/>
            <Route path="/category/:category" render={(props) => <CategoryPage key={props.location.key}/>}/>
            <Route path="/" children={<p>404 Page</p>}/>
          </Switch>             
        </div>
     
      </div>


    </Router>
  )
}

export default App;