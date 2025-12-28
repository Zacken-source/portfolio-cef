import React from 'react';
import SkillBar from './SkillBar';
import { skills } from '../../data/skills';

function SkillsSection() {
  return (
    <section className="skills-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">Mes Compétences</h2>
          <p className="text-muted">
            Technologies et outils que je maîtrise
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {skills.map((skill) => (
              <SkillBar
                key={skill.id}
                name={skill.name}
                level={skill.level}
                color={skill.color}
                animated={true}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default SkillsSection;