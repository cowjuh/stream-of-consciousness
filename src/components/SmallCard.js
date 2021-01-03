import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {Link} from 'react-router-dom';
import Tag from './Atoms/Tag';
import Flair from './Atoms/Flair';

const Card = styled.div`
    position: relative;
    cursor: pointer;
    background-color: #F9F9F9;
    border: none;
    border-radius: 5px;
    padding: 20px;
    min-width: 100px;
    min-height: 200px;
    transition: all 250ms;

    @media(max-width: 768px){
        min-width: 0;
    }

    :hover {
        transform: scale(1.02);
        background-color: #fde8ef;
    }

    :hover h4{
        color: #e91e63;
    }

    :hover p{
        color: #e91e63;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
`;

const ContentPreview = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    color: #7A7F89;
    color: ${props => props.color};
`;

const TagsContainer = styled.div`
    display: inline-block;
    width: 100%;
    padding: 60px 20px 5px 20px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    background-image: linear-gradient(#fde8ef00, #fde8ef00 ,#fde8ef);
`;

const BodyText = styled.p`
    margin: 0;
`;

const Title = styled.h4`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
`;

const SmallCard = (props) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [category, setCategory] = useState(props.category);
    const [tags, setTags] = useState(props.tags);
    const [stringTags, setStringTags] = useState();
    const [hover, setHover] = useState(false);
    const id = props.id;
    var createdAt = (new Date(props.createdAt)).toDateString();
    var updatedAt = (new Date(props.updatedAt)).toDateString();
    dayjs.extend(relativeTime);
    var lastUpdated = dayjs().to(props.updatedAt);
    var lastCreated = dayjs().to(props.createdAt);

    const onSubmit = (e) => {
        e.preventDefault();
        let tagArray;
        if(stringTags) {
            tagArray = (stringTags.split(",")).filter(i => /\S/.test(i));
            setTags(tagArray);
        }
        else {
            tagArray = tags;
        }
        const updatedNote = {
            title: title,
            content: content,
            tags: tagArray
        }
        console.log(updatedNote);
        axios.post(`notes/update/${props.id}`, updatedNote)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
        setEditing(false);
    }

    return(
        <StyledLink style={{textDecoration: 'none'}} to={`/note/${id}`}>
            <Card onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <>
                    <div className="d-flex justify-content-between mb-2">
                        <BodyText>{lastCreated}</BodyText>
                        {category && <Flair hover={hover} value={category}/>}
                    </div>

                    <Title>{title}</Title>
                    <ContentPreview color={hover ? "#e91e6373" : "#7A7F89"}>{content}</ContentPreview>
                    {(tags && hover) && 
                        <TagsContainer className="mb-4">{                
                            tags.map((tag) => {
                                return <Tag hover={hover} value={tag}/>
                            })}
                        </TagsContainer>
                    }
                </>
            </Card>

        </StyledLink>

    )
}

export default SmallCard;