/**
 * Generates the BELEVARAGE board resolution for the Razorpay Payment Gateway
 * onboarding, laid out on the company letterhead.
 *
 * Usage:
 *   npm install docx
 *   node docs/legal/board-resolution/generate-board-resolution.js
 *
 * Output:
 *   docs/legal/board-resolution/Belevarage-Board-Resolution-Razorpay.docx
 *
 * Every value inside [square brackets] is a placeholder that must be filled in
 * before the document is printed, sealed and signed. See README.md.
 */

const fs = require("fs");
const path = require("path");
const {
  AlignmentType,
  BorderStyle,
  Document,
  Footer,
  Header,
  HeadingLevel,
  ImageRun,
  LevelFormat,
  Packer,
  PageNumber,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  VerticalAlign,
  WidthType,
} = require("docx");

/* ------------------------------------------------------------------ brand */

const CRIMSON = "811E18";
const DEEP_CRIMSON = "5C1410";
const GOLD = "C8862A";
const INK = "1A0F0D";
const CHARCOAL = "3D2B29";
const STONE = "8C7B79";
const CREAM = "FDF9F4";

const DISPLAY = "Georgia";
const BODY = "Calibri";

/* A4 with 0.75" side margins -> usable content width in DXA. */
const CONTENT_WIDTH = 9746;

const REPO_ROOT = path.resolve(__dirname, "..", "..", "..");
const LOGO = path.join(REPO_ROOT, "public", "images", "logo.png");

/* --------------------------------------------------------------- helpers */

const GOLD_RULE = {
  bottom: { style: BorderStyle.SINGLE, size: 6, color: GOLD, space: 4 },
};
const CRIMSON_RULE = {
  bottom: { style: BorderStyle.SINGLE, size: 12, color: CRIMSON, space: 2 },
};

/** Ordinary justified body paragraph. */
function body(children, opts = {}) {
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: 200, line: 300 },
    ...opts,
    children: (Array.isArray(children) ? children : [children]).map((c) =>
      typeof c === "string"
        ? new TextRun({ text: c, font: BODY, size: 21, color: INK })
        : c
    ),
  });
}

/** "RESOLVED THAT ..." clause: the lead-in in crimson small caps, rest in ink. */
function resolution(lead, text) {
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: 240, line: 300 },
    indent: { left: 340 },
    children: [
      new TextRun({
        text: lead,
        font: BODY,
        size: 21,
        bold: true,
        color: CRIMSON,
        allCaps: true,
      }),
      new TextRun({ text: " " + text, font: BODY, size: 21, color: INK }),
    ],
  });
}

/** Section label above a block, e.g. "PARTICULARS OF THE MEETING". */
function sectionLabel(text) {
  return new Paragraph({
    spacing: { before: 200, after: 140 },
    border: GOLD_RULE,
    children: [
      new TextRun({
        text,
        font: DISPLAY,
        size: 19,
        bold: true,
        color: CRIMSON,
        allCaps: true,
        characterSpacing: 30,
      }),
    ],
  });
}

function cell(children, { width, shading, align } = {}) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 90, bottom: 90, left: 140, right: 140 },
    ...(shading
      ? { shading: { type: ShadingType.CLEAR, fill: shading, color: "auto" } }
      : {}),
    children: [
      new Paragraph({
        alignment: align || AlignmentType.LEFT,
        spacing: { after: 0 },
        children,
      }),
    ],
  });
}

/** One row of the meeting-particulars table. */
function particular(label, value) {
  return new TableRow({
    children: [
      cell(
        [
          new TextRun({
            text: label,
            font: BODY,
            size: 20,
            bold: true,
            color: DEEP_CRIMSON,
          }),
        ],
        { width: 3100, shading: CREAM }
      ),
      cell([new TextRun({ text: value, font: BODY, size: 20, color: INK })], {
        width: CONTENT_WIDTH - 3100,
      }),
    ],
  });
}

