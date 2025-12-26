/**
 * Level Card Component
 * Displays a single level with its progress and locked/unlocked state
 */

import ProgressBar from './ProgressBar';

function LevelCard({ level, onClick }) {
  const {
    number,
    title,
    description,
    icon,
    color,
    progress,
    isUnlocked,
    isCompleted,
    completedLessonCount,
    totalLessonCount
  } = level;

  return (
    <button
      className={`level-card ${!isUnlocked ? 'level-locked' : ''} ${isCompleted ? 'level-completed' : ''}`}
      onClick={onClick}
      disabled={!isUnlocked}
      style={{ '--level-color': color }}
    >
      <div className="level-header">
        <span className="level-number">Level {number}</span>
        {isCompleted && <span className="completed-badge">✓</span>}
        {!isUnlocked && <span className="locked-badge">🔒</span>}
      </div>

      <div className="level-icon">{icon}</div>

      <h3 className="level-title">{title}</h3>
      <p className="level-description">{description}</p>

      <div className="level-footer">
        <span className="lesson-count">
          {completedLessonCount}/{totalLessonCount} lessons
        </span>
        {isUnlocked && (
          <ProgressBar
            progress={progress}
            size="small"
            showPercentage={false}
          />
        )}
      </div>

      {!isUnlocked && (
        <div className="locked-overlay">
          <span className="locked-text">Complete Level {number - 1} to unlock</span>
        </div>
      )}
    </button>
  );
}

export default LevelCard;
