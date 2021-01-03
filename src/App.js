import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar';
import {getAllNotes, getAllTags, getAllCategories} from './utils/api';
import MainContent from './components/MainContent';
import FullPageNote from './components/FullPageNote';
import CategoryPage from './components/CategoryPage';
import NoteEditor from './components/NoteEditor';
import MobileMenu from './components/Mobile/MobileMenu';

function App() {
  const [notes, setNotes] = useState();
  const [tags, setTags] = useState();
  const [categories, setCategories] = useState();
  const [update, setUpdate] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [sidebar, setSidebar] = useState(false);
  const breakpoint = 768;

  const handleUpdate = () => {
    setUpdate(!update);
  }

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleWindowResize);
      getAllNotes()
          .then(res => setNotes(res));

      getAllTags()
          .then(res => setTags(res));

      getAllCategories()
      .then(res => setCategories(res));

      return () => window.removeEventListener("resize", handleWindowResize);
  }, [update])

  return (
    <Router>
      <div style={{position: "relative"}}>
        {width < breakpoint
        ? <MobileMenu toggleSidebar={() => toggleSidebar(true)} />
        : <Sidebar notes={notes} tags={tags} categories={categories}/>
        }
        {sidebar && <Sidebar mobile toggleSidebar={toggleSidebar} notes={notes} tags={tags} categories={categories}/>}
        <div style={width < breakpoint ? {paddingTop:"56px"}: {marginLeft:"250px"}}>
          <Switch>
            <Redirect exact from="/" to="/category/All"/>
            <Route exact path="/" children={<MainContent setNotes={setNotes} notes={notes}/>}/>
            <Route exact path="/new" children={<NoteEditor newNote handleUpdate={handleUpdate}/>}/>
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