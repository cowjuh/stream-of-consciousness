import styled from 'styled-components';
import {Link} from 'react-router-dom'

const CategoryFlair = styled.div`
    background-color: #868686;
    display: inline-block;
    color: white;
    border-radius: 20px;
    padding: 2px 8px;

    :hover{
        opacity: 0.7;
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