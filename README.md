# Vireo

Vireo is a responsive, editorial-style news discovery and reading experience built with plain HTML, CSS, and JavaScript. The repository did not include an existing application framework, article service, backend, or API configuration, so this version uses a small set of clearly labeled sample stories; it does not fetch live news. Story artwork is created locally with CSS, and no API credentials or third-party news service are required.

## Run locally

Open `index.html` in a browser, or serve the folder with a local HTTP server, for example:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`. Saved stories are kept in browser storage when available.

## Test

```sh
node --test tests/app.test.js
```
