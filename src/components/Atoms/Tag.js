import styled from 'styled-components';

const TagContainer = styled.div`
    display: inline-block;
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 2px 8px;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
`;


const Tag = (props) => {
    return(
        <TagContainer onClick={() => props.onClick(props.value)}>
            {props.value}
        </TagContainer>
    )
}

export default Tag;