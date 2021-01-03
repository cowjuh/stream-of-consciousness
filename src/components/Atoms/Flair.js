import styled from 'styled-components';
import {Link} from 'react-router-dom'

const CategoryFlair = styled.div`
    background-color: ${props => props.hover ? "#e91e63" : "#E4E6E8"};
    display: inline-block;
    color: ${props => props.hover ? "white" : "#70777F"};
    border-radius: 20px;
    padding: 1px 8px;
    transition: all 250ms;
      
      :hover {
        color: white;
        background-color: #e91e63;
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
            <CategoryFlair hover={props.hover}>{props.value}</CategoryFlair>
        </StyledLink>
    )
}

export default Flair;