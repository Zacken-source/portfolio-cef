import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import { services } from '../data/services';
/*import './Services.css';*/

function Services() {
  return (
    <div className="services-page">
      <section className="services-header py-5 bg-primary text-white">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">Mes Services</h1>
          <p className="lead">
            Solutions web complètes pour donner vie à vos projets
          </p>
        </div>
      </section>

      <section className="services-grid py-5">
        <div className="container">
          
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-md-6 col-lg-3">
                <div className="service-card h-100">

                  <div className="service-icon text-center mb-3">
                    <i className={`bi ${service.icon} fs-1 text-primary`}></i>
                  </div>

                  <h3 className="service-title text-center mb-3">
                    {service.title}
                  </h3>

                  <p className="service-description text-muted mb-4">
                    {service.description}
                  </p>

                  <ul className="service-features list-unstyled mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-center mt-auto">
                    <Link 
                      to={service.link} 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-arrow-right me-2"></i>
                      Me contacter
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <section className="cta-section py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Un projet en tête ?</h2>
          <p className="lead text-muted mb-4">
            Discutons ensemble de vos besoins et trouvons la solution adaptée.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            <i className="bi bi-envelope me-2"></i>
            Demander un devis gratuit
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Services;