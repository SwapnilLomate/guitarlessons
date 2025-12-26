# Guitar Lessons for Kids

A mobile-first, progressive web application for teaching guitar to children. Built with React and deployable to GitHub Pages.

## Features

- **Progressive Learning System**: 5 levels with multiple lessons each, unlocking sequentially
- **YouTube Integration**: Embedded educational videos for each lesson
- **Practice Exercises**: Structured exercises with kid-friendly instructions
- **Progress Tracking**: Persistent progress saved to localStorage
- **Mobile-First Design**: Responsive UI optimized for all devices
- **Offline Capable**: Works without internet (except for YouTube videos)

## Project Structure

```
guitarlessons/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   └── favicon.svg             # App icon
├── src/
│   ├── components/             # React components
│   │   ├── App.jsx             # Main app with routing
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Home.jsx            # Home page with levels
│   │   ├── WelcomeBanner.jsx   # Personalized greeting
│   │   ├── LevelCard.jsx       # Level display card
│   │   ├── LevelView.jsx       # Level detail view
│   │   ├── LessonCard.jsx      # Lesson preview card
│   │   ├── LessonView.jsx      # Full lesson view
│   │   ├── YouTubeEmbed.jsx    # Video player component
│   │   ├── ExerciseCard.jsx    # Exercise display
│   │   └── ProgressBar.jsx     # Progress indicator
│   ├── context/
│   │   └── ProgressContext.jsx # Global state management
│   ├── data/
│   │   └── curriculum.js       # Lesson content & structure
│   ├── styles/
│   │   └── index.css           # Global styles
│   ├── utils/
│   │   ├── progress.js         # Progress calculations
│   │   └── storage.js          # localStorage utilities
│   └── main.jsx                # App entry point
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── package.json                # Dependencies & scripts
└── README.md                   # This file
```

## Technology Stack

- **React 18**: UI framework with functional components and hooks
- **Vite**: Fast build tool and development server
- **CSS**: Custom properties, Flexbox, Grid (no CSS framework)
- **localStorage**: Client-side data persistence
- **GitHub Actions**: CI/CD pipeline for deployment

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/guitarlessons.git
   cd guitarlessons
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Deployment

### GitHub Pages (Recommended)

This project includes a GitHub Actions workflow for automatic deployment.

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings > Pages
   - Set Source to "GitHub Actions"

2. **Update the base path** in `vite.config.js`:
   ```javascript
   base: '/your-repo-name/',
   ```

3. **Push to main branch**:
   ```bash
   git push origin main
   ```

The workflow will automatically build and deploy your app to GitHub Pages.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to any static hosting service:
   - Netlify
   - Vercel
   - AWS S3
   - Any web server

## Curriculum Structure

The app includes 5 levels of guitar instruction:

| Level | Title | Lessons | Topics |
|-------|-------|---------|--------|
| 1 | Guitar Basics | 3 | Parts, strings, sounds |
| 2 | Holding & Tuning | 3 | Posture, hand position, tuning |
| 3 | Finger Exercises | 4 | Finger numbers, pressing, chords |
| 4 | Simple Songs | 4 | Classic riffs and melodies |
| 5 | Level Up! | 5 | Power chords, strumming, full songs |

### Customizing Content

Edit `src/data/curriculum.js` to modify:
- Lesson titles and descriptions
- YouTube video IDs
- Practice exercises
- Level structure

Example lesson structure:
```javascript
{
  id: 'lesson-1-1',
  title: 'Meet Your Guitar!',
  description: 'Learn the names of all the guitar parts.',
  videos: [
    {
      id: 'YouTube_Video_ID',
      title: 'Video Title'
    }
  ],
  exercises: [
    {
      id: 'ex-1-1-1',
      title: 'Point and Name',
      instruction: 'Point to each part of your guitar...'
    }
  ]
}
```

## Data Persistence

Progress is stored in the browser's localStorage with the following structure:

```javascript
{
  completedLessons: ['lesson-1-1', 'lesson-1-2'],
  currentLevelId: 'level-1',
  lastVisitedLessonId: 'lesson-1-2',
  startedAt: '2024-01-01T00:00:00.000Z',
  lastActivityAt: '2024-01-02T00:00:00.000Z'
}
```

Storage key: `guitar-lessons-progress`

## Extending the App

### Adding New Levels

1. Add a new level object to the `curriculum` array in `src/data/curriculum.js`
2. Include an `id`, `number`, `title`, `description`, `icon`, `color`, and `lessons` array
3. Levels unlock sequentially when the previous level is 100% complete

### Adding New Components

1. Create component in `src/components/`
2. Follow existing patterns for consistency
3. Import and use in the appropriate parent component

### Styling Guidelines

- Use CSS custom properties defined in `:root`
- Follow mobile-first responsive design
- Use `var(--space-*)` for spacing consistency
- Use `var(--color-*)` for colors
- Add styles to `src/styles/index.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` to check code quality
5. Submit a pull request

## License

MIT License - feel free to use this project for educational purposes.

## Acknowledgments

- YouTube creators who provide educational guitar content
- The React and Vite communities
- All young guitar learners who inspire us to make learning fun!
