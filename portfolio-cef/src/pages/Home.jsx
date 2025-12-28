import React, { useState } from 'react';
import GitHubModal from '../components/common/GitHubModal';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mt-5">
      <h1>Bienvenue</h1>

      <button 
        className="btn btn-primary"
        onClick={() => setIsModalOpen(true)}
      >
        <i className="bi bi-github me-2"></i>
        Voir mon profil GitHub
      </button>

      <GitHubModal
        username="Zacken-source"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Home;