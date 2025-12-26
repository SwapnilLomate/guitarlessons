/**
 * Exercise Card Component
 * Displays a single practice exercise with instructions
 */

import { useState } from 'react';

function ExerciseCard({ exercise, number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const { title, instruction } = exercise;

  return (
    <div className={`exercise-card ${isExpanded ? 'expanded' : ''}`}>
      <button
        className="exercise-header"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span className="exercise-number">{number}</span>
        <h4 className="exercise-title">{title}</h4>
        <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      {isExpanded && (
        <div className="exercise-content">
          <p className="exercise-instruction">{instruction}</p>
        </div>
      )}
    </div>
  );
}

export default ExerciseCard;
