import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Filmovi</Link>
                <Link to="/kontakt">Kontakt</Link>
            </div>
        </nav>
    );
}

export default Navbar;