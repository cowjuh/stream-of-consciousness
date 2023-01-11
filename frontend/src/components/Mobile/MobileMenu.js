import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const MenuContainer = styled.div`
    position: fixed;
    display: flex;
    padding: 0px 30px;
    align-items: center;
    height: 56px;
    background-color: white;
    border-bottom: 1px solid #F6F6F6;
    width: 100vw;
    z-index: 1;
`;

const MobileMenu = (props) => {
    return( 
        <MenuContainer>
            <FontAwesomeIcon style={{fontSize: "18px", cursor: "pointer"}} onClick={() => props.toggleSidebar()} icon={faBars}/>
        </MenuContainer>
    )
}

export default MobileMenu;