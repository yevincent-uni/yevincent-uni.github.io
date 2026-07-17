# Portfolio Site

A single-page portfolio site — plain HTML, CSS, and JS, no build step, ready for GitHub Pages.

## File structure

```
├── index.html          # all page content lives here
├── css/style.css        # all styling (colors, type, layout)
├── js/script.js         # mobile nav, footer year, contact form handler
├── assets/
│   ├── profile.jpg      # your headshot (add this — shows a placeholder until you do)
│   └── resume.pdf       # your résumé (add this — the Resume button links here)
└── README.md
```

## 1. Customize the content

Everything is placeholder text for **Alex Rivera, Software Engineer** — replace it with your own:

- **`index.html`**
  - Title tag and meta description (top of file)
  - Hero heading, subhead, and the "Location / Experience / Status" line
  - About section bio and stats
  - Skills chips (grouped by category — add/remove/rename groups freely)
  - Project cards (title, description, tech chips, and links — duplicate a `<article class="project-card">` block to add more)
  - Contact section: email, GitHub, and LinkedIn links (three places — header, contact list, and footer)
- **`assets/profile.jpg`** — add a photo here (roughly 4:5 portrait ratio looks best)
- **`assets/resume.pdf`** — add your résumé here; the "Resume" button in the header downloads it

## 2. Wire up the contact form

GitHub Pages only serves static files — there's no server to receive form submissions. The form currently shows a friendly placeholder message on submit. To make it actually send you email, the easiest free option is [Formspree](https://formspree.io):

1. Create a free Formspree account and a new form, and copy your endpoint URL.
2. In `js/script.js`, replace the placeholder logic in the submit handler with a `fetch()` POST to that endpoint (Formspree's docs show the exact snippet).

Until then, the `mailto:` link in the Contact section works immediately with no setup.

## 3. Deploy to GitHub Pages

1. Create a new GitHub repository (public) and push these files to it:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select the **main** branch and **/ (root)** folder, then **Save**.
5. Wait a minute or two — your site will be live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

If you want it at `https://<your-username>.github.io` directly (no repo name in the path), name the repository exactly `<your-username>.github.io`.

## Notes

- No frameworks or build tools — open `index.html` directly in a browser to preview locally.
- Colors, fonts, and spacing are all defined as CSS custom properties at the top of `css/style.css` if you want to adjust the palette.
- The design respects `prefers-reduced-motion` and has visible keyboard focus states throughout.
