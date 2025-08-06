# Copilot Instructions - Nasaga Limited Real Estate Website

## Project Overview
This is a React + TypeScript + Vite real estate company website for Nasaga Limited, built from a Magic Patterns template. The site features a single-page application with property gallery, services, and contact sections.

## Architecture & Component Structure
- **App Structure**: Single-page layout in `src/App.tsx` with sequential sections: Header → Hero → PropertyGallery → Services → Contact → Footer
- **Components**: All in `src/components/` following functional component pattern with named exports
- **Routing**: Hash-based navigation (`#home`, `#properties`, `#services`, `#contact`) with no React Router
- **State Management**: Local React state only, no global state management

## Development Patterns

### Component Guidelines
- Use functional components with TypeScript and named exports: `export function ComponentName()`
- Import React explicitly: `import React from 'react'`
- Props interface naming: `ComponentNameProps` (when needed)
- Event handlers: Use arrow functions within components (e.g., `onClick={() => setIsMenuOpen(!isMenuOpen)}`)

### Styling System
- **Framework**: Tailwind CSS v3.4.17 with minimal configuration
- **Critical**: Never delete Tailwind imports in `src/index.css` - they are explicitly protected
- **Brand Colors**: 
  - Primary: `blue-700` (#1d4ed8) for main brand elements
  - Secondary: `blue-500`/`blue-600` for accents and interactions
  - Text: `gray-900` for headings, `gray-600`/`gray-800` for body text
- **Layout**: Container pattern with `container mx-auto px-4` for consistent spacing
- **Responsive**: Mobile-first with `md:` and `lg:` breakpoints

### Icons & Assets
- **Icons**: Lucide React v0.441.0 with consistent sizing (`h-10 w-10` for service icons, `size={24}` for UI controls)
- **Images**: Property photos stored in `/public/` with WhatsApp naming convention (`IMG-20250804-WA0XXX.jpg`)
- **Image Loading**: Direct public path references (e.g., `"/IMG-20250804-WA0022.jpg"`)

## Data Patterns
- **Properties**: Inline array objects with `id`, `title`, `description`, `image`, `type`, `featured` properties
- **Services**: Icon + title + description pattern with Lucide React icons
- **No External APIs**: All content is static/hardcoded

## Build & Development

### Commands
- **Development**: `npm run dev` (runs on port 5174)
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview**: `npm run preview` (serves build on port 4173)
- **Lint**: `npm run lint` (ESLint for .js/.jsx/.ts/.tsx)

### Deployment
- **Platform**: Netlify with `netlify.toml` configuration
- **SPA Routing**: All routes redirect to `index.html` for client-side navigation
- **Build**: Node.js 18, outputs to `dist/` directory
- **Redirects**: Handled via `public/_redirects` and `netlify.toml`

## Key Files to Understand
- `TECH_STACK_DOCUMENTATION.md`: Comprehensive color system and technical stack details
- `src/components/PropertyGallery.tsx`: Bento grid layout pattern for property display
- `src/components/Header.tsx`: Mobile-responsive navigation with hamburger menu
- `vite.config.ts`: Custom port configuration and build optimization
- `tailwind.config.js`: Minimal content scanning configuration

## Common Tasks
- **Adding Properties**: Extend the `properties` array in `PropertyGallery.tsx` with the established object structure
- **Styling Changes**: Use existing Tailwind utility classes, reference brand colors from documentation
- **New Sections**: Follow the container + centered title + description + grid pattern seen in Services/PropertyGallery
- **Mobile Responsiveness**: Use the Header component's responsive pattern as reference

## Dependencies
- Core: React 18.3.1, TypeScript 5.5.4, Vite 5.2.0
- Styling: Tailwind CSS 3.4.17, PostCSS, Autoprefixer
- Icons: Lucide React 0.441.0
- Linting: ESLint with TypeScript and React plugins
