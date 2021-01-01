import CardView from './CardView';
import {getCategoryNotes} from '../utils/api';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

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
            {!notes ? null
                : <CardView notes={notes}></CardView>
            }
        </Container>

    )
}

export default CategoryPage;