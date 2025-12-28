import React, { useState } from 'react';
import GitHubModal from '../components/common/GitHubModal';
import SkillsSection from '../components/common/SkillSection';
import './Home.css';

// Import de l'image
import heroImage from '../assets/images/hero-bg.jpg';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="home-page">

      <section 
        className="hero-section d-flex align-items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >

        <div className="hero-overlay"></div>

        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center text-white">

              <h1 className="hero-title display-3 fw-bold mb-4">
                Bonjour, je suis John Doe
              </h1>

              <h2 className="hero-subtitle h4 mb-5">
                Développeur Web Full Stack
              </h2>

              <button 
                className="btn btn-primary btn-lg hero-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <i className="bi bi-github me-2"></i>
                En savoir plus
              </button>

            </div>
          </div>
        </div>
      </section>

      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="section-title mb-4">À propos de moi</h2>
              <p className="lead mb-4">
                Passionné par le développement web depuis plus de 5 ans, 
                je crée des applications modernes et performantes.
              </p>
              <p className="text-muted mb-4">
                Spécialisé en React, Node.js et design responsive, j'accompagne 
                mes clients de la conception à la mise en production de leurs projets.
              </p>
              <p className="text-muted">
                Mon objectif : transformer vos idées en solutions web innovantes 
                et faciles à utiliser.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="about-image-wrapper">
                <img 
                  src="https://via.placeholder.com/500x400" 
                  alt="John Doe au travail"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      <SkillsSection />
      <GitHubModal
        username="Zacken-source"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
}

export default Home;