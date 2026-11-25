# danielabaptista.github.io

Personal portfolio, built with React, TypeScript, Vite and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Edit content

The site is in German and English. All text lives in `src/content/`:

- `shared.ts`: name, photo, links, email and the Formspree ID (same in both languages)
- `en.ts` and `de.ts`: everything else, one file per language

Any change to your CV or projects needs to go into both `en.ts` and `de.ts`.
Replace everything in [brackets].

Put your photo, CVs and project images in `public/` (e.g. `public/photo.jpg`,
`public/cv-de.pdf`, `public/cv-en.pdf`) and reference them as `/photo.jpg`.

Visitors with a German browser see German first, everyone else English.
The DE/EN switch in the header remembers their choice.

## Deploy

Pushing to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`). In the repository settings, set
Pages > Source to "GitHub Actions" once.
