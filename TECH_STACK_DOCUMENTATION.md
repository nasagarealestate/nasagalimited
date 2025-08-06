# Technical Stack Documentation - Nasaga Limited Website

## 1. Technology Stack Analysis

### Frontend Framework
- **React**: v18.3.1
- **TypeScript**: v5.5.4
- **JSX Runtime**: Automatic (react-jsx)

### Build Tools & Bundlers
- **Vite**: v5.2.0 (Primary build tool and development server)
- **@vitejs/plugin-react**: v4.2.1 (React integration for Vite)
- **PostCSS**: Latest (CSS processing)
- **Autoprefixer**: Latest (CSS vendor prefixing)

### CSS Framework & Styling
- **Tailwind CSS**: v3.4.17 (Utility-first CSS framework)
- **Configuration**: Minimal setup with content scanning for HTML and TypeScript files
- **Import Structure**: Base, components, and utilities layers imported in `src/index.css`

### Package Manager
- **npm**: Primary package manager
- **Package Type**: ES Module (`"type": "module"`)

### Icon Library
- **Lucide React**: v0.441.0 (Modern icon library with React components)

### Development Dependencies
```json
{
  "@types/node": "^20.11.18",
  "@types/react": "^18.3.1", 
  "@types/react-dom": "^18.3.1",
  "@typescript-eslint/eslint-plugin": "^5.54.0",
  "@typescript-eslint/parser": "^5.54.0",
  "eslint": "^8.50.0",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.1"
}
```

## 2. Color System Documentation

### Primary Brand Colors
- **Primary Blue**: `blue-700` (#1d4ed8) - Main brand color, headers, CTAs
- **Secondary Blue**: `blue-500` (#3b82f6) - Brand accent, secondary text
- **Light Blue**: `blue-600` (#2563eb) - Icons, interactive elements
- **Blue Variants**: 
  - `blue-100` (#dbeafe) - Light text on blue backgrounds
  - `blue-400` (#60a5fa) - Footer accent text
  - `blue-50` (#eff6ff) - Hover states on white buttons

### Neutral Colors
- **Dark Gray**: `gray-900` (#111827) - Footer background, primary text
- **Medium Gray**: `gray-800` (#1f2937) - Navigation text
- **Light Gray**: `gray-600` (#4b5563) - Secondary text, descriptions
- **Background Gray**: `gray-50` (#f9fafb) - Page background, section backgrounds
- **Card Background**: `white` (#ffffff) - Card backgrounds, form backgrounds

### Usage Guidelines
- **Primary Actions**: Blue-700 background with white text
- **Secondary Actions**: White background with blue-700 text
- **Text Hierarchy**: Gray-900 for headings, gray-600 for body text
- **Interactive States**: Hover effects using lighter/darker variants

## 3. Layout Structure Analysis

### Component Hierarchy
```
App
├── Header (Sticky navigation with mobile menu)
├── main
│   ├── Hero (Landing section with CTA)
│   ├── PropertyGallery (Bento grid layout)
│   ├── Services (Grid of service cards)
│   └── Contact (Form + office locations)
└── Footer (Multi-column footer with links)
```

### Layout Components

#### Header Component
- **Type**: Sticky navigation (`sticky top-0 z-50`)
- **Features**: Mobile hamburger menu, responsive navigation
- **Breakpoints**: Desktop navigation hidden on mobile (`hidden md:flex`)

#### Hero Section
- **Layout**: Full-width with centered content
- **Background**: Blue-700 with white text
- **Content**: Left-aligned text with CTA buttons

#### PropertyGallery Component
- **Layout**: Bento grid system using CSS Grid
- **Grid Structure**: 
  - Mobile: Single column (`grid-cols-1`)
  - Desktop: 3-column grid (`md:grid-cols-3`)
  - Featured property spans 2 columns and 2 rows (`md:col-span-2 md:row-span-2`)

#### Services Component
- **Layout**: Responsive grid
- **Grid Structure**:
  - Mobile: Single column (`grid-cols-1`)
  - Tablet: 2 columns (`md:grid-cols-2`)
  - Desktop: 3 columns (`lg:grid-cols-3`)

#### Contact Component
- **Layout**: Two-column layout (form + office info)
- **Structure**: Contact form on left, office locations on right
- **Responsive**: Stacks vertically on mobile

### Responsive Breakpoints (Tailwind CSS)
- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px)

### Grid Systems
- **Container**: `container mx-auto px-4` (Centered with horizontal padding)
- **Property Gallery**: CSS Grid with span utilities
- **Services**: Responsive grid with gap spacing
- **Footer**: 4-column grid collapsing to single column

## 4. Project Architecture

### Folder Structure
```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation component
│   ├── Hero.tsx         # Landing section
│   ├── PropertyGallery.tsx  # Property showcase
│   ├── Services.tsx     # Services grid
│   ├── Contact.tsx      # Contact form & info
│   └── Footer.tsx       # Site footer
├── App.tsx              # Main app component
├── index.tsx            # React DOM render
└── index.css            # Tailwind imports
```

### Component Patterns
- **Functional Components**: All components use React function syntax
- **Named Exports**: Components exported as named functions
- **Props**: No props used (static content components)
- **State Management**: Minimal local state (Header menu toggle)

### File Naming Conventions
- **Components**: PascalCase with `.tsx` extension
- **Exports**: Named function exports matching filename
- **Imports**: Destructured imports for icons, React hooks

## 5. Development Guidelines

### Code Style & Formatting
- **ESLint Configuration**: TypeScript + React hooks rules
- **TypeScript**: Strict mode enabled with comprehensive type checking
- **Import Style**: ES6 imports with destructuring for multiple exports

### Component Conventions
- **Function Declaration**: `export function ComponentName() {}`
- **JSX**: Single expression return with parentheses for multi-line
- **Class Names**: Tailwind utility classes with responsive prefixes
- **Event Handlers**: Arrow functions for simple handlers

### Import/Export Patterns
```typescript
// Standard React import
import React from 'react';

// Icon imports (destructured)
import { MenuIcon, XIcon } from 'lucide-react';

// Component imports (destructured)
import { Header } from './components/Header';

// Named function export
export function ComponentName() {
  return <div>Content</div>;
}
```

### Best Practices Observed
1. **Responsive Design**: Mobile-first approach with progressive enhancement
2. **Accessibility**: Semantic HTML elements and proper ARIA labels
3. **Performance**: Optimized images and minimal JavaScript bundle
4. **Maintainability**: Clear component separation and consistent naming
5. **Type Safety**: Full TypeScript coverage with strict configuration

### Development Scripts
- `npm run dev`: Start development server (Vite)
- `npm run build`: Production build
- `npm run lint`: ESLint code checking
- `npm run preview`: Preview production build

---

*Generated for Nasaga Limited website - A modern React application built with Vite, TypeScript, and Tailwind CSS*
