import React from 'react';
import Card from '../components/common/Card';
function Home() {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-5">Test du composant Card</h1>
      
      <div className="row g-4">
        <div className="col-md-4">
          <Card
            title="Développement Web"
            description="Création de sites web modernes et responsives avec React et Bootstrap."
            image="https://via.placeholder.com/400x200"
            imageAlt="Développement web"
            link="https://example.com"
            linkText="Découvrir"
            variant="primary"
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Design UI/UX"
            description="Conception d'interfaces utilisateur intuitives et esthétiques."
            image="https://via.placeholder.com/400x200"
            imageAlt="Design UI/UX"
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Consultation"
            description="Audit de vos projets web et conseils personnalisés pour optimiser vos performances."
            link="/contact"
            linkText="Me contacter"
            variant="success"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;