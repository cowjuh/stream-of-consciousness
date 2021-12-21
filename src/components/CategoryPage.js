import CardView from "./CardView";
import { getCategoryNotes, getAllNotes } from "../utils/api";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Button from "./Atoms/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ClickableIcon from "./Atoms/ClickableIcon";
import { faTimes, faFilter } from "@fortawesome/free-solid-svg-icons";

const SectionText = styled.h5`
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 12px;
  color: gray;
`;

const InputField = styled.input`
  border-radius: 3px;
  border: none;
  padding: 5px;
  background-color: #f0f2f5;
  @media (max-width: 768px) {
    min-width: 0;
  }
  :focus {
    outline: none;
  }
`;

const Toolbar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: start;
  }
`;

const CategoryPage = (props) => {
  const user = props.user;
  const category = window.location.pathname.split("/").pop();
  const [notes, setNotes] = useState();
  const [filter, setFilter] = useState();
  const [filteredState, setFilteredState] = useState(false);
  const history = useHistory();

  const routeChange = (route) => {
    let path = `${route}`;
    history.push(path);
  };

  useEffect(() => {
    if (filteredState === false && user) {
      if (category === "All") {
        getAllNotes(user._id)
          .then((res) => setNotes(res))
          .catch((err) => console.log(err));
      } else {
        getCategoryNotes(category, user._id)
          .then((res) => setNotes(res))
          .catch((err) => console.log(err));
      }
    }
  }, [filteredState]);

  const handleNewNote = () => {
    if (category != "All") routeChange(`/new/?category=${category}`);
    else routeChange(`/new/`);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    axios
      .get(
        `api/notes/filterByTag/${user._id}/?tag=${filter}&category=${category}`
      )
      .then((res) => {
        console.log(res.data);
        setNotes(res.data);
      })
      .catch((err) => console.log(err));
    setFilteredState(true);
  };

  const resetFilter = () => {
    setFilter("");
    setFilteredState(false);
  };

  return (
    <Container className="p-4">
      <SectionText>CATEGORY</SectionText>
      <h1>{category}</h1>
      <Toolbar>
        <Button onClick={handleNewNote} value={"New Note"} />
        <form onSubmit={handleFilter} className="mt-4 mb-4">
          <InputField
            className="mr-3"
            type="text"
            placeholder="Filter by tag"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button type="submit" style={{ all: "initial" }}>
            <ClickableIcon
              margin={filteredState ? true : false}
              onClick={null}
              color="#3f51b5"
              icon={faFilter}
            />
          </button>
          {filteredState && (
            <button
              type="reset"
              onSubmit={resetFilter}
              onClick={resetFilter}
              style={{ all: "initial" }}
            >
              <ClickableIcon color="#e91e63" icon={faTimes} />
            </button>
          )}
        </form>
      </Toolbar>
      {notes && <CardView notes={notes} />}
    </Container>
  );
};

export default CategoryPage;
