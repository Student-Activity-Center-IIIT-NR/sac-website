# Components Documentation

This document provides an overview of all reusable components in the SAC website. Components are organized into Global Components (shared across the application) and Feature Components (page-specific).

# Components Index

## Global Components
- [Header](#header) - Site header with branding
- [NavBar](#navbar) - Navigation menu
- [Footer](#footer) - Site footer with social links
- [EventCalendar](#eventcalendar) - Interactive event calendar
- [Common Components](#common-components) - Shared utilities

## Feature Components
- [Club Components](#club-components) - Club page components
- [Home Components](#home-components) - Homepage sections
- [Events Components](#events-components) - Event listing and calendar
- [Gallery Components](#gallery-components) - Photo galleries
- [Team Components](#team-components) - Team member displays
- [Campus Tour](#campus-tour) - Virtual campus tour
- [Get Pass](#get-pass) - Pass management

---

# Global Components

## Header
**Location:** `components/Header/`

### Header.tsx
Main header component containing the SAC branding and top navigation.

**Usage:**
```tsx
import Header from 'components/Header';
<Header />
```

### HeaderTop.tsx
Top section of the header with institutional branding.

---

## NavBar
**Location:** `components/NavBar/`

### NavBar.tsx
Main navigation bar component with links to all major sections.

**Usage:**
```tsx
import NavBar from 'components/NavBar';
<NavBar />
```

### NavItem.tsx
Individual navigation menu item.

**Props:**
- Links to different pages (Home, Clubs, Events, Gallery, Team)

### NavRight.tsx
Right section of navigation bar with additional options.

---

## Footer
**Location:** `components/footer/`

### Footer.tsx
Site footer with contact information, social media links, and quick navigation.

**Usage:**
```tsx
import Footer from 'components/footer/Footer';
<Footer />
```

---

## EventCalendar
**Location:** `components/EventCalendar/`

### Calendar.tsx
Interactive event calendar displaying upcoming SAC events.

**Usage:**
```tsx
import Calendar from 'components/EventCalendar/Calendar';
<Calendar />
```

**Data Source:** `data/EventsAndGallery/EventCalendarData.ts`

### PaperItem.tsx
Event card component used in calendar view.

**Props:**
- Event details (title, date, description, icon)

### SingleDate.tsx
Individual date cell in calendar.

---

## Common Components
**Location:** `components/common/`

### DarkMode.tsx
Dark mode toggle component (if implemented).

### ElevatedLogo.tsx
3D elevated logo component for visual effects.

### InputField.tsx
Reusable input field component for forms.

**Props:**
- Standard input props (placeholder, value, onChange, etc.)

### SacBranding.tsx
SAC logo and branding component.

**Usage:**
```tsx
import SacBranding from 'components/common/SacBranding';
<SacBranding />
```

---

# Feature Components

## Club Components
**Location:** `features/club/`

### Common (All Clubs)

#### Crew.tsx
Displays club team members (Secretary, Vice Secretary, Core Members).

**Location:** `features/club/common/Crew.tsx`

**Props:**
```tsx
interface CrewProps {
  props: {
    img: StaticImageData;
    name: string;
    post: string;
  }[];
}
```

**Usage:**
```tsx
import Crew from 'features/club/common/Crew';
import { clubData } from 'data/Crews/TechnicalClubCrew';
<Crew props={clubData} />
```

#### Gallery.tsx
Club-specific photo gallery.

**Location:** `features/club/common/Gallery.tsx`

**Props:**
- `club: string` - Club name to fetch gallery images

**Data Source:** `data/EventsAndGallery/ClubGalleryData.ts`

### Technical Clubs
**Location:** `features/club/technical/`

#### TechnicalClub.tsx
Hero section for technical club pages.

**Props:**
```tsx
{
  name: string;
  desc: string;
  bgTop: StaticImageData;
  logo: StaticImageData;
  color: string;
  instagram: string;
}
```

**Usage:**
```tsx
<TechnicalClub
  name="Ciphercell"
  desc="The Information Security Club"
  bgTop={cipherBgTop}
  logo={cipherLogo}
  color="#F7768E"
  instagram="https://www.instagram.com/c1ph3rc3ll_iiitnr/"
/>
```

#### ClubDescription.tsx
Description section with background image.

**Props:**
- `bg: StaticImageData` - Background image
- `children: ReactNode` - Description text

#### BasicMenu.tsx
Dropdown menu component for technical clubs.

### Cultural Clubs
**Location:** `features/club/cultural/`

#### ClubHeader.tsx
Header section for cultural club pages.

#### ClubBanner.tsx
Banner component with club branding.

**Props:**
- `clubName: string`
- `bg: StaticImageData`

#### ClubDescription.tsx
Cultural club description with image and Instagram link.

**Props:**
- `img: StaticImageData`
- `insta: string`
- `children: ReactNode`

#### ClubEvents.tsx
Displays upcoming and past events for cultural clubs.

**Props:**
- `club: string` - Club name

### Sports
**Location:** `features/club/sports/`

#### SportsLayout.tsx
Layout wrapper for sports pages.

#### SportsHeading.tsx
Sports section heading component.

#### SportsTeam.tsx
Displays sports team members.

#### SportsGallery.tsx
Sports event photo gallery.

#### UpcomingEvents.tsx
Lists upcoming sports events.

#### EventData.tsx
Sports event data component.

#### ImageGrid.tsx
Grid layout for sports images.

### Media Clubs
**Location:** `features/club/media/`

#### ClubHeader.tsx
Header for media club pages.

### Club Overviews
**Location:** `features/club/`

- **CulturalOverview.tsx** - Overview of all cultural clubs
- **TechnicalOverview.tsx** - Overview of all technical clubs
- **MediaOverview.tsx** - Overview of all media clubs
- **SportsOverview.tsx** - Overview of sports activities

---

## Home Components
**Location:** `features/home/`

### SacOverview.tsx
Introduction section about SAC on homepage.

**Usage:**
```tsx
import SacOverview from 'features/home/SacOverview';
<SacOverview />
```

### ClubsOverview.tsx
Overview of all club categories on homepage.

### News.tsx
News and announcements section.

**Data Source:** `data/NewsData.ts`

### ContactUs/ContactUs.tsx
Contact information and form section.

### ContactUs/SocialsPanel.tsx
Social media links panel.

---

## Events Components
**Location:** `features/events/`

### Index.tsx
Main events page component.

### MajorEvents.tsx
Displays major institutional events.

**Data Source:** `data/EventsAndGallery/RecentMajorEventsData.ts`

### MonthlyCalendar.tsx
Monthly view calendar for events.

---

## Gallery Components
**Location:** `features/gallery/`

### Index.tsx
Main gallery page component.

### Gallery.tsx
Gallery grid display.

### Carousel.tsx
Image carousel for gallery.

### RecentClubEvents.tsx
Recent club events photo section.

### MajorEvents.tsx
Major events gallery.

---

## Team Components
**Location:** `features/team/`

### TeamHeader/TeamHeader.tsx
Team page header section.

### TeamHeader/YearCard.tsx
Year selector card for team pages.

### Card.tsx
Individual team member card.

**Props:**
```tsx
{
  img: StaticImageData;
  name: string;
  position: string;
}
```

### TeamNavbar.tsx
Navigation between different year teams.

### ScrollContainer.tsx
Horizontal scroll container for team members.

---

## Campus Tour
**Location:** `features/campusTour/`

### LandingPage.tsx
Campus tour landing page component.

---

## Get Pass
**Location:** `features/getpass/`

### LandingPage.tsx
Get pass landing page.

### PrivacyPolicy.tsx
Privacy policy component for pass system.

---

# Component Patterns

## Club Page Pattern

All club pages follow this consistent structure:

```tsx
import ClubsLayout from "layouts/ClubsLayout";
import Crew from "features/club/common/Crew";
import Gallery from "features/club/common/Gallery";
// Category-specific components
// Club data and assets

export default function ClubName() {
  return (
    <ClubsLayout>
      {/* Club header/banner */}
      {/* Club description */}
      {/* Crew members */}
      <Crew props={clubData} />
      {/* Gallery */}
      <Gallery club="ClubName" />
    </ClubsLayout>
  );
}
```

## Data-Driven Components

Most components are data-driven, separating content from presentation:
- **Crew data:** `data/Crews/[Category]ClubCrew.ts`
- **Event data:** `data/EventsAndGallery/EventCalendarData.ts`
- **Gallery data:** `data/EventsAndGallery/ClubGalleryData.ts`
- **News data:** `data/NewsData.ts`
- **Team data:** `data/TeamData.tsx`

To update content, modify the data files rather than component code.

---

# Adding New Components

When creating new components:

1. Place in appropriate directory (`components/` for global, `features/[page]/` for page-specific)
2. Use TypeScript with proper type definitions
3. Follow Material-UI styling patterns
4. Create `index.ts` for clean imports
5. Document props and usage
6. Update this documentation file
