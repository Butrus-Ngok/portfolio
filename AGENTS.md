# AGENTS.md

## Cursor Cloud specific instructions

This is a zero-dependency static portfolio website (HTML, CSS, vanilla JavaScript). There is no build step, no package manager, no framework, and no backend.

### Running the dev server

Serve the site with Python's built-in HTTP server:

```
python3 -m http.server 8080 --directory /workspace
```

Then open `http://localhost:8080/` in a browser.

### Testing

There are no automated tests or linters configured. Manual testing consists of:

- Verifying the page loads at `http://localhost:8080/`
- Scrolling through all sections (hero, about, experience/education, contact)
- Submitting the contact form — a browser alert should confirm the submission and the form resets

### Key files

| File | Purpose |
|------|---------|
| `index.html` | Single-page portfolio markup |
| `style.css` | All styles (responsive, uses Google Fonts + Font Awesome CDN) |
| `script.js` | Contact form handler, smooth scroll, scroll animations |
