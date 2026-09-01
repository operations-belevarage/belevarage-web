# Board Resolution — Razorpay Payment Gateway

Razorpay asked for a formal Board Resolution on company letterhead, with the
authorised seal and signature, explicitly stating that the Razorpay Payment
Gateway will be used **exclusively** for the BELEVARAGE e-commerce marketplace
and for no other service or business activity.

| File | What it is |
| --- | --- |
| `Belevarage-Board-Resolution-Razorpay.docx` | The deliverable — 3-page Word document on the BELEVARAGE letterhead |
| `generate-board-resolution.js` | Script that produces the `.docx`, so the letterhead can be reused for other letters |

## Regenerating

```bash
npm install docx          # not a project dependency; install on demand
node docs/legal/board-resolution/generate-board-resolution.js
```

The letterhead pulls the gold monogram from `public/images/logo.png` and uses
the site's brand colours (`--crimson #811E18`, `--saffron-gold #C8862A`) from
`src/app/globals.css`.

## Fill these in before printing

Every value in `[square brackets]` is a placeholder. The site does not carry
the registered legal-entity details, so these had to be left blank rather than
guessed — a wrong CIN or director name on a document that Razorpay's compliance
team will verify against the MCA register is worse than a blank.

**Letterhead footer (appears on all 3 pages)**
- [ ] Registered office address + PIN
- [ ] CIN
- [ ] GSTIN

**Page 1 — particulars**
- [ ] Exact registered legal name (the document says `BELEVARAGE [PRIVATE LIMITED]` — replace with the name exactly as on the Certificate of Incorporation)
- [ ] Reference number and date
- [ ] Date, time and venue of the board meeting
- [ ] Names, designations and DINs of the directors present
- [ ] Chairman of the meeting

**Page 2 — resolutions**
- [ ] Settlement bank account number, bank name, branch, IFSC (resolution 4) — must be in the company's own name
- [ ] Name, designation and DIN/PAN of the authorised signatory (resolution 5)

**Page 3 — execution**
- [ ] Signatory name, designation, DIN
- [ ] Date and place
- [ ] Physical signature in the ruled space, and the common seal / company stamp inside the dashed box

## Two things to check

1. **Razorpay's address.** The addressee block uses Razorpay Software Private
   Limited's registered office at 1st Floor, SJR Cyber, 22 Laskar Hosur Road,
   Adugodi, Bengaluru – 560030. Confirm against the address your Razorpay
   relationship manager gives you before sending.
2. **Company secretary / counsel review.** This is drafted to the standard
   pattern for a Companies Act, 2013 board resolution, but it has not been
   reviewed by a professional. Have your CS or counsel read it before it is
   passed at the board meeting.

## Where the exclusivity language sits

Resolution 2 is the clause Razorpay is asking for. It states that the gateway is
used *solely and exclusively* for collections on the marketplace at
`www.belevarage.com` and its mobile apps, and not for any other service,
business, activity, vertical or line of business, nor for collections on behalf
of any third party, group entity or affiliate. Resolution 3 backs it with the
prohibited-business and RBI payment-aggregator compliance undertaking that
Razorpay's onboarding team normally looks for alongside it.
