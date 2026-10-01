# Move to Cloudflare

Public site first. App backends second.

## This repo (bcappz.com)

Already set for Workers static assets in `wrangler.jsonc` (`assets.directory` is `.`).

1. Cloudflare dashboard → Workers & Pages → Create → Worker named `bcappz`.
2. GitHub repo Settings → Secrets → Actions:
   - `CLOUDFLARE_API_TOKEN` (Workers deploy permission)
   - `CLOUDFLARE_ACCOUNT_ID`
3. Push to `main`. Workflow `.github/workflows/cloudflare.yml` runs `wrangler deploy`.
4. Attach custom domain `bcappz.com` on that Worker. Leave Render running until the domain answers from Cloudflare, then delete the Render static service.

Do not put the API token in the repo or in chat.

## Apps still on Render

A static marketing page can move today. These are separate services. A tile is not moved until its own repo deploys on Cloudflare and the tile URL is updated.

| App | Current host | Cloudflare target |
| --- | --- | --- |
| Geocastnet | bca-geocastnet.onrender.com | Worker if it is an API; Pages/Workers assets if it is a front end |
| Margin IQ | margin-iq.onrender.com | Worker |
| Foodtruck Apollo | footruck-apollo-frontend.onrender.com | Workers static assets |
| Restaurateur Pro | restaunteur-pro-frontend.onrender.com | Workers static assets |
| Pro-Builder | pro-builder-pwyf.onrender.com | Workers static assets |
| Roundtable | roundtable-vo-frontend.onrender.com | Workers static assets; API stays a Worker |
| Expansion IQ | expansion-iq-wn68.onrender.com | Worker |
| Venue IQ | venue-iq-dashboard.onrender.com | Workers static assets |
| Back of House IQ | bcaz-b-o-h-iq-api.onrender.com | Worker |
| Dusk | dusk-4pj5.onrender.com | Workers static assets |
| VIBE Concierge | vibe-concierge-web.onrender.com | Workers static assets |
| Foxhounds | foxhounds-social.onrender.com | Workers static assets |

Claude Code owns one app repo at a time: add `wrangler.jsonc`, deploy, then change the href in `index.html`. Do not point a tile at Cloudflare until that URL loads.
