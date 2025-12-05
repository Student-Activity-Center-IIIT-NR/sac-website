# Hooks Documentation

This document provides an overview of custom React hooks used in the SAC website.

## Overview

Currently, this project does not have a dedicated `hooks/` directory. The application primarily uses built-in React hooks and Material-UI hooks for state management and UI interactions.

## Built-in React Hooks Used

The codebase uses standard React hooks:
- `useState` - For component state management
- `useEffect` - For side effects and lifecycle
- `useMemo` - For performance optimization
- `useCallback` - For memoized callbacks
- `useRef` - For DOM references

## Third-Party Hooks

### Material-UI Hooks
- MUI components come with their own hooks for styling and theming
- `useTheme()` - Access MUI theme in components

### Next.js Hooks
- `useRouter()` - Navigation and routing

### React Intersection Observer
- `useInView()` - Detect when elements are in viewport (for scroll animations)

## Creating Custom Hooks

When creating custom hooks for this project:

1. **Create hooks directory** if it doesn't exist
2. **Name hooks with `use` prefix** (e.g., `useClubData.ts`)
3. **Place in appropriate location:**
   - Global hooks: `hooks/` directory at root
   - Feature-specific hooks: `features/[feature]/hooks/`
4. **Use TypeScript** with proper type definitions
5. **Document the hook** in this file

### Example Structure

```typescript
// hooks/useClubData.ts
import { useState, useEffect } from 'react';

interface ClubData {
  name: string;
  members: Member[];
}

export const useClubData = (clubName: string): ClubData | null => {
  const [data, setData] = useState<ClubData | null>(null);

  useEffect(() => {
    // Fetch or process club data
  }, [clubName]);

  return data;
};
```

## Future Hooks

As the project grows, consider creating custom hooks for:

### useEventCalendar
Manage event calendar state and filtering

**Suggested location:** `hooks/useEventCalendar.ts`

**Purpose:** Handle event filtering by date, category, or search

### useGallery
Manage gallery image state and lightbox

**Suggested location:** `hooks/useGallery.ts`

**Purpose:** Handle image viewing, carousel state, and navigation

### useTeamData
Fetch and filter team data by year

**Suggested location:** `hooks/useTeamData.ts`

**Purpose:** Manage team member filtering and display logic

### useNewsUpdates
Manage news feed and notifications

**Suggested location:** `hooks/useNewsUpdates.ts`

**Purpose:** Handle news updates and toast notifications

---

## Hook Guidelines

When creating hooks:

1. **Single Responsibility** - Each hook should do one thing well
2. **Reusability** - Write hooks that can be used in multiple components
3. **Type Safety** - Always define TypeScript types for parameters and return values
4. **Dependencies** - Properly manage useEffect dependencies
5. **Error Handling** - Include error states in data-fetching hooks
6. **Documentation** - Document parameters, return values, and usage

### Template

```typescript
/**
 * Custom hook description
 *
 * @param param1 - Description of parameter
 * @returns Description of return value
 *
 * @example
 * const data = useCustomHook(param);
 */
export const useCustomHook = (param: string): ReturnType => {
  // Hook implementation
};
```

---

## State Management

Currently, the project uses:
- **Component-level state** with `useState`
- **Data files** for static content (see DATA_ARCHITECTURE.md)
- **Props drilling** for sharing state

If the application grows in complexity, consider:
- **Context API** for global state (theme, user preferences)
- **React Query** for server state management
- **Zustand** or **Redux** for complex client state

---

## Notes

- This project follows a data-driven architecture where most content is static and imported from `data/` files
- State management is kept simple with component-level state
- As features grow, custom hooks can be extracted to improve code reusability
