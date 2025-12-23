import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          
          {/* Logo/Nom */}
          <NavLink className="navbar-brand fw-bold" to="/">
            JOHN DOE
          </NavLink>

          {/* Bouton hamburger pour mobile */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu de navigation */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Accueil
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/portfolio">
                  Réalisations
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Me contacter
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/mentions-legales">
                  Mentions légales
                </NavLink>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;