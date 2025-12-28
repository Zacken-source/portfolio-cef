import React from 'react';
import SkillsSection from '../components/common/SkillSection';

function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <h1>Bienvenue sur mon portfolio</h1>
        </div>
      </section>

      <SkillsSection />

    </div>
  );
}

export default Home;