import React from 'react';
import Card from './Card';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card-wrapper">
      <div className="service-icon mb-3">
        <i className={`bi ${icon} fs-1 text-primary`}></i>
      </div>
      <Card
        title={title}
        description={description}
        variant="primary"
      />
    </div>
  );
}

export default ServiceCard;