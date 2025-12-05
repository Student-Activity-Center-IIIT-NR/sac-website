# Data Architecture

This document explains how data is organized and managed in the SAC website. The project follows a data-driven architecture where content is separated from components.

## Overview

All content data is stored in TypeScript files under the `data/` directory. This separation allows:
- Easy content updates without touching component code
- Type safety with TypeScript interfaces
- Centralized data management
- Reusability across components

## Directory Structure

```
data/
├── Crews/                    # Club member/team data
│   ├── CulturalClubCrew.ts
│   ├── TechnicalClubCrew.ts
│   ├── MediaClubCrew.ts
│   └── SportsClubCrew.ts
├── EventsAndGallery/         # Events and gallery data
│   ├── EventCalendarData.ts
│   ├── ClubGalleryData.ts
│   ├── GalleryData.ts
│   └── RecentMajorEventsData.ts
├── TeamData.tsx              # SAC team members by year
└── NewsData.ts               # News and announcements
```

---

## Crew Data

**Location:** `data/Crews/`

### Interface

```typescript
interface CrewProps {
  img: StaticImageData;
  name: string;
  post: string;  // "Club Secretary", "Vice Secretary", "Core Member"
}
```

### Files

#### TechnicalClubCrew.ts
Exports crew data for all technical clubs:
- `inquizitive: CrewProps[]`
- `comet: CrewProps[]`
- `ciphercell: CrewProps[]`
- `bis: CrewProps[]`
- `tsoc: CrewProps[]`
- `aiml: CrewProps[]`

#### CulturalClubCrew.ts
Exports crew data for all cultural clubs:
- `c2c: CrewProps[]` - Cover to Cover
- `capriccio: CrewProps[]`
- `cdt: CrewProps[]`
- `igniters: CrewProps[]`
- `mun: CrewProps[]` - Model United Nations
- `tdb: CrewProps[]`
- `ytc: CrewProps[]`
- `indradhanush: CrewProps[]`

#### MediaClubCrew.ts
Media club team members

#### SportsClubCrew.ts
Sports club team members

### Usage Example

```tsx
import { ciphercell } from 'data/Crews/TechnicalClubCrew';
import Crew from 'features/club/common/Crew';

<Crew props={ciphercell} />
```

### Updating Crew Data

To add/update club members:

1. Open the appropriate crew file (e.g., `TechnicalClubCrew.ts`)
2. Import the member's image from `assets/`
3. Add to the exported array:

```typescript
import newMemberImg from "../../assets/team_25-26/member-name.jpg";

export const clubName: CrewProps[] = [
  {
    img: newMemberImg,
    name: "Member Name",
    post: "Club Secretary"  // or "Vice Secretary", "Core Member"
  },
  // ... other members
];
```

---

## Event & Gallery Data

**Location:** `data/EventsAndGallery/`

### EventCalendarData.ts

Stores all event calendar entries.

**Interface:**
```typescript
interface EventData {
  id: number;
  date: string;        // "YYYY-MM-DD"
  title: string;
  description: string;
  icon?: StaticImageData;
}
```

**Usage:**
```tsx
import { eventsData } from 'data/EventsAndGallery/EventCalendarData';
```

### ClubGalleryData.ts

Club-specific photo galleries.

**Structure:**
```typescript
interface GalleryImage {
  img: StaticImageData;
  alt: string;
}

export const ClubGalleryData = {
  "Ciphercell": [
    { img: image1, alt: "Event description" },
    // ... more images
  ],
  "Comet": [...],
  // ... other clubs
}
```

**Usage:**
```tsx
import { ClubGalleryData } from 'data/EventsAndGallery/ClubGalleryData';
const clubImages = ClubGalleryData["Ciphercell"];
```

### GalleryData.ts

General gallery images not specific to any club.

### RecentMajorEventsData.ts

Data for major institutional events.

**Interface:**
```typescript
interface MajorEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  images: StaticImageData[];
}
```

### Updating Gallery Data

To add new club event photos:

1. Place images in `assets/club_event_pics/[clubname]/`
2. Open `ClubGalleryData.ts`
3. Import and add images:

```typescript
import newEvent1 from "../../assets/club_event_pics/clubname/event1.jpg";

export const ClubGalleryData = {
  "ClubName": [
    { img: newEvent1, alt: "Event description" },
    // ... existing images
  ]
};
```

---

## Team Data

**Location:** `data/TeamData.tsx`

### Structure

SAC team members organized by academic year.

