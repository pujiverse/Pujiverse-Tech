# Pujiverse Tech

Website for the [@pujiversetech](https://www.youtube.com/@pujiversetech) YouTube channel: every gadget that runs on power, how it started, where it is today, and where it goes next.

Live: https://tech.pujiverse.com

## Editing content
All content lives in `data.js`:
- `CATEGORIES` — each category tab, its intro, planned timeline eras, and gadget cards `[name, power, about, examples]` (power: `Battery`, `Plug-in`, `Both`, or `Software`).
- `TIMELINES` — timeline events per category: `{ part: "Part 1 · ...", year: "1876", title: "...", text: "..." }`. `part` and the briefing fields `who`, `where`, `problem`, `research`, `impact` are optional. Entries with `research` become clickable and open a briefing panel. Consecutive entries with the same part are grouped under one heading, with jump links at the top.

Plain HTML/CSS/JS, no build step. Pushing to `main` redeploys on Vercel.
