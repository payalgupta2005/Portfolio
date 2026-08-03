# Payal Gupta — Portfolio

A responsive personal portfolio built with React (Create React App).

## Run it locally

```bash
npm install
npm start
```

Opens at http://localhost:3000

## Build for deployment

```bash
npm run build
```

This creates an optimized `build/` folder you can deploy to Vercel, Netlify, or GitHub Pages.

## What's included

- **Hero, About, Skills, Projects, Contact** sections, matching the dark
  purple/pink gradient UI you shared.
- **Fully responsive navbar** with a slide-in mobile menu (hamburger icon).
- **Contact form wired to Formspree** (`https://formspree.io/f/mdaqqlpw`) —
  messages submitted on the live site are emailed straight to you. No backend
  needed.
- **Resume download** — `public/Payal_Gupta_Resume.pdf` is served and
  downloaded when visitors click "Download Resume". Replace this file any
  time you update your resume (keep the same file name, or update the path
  in `src/components/Hero.js`).
- **Projects** — three projects from your resume (EduMatrix, the Swiggy-style
  food app, and the Employee Management API). Since none have a live demo,
  each card only shows a **Repository** button. Update the `repo` links in
  `src/components/Projects.js` with your actual GitHub repo URLs for each
  project (they currently point to your GitHub profile as a placeholder).

## Things worth double-checking before you publish

- `src/components/Projects.js` — swap in the exact GitHub repository link
  for each project.
- `src/components/Hero.js` / `Footer.js` — confirm your GitHub and LinkedIn
  URLs are correct.
- There's no profile photo in this build (none was provided), so the hero
  and header use a "PG" initials avatar. Drop a photo into `src/assets/` and
  swap it in if you'd like a picture instead.

## Deploying

The quickest option is [Vercel](https://vercel.com) or
[Netlify](https://netlify.com) — both let you drag-and-drop the `build/`
folder, or connect a GitHub repo for automatic deploys.
