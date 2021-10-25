import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to='/Standings'>
                    <div className="navLi">Temp</div>
                </Link>
                <Link to='/PlayerStats'>
                    <div className="navLi">Stats</div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar


