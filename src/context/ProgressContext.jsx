/**
 * Progress Context
 * Provides global state management for lesson progress throughout the app
 */

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  loadProgress,
  saveProgress,
  markLessonComplete as storageMarkComplete,
  markLessonIncomplete as storageMarkIncomplete,
  resetProgress as storageResetProgress
} from '../utils/storage';
import {
  getOverallProgress,
  getLevelProgress,
  isLevelUnlocked,
  isLevelCompleted,
  getProgressStats,
  getLevelProgressDetails,
  getNextLesson
} from '../utils/progress';

// Create the context
const ProgressContext = createContext(null);

/**
 * Progress Provider Component
 * Wraps the app and provides progress state and actions
 */
export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => loadProgress());
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress on mount
  useEffect(() => {
    const loaded = loadProgress();
    setProgress(loaded);
    setIsLoaded(true);
  }, []);

  // Save progress whenever it changes
  useEffect(() => {
    if (isLoaded) {
      saveProgress(progress);
    }
  }, [progress, isLoaded]);

  // Mark a lesson as complete
  const completeLesson = useCallback((lessonId) => {
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) {
        return prev;
      }
      const updated = storageMarkComplete(lessonId);
      return { ...updated };
    });
  }, []);

  // Mark a lesson as incomplete
  const uncompleteLesson = useCallback((lessonId) => {
    setProgress(prev => {
      if (!prev.completedLessons.includes(lessonId)) {
        return prev;
      }
      const updated = storageMarkIncomplete(lessonId);
      return { ...updated };
    });
  }, []);

  // Toggle lesson completion
  const toggleLessonComplete = useCallback((lessonId) => {
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) {
        return storageMarkIncomplete(lessonId);
      }
      return storageMarkComplete(lessonId);
    });
  }, []);

  // Reset all progress
  const resetAllProgress = useCallback(() => {
    const fresh = storageResetProgress();
    setProgress(fresh);
  }, []);

  // Check if a specific lesson is completed
  const isLessonCompleted = useCallback((lessonId) => {
    return progress.completedLessons.includes(lessonId);
  }, [progress.completedLessons]);

  // Get progress for a specific level
  const getLevelProgressValue = useCallback((levelId) => {
    return getLevelProgress(levelId, progress.completedLessons);
  }, [progress.completedLessons]);

  // Check if a level is unlocked
  const checkLevelUnlocked = useCallback((levelId) => {
    return isLevelUnlocked(levelId, progress.completedLessons);
  }, [progress.completedLessons]);

  // Check if a level is completed
  const checkLevelCompleted = useCallback((levelId) => {
    return isLevelCompleted(levelId, progress.completedLessons);
  }, [progress.completedLessons]);

  // Get overall progress percentage
  const overallProgress = getOverallProgress(progress.completedLessons);

  // Get detailed stats
  const stats = getProgressStats(progress.completedLessons);

  // Get all levels with their progress details
  const levelsWithProgress = getLevelProgressDetails(progress.completedLessons);

  // Get the next recommended lesson
  const nextLesson = getNextLesson(progress.completedLessons);

  const value = {
    // State
    progress,
    completedLessons: progress.completedLessons,
    overallProgress,
    stats,
    levelsWithProgress,
    nextLesson,
    isLoaded,

    // Actions
    completeLesson,
    uncompleteLesson,
    toggleLessonComplete,
    resetAllProgress,

    // Queries
    isLessonCompleted,
    getLevelProgress: getLevelProgressValue,
    isLevelUnlocked: checkLevelUnlocked,
    isLevelCompleted: checkLevelCompleted
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

/**
 * Custom hook to use the progress context
 * Throws an error if used outside of ProgressProvider
 */
export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}

export default ProgressContext;
