import styled from 'styled-components';

const ButtonContainer = styled.button`
    display: inline-block;
    text-align: center;
    border-radius: 5px;
    font-weight: 600;
    transition: all 250ms;
    margin-right: 10px;
    padding: 5px 10px;
    color: $color-black;
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border: solid 3px transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #e1f549, #29d0be, #6cb8ea, #ff5959);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #fff inset;
      
      :hover {
        box-shadow: none;
        color: white;
      }
`;

const Button = (props) => {
    return <ButtonContainer onClick={props.onClick}>{props.value}</ButtonContainer>
}

export default Button;