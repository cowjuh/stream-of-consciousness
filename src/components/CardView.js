import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import SmallCard from './SmallCard';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
    max-width: 800px;
    width: 100%;
`;

export default function NotesList (props) {
    const notes = props.notes;
    return (
        <Container>
        {!notes ? null : notes.slice(0).reverse().map((note) => {
            return(
                <SmallCard
                    key={note._id}
                    id={note._id}
                    title={note.title}
                    content={note.content}
                    tags={note.tags? note.tags : null}
                    createdAt={note.createdAt}
                    updatedAt={note.updatedAt}
                    handleDelete={() => props.handleDelete(note._id)}
                />
            )
        })}
        </Container>
    )
}