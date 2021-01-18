import React from "react";
import logo from "../../logo.svg";
import "./header.scss";

export function Header() {
  return (
    <header className="Header">
      <ul className="nav-logo">
        <a href="/">
          <li>
            <img src={logo} alt="logo" className="header-logo" />
          </li>
        </a>
      </ul>
      <ul className="nav-elements">
        <a href="/" className="header-links">
          <li> Gallery</li>
        </a>
        <a href="/" className="header-links">
          <li> Software</li>
        </a>
        <a href="/" className="header-links">
          <li>Blog </li>
        </a>
        <a href="/" className="header-links">
          <li>About</li>
        </a>
      </ul>
    </header>
  );
}

export default Header;
