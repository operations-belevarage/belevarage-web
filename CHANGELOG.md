# belevarage-web — Changelog

## 2026-10-19 — Removed ALL fabricated/unverifiable numeric claims (new build)

Founder override ("no fake claims at all"): reworded uncited stats qualitatively and
removed/softened every projection number across the site.
- Home: removed the numeric impact stats grid (1.9M / 55-106 / ₹25K Cr / 100+); kept the
  "AI That Enables People" section (heading + narrative + CTA). Reworded the agriculture
  sector card ("Much produce is lost to wastage, and middlemen take a heavy cut" / "far less waste").
- /about: reworded "30-40% of produce" → "much of their produce"; removed the "Impact by
  Numbers" projection block; story/mission kept.
- /impact: removed the "Target Impact Metrics" block; stripped the per-category "X-Y
  person-days per event" badges (kept role descriptions); kept Jobs model + Triple Bottom Line.
- /agriculture: reworded the "30-40% wastage / 50%+ to middlemen" callout qualitatively;
  "Eliminate/Zero wastage" → "Reduce/Less wastage"; registration form intact.
- /investors: reworded Investment Highlights (dropped $1T+, 1.9M, 100+, 55-106); replaced the
  Year 1/3/5 GMV projection table with a qualitative "Building for Scale" section; dropped "100+"
  from the Series A line; removed the Use-of-Funds percentages (kept the categories); inquiry
  form intact.
KEPT: all genuine content (products, how-it-works, Shivo, sectors, role benefits, forms) and
honest qualitative problem narratives.
Site-wide grep confirms no fabricated statistic/metric/count/percentage/named claim remains in
displayed content. Verified on :5190: pages read well, no empty/broken pages, no dead links, no
console/server errors.

## 2026-10-19 — Final fake-content cleanup before go-live (new build)

Per founder (keep problem stats + projections; omit the rest):
- /impact: removed the fabricated "1.9M Livelihoods Created" and "100+ Active Communities"
  counters; kept the "₹25K Cr GMV Target" and "55-106 Person-Days" projections (block kept,
  re-balanced to 2 cols). Softened the page meta description (dropped the "1.9 million" claim).
  Page remains substantive (hero + metrics + Employment Model + Triple Bottom Line), so NOT hidden.
- /about: removed only the false "30% Farmer Income Increase" stat; kept the other three
  (projections) and the rest of the page.
- /blog: placeholder posts removed; now an honest "coming soon" page, and its footer link was
  removed.
