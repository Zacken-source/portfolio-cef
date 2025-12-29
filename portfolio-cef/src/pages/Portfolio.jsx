import React, { useState } from 'react';
import { projects, categories } from '../data/projects';
import './Portfolio.css';

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProjects = activeCategory === 'Tous'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="portfolio-page">

      <section className="portfolio-header py-5 bg-dark text-white">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">Mon Portfolio</h1>
          <p className="lead">
            Découvrez mes dernières réalisations et projets
          </p>
        </div>
      </section>

      <section className="portfolio-filters py-4 bg-light">
        <div className="container">
          <div className="d-flex justify-content-center flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`btn ${
                  activeCategory === category 
                    ? 'btn-primary' 
                    : 'btn-outline-primary'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-grid py-5">
        <div className="container">

          <p className="text-center text-muted mb-4">
            {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
          </p>

          <div className="row g-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4">
                
                <div className="project-card h-100">

                  <div className="project-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />

                    <div className="project-overlay">
                      <div className="project-links">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-light btn-sm me-2"
                          title="Voir le projet"
                        >
                          <i className="bi bi-eye"></i>
                        </a>
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-dark btn-sm"
                            title="Voir le code"
                          >
                            <i className="bi bi-github"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="project-content p-3">

                    <span className="badge bg-primary mb-2">
                      {project.category}
                    </span>

                    <h3 className="project-title h5 mb-2">
                      {project.title}
                    </h3>

                    <p className="project-description text-muted mb-3">
                      {project.description}
                    </p>

                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="badge bg-light text-dark me-1 mb-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-folder-x fs-1 text-muted mb-3 d-block"></i>
              <p className="text-muted">
                Aucun projet trouvé dans cette catégorie.
              </p>
            </div>
          )}

        </div>
      </section>

      <section className="cta-section py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">Intéressé par mon travail ?</h2>
          <p className="lead mb-4">
            Travaillons ensemble sur votre prochain projet !
          </p>
          <a href="/contact" className="btn btn-light btn-lg">
            <i className="bi bi-envelope me-2"></i>
            Me contacter
          </a>
        </div>
      </section>

    </div>
  );
}

export default Portfolio;