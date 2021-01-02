import CardView from './CardView';
import {getCategoryNotes, getAllNotes} from '../utils/api';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

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
    @media(max-width: 768px){
        min-width: 0;
    }
    :focus {
        outline: none;
    }
`;

const CategoryPage = () => {
    const category = window.location.pathname.split("/").pop();
    const [notes, setNotes] = useState();
    const [filter, setFilter] = useState();

    useEffect(() => {
        if(category === "All") {
            getAllNotes()
            .then(res => setNotes(res))
            .catch(err => console.log(err))
        }
        else {
            getCategoryNotes(category)
                .then(res => setNotes(res))
                .catch(err => console.log(err))            
        }
    }, [])

    return (
        <Container className="p-4">
            <SectionText>CATEGORY</SectionText>
            <h1>{category}</h1>
            <form className="mt-4 mb-4">
                <InputField type="text" placeholder="Filter by tag" onChange={(e) => setFilter(e.target.value)}/>
            </form>
            {!notes ? null
                : <CardView notes={notes}/>
            }
        </Container>

    )
}

export default CategoryPage;