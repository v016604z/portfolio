# AI Agent Instructions - Portfolio Project

## Project Overview
Personal portfolio website built with React 19, TypeScript, and Tailwind CSS v4. Uses Vite for development with SWC for fast refresh. The portfolio showcases projects with a problem-solving narrative approach (痛點解決).

## Tech Stack
- **Build**: Vite 7 + React SWC plugin
- **UI**: React 19 + TypeScript 5.9 + Tailwind CSS v4
- **Styling**: Tailwind v4 with PostCSS (@tailwindcss/postcss)
- **Code Quality**: ESLint (flat config) + TypeScript strict mode

## Architecture Patterns

### Component Structure
- **Components**: All UI components in `src/components/` (10 components: Navbar, Hero, TechStack, About, Contact, Footer, AllProjects, ProjectCard, ProjectModal, BackgroundAnimation)
- **Types**: Centralized in `src/types/` directory with barrel export (`index.ts`)
  - Import via `import type { Project } from "./types"` in App.tsx
  - Each domain has its own file: `project.ts`, `personal.ts`, `skill.ts`, `education.ts`
- **Data**: Static content in `src/data/` (projects, skills, education, personalInfo)
- **Main app**: `src/App.tsx` handles layout composition and global state

### Type System
```tsx
// Project interface emphasizes pain-point storytelling:
interface Project {
  id: number;
  title: string;
  description: string;
  painPoint: string;        // What problem was solved
  solution: string;         // Detailed solution narrative
  impact?: string;          // Real-world outcomes
  tags: string[];          // Tech stack used
  featured: boolean;
  coverImage?: string;
  images?: string[];
  video?: string;
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
}
```
Always import types from `src/types` using barrel exports.

### Styling Conventions
- **Color palette**: `slate-950` background, `slate-50` text, `cyan-500` accents
- **Layout patterns**: 
  - Sections use `py-20 px-6 max-w-6xl mx-auto`
  - Cards use `rounded-3xl` (not `rounded-lg`)
  - Borders are `border-slate-800` with hover states `border-cyan-500/50`
- **Typography**:
  - Section headers: `text-slate-500 text-sm font-bold uppercase tracking-widest`
  - Body: `text-slate-400` for secondary content

### State Management
- Local useState for modal/dialog interactions (e.g., `activeProject` in App.tsx)
- No external state library; keep it simple for portfolio scope
- Components receive data via props from `src/data/` files

### Data Layer Pattern
Content is separated from components via `src/data/` directory:
```tsx
// src/data/projects.ts
import type { Project } from "../types";
export const projects: Project[] = [...];

// src/App.tsx
import { projects } from "./data/projects";
```
This pattern is used for projects, skills, education, and personalInfo.

## Development Workflow

### Commands
```bash
npm run dev      # Start dev server (Vite HMR)
npm run build    # TypeScript check + Vite build
npm run lint     # ESLint check
npm run preview  # Preview production build
```

### TypeScript Configuration
- Uses project references: `tsconfig.app.json` (app) + `tsconfig.node.json` (Vite config)
- Strict mode enabled with `noUnusedLocals` and `noUnusedParameters`
- Module resolution: `bundler` mode (not `node` or `node16`)

### ESLint Configuration
- Flat config format (`eslint.config.js`) using `defineConfig` from `eslint/config`
- Extends: ESLint recommended, TypeScript recommended, React Hooks, React Refresh (Vite)
- Global ignores: `dist/` directory

## Critical Patterns

### Tailwind v4 Setup
- Uses new `@tailwindcss/postcss` plugin (NOT `tailwindcss/nesting`)
- Content paths in `tailwind.config.js` include `index.html` and `src/**/*.{ts,tsx}`
- No `@tailwind` directives needed in CSS with v4 PostCSS setup

### Component Export Pattern
All components use default exports:
```tsx
export default function ComponentName() { ... }
```

### Chinese UI Text
UI includes Chinese text (繁體中文) for Taiwan market. Maintain this language choice in:
- Hero section content
- Section headers (e.g., "作品展示", "關於我")
- Project card labels (e.g., "Solved: 痛點解決")

## Adding New Features

### New Components
1. Create in `src/components/` with `.tsx` extension
2. Use default export pattern
3. Import Tailwind classes inline (no separate CSS modules)
4. Add to App.tsx layout if needed

### New Types
Add to `src/types/` directory (e.g., `src/types/newtype.ts`)
Export from barrel: `src/types/index.ts`

### Styling New Sections
Follow the existing pattern:
```tsx
<section className="py-20 px-6 max-w-6xl mx-auto">
  <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">
    Section Title
  </h3>
  {/* content */}
</section>
```

## Code Style Guidelines

### Minimalist MVP Approach
- Write minimal, essential code only - avoid over-engineering
- Start with core functionality, add features incrementally
- Prefer simple solutions over complex abstractions
- No unnecessary dependencies or premature optimizations

### Code Formatting
- **No emojis in code**: Never use emoji characters in code, comments, or UI strings
- Keep code clean and professional
- Use descriptive variable names instead of symbolic representations

## Common Gotchas

1. **Types location**: Types are in `src/types/` directory with barrel export, not `src/components/types.tsx`
2. **Tailwind version**: Using v4 (new PostCSS setup), not v3
3. **ESLint config**: Flat config format (not `.eslintrc`), uses `defineConfig` from `eslint/config`
4. **React version**: React 19 (latest) - check compatibility for new libraries
5. **Module resolution**: Bundler mode - avoid using `.ts` extensions in imports (TypeScript handles this)
6. **Code style**: No emojis allowed; follow minimal MVP approach
