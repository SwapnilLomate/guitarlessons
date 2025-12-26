/**
 * Level View Component
 * Displays all lessons within a specific level
 */

import { useProgress } from '../context/ProgressContext';
import { getLevelById } from '../data/curriculum';
import LessonCard from './LessonCard';
import ProgressBar from './ProgressBar';

function LevelView({ levelId, onBack, onSelectLesson }) {
  const { getLevelProgress, isLevelUnlocked, isLessonCompleted } = useProgress();

  const level = getLevelById(levelId);
  const progress = getLevelProgress(levelId);
  const isUnlocked = isLevelUnlocked(levelId);

  // Redirect to home if level not found or not unlocked
  if (!level) {
    return (
      <div className="level-view error-view">
        <h2>Level not found</h2>
        <button className="primary-btn" onClick={onBack}>
          Go Back
        </button>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="level-view locked-view">
        <div className="locked-content">
          <span className="locked-icon">🔒</span>
          <h2>Level Locked</h2>
          <p>Complete the previous level to unlock this one!</p>
          <button className="primary-btn" onClick={onBack}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="level-view">
      <div className="level-header-section" style={{ '--level-color': level.color }}>
        <span className="level-view-icon">{level.icon}</span>
        <div className="level-header-text">
          <span className="level-badge">Level {level.number}</span>
          <h1 className="level-view-title">{level.title}</h1>
          <p className="level-view-description">{level.description}</p>
        </div>
        <div className="level-progress-section">
          <ProgressBar
            progress={progress}
            size="medium"
            showPercentage={true}
          />
        </div>
      </div>

      <section className="lessons-section">
        <h2 className="section-title">
          Lessons
          <span className="lesson-count-badge">
            {level.lessons.filter(l => isLessonCompleted(l.id)).length}/{level.lessons.length}
          </span>
        </h2>

        <div className="lessons-list">
          {level.lessons.map((lesson, index) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              lessonNumber={index + 1}
              levelColor={level.color}
              isCompleted={isLessonCompleted(lesson.id)}
              onClick={() => onSelectLesson(lesson.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default LevelView;
