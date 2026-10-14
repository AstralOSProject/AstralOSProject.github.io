# AstralOS Website

The AstralOS website is a static site built with HTML, CSS, and a small amount of JavaScript. It has no package install or build step.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Files

- `index.html` — homepage
- `downloads.html` — device list and download dialogs
- `device-<codename>.html` — device information and installation steps
- `404.html` — not-found page
- `style.css` — layout, colors, and responsive styles
- `download-popup.js` — download dialogs
- `scroll-reveal.js` — section reveal effects
- `logo.png`, `avatar*.png`, `shot*.png` — site images
- `maintainer-guide.md` — maintainer information

## Adding a device

Add a device card to `downloads.html` and create a matching `device-<codename>.html` page. Keep links and image paths relative to the site root. Download buttons use the `data-download-soon` attribute; set `data-available="true"` and `data-build-url` when a release is available.

## Publishing

GitHub Pages serves the `main` branch from the repository root at [astralosproject.github.io](https://astralosproject.github.io/). Changes appear there after they are pushed to that repository.
