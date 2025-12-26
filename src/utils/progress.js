/**
 * Progress Calculation Utilities
 * Works with curriculum data to determine unlocked levels and progress percentages
 */

import { curriculum, getTotalLessonCount } from '../data/curriculum';

/**
 * Calculate the completion percentage for a specific level
 */
export const getLevelProgress = (levelId, completedLessons) => {
  const level = curriculum.find(l => l.id === levelId);
  if (!level) return 0;

  const levelLessonIds = level.lessons.map(lesson => lesson.id);
  const completedInLevel = levelLessonIds.filter(id =>
    completedLessons.includes(id)
  ).length;

  return Math.round((completedInLevel / levelLessonIds.length) * 100);
};

/**
 * Calculate overall progress percentage across all levels
 */
export const getOverallProgress = (completedLessons) => {
  const totalLessons = getTotalLessonCount();
  if (totalLessons === 0) return 0;
  return Math.round((completedLessons.length / totalLessons) * 100);
};

/**
 * Check if a level is completed (all lessons done)
 */
export const isLevelCompleted = (levelId, completedLessons) => {
  return getLevelProgress(levelId, completedLessons) === 100;
};

/**
 * Check if a level is unlocked
 * A level is unlocked if:
 * - It's the first level (level-1)
 * - The previous level is completed
 */
export const isLevelUnlocked = (levelId, completedLessons) => {
  const levelIndex = curriculum.findIndex(l => l.id === levelId);

  // First level is always unlocked
  if (levelIndex === 0) return true;

  // Check if previous level is completed
  const previousLevel = curriculum[levelIndex - 1];
  return isLevelCompleted(previousLevel.id, completedLessons);
};

/**
 * Get the current unlocked level (highest unlocked but not completed)
 */
export const getCurrentUnlockedLevel = (completedLessons) => {
  for (let i = curriculum.length - 1; i >= 0; i--) {
    const level = curriculum[i];
    if (isLevelUnlocked(level.id, completedLessons)) {
      // Return this level if it's not completed, or if it's the last level
      if (!isLevelCompleted(level.id, completedLessons) || i === curriculum.length - 1) {
        return level;
      }
    }
  }
  return curriculum[0];
};

/**
 * Get the next incomplete lesson in a level
 */
export const getNextIncompleteLessonInLevel = (levelId, completedLessons) => {
  const level = curriculum.find(l => l.id === levelId);
  if (!level) return null;

  return level.lessons.find(lesson => !completedLessons.includes(lesson.id)) || null;
};

/**
 * Get the next lesson to work on (globally)
 */
export const getNextLesson = (completedLessons) => {
  for (const level of curriculum) {
    if (!isLevelUnlocked(level.id, completedLessons)) {
      continue;
    }
    const nextLesson = getNextIncompleteLessonInLevel(level.id, completedLessons);
    if (nextLesson) {
      return {
        ...nextLesson,
        levelId: level.id,
        levelNumber: level.number
      };
    }
  }
  return null;
};

/**
 * Get progress stats for display
 */
export const getProgressStats = (completedLessons) => {
  const totalLessons = getTotalLessonCount();
  const completedCount = completedLessons.length;
  const percentage = getOverallProgress(completedLessons);

  const unlockedLevels = curriculum.filter(level =>
    isLevelUnlocked(level.id, completedLessons)
  ).length;

  const completedLevels = curriculum.filter(level =>
    isLevelCompleted(level.id, completedLessons)
  ).length;

  return {
    totalLessons,
    completedCount,
    percentage,
    unlockedLevels,
    completedLevels,
    totalLevels: curriculum.length
  };
};

/**
 * Get detailed progress for each level
 */
export const getLevelProgressDetails = (completedLessons) => {
  return curriculum.map(level => ({
    ...level,
    progress: getLevelProgress(level.id, completedLessons),
    isUnlocked: isLevelUnlocked(level.id, completedLessons),
    isCompleted: isLevelCompleted(level.id, completedLessons),
    completedLessonCount: level.lessons.filter(lesson =>
      completedLessons.includes(lesson.id)
    ).length,
    totalLessonCount: level.lessons.length
  }));
};
