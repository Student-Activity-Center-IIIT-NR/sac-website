# SAC IIIT Naya Raipur Website

Official website for the Student Activity Center (SAC) at IIIT Naya Raipur. This platform showcases all student clubs, events, team members, and activities happening at the institute.

## About SAC

SAC is a student body established in 2018 that aims to support, develop and promote student activities at IIIT Naya Raipur. The center manages various clubs across different categories including technical, cultural, sports, and media.

## Tech Stack

- **Framework:** Next.js 15.4.6 (React 18.2.0)
- **Language:** TypeScript 4.8.4
- **UI Library:** Material-UI (MUI) v5.10.10
- **Styling:** Tailwind CSS 4.1.13, Emotion (CSS-in-JS)
- **Additional Libraries:**
  - react-player - Video playback
  - react-toastify - Notifications
  - embla-carousel-react - Carousel/slider functionality
  - react-intersection-observer - Scroll animations
  - lucide-react - Icons

## Features

- **Homepage:** Overview of SAC with news, event calendar, and contact information
- **Club Pages:** Dedicated pages for 20+ clubs across 4 categories:
  - Technical Clubs (7): AI/ML, BIS, CipherCell, COMET, IIC, Inquizitive, TSOC
  - Cultural Clubs (8): C2C, Capriccio, CDT, Igniters, Indradhanush, MUN, TDB, YTC
  - Media Clubs (4): Design, PR, Shutterbug, Website Team
  - Sports: Comprehensive sports overview
- **Events & Calendar:** Interactive event calendar with upcoming activities
- **Gallery:** Photo galleries for club events and major institutional events
- **Team Pages:** SAC team members organized by year (2018-2026)
- **Campus Tour:** Virtual campus tour feature
- **Get Pass:** Student pass management system

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Student-Activity-Center-IIIT-NR/sac-website.git
cd sac-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
```

The site is configured for static export and GitHub Pages deployment.

## Project Structure

```
sac-website/
├── assets/              # Static assets (images, backgrounds, team photos)
├── components/          # Reusable UI components
│   ├── common/         # Shared components
│   ├── EventCalendar/  # Calendar functionality
│   ├── Header/         # Header component
│   ├── NavBar/         # Navigation bar
│   └── footer/         # Footer component
├── data/               # All content data (TypeScript files)
│   ├── Crews/         # Club member data
│   ├── EventsAndGallery/ # Event and gallery data
│   ├── TeamData.tsx   # SAC team data
│   └── NewsData.ts    # News/announcements
├── features/           # Feature-specific components by page
│   ├── club/          # Club-related components
│   ├── home/          # Homepage sections
│   ├── events/        # Event components
│   ├── gallery/       # Gallery components
│   └── team/          # Team components
├── layouts/            # Page layout wrappers
├── pages/             # Next.js pages (auto-routed)
│   ├── clubs/        # Club pages by category
│   ├── events/       # Event pages
│   ├── gallery/      # Gallery pages
│   └── index.tsx     # Homepage
├── public/            # Publicly accessible files
├── styles/            # Global CSS and style modules
├── themes/            # MUI theme configurations
└── docs/              # Project documentation
```

## Directory Structure Guidelines

The directory structure should be followed strictly. Key principles:

- **assets/**: Optimized assets not publicly accessible (preferred over public/)
- **components/**: Common reusable components sorted by type
- **features/**: Page-specific components and assets
- **data/**: Centralized content management in TypeScript files
- **public/**: Only for publicly accessible files (favicon, PDFs, etc.)

## Adding Content

### Adding a New Club

1. Add club member data to appropriate file in `data/Crews/`
2. Add club assets (logo, backgrounds) to `assets/[category]_clubs_bg/`
3. Create new page in `pages/clubs/[category]/clubname.tsx`
4. Add gallery images to `assets/club_event_pics/[clubname]/`
5. Update `data/EventsAndGallery/ClubGalleryData.ts`

### Adding News/Events

- **News:** Update `data/NewsData.ts`
- **Events:** Update `data/EventsAndGallery/EventCalendarData.ts`

### Adding Team Members

Update `data/TeamData.tsx` with new team member information for the respective year.

## Contribution Guidelines

**Important:** You need to read and follow the contribution guidelines before submitting PRs.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines including:
- Directory structure rules
- Component creation standards
- Commit guidelines
- Code style requirements

## Contributors

<a href="https://github.com/Student-Activity-Center-IIIT-NR/sac-website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Student-Activity-Center-IIIT-NR/sac-website" />
</a>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
