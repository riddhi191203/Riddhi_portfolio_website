# Riddhi Jain Portfolio

Professional portfolio website for Riddhi Jain, built with React, TypeScript, Vite, Tailwind CSS, Motion, and Lucide icons.

## Features

- Responsive portfolio layout with hero, experience, skills, achievements, education, certifications, and footer sections.
- Canvas-based animated background with reduced-motion support.
- Searchable skills section.
- Expandable experience cards with project links and measurable impact metrics.
- Dedicated resume preview modal with print-to-PDF support.
- Clean component structure for easier maintenance.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion
- Lucide React

## Project Structure

```text
src/
  components/
    Achievements.tsx
    AnimatedBackground.tsx
    CertificationEducation.tsx
    Experience.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
    ResumeViewer.tsx
    Skills.tsx
    SplashIntro.tsx
  data/
    resumeData.ts
  App.tsx
  index.css
  main.tsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run TypeScript checks:

```bash
npm run lint
```

## Resume PDF

Open the resume viewer from the header or hero section, then use **Download PDF**. The browser print dialog will open with the resume isolated on an A4 page. Choose **Save as PDF** to download it.
