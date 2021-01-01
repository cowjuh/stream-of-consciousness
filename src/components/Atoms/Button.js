import styled from 'styled-components';

const ButtonContainer = styled.button`
    display: inline-block;
    text-align: center;
    border-radius: 5px;
    border: none;
    background-color: black;
    padding: 5px 20px;
    color: white;

    :hover {
        opacity: 0.7;
        transform: scale(1.02);
    }
`;

const Button = (props) => {
    return <ButtonContainer onClick={props.onClick}>{props.value}</ButtonContainer>
}

export default Button;