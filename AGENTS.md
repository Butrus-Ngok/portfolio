# AGENTS.md

## Cursor Cloud specific instructions

This is a static portfolio website (HTML, CSS, vanilla JavaScript). There is no build step, no package manager, no backend, and no database.

### Running the dev server

Serve the site with any static file server from the repository root:

```
python3 -m http.server 8080 --directory /workspace
```

Then open `http://localhost:8080/index.html` in Chrome.

### Linting / Testing

There are no automated tests or linters configured in this project. Validation is done by visually inspecting the site in a browser and checking that the JavaScript console has no errors.

### Key files

- `index.html` — main page (single-page portfolio)
- `style.css` — all styles
- `script.js` — smooth scrolling, scroll animations, contact form handler
- External CDN dependencies: Font Awesome 6.4.0, Google Fonts (Inter)
