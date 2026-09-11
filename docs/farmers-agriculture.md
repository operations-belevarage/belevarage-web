# Farmers & Agriculture on the BELEVARAGE Platform

A write-up of the agriculture vertical: the proposition, the participant journey,
what is implemented in this repository today, and what remains to be built.

> **Scope note.** This document describes the agriculture vertical of BELEVARAGE
> as represented in the `belevarage-web` codebase. Narrative claims (wastage
> percentages, income uplift, impact counts) are reproduced from the public
> marketing pages; they are positioning copy, not measured platform telemetry.
> Sections marked **Implemented** describe code that exists and runs.

---

## 1. Why agriculture is a core vertical

Agriculture is one of four verticals BELEVARAGE addresses, alongside local
business, healthcare, and community/cultural commerce. It is listed on the
landing page as a first-class use case (`src/app/(public)/page.tsx`):

| | |
|---|---|
| **Problem** | 30–40% produce wastage; middlemen capture 50%+ of value |
| **Solution** | "Book from Home, Pick on the Way" — pre-sell before you harvest |
| **Outcome** | Confirmed demand, direct income, zero waste |

The framing across the site is that agricultural loss is a *demand-visibility*
problem, not a logistics problem. A farmer plants and harvests without knowing
who will buy, then races a spoilage clock through a chain of intermediaries.
Each hop costs margin and time. BELEVARAGE's answer is to move the sale to
*before* the harvest: demand is collected in advance and the harvest is sized
against orders that already exist.

## 2. The commercial model

### 2.1 Book from Home, Pick on the Way

The mechanism is pre-selling against a scheduled harvest, with collection at a
farmer-declared pickup point rather than last-mile delivery. Two implications
follow:

- **Wastage collapses toward zero** because volume harvested is bounded by
  volume already sold.
- **The intermediary layer is bypassed** because the buyer is a named community
  member, not an aggregator. Price discovery happens between producer and
  consumer.

The pickup point is the physical anchor of the model — it is captured as a field
at registration and is what makes "pick on the way" literal: collection folds
into a commute rather than requiring a delivery fleet.

### 2.2 Harvests as events

Agriculture is not modelled as a product catalogue. It rides the platform's
event engine: a farmer lists an upcoming harvest *as an event*, community
members book against it, and the event date becomes the harvest and collection
date. The five-step journey published on `/agriculture`:

1. Register your farm and crops
2. List upcoming harvests as events
3. Community members book in advance
4. Harvest knowing exact demand
5. Zero wastage, fair income, direct relationships

This is why the farm can become, in the platform's language, "a community
destination" — the same event that clears inventory also creates a gathering,
which is the platform's core primitive.

### 2.3 Trust as the settlement layer

Transactions are underwritten by the genealogy-based trust network rather than
by ratings or escrow alone. A buyer commits money to an unharvested crop, which
is an unusually high-trust transaction; the trust graph (`/genealogy-trust`,
backed by a graph database per the technology page) is what makes that
commitment rational. Verified relationships, trust-path calculation, and fraud
prevention are the stated functions of that engine.

## 3. The farmer journey

### 3.1 Registration — **Implemented**

`/agriculture` (`src/app/(public)/agriculture/page.tsx`) is a client-rendered
page combining the pitch with a registration form. Collected fields:

| Field | Required | Notes |
|---|---|---|
| `fullName` | Yes | |
| `location` | Yes | Prompted as "Village, District, State" |
| `mobile` | Yes | Primary contact channel |
| `cropTypes` | Yes | Multi-select chips |
| `monthlyVolume` | No | Banded: under 100 kg → above 5 tons |
| `pickupPoint` | No | Where customers collect produce |
| `cooperative` | No | FPO / cooperative / group affiliation |

Crop taxonomy (`CROP_TYPES`): Vegetables, Fruits, Grains, Pulses, Dairy, Spices,
Flowers, Other. The multi-select is deliberate — mixed-crop smallholding is the
norm, and the model depends on knowing the full basket a farm can offer across a
season, not a single headline crop.

Two design choices are worth calling out:

- **Volume is banded, not exact.** A farmer registering by phone is not expected
  to produce precise tonnage. Bands are enough to route them to the right buyer
  pool.
- **Cooperative is a first-class field.** Aggregating through an existing FPO or
  cooperative is a faster acquisition path than onboarding farmers one at a
  time, and the field makes those clusters visible.

### 3.2 Submission and storage — **Implemented**

The form POSTs JSON to `/api/farmers` (`src/app/api/farmers/route.ts`), which
creates a `Farmer` row via Prisma with `status: 'PENDING'` and returns `201`. On
success the form resets and confirms; on any failure it shows a generic error.

The `Farmer` model (`prisma/schema.prisma`) mirrors the form exactly, adding
`id` (UUID), `status` (`RegistrationStatus`: `PENDING` | `APPROVED` |
`REJECTED`), `createdAt`, and `updatedAt`. `cropTypes` is a Postgres string
array.

### 3.3 Review and approval — **Partially implemented**

`GET /api/farmers` returns all registrations newest-first. The admin screen
`/admin/agriculture` (`src/app/admin/agriculture/page.tsx`) consumes it and
renders:

