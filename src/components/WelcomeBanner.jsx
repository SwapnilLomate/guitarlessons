/**
 * Welcome Banner Component
 * Shows personalized greeting and quick action to continue learning
 */

function WelcomeBanner({ stats, nextLesson, onStartLesson }) {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const getMessage = () => {
    if (stats.completedCount === 0) {
      return "Ready to become a guitar star? Let's start your musical journey!";
    }
    if (stats.percentage === 100) {
      return "Amazing! You've completed all lessons! Keep practicing to become even better!";
    }
    if (stats.percentage >= 75) {
      return "You're almost there! Just a few more lessons to go!";
    }
    if (stats.percentage >= 50) {
      return "Halfway there! You're doing great!";
    }
    if (stats.percentage >= 25) {
      return "Nice progress! Keep up the good work!";
    }
    return "Great start! Let's keep learning!";
  };

  return (
    <section className="welcome-banner">
      <div className="welcome-content">
        <h1 className="welcome-title">
          {getGreeting()}, Guitar Star! <span className="wave">👋</span>
        </h1>
        <p className="welcome-message">{getMessage()}</p>

        <div className="welcome-stats">
          <div className="stat-item">
            <span className="stat-number">{stats.completedCount}</span>
            <span className="stat-label">Lessons Done</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.completedLevels}</span>
            <span className="stat-label">Levels Complete</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.percentage}%</span>
            <span className="stat-label">Total Progress</span>
          </div>
        </div>

        {nextLesson && stats.percentage < 100 && (
          <button
            className="continue-btn"
            onClick={() => onStartLesson(nextLesson.id)}
          >
            {stats.completedCount === 0 ? 'Start Learning' : 'Continue Learning'}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      <div className="welcome-decoration">
        <span className="decoration-emoji">🎸</span>
      </div>
    </section>
  );
}

export default WelcomeBanner;
