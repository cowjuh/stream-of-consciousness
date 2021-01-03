import styled from 'styled-components';

const TagContainer = styled.div`
    background-color: ${props => props.hover ? "#e91e63" : "#E4E6E8"};
    display: inline-block;
    color: ${props => props.hover ? "white" : "#70777F"};
    border-radius: 5px;
    padding: 2px 8px;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    transition: all 250ms;

    :hover{
        background-color: #e91e63;
        color: white;
    }
`;


const Tag = (props) => {
    return(
        <TagContainer hover={props.hover} onClick={() => props.onClick(props.value)}>
            {props.value}
        </TagContainer>
    )
}

export default Tag;