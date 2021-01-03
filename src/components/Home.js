import React, { useEffect, useState } from 'react';
import '../utils/api';
import { getAllNotes, getAllTags, getNoteByID } from '../utils/api';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Home = () => {
    const [notes, setNotes] = useState();
    const [tags, setTags] = useState();

    useEffect(() => {
        getAllNotes()
            .then(res => setNotes(res));

        getAllTags()
            .then(res => setTags(res));
    }, [])

    return (
        <>
            <MainContent setNotes={setNotes} notes={notes}/>      
        </>            
    )
}

export default Home;