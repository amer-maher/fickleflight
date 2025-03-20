import React from "react";
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src="" alt="logo" className="logo" />
      <div className="right-section">
        <div className="links">
          <a className="nav-link" href="/Explore">Explore</a>
          <a className="nav-link" href="/Search">Search</a>
          <a className="nav-link" href="/Hotels">Hotels</a>
          <a className="nav-link" href="/Offers">Offers</a>
        </div>
        <div className="dropdown">
          <button className="dropdown-toggle" id="notificationDropdown">
            <span role="img" aria-label="bell">🔔</span>
            <span className="badge">1</span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Some news</a></li>
            <li><a href="#">Another news</a></li>
            <li><a href="#">Something else here</a></li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="dropdown-toggle" id="profileDropdown">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              alt="Profile"
              className="avatar"
            />
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">My profile</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
