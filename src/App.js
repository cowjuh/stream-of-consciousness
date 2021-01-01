import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import TempComp from './components/TempComp';
import Sidebar from './components/Sidebar';
import {getAllNotes, getAllTags, getAllCategories} from './utils/api';
import MainContent from './components/MainContent';
import FullPageNote from './components/FullPageNote';
import CategoryPage from './components/CategoryPage';

function App() {
  const [notes, setNotes] = useState();
  const [tags, setTags] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
      getAllNotes()
          .then(res => setNotes(res));

      getAllTags()
          .then(res => setTags(res));

      getAllCategories()
      .then(res => setCategories(res));
  }, [])

  return (
    <Router>
      <div>
        <Sidebar notes={notes} tags={tags} categories={categories}/>
        <div style={{marginLeft:"250px"}}>
          <Switch>
            <Route exact path="/" children={<MainContent setNotes={setNotes} notes={notes}/>}/>
            <Route path="/note/:id" render={(props) => <FullPageNote key={props.location.key}/>}/>
            <Route path="/category/:category" render={(props) => <CategoryPage key={props.location.key}/>}/>
            <Route path="/" children={<p>404 Page</p>}/>
          </Switch>             
        </div>
     
      </div>


    </Router>
  )
}

export default App;