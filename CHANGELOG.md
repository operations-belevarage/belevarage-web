# belevarage-web — Changelog

## 2026-10-18 — Repositioned the site around LCCIA Bandh + GenX Tech (new Next.js build)

Reframed the marketing site so Belevarage is presented as **the company that built and
operates the LCCIA Bandh Platform**, and every path funnels visitors to Bandh.

- **Pivot CTAs everywhere** to the live platform: member sign-up (`https://bandh.lccia.in`)
  and supplier registration (`https://supplier.lccia.in`) — in the navbar, a new homepage
  "Three Ways Into LCCIA Bandh" section, the footer, and all closing CTAs. External links
  open in a new tab.
- **New "GenX Tech" tab** (`/genx-tech`): a dedicated AI-capabilities page branding
  Belevarage's AI as *GenX Tech*, with an interactive 4-tab explainer (AI Business Manager,
  Agentic AI, Demand Intelligence, Trust & Bhasha AI) and a 6-card principles grid.
- **Homepage rewrite** (`src/app/(public)/page.tsx`): new hero positioning Belevarage as the
  maker of Bandh, a "Who We Are" block, and reworded sections (BELEVARAGE → LCCIA Bandh).
- **Navbar & Footer** (`src/components/layout/`): GenX Tech nav item, Bandh sign-up/supplier
  CTAs, and a new footer "LCCIA Bandh" column (member sign-up, supplier registration,
  member login, APAI Studio).
- **Imagery + icons**: lots of verified open-licence Unsplash photography across hero, pivot
  cards and sectors, plus a new dependency-free inline SVG icon set
  (`src/components/ui/Icon.tsx`).
- **Fixed a routing conflict**: removed the leftover `src/app/page.tsx` (unstyled Tailwind
  scaffold) that collided with `src/app/(public)/page.tsx` at `/`.
- Added `.claude/launch.json` to run the dev server on the project's reserved port **5190**.

Verified locally at `http://localhost:5190` (homepage, `/genx-tech`, `/how-it-works`): pages
compile, images load, tab switching works, no console or server errors.

> NOTE: This is the **new Next.js build**, which is **not the live site**. Visitors still see
> the older Python app (see the HTTPS entry below). Publishing this rebuild is a separate,
> deliberate decision — it would replace the live site and needs its own migration plan.

## 2026-10-18 — Fixed the HTTPS "not secure" warning on www.belevarage.com

**Symptom:** Chrome showed "This site doesn't support a secure connection" on
https://www.belevarage.com and blocked the page.

**Cause:** The live marketing server was serving a **self-signed** TLS certificate
(issuer = subject = `CN=belevarage.com`), which browsers do not trust. A proper
Let's Encrypt setup had already been wired into the deployed app
(`.platform/hooks/predeploy/02_bootstrap_ssl.sh` + `postdeploy/03_letsencrypt.sh`,
webroot challenge, `--allow-subset-of-names`), but it had never completed because
the domain's DNS wasn't pointing at this Elastic Beanstalk instance when it last ran.
By 2026-10-18 DNS was correct (`www.belevarage.com` → EB CNAME → instance 3.7.117.30).

**Fix (no app redeploy):** Ran the deployed app's own postdeploy hook on the live
instance (`i-0cd1064af10b8c033`, env `belevarage-marketing`, ap-south-1) via AWS SSM:
`bash /var/app/current/.platform/hooks/postdeploy/03_letsencrypt.sh`. This obtained a
real Let's Encrypt certificate for **www.belevarage.com**, reloaded nginx, removed the
self-signed bootstrap, and installed auto-renewal.

- Certificate: issuer `O=Let's Encrypt, CN=YE1`, subject `CN=www.belevarage.com`,
  valid 2026-10-18 → 2027-01-16.
- Auto-renewal: `/etc/cron.d/certbot-renew` (twice daily) + certbot's systemd timer.
  `certbot renew` uses the webroot challenge and reloads nginx on success.
- Because the Let's Encrypt wiring lives in the deployed `.platform/hooks`, the cert
  survives future redeploys of this (Python) bundle: predeploy sees an existing cert
  and skips the bootstrap; postdeploy sees a real cert and skips re-acquisition.

**Apex `belevarage.com`:** Served by GoDaddy *domain forwarding* (not this instance),
so it cannot carry a Let's Encrypt cert from this box — hence the cert is www-only by
design. The apex already redirects through to `https://www.belevarage.com/` with valid
TLS at each endpoint; the only weak spot is one plain-HTTP intermediate hop. Recommended
GoDaddy change: set the forward destination from `http://www.belevarage.com` to
`https://www.belevarage.com` to remove that hop. (Forwarding itself left unchanged here.)

**Verification (over the wire, 2026-10-18):**
- `openssl s_client` to www:443 → issuer Let's Encrypt, `Verify return code: 0 (ok)`.
- `curl -I https://www.belevarage.com` → `200 OK`, no certificate error.
- `curl -I http://www.belevarage.com` → `301` → `https://www.belevarage.com/`.

### Important note on what is actually live
The site **running in production is an older Python/Flask app** (`app.py`, `templates/`,
gunicorn on :8000), **not** the Next.js 15 + Prisma rebuild in this repository. This repo
has never been deployed to `belevarage-marketing`. Do **not** `eb deploy` this Next.js
code to that environment without a deliberate migration plan — it would replace the live
Python site with a different stack. The HTTPS fix above applies to whatever is live, so it
is unaffected by this, but the rebuild not being published is worth a separate decision.
