import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import SmallCard from './SmallCard';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
    gap: 1.5rem;
    width: 100%;
`;

export default function NotesList (props) {
    const notes = props.notes;
    return (
        <Container>
        {notes && notes.slice(0).reverse().map((note) => {
            return(
                <SmallCard
                    key={note._id}
                    id={note._id}
                    title={note.title}
                    content={note.content}
                    category={note.category}
                    tags={note.tags && note.tags}
                    createdAt={note.createdAt}
                    updatedAt={note.updatedAt}
                    handleDelete={() => props.handleDelete(note._id)}
                />
            )
        })}
        </Container>
    )
}