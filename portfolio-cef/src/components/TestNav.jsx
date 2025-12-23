import React from 'react';
import { Link } from 'react-router-dom';

function TestNav() {
  return (
    <nav style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h3>Navigation de test</h3>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/mentions-legales">Mentions légales</Link></li>
      </ul>
    </nav>
  );
}

export default TestNav;