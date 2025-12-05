# Project Architecture

This document provides a high-level overview of the SAC website architecture, design patterns, and technical decisions.

## Tech Stack

### Core Framework
- **Next.js 15.4.6** - React framework with static site generation
- **React 18.2.0** - UI library
- **TypeScript 4.8.4** - Type safety and developer experience

### UI & Styling
- **Material-UI (MUI) v5.10.10** - Component library
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Emotion** - CSS-in-JS for MUI styling

### Additional Libraries
- **react-player** - Video playback functionality
- **react-toastify** - Notification system
- **embla-carousel-react** - Image carousels and sliders
- **react-intersection-observer** - Scroll-based animations
- **lucide-react** - Icon library
- **sharp** - Image optimization (build-time)

## Architecture Patterns

### 1. Feature-Based Architecture

The project is organized by features/pages rather than technical layers:

```
features/
├── club/          # All club-related components
├── home/          # Homepage sections
├── events/        # Event components
├── gallery/       # Gallery components
├── team/          # Team components
└── ...
```

**Benefits:**
- Easy to locate all code related to a feature
- Better code organization for large applications
- Encapsulation of feature-specific logic

### 2. Data-Driven Components

Components are separated from data:
- **Components** handle presentation and UI logic
- **Data files** contain all content
- **Assets** stored separately for optimization

**Example:**
```
Component (Crew.tsx) → Data (TechnicalClubCrew.ts) → Assets (images)
```

See [DATA_ARCHITECTURE.md](./DATA_ARCHITECTURE.md) for details.

### 3. Layout System

Layouts wrap pages with common elements:

```tsx
BaseLayout (Header + NavBar + Footer)
  ├── ClubsLayout (extends BaseLayout)
  ├── EventsLayout (extends BaseLayout)
  └── TeamLayout (extends BaseLayout)
```

### 4. Static Site Generation

The site is configured for static export:
- No server-side rendering at runtime
- All pages pre-generated at build time
- Deployed to GitHub Pages as static files

**Configuration:**
```js
// next.config.js
output: "export"
images: { unoptimized: true }
```

## Directory Structure

```
sac-website/
├── assets/             # Static assets (optimized by bundler)
├── components/         # Global reusable components
├── data/              # All content data (TypeScript)
├── features/          # Feature-specific components
├── layouts/           # Page layout wrappers
├── pages/             # Next.js pages (auto-routed)
├── public/            # Publicly accessible files
├── styles/            # Global CSS and modules
├── themes/            # MUI theme configuration
└── docs/              # Project documentation
```

See [CONTRIBUTING.md](../CONTRIBUTING.md) for detailed directory guidelines.

## Routing

Next.js file-based routing:

```
pages/index.tsx              → /
pages/clubs/technical/aiml.tsx → /clubs/technical/aiml
pages/events/index.tsx       → /events
pages/gallery/index.tsx      → /gallery
```

## Component Hierarchy

### Homepage Structure
```
pages/index.tsx
└── BaseLayout
    ├── Header
    ├── NavBar
    ├── SacOverview
    ├── ClubsOverview
    ├── Calendar
    ├── News
    ├── ContactUs
    └── Footer
```

### Club Page Structure
```
pages/clubs/[category]/[club].tsx
└── ClubsLayout (extends BaseLayout)
    ├── [Category]Club (hero section)
    ├── ClubDescription
    ├── ClubEvents (if cultural)
    ├── Crew
    └── Gallery
```

## Styling Approach

### Material-UI Theming
Custom theme in `themes/` directory:
- Color palette
- Typography
- Component overrides
- Responsive breakpoints

### Tailwind CSS
Utility classes for:
- Layout (flexbox, grid)
- Spacing
- Quick styling adjustments

### CSS Modules
Scoped styles for specific components:
```tsx
import styles from './Component.module.css';
<div className={styles.container}>...</div>
```

### Inline Styling (MUI sx prop)
Component-specific styles:
```tsx
<Box sx={{ backgroundColor: '#fff', padding: 2 }}>
```

## State Management

### Current Approach
- **Component State:** `useState` for local state
- **Static Data:** TypeScript files in `data/` directory
- **Props:** Passed down through component tree

### No Global State Management
Currently no Redux, Context API, or state management library because:
- Most content is static
- Limited client-side interactivity
- Simpler maintenance

### Future Considerations
If the app grows, consider:
- **Context API** for theme, user preferences
- **React Query** for API data fetching
- **Zustand** for lightweight global state

