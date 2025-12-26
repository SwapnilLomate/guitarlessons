/**
 * Main App Component
 * Handles routing between different views using hash-based navigation
 */

import { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import Header from './Header';
import Home from './Home';
import LevelView from './LevelView';
import LessonView from './LessonView';

/**
 * Simple hash-based router
 * Routes:
 * - #/ or #/home - Home page with all levels
 * - #/level/:levelId - View lessons in a level
 * - #/lesson/:lessonId - View a specific lesson
 */
function parseRoute(hash) {
  const path = hash.replace('#', '') || '/';

  if (path === '/' || path === '/home') {
    return { view: 'home', params: {} };
  }

  const levelMatch = path.match(/^\/level\/(.+)$/);
  if (levelMatch) {
    return { view: 'level', params: { levelId: levelMatch[1] } };
  }

  const lessonMatch = path.match(/^\/lesson\/(.+)$/);
  if (lessonMatch) {
    return { view: 'lesson', params: { lessonId: lessonMatch[1] } };
  }

  return { view: 'home', params: {} };
}

function App() {
  const [route, setRoute] = useState(() => parseRoute(window.location.hash));
  const { isLoaded } = useProgress();

  // Handle hash changes for navigation
  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseRoute(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigation helper functions
  const navigate = (path) => {
    window.location.hash = path;
  };

  const goHome = () => navigate('/');
  const goToLevel = (levelId) => navigate(`/level/${levelId}`);
  const goToLesson = (lessonId) => navigate(`/lesson/${lessonId}`);
  const goBack = () => window.history.back();

  // Show loading state while progress loads
  if (!isLoaded) {
    return (
      <div className="app">
        <div className="loading-screen">
          <div className="loading-spinner"></div>
          <p>Loading your progress...</p>
        </div>
      </div>
    );
  }

  // Render the appropriate view
  const renderView = () => {
    switch (route.view) {
      case 'level':
        return (
          <LevelView
            levelId={route.params.levelId}
            onBack={goHome}
            onSelectLesson={goToLesson}
          />
        );
      case 'lesson':
        return (
          <LessonView
            lessonId={route.params.lessonId}
            onBack={goBack}
            onNavigateToLesson={goToLesson}
          />
        );
      case 'home':
      default:
        return (
          <Home
            onSelectLevel={goToLevel}
            onSelectLesson={goToLesson}
          />
        );
    }
  };

  return (
    <div className="app">
      <Header
        showBack={route.view !== 'home'}
        onBack={goBack}
        onHome={goHome}
      />
      <main className="main-content">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
