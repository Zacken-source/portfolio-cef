import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ 
  title, 
  description, 
  image, 
  imageAlt = '',
  link, 
  linkText = 'En savoir plus',
  variant = 'primary'
}) {
  return (
    <div className="custom-card h-100">

      {image && (
        <div className="custom-card-img-wrapper">
          <img 
            src={image} 
            alt={imageAlt || title} 
            className="custom-card-img"
          />
        </div>
      )}

      <div className="custom-card-body">

        {title && (
          <h3 className="custom-card-title">{title}</h3>
        )}

        {description && (
          <p className="custom-card-description">{description}</p>
        )}

        {link && (
          <a 
            href={link} 
            className={`btn btn-${variant} custom-card-btn`}
            target={link.startsWith('http') ? '_blank' : '_self'}
            rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info'])
};

export default Card;