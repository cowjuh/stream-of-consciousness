import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import NoteCard from '../components/NoteCard';

const Container = styled.div`
    max-width: 800px;
    width: 90%;
`;

export default function NotesList (props) {
    const notes = props.notes;
    return (
        <Container>
        {!notes ? null : notes.slice(0).reverse().map((note) => {
            return(
                <NoteCard
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