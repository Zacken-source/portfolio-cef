import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">John Doe</h5>
            <address className="mb-3">
              <p className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                40 rue Laure Diebold
              </p>
              <p className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                69008 Lyon, France
              </p>
              <p className="mb-2">
                <i className="bi bi-telephone-fill me-2"></i>
                <a href="tel:+33610203040" className="text-white text-decoration-none">
                  06 10 20 30 40
                </a>
              </p>
            </address>

            <div className="social-links mt-3">
              <a 
                href="https://github.com/zacken-source" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link me-3"
                aria-label="GitHub"
              >
                <i className="bi bi-github fs-4"></i>
              </a>
              <a 
                href="https://twitter.com/ton-username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link me-3"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a 
                href="www.linkedin.com/in/chereaudemedina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">Liens utiles</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link to="/" className="footer-link">
                  <i className="bi bi-chevron-right me-2"></i>
                  Accueil
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="footer-link">
                  <i className="bi bi-chevron-right me-2"></i>
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="footer-link">
                  <i className="bi bi-chevron-right me-2"></i>
                  Réalisations
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="footer-link">
                  <i className="bi bi-chevron-right me-2"></i>
                  Me contacter
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/mentions-legales" className="footer-link">
                  <i className="bi bi-chevron-right me-2"></i>
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="text-uppercase mb-3">Mes derniers projets</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link to="/portfolio" className="footer-link">
                  <i className="bi bi-chevron-right me-2"></i>
                  Application React
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="footer-link">
                  <i className="bi bi-chevron-right me-2"></i>
                  Port-Folio React
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="footer-link">
                  <i className="bi bi-chevron-right me-2"></i>
                  Jeu RPG Golang
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} John Doe. Tous droits réservés.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;