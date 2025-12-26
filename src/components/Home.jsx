/**
 * Home Component
 * Displays all levels and the user's overall progress
 */

import { useProgress } from '../context/ProgressContext';
import LevelCard from './LevelCard';
import WelcomeBanner from './WelcomeBanner';

function Home({ onSelectLevel, onSelectLesson }) {
  const { levelsWithProgress, nextLesson, stats } = useProgress();

  return (
    <div className="home">
      <WelcomeBanner
        stats={stats}
        nextLesson={nextLesson}
        onStartLesson={onSelectLesson}
      />

      <section className="levels-section">
        <h2 className="section-title">Your Learning Journey</h2>
        <div className="levels-grid">
          {levelsWithProgress.map((level) => (
            <LevelCard
              key={level.id}
              level={level}
              onClick={() => onSelectLevel(level.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
