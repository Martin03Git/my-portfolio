# Martin's Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. This application showcases projects, skills, and experience.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.
- **Project Showcase**: Detailed view of projects with tech stacks, descriptions, and links.
- **Smooth Navigation**: Single-page application experience with smooth scrolling between sections.
- **Modern UI/UX**: Clean aesthetic using Tailwind CSS with dark mode support (system preference/default style).
- **Interactive Elements**: Dynamic project cards, contact form toast notifications, and resume preview.

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, Lucide React (Icons)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd martins-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000` (or the port specified in your console).

### Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist/` directory. You can preview the build using:

```bash
npm run preview
```

## Project Structure

```
├── components/       # React components (Header, Hero, Projects, etc.)
├── constants.ts      # Content data (Projects list, Skills, About text)
├── types.ts          # TypeScript interfaces and types
├── App.tsx           # Main application component
├── main.tsx          # Entry point
├── vite.config.ts    # Vite configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Customization

- **Content**: Edit `constants.ts` to update your name, role, about text, projects, and skills.
- **Styling**: Modify `tailwind.config.js` to change theme colors (accent colors, etc.).

## License

This project is open source and available under the [MIT License](LICENSE).
