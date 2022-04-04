import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import {styled} from "@mui/material/styles";

const ColorButton = styled(Button)(({}) => ({
    color: '#22356F',
}));

const Header = () => {
    return (
        <header className='header'>
            <h3 className='header-title'>Dubanov's Family</h3>
            <div className="header-admin__link">
                <ColorButton>
                    <Link to='/login'>вход</Link>
                </ColorButton>
            </div>
        </header>
    )
}

export { Header }