import React, { useEffect } from 'react';
import './LegalNotice.css';

function LegalNotice() {

  useEffect(() => {

    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <div className="legal-notice-page">

      <section className="legal-header py-5 text-center bg-dark text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">Mentions légales</h1>
          <div className="header-underline mx-auto mt-3"></div>
        </div>
      </section>

      <section className="legal-content py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="accordion" id="legalAccordion">

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEditor">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEditor"
                      aria-expanded="true"
                      aria-controls="collapseEditor"
                    >
                      Éditeur du site
                    </button>
                  </h2>
                  <div
                    id="collapseEditor"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingEditor"
                    data-bs-parent="#legalAccordion"
                  >
                    <div className="accordion-body">
                      <h3 className="h5 fw-bold mb-3">John Doe</h3>
                      
                      <p className="mb-2">
                        <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                        40 rue Laure Diebold
                      </p>
                      <p className="mb-2">
                        <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                        69009 Lyon, France
                      </p>
                      <p className="mb-2">
                        <i className="bi bi-telephone-fill text-primary me-2"></i>
                        10 20 30 40 50
                      </p>
                      <p className="mb-3">
                        <i className="bi bi-envelope-fill text-primary me-2"></i>
                        <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                      </p>

                      <p className="text-muted fst-italic">
                        Ce site est réalisé par John Doe, étudiant au{' '}
                        <a 
                          href="https://www.centre-europeen-formation.fr" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                        >
                          Centre Européen de Formation
                        </a>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingHost">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseHost"
                      aria-expanded="false"
                      aria-controls="collapseHost"
                    >
                      Hébergeur
                    </button>
                  </h2>
                  <div
                    id="collapseHost"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingHost"
                    data-bs-parent="#legalAccordion"
                  >
                    <div className="accordion-body">
                      <h3 className="h5 fw-bold mb-3">alwaysdata</h3>
                      
                      <p className="mb-2">
                        91 Rue du Faubourg Saint-Honoré, 75008 Paris
                      </p>
                      <p className="mb-3">
                        <i className="bi bi-globe text-primary me-2"></i>
                        <a 
                          href="https://www.alwaysdata.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          www.alwaysdata.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingCredits">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseCredits"
                      aria-expanded="false"
                      aria-controls="collapseCredits"
                    >
                      Crédits
                    </button>
                  </h2>
                  <div
                    id="collapseCredits"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingCredits"
                    data-bs-parent="#legalAccordion"
                  >
                    <div className="accordion-body">
                      <h3 className="h6 fw-bold mb-3">Crédits</h3>
                      
                      <p className="mb-3">
                        Ce site a été réalisé par John Doe, étudiant au{' '}
                        <a 
                          href="https://www.centre-europeen-formation.fr" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Centre Européen de formation
                        </a>.
                      </p>

                      <p className="mb-2 fst-italic">
                        Les images utilisées sur ce site sont libres de droits et ont été 
                        obtenues sur le site{' '}
                        <a 
                          href="https://pixabay.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Pixabay
                        </a>.
                      </p>

                      <p className="fst-italic">
                        La favicon de ce site a été fournie par{' '}
                        <a 
                          href="https://www.flaticon.com/free-icons/user" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title="user icons"
                        >
                          John doe Icons erstellt von Freepik - Flaticon
                        </a>.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default LegalNotice;