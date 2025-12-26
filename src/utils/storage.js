/**
 * LocalStorage Utility Functions
 * Handles all persistence for the guitar lessons app
 */

const STORAGE_KEY = 'guitar-lessons-progress';

/**
 * Default progress state structure
 */
const defaultProgress = {
  completedLessons: [],
  currentLevelId: 'level-1',
  lastVisitedLessonId: null,
  startedAt: null,
  lastActivityAt: null
};

/**
 * Load progress from localStorage
 * Returns default progress if none exists or if data is corrupted
 */
export const loadProgress = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return { ...defaultProgress, startedAt: new Date().toISOString() };
    }
    const parsed = JSON.parse(stored);
    // Merge with defaults to handle any missing fields from older versions
    return { ...defaultProgress, ...parsed };
  } catch (error) {
    console.error('Error loading progress from localStorage:', error);
    return { ...defaultProgress, startedAt: new Date().toISOString() };
  }
};

/**
 * Save progress to localStorage
 */
export const saveProgress = (progress) => {
  try {
    const toSave = {
      ...progress,
      lastActivityAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    return true;
  } catch (error) {
    console.error('Error saving progress to localStorage:', error);
    return false;
  }
};

/**
 * Mark a lesson as completed
 */
export const markLessonComplete = (lessonId) => {
  const progress = loadProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    saveProgress(progress);
  }
  return progress;
};

/**
 * Mark a lesson as incomplete (for toggling)
 */
export const markLessonIncomplete = (lessonId) => {
  const progress = loadProgress();
  progress.completedLessons = progress.completedLessons.filter(id => id !== lessonId);
  saveProgress(progress);
  return progress;
};

/**
 * Check if a lesson is completed
 */
export const isLessonCompleted = (lessonId, progress = null) => {
  const p = progress || loadProgress();
  return p.completedLessons.includes(lessonId);
};

/**
 * Update the current level
 */
export const updateCurrentLevel = (levelId) => {
  const progress = loadProgress();
  progress.currentLevelId = levelId;
  saveProgress(progress);
  return progress;
};

/**
 * Update the last visited lesson
 */
export const updateLastVisitedLesson = (lessonId) => {
  const progress = loadProgress();
  progress.lastVisitedLessonId = lessonId;
  saveProgress(progress);
  return progress;
};

/**
 * Reset all progress (used for starting over)
 */
export const resetProgress = () => {
  const freshProgress = {
    ...defaultProgress,
    startedAt: new Date().toISOString()
  };
  saveProgress(freshProgress);
  return freshProgress;
};

/**
 * Clear all stored data
 */
export const clearStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
};
