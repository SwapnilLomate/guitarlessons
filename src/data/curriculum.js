/**
 * Guitar Lessons Curriculum Data
 *
 * Structure:
 * - Levels contain multiple lessons
 * - Each lesson has videos, exercises, and completion tracking
 * - Levels unlock sequentially based on completion
 */

export const curriculum = [
  {
    id: 'level-1',
    number: 1,
    title: 'Guitar Basics',
    description: 'Learn about your guitar and its parts!',
    icon: '🎸',
    color: '#10b981', // emerald
    lessons: [
      {
        id: 'lesson-1-1',
        title: 'Meet Your Guitar!',
        description: 'Learn the names of all the guitar parts. Your guitar has a body, neck, and head - just like you!',
        videos: [
          {
            id: 'BBz-Jyr23M4',
            title: 'Parts of the Guitar for Kids'
          }
        ],
        exercises: [
          {
            id: 'ex-1-1-1',
            title: 'Point and Name',
            instruction: 'Point to each part of your guitar and say its name out loud: Body, Neck, Head, Tuning Pegs, Sound Hole, Bridge, Frets!'
          },
          {
            id: 'ex-1-1-2',
            title: 'Guitar Drawing',
            instruction: 'Draw a picture of your guitar and label all the parts you learned!'
          }
        ]
      },
      {
        id: 'lesson-1-2',
        title: 'The Six Strings',
        description: 'Your guitar has 6 strings! Each one makes a different sound. Let\'s learn their names!',
        videos: [
          {
            id: 'jJxHiLWvKhE',
            title: 'Guitar String Names for Beginners'
          }
        ],
        exercises: [
          {
            id: 'ex-1-2-1',
            title: 'String Memory Game',
            instruction: 'Remember: E-A-D-G-B-E! Say it like "Eddie Ate Dynamite Good Bye Eddie!" Repeat 5 times!'
          },
          {
            id: 'ex-1-2-2',
            title: 'Pluck Each String',
            instruction: 'Gently pluck each string from thickest to thinnest. Can you hear how different they sound?'
          }
        ]
      },
      {
        id: 'lesson-1-3',
        title: 'High and Low Sounds',
        description: 'Some strings make low rumbling sounds, others make high squeaky sounds. Let\'s explore!',
        videos: [
          {
            id: 'D5cZjGPwLPc',
            title: 'High and Low Notes on Guitar'
          }
        ],
        exercises: [
          {
            id: 'ex-1-3-1',
            title: 'Sound Safari',
            instruction: 'Pluck the thickest string (low E) - that\'s a LOW sound like a bear growling! Now pluck the thinnest string (high E) - that\'s HIGH like a bird singing!'
          },
          {
            id: 'ex-1-3-2',
            title: 'High or Low?',
            instruction: 'Have someone pluck a string while you close your eyes. Can you guess if it\'s a high or low sound?'
          }
        ]
      }
    ]
  },
  {
    id: 'level-2',
    number: 2,
    title: 'Holding & Tuning',
    description: 'Hold your guitar like a pro and make it sound great!',
    icon: '🎵',
    color: '#3b82f6', // blue
    lessons: [
      {
        id: 'lesson-2-1',
        title: 'How to Hold Your Guitar',
        description: 'Sit up straight and get comfy! There\'s a special way to hold your guitar that makes playing easier.',
        videos: [
          {
            id: 'z5aBXe5MdaY',
            title: 'How to Hold a Guitar for Kids'
          }
        ],
        exercises: [
          {
            id: 'ex-2-1-1',
            title: 'Posture Check',
            instruction: 'Sit on a chair with your feet flat on the floor. Rest the guitar on your right leg (or left if you\'re left-handed). Keep your back straight like a superhero!'
          },
          {
            id: 'ex-2-1-2',
            title: '5-Minute Hold',
            instruction: 'Practice holding your guitar correctly for 5 minutes while watching your favorite show. No slouching!'
          }
        ]
      },
      {
        id: 'lesson-2-2',
        title: 'Your Strumming Hand',
        description: 'Your right hand (or left for lefties) does the strumming. Let\'s learn where to put it!',
        videos: [
          {
            id: 'HG4xrIDVRck',
            title: 'Basic Strumming for Kids'
          }
        ],
        exercises: [
          {
            id: 'ex-2-2-1',
            title: 'Air Strum',
            instruction: 'Without touching the strings, practice moving your hand up and down over the sound hole. Keep your wrist loose and floppy like a jellyfish!'
          },
          {
            id: 'ex-2-2-2',
            title: 'Gentle Strum',
            instruction: 'Now lightly brush your thumb across all the strings from top to bottom. Do this 10 times slowly.'
          }
        ]
      },
      {
        id: 'lesson-2-3',
        title: 'Using a Tuner',
        description: 'A tuner helps make sure your guitar sounds perfect! Let\'s learn how to use one.',
        videos: [
          {
            id: 'jMRzgZS_mbQ',
            title: 'How to Tune a Guitar for Beginners'
          }
        ],
        exercises: [
          {
            id: 'ex-2-3-1',
            title: 'Tuner Time',
            instruction: 'Ask a grown-up to help you download a free guitar tuner app. Pluck each string and see the name appear on the screen!'
          },
          {
            id: 'ex-2-3-2',
            title: 'Match the Green',
            instruction: 'With help from an adult, try to tune one string until the tuner shows green. Take your time!'
          }
        ]
      }
    ]
  },
  {
    id: 'level-3',
    number: 3,
    title: 'Finger Exercises',
    description: 'Build strong fingers for playing awesome guitar!',
    icon: '💪',
    color: '#8b5cf6', // violet
    lessons: [
      {
        id: 'lesson-3-1',
        title: 'Meet Your Fretting Hand',
        description: 'Your left hand (or right for lefties) presses the strings to make different notes. Let\'s get those fingers ready!',
        videos: [
          {
            id: 'k6L2dCpZhZ8',
            title: 'Left Hand Position for Guitar Beginners'
          }
        ],
        exercises: [
          {
            id: 'ex-3-1-1',
            title: 'Finger Numbers',
            instruction: 'Guitar players number their fingers: Pointer=1, Middle=2, Ring=3, Pinky=4. Wiggle each finger when you say its number!'
          },
          {
            id: 'ex-3-1-2',
            title: 'Spider Fingers',
            instruction: 'Put your fingertips on a table and lift each finger one at a time, like a spider walking. Do this 10 times!'
          }
        ]
      },
      {
        id: 'lesson-3-2',
        title: 'Pressing Strings',
        description: 'Press down on the strings to make clear sounds. Use your fingertips, not the flat part!',
        videos: [
          {
            id: 'F5Y6kDJfbBs',
            title: 'How to Press Guitar Strings Properly'
          }
        ],
        exercises: [
          {
            id: 'ex-3-2-1',
            title: 'One Finger Press',
            instruction: 'Use your pointer finger to press the thinnest string behind the first fret. Pluck it! Does it sound clear or buzzy? Adjust until it\'s clear!'
          },
          {
            id: 'ex-3-2-2',
            title: 'Finger March',
            instruction: 'Press frets 1, 2, 3, 4 on the first string using fingers 1, 2, 3, 4. March up the fretboard like little soldiers!'
          }
        ]
      },
      {
        id: 'lesson-3-3',
        title: 'The Chromatic Exercise',
        description: 'This is the most important exercise for guitarists! It makes your fingers strong and fast.',
        videos: [
          {
            id: 'FoMfwAxMUdo',
            title: 'Easy Chromatic Exercise for Kids'
          }
        ],
        exercises: [
          {
            id: 'ex-3-3-1',
            title: 'Caterpillar Crawl',
            instruction: 'On the first string: play fret 1 with finger 1, then 2 with 2, then 3 with 3, then 4 with 4. Move to the next string and repeat. Crawl like a caterpillar down all 6 strings!'
          },
          {
            id: 'ex-3-3-2',
            title: 'Daily Practice',
            instruction: 'Do the caterpillar crawl exercise 3 times every day. Time yourself - can you get faster each day?'
          }
        ]
      },
      {
        id: 'lesson-3-4',
        title: 'Your First Chord: E Minor',
        description: 'A chord is when you play multiple strings together. E minor is the easiest chord - you only need 2 fingers!',
        videos: [
          {
            id: 'MwyspNp9rf4',
            title: 'E Minor Chord for Beginners'
          }
        ],
        exercises: [
          {
            id: 'ex-3-4-1',
            title: 'E Minor Shape',
            instruction: 'Put finger 2 on the 2nd fret of the A string (5th string). Put finger 3 on the 2nd fret of the D string (4th string). Strum all strings!'
          },
          {
            id: 'ex-3-4-2',
            title: 'Chord Challenge',
            instruction: 'Practice making the E minor chord shape 10 times. Each time, lift your fingers off and put them back. Strum to check it sounds good!'
          }
        ]
      }
    ]
  },
  {
    id: 'level-4',
    number: 4,
    title: 'Simple Songs',
    description: 'Play your first real songs! Your friends will be amazed!',
    icon: '🎶',
    color: '#f59e0b', // amber
    lessons: [
      {
        id: 'lesson-4-1',
        title: 'Smoke on the Water',
        description: 'This famous rock riff uses just one finger! It\'s one of the most recognizable guitar sounds ever.',
        videos: [
          {
            id: 'ikVPLvpIxS4',
            title: 'Smoke on the Water Easy Guitar Lesson'
          }
        ],
        exercises: [
          {
            id: 'ex-4-1-1',
            title: 'Learn the Riff',
            instruction: 'Play these power chord shapes on the D and G strings: 0-0, 3-3, 5-5, 0-0, 3-3, 6-6-5-5, 0-0, 3-3, 5-5, 3-3, 0-0. Go slow!'
          },
          {
            id: 'ex-4-1-2',
            title: 'Rock Star Practice',
            instruction: 'Practice the riff until you can play it 3 times in a row without stopping. Then try it with the video!'
          }
        ]
      },
      {
        id: 'lesson-4-2',
        title: 'Seven Nation Army',
        description: 'Another awesome rock song with a super simple bassline! Everyone knows this tune.',
        videos: [
          {
            id: 'rNw1IW8o4zQ',
            title: 'Seven Nation Army Easy Guitar Tutorial'
          }
        ],
        exercises: [
          {
            id: 'ex-4-2-1',
            title: 'Learn the Bass Line',
            instruction: 'On the low E string, play these frets in order: 7-7-10-7-5-3-2. Repeat this pattern!'
          },
          {
            id: 'ex-4-2-2',
            title: 'Rhythm Practice',
            instruction: 'Play the pattern while counting: 1-and-2-and-3-and-4. Match the rhythm of the original song!'
          }
        ]
      },
      {
        id: 'lesson-4-3',
        title: 'Happy Birthday',
        description: 'Learn to play Happy Birthday and be the star of every birthday party!',
        videos: [
          {
            id: 's38V54VQNWM',
            title: 'Happy Birthday Guitar Tutorial for Kids'
          }
        ],
        exercises: [
          {
            id: 'ex-4-3-1',
            title: 'Melody Practice',
            instruction: 'Learn the Happy Birthday melody one line at a time. Start with just "Happy Birthday to you" before adding more.'
          },
          {
            id: 'ex-4-3-2',
            title: 'Sing Along',
            instruction: 'Play the melody while singing the words. This helps you remember where you are in the song!'
          }
        ]
      },
      {
        id: 'lesson-4-4',
        title: 'Twinkle Twinkle Little Star',
        description: 'A beautiful classic song that helps you practice moving between strings!',
        videos: [
          {
            id: 'x6r3ShDnn6A',
            title: 'Twinkle Twinkle Little Star Guitar Lesson'
          }
        ],
        exercises: [
          {
            id: 'ex-4-4-1',
            title: 'Note by Note',
            instruction: 'Learn the melody using single notes. Start slow and speed up as you get better!'
          },
          {
            id: 'ex-4-4-2',
            title: 'Memory Challenge',
            instruction: 'Try to play the whole song without looking at any notes. How much can you remember?'
          }
        ]
      }
    ]
  },
  {
    id: 'level-5',
    number: 5,
    title: 'Level Up!',
    description: 'Challenge yourself with harder songs and cool techniques!',
    icon: '⭐',
    color: '#ec4899', // pink
    lessons: [
      {
        id: 'lesson-5-1',
        title: 'Power Chords',
        description: 'Power chords are the secret weapon of rock guitarists! They sound huge and are easy to play.',
        videos: [
          {
            id: 'gJGMdRX-j-Y',
            title: 'Power Chords for Beginners'
          }
        ],
        exercises: [
          {
            id: 'ex-5-1-1',
            title: 'E5 Power Chord',
            instruction: 'Play the open low E string and the 2nd fret of the A string together. That\'s an E5 power chord! Move this shape up the neck for different power chords.'
          },
          {
            id: 'ex-5-1-2',
            title: 'Power Chord Workout',
            instruction: 'Play E5, A5, and D5 power chords in a row. Practice switching between them smoothly.'
          }
        ]
      },
      {
        id: 'lesson-5-2',
        title: 'Strumming Patterns',
        description: 'Real songs use patterns of up and down strums. Let\'s learn some cool ones!',
        videos: [
          {
            id: 'F5p9WySaXNs',
            title: 'Essential Strumming Patterns'
          }
        ],
        exercises: [
          {
            id: 'ex-5-2-1',
            title: 'Down-Down-Up-Up-Down-Up',
            instruction: 'This is the most popular strumming pattern! Practice it slowly while counting: 1-2-and-3-and-4-and. Speed up gradually.'
          },
          {
            id: 'ex-5-2-2',
            title: 'Pattern with Chords',
            instruction: 'Play E minor using the strumming pattern. Then try switching to another chord you know while keeping the pattern going!'
          }
        ]
      },
      {
        id: 'lesson-5-3',
        title: 'Iron Man Riff',
        description: 'Black Sabbath\'s iconic riff is surprisingly simple! Learn to play this heavy metal classic.',
        videos: [
          {
            id: 'PLOPygVcaVE',
            title: 'Iron Man Easy Guitar Lesson'
          }
        ],
        exercises: [
          {
            id: 'ex-5-3-1',
            title: 'Main Riff',
            instruction: 'Learn the main "I am Iron Man" riff using power chords. Start very slowly and build up speed.'
          },
          {
            id: 'ex-5-3-2',
            title: 'Full Intro',
            instruction: 'Once you have the main riff, learn the sliding notes at the beginning. Put it all together!'
          }
        ]
      },
      {
        id: 'lesson-5-4',
        title: 'Your First Full Song',
        description: 'Put everything together! Learn a complete song from start to finish.',
        videos: [
          {
            id: 'Wj3PrZgjmeg',
            title: 'Easy Full Songs for Beginner Guitar'
          }
        ],
        exercises: [
          {
            id: 'ex-5-4-1',
            title: 'Verse Practice',
            instruction: 'Learn the verse section first. Practice it until you can play it 5 times perfectly in a row.'
          },
          {
            id: 'ex-5-4-2',
            title: 'Performance Time',
            instruction: 'Play the entire song from beginning to end without stopping. Even if you make mistakes, keep going like a real performer!'
          }
        ]
      },
      {
        id: 'lesson-5-5',
        title: 'Keep Practicing!',
        description: 'Congratulations on completing all the levels! Here are tips to keep getting better.',
        videos: [
          {
            id: 'qVcA2NMKY5U',
            title: 'Tips for Young Guitar Players'
          }
        ],
        exercises: [
          {
            id: 'ex-5-5-1',
            title: 'Daily Routine',
            instruction: 'Practice for 15-30 minutes every day. It\'s better than practicing 2 hours once a week!'
          },
          {
            id: 'ex-5-5-2',
            title: 'Learn Your Favorite Song',
            instruction: 'Find a YouTube tutorial for a song you love and start learning it. You have all the skills you need!'
          }
        ]
      }
    ]
  }
];

/**
 * Get a flat list of all lessons across all levels
 */
export const getAllLessons = () => {
  return curriculum.flatMap(level =>
    level.lessons.map(lesson => ({
      ...lesson,
      levelId: level.id,
      levelNumber: level.number
    }))
  );
};

/**
 * Get a specific level by ID
 */
export const getLevelById = (levelId) => {
  return curriculum.find(level => level.id === levelId);
};

/**
 * Get a specific lesson by ID
 */
export const getLessonById = (lessonId) => {
  for (const level of curriculum) {
    const lesson = level.lessons.find(l => l.id === lessonId);
    if (lesson) {
      return {
        ...lesson,
        levelId: level.id,
        levelNumber: level.number,
        levelTitle: level.title
      };
    }
  }
  return null;
};

/**
 * Get the next lesson after a given lesson ID
 */
export const getNextLesson = (currentLessonId) => {
  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
  if (currentIndex >= 0 && currentIndex < allLessons.length - 1) {
    return allLessons[currentIndex + 1];
  }
  return null;
};

/**
 * Get total number of lessons
 */
export const getTotalLessonCount = () => {
  return curriculum.reduce((total, level) => total + level.lessons.length, 0);
};
