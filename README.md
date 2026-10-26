# Pujiverse Tech

Website for the [@pujiversetech](https://www.youtube.com/@pujiversetech) YouTube channel: every gadget that runs on power, how it started, where it is today, and where it goes next.

Live: https://tech.pujiverse.com

## Editing content
All content lives in `data.js`:
- `CATEGORIES` — each category tab, its intro, planned timeline eras, and gadget cards `[name, power, about, examples]` (power: `Battery`, `Plug-in`, `Both`, or `Software`).
- `TIMELINES` — timeline events per category: `{ year: "1876", title: "...", text: "..." }`.

Plain HTML/CSS/JS, no build step. Pushing to `main` redeploys on Vercel.
