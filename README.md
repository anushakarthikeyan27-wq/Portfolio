# Anusha K — Portfolio

## Files
- `index.html` — page structure & content
- `style.css` — dark brass/espresso retro theme, all animations
- `script.js` — scroll reveal, nav behavior, cursor glow
- `assets/profile.jpg` — your photo (add this yourself, see below)

## How to add these to your GitHub repo (Portfolio)
1. Go to your repo → the `index.html` file you already created → click the pencil (edit) icon → delete the placeholder content → paste in the `index.html` content from this project → commit.
2. Click **Add file → Create new file**, name it `style.css`, paste in the CSS → commit.
3. Click **Add file → Create new file**, name it `script.js`, paste in the JS → commit.
4. Click **Add file → Create new file**, type `assets/profile.jpg` as the filename (this auto-creates the `assets` folder) — but for images you actually need **Add file → Upload files** instead, and upload your photo there, naming it `profile.jpg`.
5. Go to **Settings → Pages**, set source to `main` branch, `/ (root)`, save.
6. Your live site: `https://anushakarthikeyan27.github.io/Portfolio/`

## Adding your photo
- If no `assets/profile.jpg` is found, the site automatically shows a clean "AK" monogram instead — so nothing breaks if you skip this step for now.
- Recommended: a square or portrait photo, well-lit, at least 600px wide.

## Filling in your remaining 2 projects
Open `index.html`, search for `project-placeholder`, and replace:
- `<h3 class="project-title">` — your project name
- `<p class="project-desc">` — 2–3 line description
- `<ul class="project-tags">` — swap `<li>Add tech stack</li>` for your actual tools, one `<li>` per tag

Also remove the `project-placeholder` class from the `<article>` tag once filled in, so it displays at full opacity like project 1.

## Basic SEO already built in
- Descriptive `<title>` and `<meta name="description">`
- Semantic HTML structure (proper headings, sections)
- Mobile-responsive (passes Google's mobile-friendly check)

### To finish SEO after going live
1. Create a free Google Search Console account → verify your site using the HTML URL method → submit `https://anushakarthikeyan27.github.io/Portfolio/`
2. Add your site link to your LinkedIn **Featured** section and **Contact info** — backlinks from LinkedIn help search ranking
3. Once you add real project links (GitHub repos, live demos), link them in the `project-tags` or add a "View Project" link — external links to real work boost credibility
