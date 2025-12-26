/**
 * Header Component
 * Displays the app title, navigation, and overall progress
 */

import { useProgress } from '../context/ProgressContext';
import ProgressBar from './ProgressBar';

function Header({ showBack, onBack, onHome }) {
  const { overallProgress, stats } = useProgress();

  return (
    <header className="header">
      <div className="header-top">
        {showBack ? (
          <button
            className="header-btn back-btn"
            onClick={onBack}
            aria-label="Go back"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        ) : (
          <div className="header-btn-placeholder"></div>
        )}

        <button className="header-title" onClick={onHome}>
          <span className="header-icon">🎸</span>
          <span className="header-text">Guitar Kids</span>
        </button>

        <div className="header-stats">
          <span className="stats-badge" title={`${stats.completedCount} of ${stats.totalLessons} lessons`}>
            {stats.completedCount}/{stats.totalLessons}
          </span>
        </div>
      </div>

      <div className="header-progress">
        <ProgressBar
          progress={overallProgress}
          label="Overall Progress"
          size="small"
        />
      </div>
    </header>
  );
}

export default Header;