```typescript
interface TeamMember {
  img: StaticImageData;
  name: string;
  position: string;  // "President", "Vice President", "Secretary", etc.
}

interface YearData {
  year: string;      // "2025-26"
  members: TeamMember[];
}

export const TeamData: YearData[] = [
  {
    year: "2025-26",
    members: [...]
  },
  // ... previous years
];
```

### Usage

```tsx
import { TeamData } from 'data/TeamData';

TeamData.map(yearData => (
  <YearSection year={yearData.year}>
    {yearData.members.map(member => (
      <MemberCard {...member} />
    ))}
  </YearSection>
));
```

### Adding New Team Year

1. Add team member photos to `assets/team_25-26/` (or appropriate year)
2. Open `TeamData.tsx`
3. Import images and add new year:

```typescript
import member1 from "../assets/team_25-26/member1.jpg";

export const TeamData: YearData[] = [
  {
    year: "2025-26",
    members: [
      { img: member1, name: "Member Name", position: "President" },
      // ... other members
    ]
  },
  // ... previous years
];
```

---

## News Data

**Location:** `data/NewsData.ts`

### Structure

```typescript
interface NewsItem {
  id: number;
  title: string;
  date: string;       // "DD Month YYYY"
  content: string;
  image?: StaticImageData;
  link?: string;
}

export const NewsData: NewsItem[] = [
  {
    id: 1,
    title: "Event Announcement",
    date: "15 January 2025",
    content: "Description of the news...",
    image: newsImage1,
    link: "/events/event-slug"
  },
  // ... more news items
];
```

### Usage

```tsx
import { NewsData } from 'data/NewsData';

<News data={NewsData} />
```

### Adding News

1. (Optional) Add news image to `assets/`
2. Open `NewsData.ts`
3. Add new entry:

```typescript
import newNewsImg from "../assets/news-image.jpg";

export const NewsData: NewsItem[] = [
  {
    id: NewsData.length + 1,
    title: "New Announcement",
    date: "4 December 2025",
    content: "Description of the announcement...",
    image: newNewsImg,
  },
  // ... existing items
];
```

---

## Asset Organization

Assets are organized by category and purpose:

```
assets/
├── cultural_clubs_bg/       # Cultural club backgrounds and logos
├── technical_clubs_bg/      # Technical club backgrounds and logos
├── media_cell_bg/          # Media club assets
├── team_18-19/             # Team photos by year
├── team_19-20/
├── ... (through team_25-26)
├── club_event_pics/        # Club event galleries
│   ├── Ciphercell/
│   ├── Comet/
│   └── ... (other clubs)
├── major_events_pics/      # Major institutional events
└── recent_club_events/     # Recent event highlights
```

### Asset Naming Conventions

- Club logos: `[clubname]_logo.svg` or `[clubname]_logo.png`
- Backgrounds: `bg_[clubname]_top.svg`, `bg_[clubname]_bottom.svg`
- Team photos: `member-name.jpg` in appropriate year folder
- Event photos: Descriptive names in club folders

---

## Data Flow

```
Data File (TypeScript)
    ↓
Component imports data
    ↓
Component renders using data
    ↓
Page displays content
```

### Example: Club Page Data Flow

1. **Data Definition:** `data/Crews/TechnicalClubCrew.ts`
   ```typescript
   export const ciphercell: CrewProps[] = [...]
   ```

2. **Page Import:** `pages/clubs/technical/ciphercell.tsx`
   ```tsx
   import { ciphercell } from "data/Crews/TechnicalClubCrew";
   ```

3. **Component Usage:**
   ```tsx
   <Crew props={ciphercell} />
   ```

4. **Component Renders:** `features/club/common/Crew.tsx`
   ```tsx
   props.map(member => <MemberCard {...member} />)
   ```

---

## Best Practices

1. **Always use TypeScript interfaces** for type safety
2. **Import assets at the top** of data files
3. **Use descriptive variable names** for exported data
4. **Keep data files focused** - one type of data per file
5. **Update data, not components** - modify content in data files
6. **Maintain consistent naming** - follow existing patterns
7. **Document interfaces** - add comments for complex data structures

---

## Type Safety

All data files use TypeScript for type safety. When adding new data:

1. Define or use existing interface
2. Import StaticImageData type for images
3. Export properly typed data
4. Let TypeScript catch errors before runtime

Example:
```typescript
import { StaticImageData } from "next/image";

interface MyData {
  id: number;
  name: string;
  img: StaticImageData;
}

export const myData: MyData[] = [...];
```

This ensures components receive correctly structured data.
