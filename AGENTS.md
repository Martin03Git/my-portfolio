# AGENTS.md

This document provides instructions and guidelines for AI agents (and human developers) working on this repository.

## Project Overview

- **Name:** Martin's Portfolio
- **Type:** React Single Page Application (SPA)
- **Stack:**
  - **Framework:** React 19 + Vite
  - **Language:** TypeScript
  - **Styling:** Tailwind CSS
  - **Icons:** Lucide React

## 1. Build, Lint, and Test Commands

### dependency Management
- **Install dependencies:**
  ```bash
  npm install
  ```

### Development
- **Start development server:**
  ```bash
  npm run dev
  ```
  Runs on `http://localhost:5173` by default.

### Build
- **Build for production:**
  ```bash
  npm run build
  ```
  Output directory: `dist/`

- **Preview production build:**
  ```bash
  npm run preview
  ```

### Verification (Linting & Testing)
*Note: This project does not currently have dedicated `lint` or `test` scripts in `package.json`.*

- **Type Checking:**
  To verify type safety without building, use the TypeScript compiler directly:
  ```bash
  npx tsc --noEmit
  ```
  *Agents should run this command after making changes to ensure no new type errors are introduced.*

- **Linting:**
  If making significant changes, ensure code is clean. If ESLint is added in the future, use `npm run lint`. For now, rely on `tsc` and standard formatting.

- **Testing:**
  There is no test runner (Jest/Vitest) configured.
  - If asked to write tests, first propose installing Vitest + React Testing Library.
  - If asked to "verify" code without a test runner, rely on `tsc --noEmit` and manual verification via the dev server.

## 2. Code Style & Conventions

### File Structure
- **Components:** `src/components/` (or root `components/` if `src` is omitted)
  - PascalCase filenames (e.g., `Header.tsx`, `ProjectCard.tsx`).
- **Assets:** Place static assets in `public/` or import them if they are part of the bundle.
- **Data:** Content (text, project lists, skills) is separated into `constants.ts`.
- **Types:** Shared interfaces and types are located in `types.ts`.

### TypeScript & Imports
- **Explicit Extensions:** Always use explicit file extensions for local imports.
  ```typescript
  // Correct
  import Header from './components/Header.tsx';
  import { Project } from './types.ts';

  // Incorrect
  import Header from './components/Header';
  ```
- **Strict Mode:** TypeScript is set to strict mode. Avoid `any`. Define interfaces for all props and data structures.
- **Interfaces:** Prefer `interface` over `type` for object definitions. Export them from `types.ts` if used in multiple files.

### React Components
- **Functional Components:** Use `React.FC` or standard function declarations with typed props.
  ```typescript
  interface Props {
    title: string;
  }
  const MyComponent: React.FC<Props> = ({ title }) => { ... }
  ```
- **Hooks:** Ensure hooks are called at the top level. Custom hooks should be named `use[Name]`.
- **Props:** Destructure props in the function signature.

### Styling (Tailwind CSS)
- **Utility Classes:** Use Tailwind utility classes directly in `className`.
- **Conventions:**
  - Use `zinc` for grayscales (e.g., `bg-zinc-950`, `text-zinc-200`).
  - Use `accent` colors for highlights if defined in `tailwind.config.js`.
  - Ensure responsive design using standard breakpoints (`md:`, `lg:`).

### Error Handling
- **UI Boundaries:** Fail gracefully in the UI. If data is missing, render nothing or a fallback, do not crash the app.
- **Async Operations:** Wrap async calls with `try/catch` blocks and handle errors by setting an error state to display feedback to the user.

### Naming Conventions
- **Variables/Functions:** camelCase (e.g., `handleClick`, `fetchData`).
- **Components:** PascalCase (e.g., `HeroSection`).
- **Constants:** UPPER_SNAKE_CASE for global constants in `constants.ts` (e.g., `DEVELOPER_NAME`).

## 3. Workflow for Agents

1.  **Read Context:** Always read `types.ts` and `constants.ts` before modifying components to understand the data model.
2.  **Verify:** Since there are no unit tests, verify changes by:
    - Running `npx tsc --noEmit` to catch type errors.
    - ensuring `npm run build` succeeds for larger changes.
3.  **Refactor:** If modifying content (e.g., updating the "About" text), do NOT hardcode it in the component. Update `constants.ts` instead.
4.  **New Components:** If creating a new section, add it to `components/`, update `App.tsx` to include it, and add any necessary types to `types.ts`.

## 4. Specific Configuration Rules

- **No Implicit Any:** Ensure `tsconfig.json` rules are respected.
- **Module System:** The project is ESM (`"type": "module"` in `package.json`).
- **Environment:** Node.js environment for tooling, Browser environment for runtime.

---
*Generated for AI Agents interacting with the Martin's Portfolio codebase.*
