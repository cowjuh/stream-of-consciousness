import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import TempComp from './components/TempComp';
import Sidebar from './components/Sidebar';
import {getAllNotes, getAllTags} from './utils/api';
import MainContent from './components/MainContent';
import FullPageNote from './components/FullPageNote';

function App() {
  const [notes, setNotes] = useState();
  const [tags, setTags] = useState();

  useEffect(() => {
      getAllNotes()
          .then(res => setNotes(res));

      getAllTags()
          .then(res => setTags(res));
  }, [notes, tags])

  return (
    <Router>
      <div>
        <Sidebar notes={notes} tags={tags}/>
        <div style={{marginLeft:"250px"}}>
          <Switch>
            <Route exact path="/" children={<MainContent setNotes={setNotes} notes={notes}/>}/>
            <Route path="/note/:id" render={(props) => <FullPageNote key={props.location.key}/>}/>
            <Route path="/" children={<p>404 Page</p>}/>
          </Switch>             
        </div>
     
      </div>


    </Router>
  )
}

export default App;