KEPT (founder's decision): the problem stats ("30-40% produce wastage", "middlemen take 50%+")
and all business projections.
Verified on :5190: the three achievement numbers are gone, /blog is hidden, problem stats +
projections still present, no dead nav/footer links (no /blog, /press, /team links), no
empty/broken pages, no console/server errors.

## 2026-10-19 — Fixed two role-card images on /how-it-works (new build)

Per founder (two images misread the card meaning): Community Members now uses the Diwali
family image (people/family participating, not a flower vendor); Business Owners now uses the
professionals-at-a-meeting image (reads "business/professional", not a roadside hawker).
Farmers and Healthcare unchanged. Community Members reuses an existing image; the Business
Owners card uses a clearly Indian kirana/grocery store owner in his shop (sourced from Pexels
by scraping its search results — no attribution needed, so no /credits change). Verified on
:5190, no console/server errors.

## 2026-10-19 — Removed fabricated press/team content; hid emptied pages (new build)

Founder approved removing the rest of the fabricated content:
- /press: removed the made-up press releases ("Series A Funding Round", "Social Impact
  Innovation Award") and "Quick Facts". With nothing real left, the page is now an honest
  "Newsroom — coming soon" state, and its "Press & Media" link was removed from the footer.
- /team: removed the placeholder/fake bios (Rajesh Kumar, Priya Sharma, Amit Patel,
  Sunita Rao). Replaced with an honest "Meet the Team — coming soon" state (it was not linked
  from nav/footer, so no links to clean up).
Verified on :5190: both pages render a clean coming-soon state, no fabricated content, no
dead nav/footer links, no empty/broken pages, no console/server errors.

See the session report for the full "flagged for founder review" list (unverifiable stats,
projections, blog posts).

## 2026-10-19 — Removed fabricated testimonials / social proof (new build)

Per founder (no fake content on the site): removed all fabricated testimonials / success
stories / fake quotes with invented customer names:
- /agriculture: deleted the "Success Stories / How Farmers Benefit" section (Anand P.,
  Lakshmi D., Ramesh K.).
- /impact: deleted the "Success Stories / Real Impact, Real People" section (fake "Village
  Council Head" quote + unverifiable achievement stats like "2,400+ farmers").
- /press: deleted the "In the News" section with fake quotes attributed to real outlets
  (The Economic Times, Business Standard, Inc42, YourStory), and its data const.
- (The homepage "Community Voices" testimonials were already removed earlier.)
A site-wide grep confirms no remaining testimonial/success-story/fake-quote/invented-name
content. Verified on :5190: no fake social proof, no layout gaps, no console/server errors.

FLAGGED (not removed — out of this scope, awaiting founder's call): /press still has fabricated
PRESS RELEASES (a "Series A Funding Round" and a "Social Impact Innovation Award") and "Quick
Facts" numbers; /team has placeholder bios (e.g. "Priya Sharma"); admin has mock press data.

## 2026-10-19 — Images on "How Each Role Benefits" cards (new build)

Per founder: the four role cards in the "How Each Role Benefits" section on /how-it-works
(previously text-only checklists) now each have a banner image at the top: Community Members →
marigold market; Business Owners → market sellers; Farmers → farmer ploughing with oxen;
Healthcare Providers → public-domain clinical photo. Card restructured (image flush top, padded
content below), cards stack single-column on mobile. New images: farmer (Flickr CC BY, credited
on /credits); healthcare (reused, Public Domain); the other two reuse existing credited images.
Verified on :5190: all four show their image, responsive, no horizontal scroll, no console/server
errors.

## 2026-10-19 — Per-role imagery in "One AI, Every Profession" (new build)

Per founder: each role panel in the Shivo audience picker (/genx-tech) now shows a fitting
image beside its benefits. Panel restructured to two columns (benefits + image) on desktop,
stacking text-first on mobile; image swaps when the role changes. Mapping: Doctors & Clinics →
a public-domain clinical photo (no attribution); Suppliers & Sellers → spice market; Shops &
Businesses → market sellers; Event Hosts → festive diyas; Service Providers → handloom craft
(the last four reuse images already on the site, so no new credits). Verified on :5190: each
role shows its image, swaps correctly, responsive, no horizontal scroll, no console/server errors.

## 2026-10-19 — Ownership positioning rewrite (new build)

Repositioned Belevarage from "builder" to the owner/operator that builds, markets AND grows
LCCIA Bandh ("LCCIA Bandh is a Belevarage platform"):
- Hero body replaced with the founder's verbatim ownership/go-to-market paragraph (key line
  "LCCIA Bandh is a Belevarage platform." emphasised).
- "Who We Are" heading → "Belevarage — behind LCCIA Bandh, end to end"; body now says we
  own it, take it to market and grow its revenue (keeping the end-to-end facts + Shivo).
- Footer: tagline "The company behind LCCIA Bandh", description reworded to "we build it, take
  it to market, and grow it", and bottom line → "LCCIA Bandh is a Belevarage platform •
  Powered by Shivo".
Verified on :5190: hero + who-we-are + footer read correctly, no horizontal scroll, no
console/server errors.

## 2026-10-19 — Shivo for Business section (new build)

Added a dedicated "Shivo for Business" section to the GenX Tech / Shivo page (below the
"every profession" tabs), using the founder's verbatim copy — enterprise AI-workforce pitch
with three themed feature rows (AI Workforce, Supply Chain, Latest Technology) and a
"Bring Shivo to Your Business →" CTA (links to /contact). Maroon/gold theme, alternating
image sides on desktop, single-column text-first on mobile. Imagery: team + analytics
(Unsplash, no attribution) and a shipping-container yard (Flickr CC BY, credited on /credits).
Verified on :5190: renders, images load, responsive, no horizontal scroll, no console/server
errors.

## 2026-10-19 — Featured Genealogy in Solutions (new build)

Per founder (reversing an earlier "swap out genealogy" idea — keep and feature the word):
added "Genealogy" as a 5th item in the Solutions dropdown (Communities, Businesses,
Agriculture, Healthcare, Genealogy), linking to the existing `/genealogy-trust` page.
Gave that page's hero an Indian image (Diwali diyas) + overlay to match the rebuilt pages'
style. Verified on :5190: dropdown shows 5 items and navigates correctly at desktop
(hover/focus) and mobile (flat Solutions group), no overlap, no console/server errors.

## 2026-10-19 — Removed homepage testimonials (new build)

Per founder: deleted the "Community Voices" testimonials section from the home page. The
Genealogy Trust section now flows directly into the final CTA — both are full sections with
their own padding, so no empty gap. Verified on :5190: no testimonials text, no layout gap,
no horizontal scroll, no console/server errors.

## 2026-10-19 — Header logo on maroon (new build)

Per founder feedback: the gold "B" mark now sits directly on the maroon header with a
transparent background (removed the ivory circular badge) and a soft drop-shadow for depth.
The source asset was a gold mark on a solid white iOS-icon background; flood-filled the
exterior white to transparent and feathered the edge → `public/images/belevarage-mark.png`.
Navbar uses the new mark with `filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5))`. Verified
crisp and legible on home + /genx-tech at desktop and mobile; no console/server errors.

## 2026-10-18 — Hero reveal robustness (new build)

Made the fade-in an enhancement rather than a gate: `.animate-in`/`.delay-*` no longer
hold a persistent `opacity: 0` (now `animation-fill-mode: both`), and added a
`prefers-reduced-motion` fallback forcing `opacity: 1`. Above-the-fold hero content can
no longer be stuck invisible if the animation is disabled or doesn't run. The animation is
load-triggered (not scroll-triggered), so it fires above the fold. Verified Shivo hero
visible on load at desktop and mobile.

## 2026-10-18 — English-only sweep + five product write-ups (new build)

- **English-only, sitewide** (founder, firm): removed all Devanagari and romanised
  Marathi/Hindi. Specifically: logo wordmark (already English), page `<title>`/OG set to
  "Belevarage — …", keyword metas, the `the Devanagari step numerals` step numerals → `01–04`, the admin sidebar
  logo, the footer motto (`Satyameva Jayate (Sanskrit motto)` → "All rights reserved."), and the words
  "Bharat" → "India", "Bhasha" (none left), and "Kutumb" (callouts reworded). A source grep
  for the Devanagari range (U+0900-U+097F) now returns **zero** matches. Genuine Indian proper nouns
  (Belevarage, LCCIA Bandh, Jaipur, etc.) and the Indian imagery are unchanged.
- **Five founder-approved product write-ups placed** (verbatim, English, public-safe):
  - **Shivo** — now leads the GenX Tech page hero ("Shivo — the intelligence inside
    everything" / "Your AI, in your language."), above the 5-audience explainer. Brand casing
    normalised to "Shivo" sitewide.
  - **Eventra, LevaKart, Find a Doctor, Sugee** — new homepage "Belevarage Product Suite"
    section ("Apps That Do the Work For You") as four themed cards with Indian imagery
    (Find a Doctor is icon-forward), each linking to its sector page.

LevaKart tagline and Sugee body were aligned to plain English per the founder's English-only
rule: "Your bazaar, online." → "Your market, online." and "brings the mandi to the farmer's
phone" → "brings the market to the farmer's phone". The rest of the approved copy is verbatim.

Verified on :5190 (home + /genx-tech): clean compile, no console/server errors, no horizontal
scroll, header still clean. Still local-only — not deployed.

## 2026-10-18 — Header refinement + brand corrections (new build)

Follow-up on the founder's header feedback and two brand corrections:

- **Solutions dropdown** — grouped the four audience pages (Communities, Businesses,
  Agriculture, Healthcare) under one "Solutions" menu, cutting the top row to 6 items
  (How It Works, Solutions ▾, GenX Tech, About, Contact) + a single "Sign up ↗" button.
  CSS hover/focus dropdown; on mobile the items appear flat under a "Solutions" group label.
- **Brand name English-only** — removed the Devanagari "the Devanagari brand name" from the logo lockup and
  page titles; the header now shows the gold-"B" mark + "BELEVARAGE" only. (Genuine Marathi
  UI copy and the footer motto left intact.)
- **Tagline removed** — deleted the decorative "Sanjha bazaar, digital daur" line under the
  hero heading and the equivalent "Vasudhaiva Kutumbakam" line in the closing CTA.
- **Mobile menu fix** — raised the menu above the navbar and added top clearance so the logo
  no longer bleeds over the first item; menu scrolls if tall.
- Nav breakpoint lowered to 1024px (fewer top-level items), tap targets kept ≥44px.

Verified at 375px and 1280px: single clean logo, no logo/nav overlap, one-line items,
dropdown opens, no horizontal scroll, no console/server errors. Still local-only, not deployed.

## 2026-10-18 — Design/content pass: header, logo, GenX/SHIVO, Indian imagery (new build)

Founder-requested polish on the un-published Next.js build (still local only):

1. **Header declutter** — reworked the navbar so the logo and nav never overlap at any
   width. Tightened link spacing, raised the desktop breakpoint to 1200px (clean hamburger
   below), added body-scroll lock + ≥44px tap targets, and gave the home hero top clearance
   for the fixed navbar. No horizontal scroll at 375px or 1280px.
2. **Real logo** — replaced the red-box crest with the actual Belevarage gold-"B" mark,
   pulled from the live Bandh favicon (`bandh.lccia.in/icons/apple-touch-icon.png`), shown in
   a clean circular badge. Saved to `public/images/belevarage-logo.png`.
3. **GenX page theme** — dropped the navy scheme; the page now uses the platform
   maroon/gold tokens, consistent with the rest of the site.
4. **Nav order** — `GenX Tech` now sits after `Healthcare` (… Healthcare, GenX Tech, About,
   Contact, Suppliers, Sign up).
5. **GenX content → SHIVO** — rebuilt `/genx-tech` around **SHIVO**, Belevarage LCCIA's AI,
   with a five-audience explainer (Doctors & Clinics, Suppliers & Sellers, Shops & Businesses,
   Event Hosts, Service Providers) in plain-language benefits. Public-safe copy only (no
   internal mechanics, pricing, matching logic or third-party names).
6. **Indian imagery** — replaced the Western stock with Indian photography (Taj Mahal hero,
   Diwali diyas, market vendors, spice bins, marigold bazaar, classical dancer). Centralised in
   `src/lib/images.ts`; healthcare card is icon-forward; CC BY 2.0 photos credited on a new
   `/credits` page linked from the footer.

Verified locally at `http://localhost:5190` (home, `/genx-tech`, mobile + desktop): header no
longer overlaps, images load, audience tabs switch, no console/server errors. Still not deployed.

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
