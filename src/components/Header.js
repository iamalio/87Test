import React from 'react'
import "./Header.css";

const Header = () => {
    return (
        <section className="header">
          <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand header__textlogo" href="#">87LUX</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse header__nav" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Themes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Apps</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Assets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </section>
    )
}

export default Header

