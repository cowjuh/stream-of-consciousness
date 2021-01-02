import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

const MobileMenu = (props) => {
    return( 
        <FontAwesomeIcon style={{cursor: "pointer", margin: "10px", position: "fixed", zIndex: "2"}} onClick={() => props.toggleSidebar()} icon={faBars}/>
    )
}

export default MobileMenu;