import React from 'react';
import PropTypes from 'prop-types';
import './SkillBar.css';

function SkillBar({ name, level, color = 'primary', animated = true }) {
  return (
    <div className="skill-bar-wrapper mb-4">

      <div className="d-flex justify-content-between mb-2">
        <span className="skill-name fw-bold">{name}</span>
        <span className="skill-level text-muted">{level}%</span>
      </div>
      
      <div className="progress skill-progress">
        <div 
          className={`progress-bar bg-${color} ${animated ? 'progress-bar-animated progress-bar-striped' : ''}`}
          role="progressbar"
          style={{ width: `${level}%` }}
          aria-valuenow={level}
          aria-valuemin="0"
          aria-valuemax="100"
        >

          {level}%
        </div>
      </div>
    </div>
  );
}

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  color: PropTypes.string,
  animated: PropTypes.bool,
};

export default SkillBar;