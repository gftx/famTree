import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


const Header = () => {
    return (
        <header className='header'>
            <h3 className='header-title'>Dubanov's Family</h3>
            <div className="header-admin__link">
                <Button>
                    <Link to='/login'>вход</Link>
                </Button>
            </div>
        </header>
    )
}

export { Header }