const HAIRLINE = { style: BorderStyle.SINGLE, size: 2, color: "D8CFC4" };
const TABLE_BORDERS = {
  top: HAIRLINE,
  bottom: HAIRLINE,
  left: HAIRLINE,
  right: HAIRLINE,
  insideHorizontal: HAIRLINE,
  insideVertical: HAIRLINE,
};

/* ------------------------------------------------------------ letterhead */

/** Full letterhead: monogram, wordmark, tagline, contact strip. */
function letterhead() {
  const brandCell = new TableCell({
    width: { size: 1400, type: WidthType.DXA },
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 0, bottom: 0, left: 0, right: 200 },
    borders: {
      top: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
    },
    children: [
      new Paragraph({
        spacing: { after: 0 },
        children: [
          new ImageRun({
            type: "png",
            data: fs.readFileSync(LOGO),
            transformation: { width: 58, height: 64 },
          }),
        ],
      }),
    ],
  });

  const nameCell = new TableCell({
    width: { size: CONTENT_WIDTH - 1400, type: WidthType.DXA },
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
    borders: {
      top: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
    },
    children: [
      new Paragraph({
        spacing: { after: 20 },
        children: [
          new TextRun({
            text: "BELEVARAGE",
            font: DISPLAY,
            size: 40,
            bold: true,
            color: CRIMSON,
            characterSpacing: 60,
          }),
        ],
      }),
      new Paragraph({
        spacing: { after: 0 },
        children: [
          new TextRun({
            text: "Where Community Meets Commerce",
            font: BODY,
            size: 17,
            italics: true,
            color: GOLD,
            characterSpacing: 20,
          }),
        ],
      }),
    ],
  });

  return [
    new Table({
      width: { size: CONTENT_WIDTH, type: WidthType.DXA },
      columnWidths: [1400, CONTENT_WIDTH - 1400],
      borders: {
        top: { style: BorderStyle.NONE },
        bottom: { style: BorderStyle.NONE },
        left: { style: BorderStyle.NONE },
        right: { style: BorderStyle.NONE },
        insideHorizontal: { style: BorderStyle.NONE },
        insideVertical: { style: BorderStyle.NONE },
      },
      rows: [new TableRow({ children: [brandCell, nameCell] })],
    }),
    new Paragraph({
      spacing: { before: 120, after: 0 },
      border: CRIMSON_RULE,
      children: [],
    }),
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { before: 60, after: 0 },
      border: GOLD_RULE,
      children: [
        new TextRun({
          text: "www.belevarage.com   ·   hello@belevarage.com   ·   Mumbai, India",
          font: BODY,
          size: 15,
          color: STONE,
          characterSpacing: 10,
        }),
      ],
    }),
  ];
}

/** Blank header for page 1 — the full letterhead sits in the body instead. */
function emptyHead() {
  return [new Paragraph({ spacing: { after: 0 }, children: [] })];
}

/** Slim continuation banner for pages 2+. */
function runningHead() {
  return [
    new Paragraph({
      spacing: { after: 0 },
      border: GOLD_RULE,
      children: [
        new TextRun({
          text: "BELEVARAGE",
          font: DISPLAY,
          size: 20,
          bold: true,
          color: CRIMSON,
          characterSpacing: 40,
        }),
        new TextRun({
          text: " | Certified True Copy of Board Resolution",
          font: BODY,
          size: 16,
          color: STONE,
        }),
      ],
    }),
  ];
}

function pageFooter() {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 40 },
        border: {
          top: { style: BorderStyle.SINGLE, size: 6, color: GOLD, space: 6 },
        },
        children: [
          new TextRun({
            text: "Registered Office: [Flat / Building, Street, Locality], Mumbai – [PIN], Maharashtra, India",
            font: BODY,
            size: 15,
            color: STONE,
          }),
        ],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 0 },
        children: [
          new TextRun({
            text: "CIN: [U00000MH0000PTC000000]   ·   GSTIN: [00AAAAA0000A0Z0]   ·   Page ",
            font: BODY,
            size: 14,
            color: STONE,
          }),
          new TextRun({ children: [PageNumber.CURRENT], font: BODY, size: 14, color: STONE }),
          new TextRun({ text: " of ", font: BODY, size: 14, color: STONE }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], font: BODY, size: 14, color: STONE }),
        ],
      }),
    ],
  });
}