## Image Optimization

### Build-Time Optimization
Images imported as modules are optimized by Next.js during build:
```tsx
import clubLogo from 'assets/club_logo.png';
<Image src={clubLogo} alt="Club Logo" />
```

### Asset Organization
- **assets/** - Bundler-optimized images (preferred)
- **public/** - Directly accessible files (favicon, PDFs)

### Static Export Limitation
Image optimization is disabled for static export:
```js
images: { unoptimized: true }
```

## Performance Considerations

### Code Splitting
- Automatic with Next.js
- Each page is a separate bundle
- Dynamic imports for heavy components

### Lazy Loading
- Images loaded as they enter viewport
- Intersection Observer for scroll animations

### Bundle Size
- Tree shaking removes unused code
- MUI components imported individually

## Deployment

### GitHub Pages
- Static export to `out/` directory
- GitHub Actions workflow for CI/CD
- Custom domain support

### Build Process
```bash
npm run build    # Generates static files
npm run export   # (included in build)
```

### Branch Strategy
- `dev` - Development branch
- `main` - Production branch
- `prod/iiitnr` - Current production deployment

## TypeScript Usage

### Type Safety
All files use TypeScript for:
- Component props
- Data structures
- Function signatures
- Better IDE support

### Interfaces
Defined for all data structures:
```typescript
interface CrewProps {
  img: StaticImageData;
  name: string;
  post: string;
}
```

## Accessibility

### Semantic HTML
- Proper heading hierarchy
- Meaningful alt text for images
- ARIA labels where needed

### Keyboard Navigation
- MUI components are keyboard accessible
- Focus management

### Responsive Design
- Mobile-first approach
- MUI breakpoints for responsive layouts

## Browser Support

Target browsers:
- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- ES6+ support required
- No IE11 support

## Development Workflow

### Local Development
```bash
npm install      # Install dependencies
npm run dev      # Start dev server
```

### Code Quality
- TypeScript for type checking
- ESLint for code linting (if configured)
- Prettier for code formatting (if configured)

### Version Control
- Git for version control
- Pull requests for code review
- See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines

## Security

### No Backend
- Static site reduces attack surface
- No server-side vulnerabilities
- No database to secure

### Dependencies
- Regular updates for security patches
- npm audit for vulnerability scanning

### Content Security
- Assets served from same origin
- No user-generated content
- No authentication/authorization needed

## Extensibility

### Adding Features

#### New Page
1. Create page in `pages/`
2. Create components in `features/[page]/`
3. Add data in `data/`
4. Update navigation

#### New Club
1. Add data to `data/Crews/`
2. Add assets to `assets/`
3. Create page in `pages/clubs/[category]/`
4. Update gallery data

#### New Component
1. Create in `components/` or `features/`
2. Define TypeScript interfaces
3. Document in [COMPONENTS.md](./COMPONENTS.md)

## Testing

Currently no testing framework configured.

### Future Testing Strategy
- **Unit Tests:** Jest + React Testing Library
- **E2E Tests:** Playwright or Cypress
- **Visual Regression:** Percy or Chromatic

## Monitoring

### Build-Time Checks
- TypeScript compilation errors
- Build warnings

### Runtime Monitoring
- No analytics currently implemented
- Consider Google Analytics or Plausible for traffic monitoring

## Documentation

All documentation in `docs/`:
- [COMPONENTS.md](./COMPONENTS.md) - Component reference
- [DATA_ARCHITECTURE.md](./DATA_ARCHITECTURE.md) - Data structure guide
- [HOOKS.md](./HOOKS.md) - Hooks documentation
- [ARCHITECTURE.md](./ARCHITECTURE.md) - This file

See [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines.

## Future Improvements

### Potential Enhancements
1. **CMS Integration** - Headless CMS for easier content updates
2. **Search Functionality** - Search across clubs, events, team members
3. **Event RSVP System** - Student event registration
4. **Admin Dashboard** - Web interface for content management
5. **API Integration** - Connect to institutional APIs
6. **Progressive Web App** - Offline support, app-like experience
7. **Multi-language Support** - i18n for regional languages
8. **Dark Mode** - Theme switching (component exists but may not be fully implemented)

### Technical Debt
- Add automated testing
- Implement proper error boundaries
- Add loading states for dynamic content
- Improve accessibility audit scores
- Set up code quality tools (ESLint, Prettier)

---

**Last Updated:** December 2025
**Maintained By:** SAC Website Team, IIIT Naya Raipur
