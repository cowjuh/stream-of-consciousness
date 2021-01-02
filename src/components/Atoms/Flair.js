import styled from 'styled-components';
import {Link} from 'react-router-dom'

const CategoryFlair = styled.div`
    background-color: #E4E6E8;
    display: inline-block;
    color: #70777F;
    border-radius: 20px;
    padding: 1px 8px;

    :hover{
        background-color: #3f51b5;
        color: white;
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

const Flair = (props) => {
    return(
        <StyledLink to={{pathname: `/category/${props.value}`}}>
            <CategoryFlair>{props.value}</CategoryFlair>
        </StyledLink>
    )
}

export default Flair;