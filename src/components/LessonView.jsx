/**
 * Lesson View Component
 * Full lesson display with videos, exercises, and completion tracking
 */

import { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { getLessonById, getNextLesson } from '../data/curriculum';
import YouTubeEmbed from './YouTubeEmbed';
import ExerciseCard from './ExerciseCard';

function LessonView({ lessonId, onBack, onNavigateToLesson }) {
  const { isLessonCompleted, completeLesson, uncompleteLesson } = useProgress();
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const lesson = getLessonById(lessonId);
  const isCompleted = isLessonCompleted(lessonId);
  const nextLessonData = getNextLesson(lessonId);

  if (!lesson) {
    return (
      <div className="lesson-view error-view">
        <h2>Lesson not found</h2>
        <button className="primary-btn" onClick={onBack}>
          Go Back
        </button>
      </div>
    );
  }

  const handleToggleComplete = () => {
    if (isCompleted) {
      uncompleteLesson(lessonId);
    } else {
      completeLesson(lessonId);
    }
  };

  const handleNextLesson = () => {
    if (nextLessonData) {
      onNavigateToLesson(nextLessonData.id);
    }
  };

  return (
    <div className="lesson-view">
      {/* Lesson Header */}
      <div className="lesson-header">
        <span className="lesson-level-badge">Level {lesson.levelNumber}</span>
        <h1 className="lesson-title">{lesson.title}</h1>
        <p className="lesson-description">{lesson.description}</p>
      </div>

      {/* Video Section */}
      {lesson.videos.length > 0 && (
        <section className="lesson-section video-section">
          <h2 className="section-heading">
            <span className="section-icon">🎬</span>
            Watch & Learn
          </h2>

          {lesson.videos.length > 1 && (
            <div className="video-tabs">
              {lesson.videos.map((video, index) => (
                <button
                  key={video.id}
                  className={`video-tab ${index === activeVideoIndex ? 'active' : ''}`}
                  onClick={() => setActiveVideoIndex(index)}
                >
                  Video {index + 1}
                </button>
              ))}
            </div>
          )}

          <YouTubeEmbed
            videoId={lesson.videos[activeVideoIndex].id}
            title={lesson.videos[activeVideoIndex].title}
          />

          <p className="video-title">{lesson.videos[activeVideoIndex].title}</p>
        </section>
      )}

      {/* Exercises Section */}
      {lesson.exercises.length > 0 && (
        <section className="lesson-section exercises-section">
          <h2 className="section-heading">
            <span className="section-icon">💪</span>
            Practice Time!
          </h2>

          <div className="exercises-list">
            {lesson.exercises.map((exercise, index) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                number={index + 1}
              />
            ))}
          </div>
        </section>
      )}

      {/* Completion Section */}
      <section className="lesson-section completion-section">
        <div className="completion-card">
          <div className="completion-header">
            <span className="completion-icon">
              {isCompleted ? '🌟' : '📝'}
            </span>
            <h3>
              {isCompleted
                ? 'Great job! Lesson completed!'
                : 'Finished practicing?'}
            </h3>
          </div>

          <button
            className={`complete-btn ${isCompleted ? 'completed' : ''}`}
            onClick={handleToggleComplete}
          >
            {isCompleted ? (
              <>
                <span className="check-icon">✓</span>
                Completed! (Click to undo)
              </>
            ) : (
              <>
                Mark as Complete
                <span className="star-icon">⭐</span>
              </>
            )}
          </button>

          {nextLessonData && (
            <button className="next-lesson-btn" onClick={handleNextLesson}>
              Next Lesson: {nextLessonData.title}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default LessonView;
