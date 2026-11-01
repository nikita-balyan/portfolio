# Nikita's Cybersecurity Portfolio

A simple static website (HTML, CSS, vanilla JS). No frameworks, backend, trackers or API keys.

## Structure
- `index.html`: all content (comments mark each section)
- `css/styles.css`: colours (top of file) and layout
- `js/script.js`: mobile menu and footer year only
- `assets/`: put images here

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Update content (search `index.html` for these comments)
- **Name / hero:** `HERO / MY NAME`
- **About:** `ABOUT ME`
- **Add a project:** copy one `<article class="card">` in `PROJECTS`, edit the text, tags and links.
- **Skills:** `SKILLS` (one `<li>` per tag; only add skills you can show)
- **Certifications:** `CERTIFICATIONS`. Move an item from "In progress" to "Completed" only when it's earned.
- **Social links / email:** `SOCIAL LINKS` and `CONTACT DETAILS`. Search for `github.com/nikita-balyan` and the email to replace all copies.
- **Images:** save in `assets/`, then add `<img src="assets/name.png" alt="Describe the image">` inside a project's Details.
- **Placeholders to fill:** `assets/Nikita-Resume.pdf`, `https://cyberguardian.nikitabalyan311.workers.dev/`

## Publish
Push this folder to GitHub, then on Cloudflare Pages create a project from the repo (build command: none, output directory: `/`). GitHub Pages and Netlify also work.
