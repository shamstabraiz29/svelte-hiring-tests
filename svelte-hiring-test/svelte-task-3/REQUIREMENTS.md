# Svelte Routing Implementation Test

## Overview

Implement functional navigation in a SvelteKit application. The component structure and styling have been provided - your task is to implement the routing logic between the item list and detail views using SvelteKit's routing capabilities.

NOTE: USE Node (17.0.0 or higher)

## Core Requirements

### 1. Navigation Structure

- Implement navigation between list and detail views
- Handle dynamic route parameters
- Ensure proper data passing between routes
- Set up back navigation functionality

### 2. Core Functionality

- Route from list to detail view
- Back navigation to list view
- Dynamic URL parameters
- Proper data handling
- Handle navigation programmatically

### 3. User Interactions

- Click events for "View Details" button
- Click events for "Back" button
- URL parameter handling

### 4. Components to Implement

```typescript
// Home page (+page.svelte)
- Display list of items
- Import and use ItemCard component
- Handle item data management

// ItemCard Component
- Display item information
- Implement navigation logic
- Handle click events

// Detail Page ([id]/+page.svelte)
- Display detailed item view
- Handle URL parameters
- Implement back navigation
```

## Notes

- Component structure is provided
- Focus on routing implementation
- Use SvelteKit's native routing utilities
- Test thoroughly before submission

## Getting Started

1. Components are located in:
  
   ```
   src/routes/+page.svelte
   src/lib/components/ItemCard.svelte
   src/routes/items/[id]/+page.svelte
   ```

## Success Criteria

- Clicking "View Details" navigates to the correct detail page
- Back button returns to the home page
- URLs update correctly with item IDs
- Navigation works smoothly without page refreshes.

