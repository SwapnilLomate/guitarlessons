/**
 * Lesson Card Component
 * Displays a single lesson preview with completion status
 */

function LessonCard({ lesson, lessonNumber, levelColor, isCompleted, onClick }) {
  const { title, description, videos, exercises } = lesson;

  return (
    <button
      className={`lesson-card ${isCompleted ? 'lesson-completed' : ''}`}
      onClick={onClick}
      style={{ '--level-color': levelColor }}
    >
      <div className="lesson-number-badge">
        {isCompleted ? (
          <span className="check-icon">✓</span>
        ) : (
          <span>{lessonNumber}</span>
        )}
      </div>

      <div className="lesson-card-content">
        <h3 className="lesson-card-title">{title}</h3>
        <p className="lesson-card-description">{description}</p>

        <div className="lesson-card-meta">
          {videos.length > 0 && (
            <span className="meta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
              {videos.length} {videos.length === 1 ? 'video' : 'videos'}
            </span>
          )}
          {exercises.length > 0 && (
            <span className="meta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              {exercises.length} {exercises.length === 1 ? 'exercise' : 'exercises'}
            </span>
          )}
        </div>
      </div>

      <div className="lesson-card-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </button>
  );
}

export default LessonCard;