/* ----------------------------------------------------------------- body */

const COMPANY = "BELEVARAGE [PRIVATE LIMITED]";

const particularsTable = new Table({
  width: { size: CONTENT_WIDTH, type: WidthType.DXA },
  columnWidths: [3100, CONTENT_WIDTH - 3100],
  borders: TABLE_BORDERS,
  rows: [
    particular("Name of the Company", COMPANY),
    particular("CIN", "[U00000MH0000PTC000000]"),
    particular(
      "Registered Office",
      "[Flat / Building, Street, Locality], Mumbai – [PIN], Maharashtra, India"
    ),
    particular("Type of Meeting", "Meeting of the Board of Directors"),
    particular("Date of Meeting", "[Day], [DD] [Month] [YYYY]"),
    particular("Time of Meeting", "[HH:MM] hrs IST"),
    particular(
      "Venue",
      "Registered Office of the Company / [Video conferencing, as permitted under the Companies Act, 2013]"
    ),
    particular(
      "Directors Present",
      "1. [Name], [Designation], DIN [—]    2. [Name], [Designation], DIN [—]    3. [Name], [Designation], DIN [—]"
    ),
    particular("Chairman of the Meeting", "[Name], [Designation]"),
    particular("Quorum", "Present throughout the meeting"),
  ],
});

