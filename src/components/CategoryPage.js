import CardView from './CardView';
import {getCategoryNotes} from '../utils/api';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const SectionText = styled.h5`
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 12px;
    color: gray;
`;

const CategoryPage = () => {
    const category = window.location.pathname.split("/").pop();
    const [notes, setNotes] = useState();

    useEffect(() => {
        getCategoryNotes(category)
            .then(res => setNotes(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container className="p-4">
            <SectionText>CATEGORY</SectionText>
            <h2>{category}</h2>
            {!notes ? null
                : <CardView notes={notes}></CardView>
            }
        </Container>

    )
}

export default CategoryPage;