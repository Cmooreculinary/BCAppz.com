# Blue Collar Appz Co. — Website

Static landing page for Blue Collar Appz Co. Each tile in the app roster links out to its live Render deployment.

## Local preview

Open `index.html` directly in a browser, or serve the folder with any static file server:

```
npx serve .
```

## Deploy on Render

This repo includes a `render.yaml` blueprint.

1. In the Render dashboard, click **New +** → **Blueprint**.
2. Connect this repository (`Cmooreculinary/BCAppz.com`).
3. Render will detect `render.yaml` and create a Static Site service named `bcappz-website`.
4. Once deployed, point your custom domain (e.g. `blue-collar-apps.cmooreculinary.com`) at the Render service under the service's **Settings → Custom Domains**.

No build step is required — the site is plain HTML/CSS.
