import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est obligatoire';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est obligatoire";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }

    const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est obligatoire';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Le téléphone n\'est pas valide';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est obligatoire';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est obligatoire';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {

      console.log('Formulaire soumis:', formData);
      
      setSubmitStatus('success');

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } else {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="contact-page">

      <section className="contact-header py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Contact</h1>
          <p className="lead">
            Pour me contacter en vue d'un entretien ou d'une future collaboration, 
            merci de remplir le formulaire de contact.
          </p>
          <div className="header-underline mx-auto"></div>
        </div>
      </section>

      <section className="contact-content py-5">
        <div className="container">
          <div className="row g-5">

            <div className="col-lg-6">
              <div className="contact-form-wrapper">
                <h2 className="section-title mb-4">
                  Formulaire de contact
                </h2>

                {submitStatus === 'success' && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                    <button 
                      type="button" 
                      className="btn-close" 
                      onClick={() => setSubmitStatus(null)}
                      aria-label="Fermer"
                    ></button>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    Veuillez corriger les erreurs dans le formulaire.
                    <button 
                      type="button" 
                      className="btn-close" 
                      onClick={() => setSubmitStatus(null)}
                      aria-label="Fermer"
                    ></button>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>

                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      placeholder="Votre adresse email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      id="phone"
                      name="phone"
                      placeholder="Votre numéro de téléphone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                      id="subject"
                      name="subject"
                      placeholder="Sujet"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    {errors.subject && (
                      <div className="invalid-feedback">{errors.subject}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <textarea
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Votre message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg w-100"
                  >
                    <i className="bi bi-send me-2"></i>
                    Envoyer
                  </button>

                </form>
              </div>
            </div>

            <div className="col-lg-6">

              <div className="contact-info-wrapper mb-4">
                <h2 className="section-title mb-4">
                  Mes coordonnées
                </h2>

                <div className="contact-info">
                  <h3 className="h5 fw-bold mb-3">John Doe</h3>
                  
                  <div className="info-item mb-2">
                    <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                    6 rue bataille
                  </div>

                  <div className="info-item mb-2">
                    <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                    69008 Lyon, France
                  </div>

                  <div className="info-item mb-2">
                    <i className="bi bi-telephone-fill text-primary me-2"></i>
                    <a href="tel:+3312345678" className="text-decoration-none">
                      12 34 56 78
                    </a>
                  </div>

                  <div className="info-item">
                    <i className="bi bi-envelope-fill text-primary me-2"></i>
                    <a href="mailto:john.doe@gmail.com" className="text-decoration-none">
                      john.doe@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.6310828951814!2d4.865025676209981!3d45.73849281509569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea09f99ca4cf%3A0x1b6aa7aa81567db3!2s6%20Rue%20Bataille%2C%2069008%20Lyon%2C%20France!5e0!3m2!1sfr!2sad!4v1767005836975!5m2!1sfr!2sad"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation John Doe"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;