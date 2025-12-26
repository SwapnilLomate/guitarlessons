/**
 * Progress Bar Component
 * Visual representation of completion percentage
 */

function ProgressBar({ progress, label, size = 'medium', showPercentage = true }) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={`progress-bar-container progress-bar-${size}`}>
      {label && <span className="progress-label">{label}</span>}
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${clampedProgress}%` }}
          role="progressbar"
          aria-valuenow={clampedProgress}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={label || 'Progress'}
        >
          {size !== 'small' && showPercentage && clampedProgress > 15 && (
            <span className="progress-bar-text">{clampedProgress}%</span>
          )}
        </div>
      </div>
      {size === 'small' && showPercentage && (
        <span className="progress-percentage">{clampedProgress}%</span>
      )}
    </div>
  );
}

export default ProgressBar;
