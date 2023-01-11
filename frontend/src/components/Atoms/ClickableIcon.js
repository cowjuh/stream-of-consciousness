import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const IconContainer = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    transition: all 250ms;
    font-size: 14px;
    margin-right: ${props => props.margin ? "10px" : "none"};
    background-color: ${props => props.color + "30"};

    :hover {
        transform: scale(1.1);
    }
`;

const ClickableIcon = (props) => {
    return(
        <IconContainer margin={props.margin} onClick={props.onClick ? () => props.onClick() : null} color={props.color}>
            <FontAwesomeIcon color={props.color} icon={props.icon}/>
        </IconContainer>
    )
}

export default ClickableIcon;