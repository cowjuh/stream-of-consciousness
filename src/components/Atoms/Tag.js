import styled from 'styled-components';

const TagContainer = styled.div`
    display: inline-block;
    background-color: #E4E6E8;
    color: #70777F;
    border-radius: 5px;
    padding: 2px 8px;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;

    :hover{
        background-color: #3f51b5;
        color: white;
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