import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import logo from '../assets/Icon/Bini_Logo.svg';

function Layout () {
    return (
        <div>
            <header className="gnb">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Zelda_React" />
                    </Link>
                </div>
                <nav className="nav-links">
                    <Link to='/Community'>Community</Link>
                    <Link to='/about'>About</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;