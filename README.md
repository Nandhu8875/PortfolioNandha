# Nandha Gopal M — portfolio site

Single-page portfolio for an embedded firmware engineer. React 18 + TypeScript + Vite + Tailwind.
All content lives in one JSON file; components never hold copy.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the built site
```

Node 18 or newer.

## Edit the content

Everything you will ever want to change is in `src/data/portfolio.json`:

| Key | What it feeds |
| --- | --- |
| `profile` | Hero name, tagline, photo, spec strip, contact links, About paragraphs |
| `skills` | The six-panel grid |
| `experience` | Navson and Xiaomi entries |
| `projects` | Project entries, including photos and captions |
| `recommendation` | The pull quote in About |
| `education` | Study and certification list |

Types are in `src/types/portfolio.ts`. If you add a field there, TypeScript will tell you what to update.

### Things to fill in before publishing

1. `profile.social.github` and `profile.social.linkedin` are placeholder URLs — put your real profiles in.
2. `projects[].link` is empty for every project. Add a GitHub URL and a "View the code" link appears automatically. Leave it empty and nothing renders.
3. `skills[5]` ("Learning next") is my suggestion, not something you told me. Edit or delete it — if you delete it, the grid is back to five panels and one cell will be empty, so replace rather than remove.
4. `recommendation.quote` is a paraphrase of the letter from Navson, not a verbatim quote, and it is labelled as such on the page. If you want to quote it word for word, ask Rajasekhar first.

## Images

Photos live in `public/media/` and are referenced from the JSON with `./media/...`.
They are already resized (max 1500px) and rotated. To add one: drop the file in `public/media/`,
then add `{ "src": "./media/your-file.jpg", "caption": "..." }` to the project's `media` array.
The first image in the array is the large one; the next three go in the strip below it.

`public/NandhaGopal_EmbeddedSystem_Resume.pdf` is what the "Download résumé" button serves. Replace the file when the résumé changes.

## Deploy

The build uses relative paths (`base: './'`), so `dist/` works on any static host.

- **GitHub Pages** — push the repo, then either commit `dist/` to a `gh-pages` branch or add an Actions workflow that runs `npm ci && npm run build` and publishes `dist/`.
- **Netlify / Vercel / Cloudflare Pages** — connect the repo, build command `npm run build`, publish directory `dist`.

## Design notes

- Dark base `#0C0C0C`, chrome-gradient display type, one accent: signal amber `#F5A524`.
- Kanit for headings and body, IBM Plex Mono for technical metadata (periods, part numbers, captions).
- One piece of automatic motion on the whole page: the step-pulse trace under the hero draws itself once on load. Everything else moves only when you do something. `prefers-reduced-motion` turns it off.
- No animation library, no icon library — three runtime files total, so the bundle stays small and nothing breaks on `npm install` two years from now.

## Structure

```
src/
  App.tsx                    composes the sections
  data/portfolio.json        all content
  hooks/usePortfolio.ts      typed accessor
  types/portfolio.ts         content shape
  components/
    Navbar.tsx
    HeroSection.tsx
    PulseTrace.tsx           the step-pulse SVG
    ProjectsSection.tsx
    ExperienceSection.tsx
    SkillsSection.tsx
    AboutSection.tsx
    EducationSection.tsx
    Footer.tsx               contact + footer
public/media/                photos
```