const signatureTable = new Table({
  width: { size: CONTENT_WIDTH, type: WidthType.DXA },
  columnWidths: [5546, 4200],
  borders: {
    top: { style: BorderStyle.NONE },
    bottom: { style: BorderStyle.NONE },
    left: { style: BorderStyle.NONE },
    right: { style: BorderStyle.NONE },
    insideHorizontal: { style: BorderStyle.NONE },
    insideVertical: { style: BorderStyle.NONE },
  },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          width: { size: 5546, type: WidthType.DXA },
          margins: { top: 0, bottom: 0, left: 0, right: 200 },
          children: [
            new Paragraph({
              spacing: { after: 120 },
              children: [
                new TextRun({
                  text: "For and on behalf of the Board of Directors of",
                  font: BODY,
                  size: 20,
                  color: CHARCOAL,
                }),
              ],
            }),
            new Paragraph({
              spacing: { after: 700 },
              children: [
                new TextRun({
                  text: COMPANY,
                  font: DISPLAY,
                  size: 22,
                  bold: true,
                  color: CRIMSON,
                  characterSpacing: 20,
                }),
              ],
            }),
            new Paragraph({
              spacing: { after: 100 },
              border: {
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 6,
                  color: CHARCOAL,
                  space: 2,
                },
              },
              children: [
                new TextRun({ text: "", font: BODY, size: 20 }),
              ],
            }),
            new Paragraph({
              spacing: { after: 0 },
              children: [
                new TextRun({
                  text: "[Name of Signatory]",
                  font: BODY,
                  size: 20,
                  bold: true,
                  color: INK,
                }),
              ],
            }),
            new Paragraph({
              spacing: { after: 0 },
              children: [
                new TextRun({
                  text: "[Director / Managing Director]",
                  font: BODY,
                  size: 19,
                  color: CHARCOAL,
                }),
              ],
            }),
            new Paragraph({
              spacing: { after: 0 },
              children: [
                new TextRun({
                  text: "DIN: [—]",
                  font: BODY,
                  size: 19,
                  color: CHARCOAL,
                }),
              ],
            }),
            new Paragraph({
              spacing: { before: 160, after: 0 },
              children: [
                new TextRun({
                  text: "Date: [DD / MM / YYYY]        Place: Mumbai",
                  font: BODY,
                  size: 19,
                  color: CHARCOAL,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: { size: 4200, type: WidthType.DXA },
          verticalAlign: VerticalAlign.CENTER,
          margins: { top: 400, bottom: 400, left: 200, right: 200 },
          borders: {
            top: { style: BorderStyle.DASHED, size: 6, color: GOLD },
            bottom: { style: BorderStyle.DASHED, size: 6, color: GOLD },
            left: { style: BorderStyle.DASHED, size: 6, color: GOLD },
            right: { style: BorderStyle.DASHED, size: 6, color: GOLD },
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { after: 0 },
              children: [
                new TextRun({
                  text: "Affix Common Seal /",
                  font: BODY,
                  size: 18,
                  color: STONE,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { after: 0 },
              children: [
                new TextRun({
                  text: "Company Stamp here",
                  font: BODY,
                  size: 18,
                  color: STONE,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});

const doc = new Document({
  creator: "BELEVARAGE",
  title: "Certified True Copy of Board Resolution – Razorpay Payment Gateway",
  description:
    "Board resolution authorising the use of the Razorpay Payment Gateway exclusively for the BELEVARAGE e-commerce marketplace.",
  sections: [
    {
      properties: {
        titlePage: true,
        page: {
          size: { width: 11906, height: 16838 },
          margin: {
            top: 1300,
            bottom: 1400,
            left: 1080,
            right: 1080,
            header: 620,
            footer: 500,
          },
        },
      },
      headers: {
        first: new Header({ children: emptyHead() }),
        default: new Header({ children: runningHead() }),
      },
      footers: { default: pageFooter(), first: pageFooter() },
      children: [
        /* ---- letterhead (page 1 only) ---- */
        ...letterhead(),

        /* ---- reference line ---- */
        new Paragraph({
          alignment: AlignmentType.RIGHT,
          spacing: { before: 260, after: 60 },
          children: [
            new TextRun({
              text: "Ref: BLV/BOD/[YYYY]/[NN]",
              font: BODY,
              size: 19,
              color: CHARCOAL,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.RIGHT,
          spacing: { after: 280 },
          children: [
            new TextRun({
              text: "Date: [DD / MM / YYYY]",
              font: BODY,
              size: 19,
              color: CHARCOAL,
            }),
          ],
        }),

        /* ---- addressee ---- */
        new Paragraph({
          spacing: { after: 0 },
          children: [
            new TextRun({ text: "To,", font: BODY, size: 21, color: INK }),
          ],
        }),
        new Paragraph({
          spacing: { after: 0 },
          children: [
            new TextRun({
              text: "Razorpay Software Private Limited",
              font: BODY,
              size: 21,
              bold: true,
              color: INK,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 0 },
          children: [
            new TextRun({
              text: "1st Floor, SJR Cyber, 22 Laskar Hosur Road,",
              font: BODY,
              size: 21,
              color: INK,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 340 },
          children: [
            new TextRun({
              text: "Adugodi, Bengaluru – 560030, Karnataka, India",
              font: BODY,
              size: 21,
              color: INK,
            }),
          ],
        }),

        /* ---- title ---- */
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 60 },
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "CERTIFIED TRUE COPY OF THE RESOLUTION",
              font: DISPLAY,
              size: 26,
              bold: true,
              color: CRIMSON,
              characterSpacing: 30,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 260 },
          border: GOLD_RULE,
          children: [
            new TextRun({
              text:
                "passed at the Meeting of the Board of Directors of " +
                COMPANY +
                " held at its Registered Office on [Day], [DD] [Month] [YYYY]",
              font: BODY,
              size: 19,
              italics: true,
              color: CHARCOAL,
            }),
          ],
        }),

        /* ---- particulars ---- */
        sectionLabel("Particulars of the Meeting"),
        particularsTable,
        new Paragraph({ spacing: { after: 240 }, children: [] }),

        /* ---- preamble ---- */
        sectionLabel("Background"),
        body([
          new TextRun({
            text:
              "The Chairman apprised the Board that the Company owns and operates an event-driven socio-commerce e-commerce marketplace through its website ",
            font: BODY,
            size: 21,
            color: INK,
          }),
          new TextRun({
            text: "www.belevarage.com",
            font: BODY,
            size: 21,
            bold: true,
            color: INK,
          }),
          new TextRun({
            text:
              " and its associated mobile applications (the “Marketplace”), on which independent sellers, farmers, local businesses and service providers list goods and services for purchase by customers. In order to collect payments from customers of the Marketplace and to receive settlement of such collections, it is proposed that the Company be onboarded as a merchant with Razorpay Software Private Limited (“Razorpay”) and avail the Razorpay Payment Gateway.",
            font: BODY,
            size: 21,
            color: INK,
          }),
        ]),
        body(
          "After due discussion and consideration of the proposal, and upon a motion duly moved and seconded, the Board unanimously passed the following resolutions:"
        ),

        /* ---- resolutions ---- */
        sectionLabel("Resolutions"),
        resolution(
          "Resolved that",
          "the consent of the Board of Directors of the Company be and is hereby accorded to onboard the Company as a merchant with Razorpay Software Private Limited (“Razorpay”) and to avail the Razorpay Payment Gateway together with the allied payment aggregation, collection, settlement, refund and reconciliation services offered by Razorpay (collectively, the “Razorpay Services”)."
        ),
        resolution(
          "Resolved further that",
          "the Razorpay Payment Gateway shall be used by the Company solely and exclusively for the collection of payments from customers in respect of goods and services transacted on the Company’s e-commerce marketplace operated at www.belevarage.com and its associated mobile applications, and shall not be used for any other service, business, activity, vertical or line of business of the Company, nor for the collection of any payment on behalf of any other person, firm, company, group entity, affiliate, associate or third party whatsoever."
        ),
        resolution(
          "Resolved further that",
          "the Company shall not use the Razorpay Payment Gateway to collect payments in respect of any goods, services or activities that are prohibited or restricted under applicable law or under Razorpay’s merchant terms of service and list of restricted or prohibited businesses, and the Company shall at all times comply with the applicable directions of the Reserve Bank of India, including the Guidelines on Regulation of Payment Aggregators and Payment Gateways, and all applicable know-your-customer, anti-money laundering, data protection and information technology laws."
        ),
        resolution(
          "Resolved further that",
          "all monies collected through the Razorpay Payment Gateway shall be settled only into the current account of the Company bearing account number [—] maintained with [Bank Name], [Branch], IFSC [—], held in the name of " +
            COMPANY +
            ", and that no account belonging to any third party shall be designated for settlement."
        ),
        resolution(
          "Resolved further that",
          "[Mr./Ms. Name], [Designation] of the Company (DIN [—] / PAN [—]), be and is hereby severally authorised, for and on behalf of the Company, to submit the merchant onboarding application and know-your-customer documents to Razorpay; to sign, execute, accept and deliver the merchant agreement, terms of service, undertakings, declarations, indemnities and any other document required by Razorpay; to activate, operate and administer the Company’s Razorpay merchant dashboard and to designate users thereon; to give instructions for settlements, refunds and chargebacks; and to do all such acts, deeds, matters and things as may be necessary, incidental or expedient to give full effect to the foregoing resolutions."
        ),
        resolution(
          "Resolved further that",
          "a certified true copy of these resolutions, signed by any Director or the Company Secretary of the Company, be furnished to Razorpay and to such other persons as may be required, and that Razorpay shall be entitled to act and rely upon these resolutions until it receives written notice of their amendment, revocation or rescission from the Company."
        ),

        /* ---- certification ---- */
        sectionLabel("Certification"),
        body(
          "Certified to be a true copy of the resolutions duly passed at the meeting of the Board of Directors of the Company referred to above. The said resolutions were passed in accordance with the Companies Act, 2013 and the Articles of Association of the Company, are in full force and effect as on the date of this certificate, and have not been modified, rescinded or revoked."
        ),

        new Paragraph({ spacing: { after: 320 }, children: [] }),
        signatureTable,
      ],
    },
  ],
});

const out = path.join(__dirname, "Belevarage-Board-Resolution-Razorpay.docx");
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(out, buffer);
  console.log("Wrote " + out);
});