- Four summary tiles: total farmers, pending approval, approved, average crops
  per farmer.
- A pending-approvals table: name, location, crops, contact, registration date,
  and Approve / Reject buttons.

Registration is therefore gated: a farmer does not self-publish to the
marketplace. Human review sits between sign-up and activation, which is
consistent with a trust-first platform.

## 4. What the farmer gets

From `/how-it-works`, the farmer role is defined by four benefits: pre-sell
harvests, eliminate middlemen, reduce wastage, get fair prices. The testimonials
on `/agriculture` articulate the same three axes:

- **Certainty** — "For the first time, I know my customers before I harvest."
- **Margin** — "Direct income from consumers means 40% more earnings."
- **Relationship** — "My farm is now a community destination. People come for
  the experience, not just produce."

The third is the strategic one. A farm that hosts is no longer only a supplier;
it becomes a venue, which pulls it into the event economy described below.

## 5. Impact model

Agriculture carries a share of the platform-level targets published on `/impact`
and `/about`:

| Metric | Target |
|---|---|
| Livelihoods created | 1.9M by Year 5 |
| Active communities | 100+ |
| GMV | ₹25,000 Cr by Year 5 |
| Farmer income increase | 30% |
| Employment per event | 55–106 person-days |

Figures cited as achieved to date include 2,400+ farmers with increased income.
Each harvest event also generates employment across the six categories on
`/impact` — operations, logistics, hospitality, marketing, creative, and tech
support — so an agricultural event is a local employment event, not only a
sale.

Against the triple-bottom-line framing: economically, direct producer income and
local wealth retention; socially, rural job creation that slows urban migration;
environmentally, reduced food wastage and local sourcing. Reduced wastage is the
rare lever that pays on all three at once, which is why it anchors the vertical.

## 6. Technology touchpoints

| Layer | Role in this vertical |
|---|---|
| Event Engine | Harvest listings, attendance forecasting, resource optimisation |
| Genealogy Engine | Buyer/seller trust verification for pre-harvest commitments |
| AI Intelligence | Demand forecasting, buyer matching, business insight for the farmer |
| Next.js + React | Public registration page, admin review console |
| Node.js + Prisma | `/api/farmers` endpoints, type-safe access to `Farmer` |
| PostgreSQL | Registration storage, including `cropTypes` array |
| Neo4j | Trust-graph relationships |

The AI posture stated on `/technology` — augment, transparent, opt-in,
privacy-first — matters here: the farmer's AI is positioned as a business
manager that handles matching and logistics, not a pricing engine that replaces
their judgement.

## 7. Current state vs. the full proposition

What exists in this repository today is the **acquisition and vetting front
door** for the agriculture vertical. It works end to end: a farmer registers,
the record persists, an administrator sees it queued for review.

Not yet present in this codebase:

1. **Harvest events.** There is no event, listing, booking, or order model in
   `schema.prisma`. Steps 2–5 of the published farmer journey have no backing
   data model here.
2. **Approval actions.** The Approve / Reject buttons on `/admin/agriculture`
   have no `onClick` handlers, and no `PATCH`/`PUT` route exists to transition
   `status`. Registrations cannot currently leave `PENDING`.
3. **Farmer-facing accounts.** `User` covers admin roles only
   (`SUPER_ADMIN` | `ADMIN` | `EDITOR`). Farmers are records, not authenticated
   users, so there is no producer login or dashboard.
4. **Trust graph.** Neo4j and the genealogy engine are described on the
   technology page but are not wired into this application.
5. **Notifications.** The success message promises "We'll contact you soon";
   no email or SMS is dispatched on registration.

### Issues to address before launch

- **`GET /api/farmers` is unauthenticated.** It returns every registration,
  including full names, farm locations, and mobile numbers, to any caller. The
  admin pages are client-side only and the login route
  (`src/app/api/auth/login/route.ts`) sets no session or cookie — its own
  comment notes this. This endpoint needs authentication before any real farmer
  data is collected.
- **No server-side validation.** `POST /api/farmers` writes whatever the body
  contains; required fields are enforced only by the browser form, and mobile
  numbers are not validated or normalised.
- **No duplicate protection.** Nothing prevents the same farmer registering
  repeatedly, which will distort the admin counts.

### Suggested build order

1. Authenticate the admin surface and lock down `GET /api/farmers`.
2. Add `PATCH /api/farmers/:id` and wire Approve / Reject so the review queue
   functions.
3. Add server-side validation, mobile normalisation, and duplicate detection.
4. Send a registration acknowledgement (SMS first — it matches the audience).
5. Model harvests as events, with booking and pickup-point fulfilment — the step
   that turns a registration list into the pre-selling marketplace the vertical
   is built around.

---

*Sources: `src/app/(public)/agriculture/page.tsx`, `src/app/(public)/page.tsx`,
`src/app/(public)/how-it-works/page.tsx`, `src/app/(public)/impact/page.tsx`,
`src/app/(public)/about/page.tsx`, `src/app/(public)/technology/page.tsx`,
`src/app/api/farmers/route.ts`, `src/app/admin/agriculture/page.tsx`,
`prisma/schema.prisma`.*
