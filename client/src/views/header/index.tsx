import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <h3 className='header-title'>Dubanov's Family</h3>
            <div className="header-admin__link">
                <button>
                    <Link to='/login'>вход</Link>
                </button>
            </div>
        </header>
    )
}

export { Header }