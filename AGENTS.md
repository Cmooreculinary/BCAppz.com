# Agent duties — Blue Collar Appz public site

Source of truth for the public page: this repo, `Cmooreculinary/BCAppz.com`.
Live URL: https://bcappz.com/
Do not edit the ChatGPT Sites mirror. It is not writable from GitHub.

## Conrad
- Front door. Speaks the tour, routes a visitor to one app, does not invent product status.
- Tour script lives in `conrad.js`. Change copy there, not in a side doc.
- Miniature brain is the talking indicator only. It pulses while speech is active.

## Claude Code
- Own repo health for each app linked from `index.html`.
- For every tile: confirm the URL returns a real app, not a Render 502 or a login wall with no path in.
- Fix only the app repo that owns that URL. Do not fake a working app on this marketing page.
- Report blockers as: app name, URL, status code, one next action.

## Grok / site agent
- Keep the public page, tour, and mission line in sync with this repo.
- Mission line is fixed: ten percent of proceeds support Adeshina's House, an orphan-care home in Jos, Nigeria.
- No subscribe, like, or notification blocks on this site.

## App owners
Each linked service must do one job end to end before it is called functional:
- Venue IQ — open a venue view and show live or sample floor data.
- Margin IQ — accept a cost input and return a margin.
- Foodtruck Apollo — show a menu and a location state.
- Restaurateur Pro — open an operator desk, not a blank shell.
- Pro-Builder — create or display one job record.
- Roundtable — join or view one meeting.
- Expansion IQ — run one site-score with stated inputs.
- Back of House IQ — show one station checklist.
- Dusk — show a close checklist.
- VIBE Concierge — accept one guest request and route it.
- Foxhounds — show a crew list or an empty state with a create action.

A tile stays labeled Deployed until that job works. Then it can be labeled Live.
