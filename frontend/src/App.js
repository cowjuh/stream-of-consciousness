import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./components/Sidebar";
import { getAllNotes, getAllTags, getAllCategories } from "./utils/api";
import MainContent from "./components/MainContent";
import FullPageNote from "./components/FullPageNote";
import CategoryPage from "./components/CategoryPage";
import NoteEditor from "./components/NoteEditor";
import MobileMenu from "./components/Mobile/MobileMenu";
import LoginPage from "./components/LoginPage";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = process.env.REACT_APP_OAUTH_CLIENT_ID;

function App() {
  const [user, setUser] = useState(localStorage.getItem("userObj"));
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("userObj") ? true : false);
  const [notes, setNotes] = useState();
  const [tags, setTags] = useState();
  const [categories, setCategories] = useState();
  const [update, setUpdate] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [sidebar, setSidebar] = useState(false);
  const breakpoint = 768;

  const handleUpdate = () => {
    setUpdate(!update);
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleLogIn = (userObj) => {
    setUser(userObj);
    localStorage.setItem("userObj", userObj);
    setIsAuthenticated(true);
    handleUpdate();
  };

  const handleLogout = () => {
    setUser(undefined);
    setIsAuthenticated(false);
    handleUpdate();
  };

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    if (isAuthenticated && user) {
      console.log(user);
      getAllNotes(user._id).then((res) => setNotes(res));

      getAllTags(user._id).then((res) => setTags(res));

      getAllCategories(user._id).then((res) => setCategories(res));
    }
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [update]);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <>
        {!isAuthenticated ? (
          <>
            <LoginPage handleLogIn={handleLogIn} />
            <Router>
              <Switch>
                <Redirect from="/" to="/auth" />
              </Switch>
            </Router>
          </>
        ) : (
          <Router>
            <div style={{ position: "relative" }}>
              {width < breakpoint ? (
                <MobileMenu toggleSidebar={() => toggleSidebar(true)} />
              ) : (
                <Sidebar notes={notes} tags={tags} categories={categories} handleLogout={handleLogout} />
              )}
              {sidebar && (
                <Sidebar
                  mobile
                  toggleSidebar={toggleSidebar}
                  notes={notes}
                  tags={tags}
                  categories={categories}
                  handleLogout={handleLogout}
                />
              )}
              <div style={width < breakpoint ? { paddingTop: "56px" } : { marginLeft: "250px" }}>
                <Switch>
                  <Redirect exact from="/" to="/category/All" />
                  <Redirect exact from="/auth" to="/category/All" />
                  <Route path="/hey" render={!isAuthenticated ? <Redirect to="/auth" /> : null} />
                  <Route exact path="/" children={<MainContent setNotes={setNotes} notes={notes} />} />
                  <Route exact path="/new" children={<NoteEditor newNote user={user} handleUpdate={handleUpdate} />} />
                  <Route
                    path="/note/:id"
                    render={(props) => <FullPageNote handleUpdate={handleUpdate} key={props.location.key} />}
                  />
                  <Route
                    path="/category/:category"
                    render={(props) => <CategoryPage user={user} key={props.location.key} />}
                  />
                  <Route exact path="/auth" component={LoginPage} />
                  <Route path="/" children={<p>404 Page</p>} />
                </Switch>
              </div>
            </div>
          </Router>
        )}
      </>
    </GoogleOAuthProvider>
  );
}

export default App;
