import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import './Layout.css';
import LoginModal from "./Login/LoginModal";
import logo from '../assets/Icon/Bini_Logo.svg';
import user from '../assets/Icon/normal_usericon.svg';

function Layout() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <header className="gnb">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Home" />
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/Community">Community</Link>
          <div
            className="login-item"
            onClick={() => setShowModal(true)}
            style={{ cursor: 'pointer' }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setShowModal(true); }}
          >
            <img src={user} alt="user" />
            Login
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Layout;
