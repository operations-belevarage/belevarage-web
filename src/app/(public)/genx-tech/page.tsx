"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import { IMAGES } from "@/lib/images";

const BANDH_MEMBER = "https://bandh.lccia.in";
const BANDH_SUPPLIER = "https://supplier.lccia.in";

type Audience = {
  key: string;
  tab: string;
  icon: IconName;
  title: string;
  blurb: string;
  benefits: string[];
  image: string;
};

// How Shivo helps each kind of professional — plain-language OUTCOMES only.
// (No internal mechanics, pricing, matching logic or third-party names.)
const AUDIENCES: Audience[] = [
  {
    key: "doctors",
    tab: "Doctors & Clinics",
    icon: "heart",
    title: "For doctors & clinics",
    blurb: "Shivo helps you reach the families who need you and run health camps that actually fill up.",
    benefits: [
      "Fill health camps and clinic days with the right local community",
      "Send appointment reminders in your patients' own language",
      "Answer common questions automatically, so your front desk is freed up",
      "Build a trusted reputation through real community relationships",
    ],
    image: IMAGES.healthcare,
  },
  {
    key: "suppliers",
    tab: "Suppliers & Sellers",
    icon: "store",
    title: "For suppliers & sellers",
    blurb: "Shivo helps you understand demand early and sell with less waste and less guesswork.",
    benefits: [
      "See what your community wants before you stock or harvest",
      "Pre-sell through events and confirmed bookings",
      "Turn a few details into ready-to-post product listings",
      "Reply to buyers quickly, even when you're busy on the ground",
    ],
    image: IMAGES.spiceMarket,
  },
  {
    key: "businesses",
    tab: "Shops & Businesses",
    icon: "building",
    title: "For shops & businesses",
    blurb: "Shivo helps you win loyal, repeat customers through community events instead of ad spend.",
    benefits: [
      "Bring customers in through events, not expensive advertising",
      "Turn first-time visitors into a loyal local following",
      "Understand what's selling with simple, plain-language insights",
      "Keep your regulars engaged between visits",
    ],
    image: IMAGES.bananaMarket,
  },
  {
    key: "hosts",
    tab: "Event Hosts",
    icon: "calendar",
    title: "For event hosts",
    blurb: "Shivo helps you plan, fill and run events — from a weekend market to a cultural fair.",
    benefits: [
      "Plan events and reach exactly the right people nearby",
      "Coordinate participating vendors and stalls in one place",
      "Promote in local languages to the surrounding community",
      "See who's coming so you can prepare with confidence",
    ],
    image: IMAGES.festiveDiyas,
  },
  {
    key: "services",
    tab: "Service Providers",
    icon: "users",
    title: "For service providers",
    blurb: "Shivo helps independent professionals get discovered and trusted in their own neighbourhood.",
    benefits: [
      "Get found by nearby people who need your skills",
      "Let the community vouch for you through real relationships",
      "Handle enquiries and bookings without the back-and-forth",
      "Grow steadily through word of mouth that travels online",
    ],
    image: IMAGES.serviceProvider,
  },
];

const PRINCIPLES: { icon: IconName; title: string; desc: string }[] = [
  { icon: "users", title: "Enables, never replaces", desc: "Shivo creates livelihoods and augments people — the opposite of job-displacing automation." },
  { icon: "language", title: "Speaks your language", desc: "Built for India: supports Indian languages, voice-first, and friendly on any phone or connection." },
  { icon: "lock", title: "Safe & respectful", desc: "Your data and your customers are handled with care, within clear human guardrails." },
  { icon: "bolt", title: "Works in real time", desc: "Live demand, live events, live answers — help that keeps pace with your day." },
  { icon: "tree", title: "Understands community", desc: "Shivo reasons about relationships and trust, not just transactions." },
  { icon: "cpu", title: "Made in-house", desc: "Designed and built by Belevarage — the same team that built LCCIA Bandh." },
];

// "Shivo for Business" — founder's verbatim copy.
const BIZ_FEATURES: { icon: IconName; heading: string; tagline: string; body: string[]; image: string }[] = [
  {
    icon: "users",
    heading: "An AI Workforce for Every Business Function",
    tagline: "The right intelligence. For every role. Available 24/7.",
    body: [
      "From sales and customer service to finance, procurement, and operations, Shivo gives you AI team members designed for the work that matters. They help automate routine tasks, support decisions, and execute workflows — so your people can focus on higher-value work.",
      "Scale your AI workforce as your business grows, without the traditional costs of hiring, training, and onboarding for every new capability.",
    ],
    image: IMAGES.bizTeam,
  },
  {
    icon: "store",
    heading: "A Supply Chain That Performs",
    tagline: "Anticipate demand. Reduce waste. Deliver with confidence.",
    body: [
      "Turn supply chain complexity into a competitive advantage. Shivo helps you anticipate demand, improve planning, optimise inventory, and streamline fulfilment.",
      "The result? Fewer stockouts, less excess inventory, faster order fulfilment, and more reliable deliveries — helping you operate leaner, respond faster, and protect your margins.",
    ],
    image: IMAGES.bizSupply,
  },
  {
    icon: "cpu",
    heading: "The Latest Technology. Without the Heavy Lifting.",
    tagline: "Stay ahead of AI — without building everything yourself.",
    body: [
      "Access evolving AI capabilities as a ready-to-use service, without the burden of building complex solutions, installing infrastructure, or managing every technology upgrade yourself.",
      "Shivo helps you bring modern AI into your workflows with less implementation effort, giving your business the flexibility to adapt, innovate, and stay competitive as technology evolves.",
    ],
    image: IMAGES.bizTech,
  },
];

export default function GenXTechPage() {
  const [active, setActive] = useState(0);
  const a = AUDIENCES[active];

  return (
    <>
      {/* HERO — maroon/gold, warm diya imagery */}
      <section className="hero hero--genx">
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `url(${IMAGES.diyaFlame})`,
            backgroundSize: "cover", backgroundPosition: "center", opacity: 0.3,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(120deg, rgba(92,20,16,0.94) 0%, rgba(129,30,24,0.84) 50%, rgba(92,20,16,0.7) 100%)",
          }}
        />
        <div className="hero__mandala" />
        <div className="container">
          <div className="hero__content">
            <span className="kicker kicker--light animate-in">Belevarage GenX Tech</span>
            <h1 className="hero__title animate-in delay-1">
              <span style={{ color: "var(--saffron-gold)" }}>Shivo</span> — the intelligence inside everything
            </h1>
            <p className="animate-in delay-2" style={{ color: "var(--saffron-gold)", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.3rem", marginBottom: "1.25rem" }}>
              Your AI, in your language.
            </p>
            <p className="hero__subtitle animate-in delay-2">
              Shivo is Belevarage&apos;s own artificial intelligence — agentic, multilingual, and
              trust-aware. It works quietly behind every screen on the platform, helping each kind of
              professional do more with less effort — a doctor, a shopkeeper, a farmer, an event host.
              It&apos;s built to enable people, never to replace them.
            </p>
            <div className="hero__actions animate-in delay-3">
              <a href={BANDH_MEMBER} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Experience it on Bandh ↗</a>
              <Link href="/how-it-works" className="btn btn-outline-light">How the Platform Works</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO Shivo HELPS — audience tabs */}
      <section className="section section--ivory mandala-bg">
        <div className="container">
          <div className="section-header">
            <span className="kicker">What Shivo Does For You</span>
            <h2>One AI, Every Profession</h2>
            <p>Pick who you are and see how Shivo helps — in plain language.</p>
          </div>

          <div className="tabs" style={{ justifyContent: "center" }}>
            {AUDIENCES.map((aud, i) => (
              <button
                key={aud.key}
                className={`tab ${i === active ? "tab--active" : ""}`}
                onClick={() => setActive(i)}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Icon name={aud.icon} size={16} /> {aud.tab}
              </button>
            ))}
          </div>

          <div className="card" style={{ maxWidth: 1000, margin: "2rem auto 0", borderLeft: "4px solid var(--saffron-gold)" }}>
            <div className="who-grid" style={{ gap: "2rem", alignItems: "stretch" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginBottom: "0.75rem" }}>
                  <span style={{ width: 56, height: 56, borderRadius: "50%", flexShrink: 0, background: "linear-gradient(135deg,var(--crimson),var(--warm-crimson-light))", color: "var(--ivory)", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid var(--saffron-gold)" }}>
                    <Icon name={a.icon} size={26} />
                  </span>
                  <h3 style={{ margin: 0, fontSize: "1.4rem" }}>{a.title}</h3>
                </div>
                <p style={{ color: "var(--charcoal)", marginBottom: "1.25rem", fontSize: "1.02rem" }}>{a.blurb}</p>
                <ul style={{ listStyle: "none", display: "grid", gap: "0.75rem", gridTemplateColumns: "1fr" }}>
                  {a.benefits.map((b, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", color: "var(--charcoal)" }}>
                      <span style={{ color: "var(--forest-teal)", flexShrink: 0, marginTop: 2 }}><Icon name="check" size={20} /></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="indian-border" style={{ borderRadius: 12, overflow: "hidden", minHeight: 260 }}>
                <img src={a.image} alt={a.title} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 260 }} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHIVO FOR BUSINESS */}
      <section className="section section--ivory mandala-bg">
        <div className="container">
          <div className="section-header" style={{ maxWidth: 840 }}>
            <span className="kicker">Shivo for Business</span>
            <h2>Your AI Workforce. Your Entire Business. Ready to Perform.</h2>
            <p style={{ fontWeight: 600, color: "var(--crimson)", fontSize: "1.1rem" }}>
              Enterprise-grade AI that works like a team — without the cost, complexity, or time of building one.
            </p>
          </div>
          <div style={{ maxWidth: 820, margin: "0 auto 3.5rem", color: "var(--charcoal)" }}>
            <p style={{ marginBottom: "1rem" }}>
              Business moves fast. AI moves faster. Staying ahead shouldn&apos;t mean hiring specialists,
              investing in expensive infrastructure, or spending months implementing new technology.
            </p>
            <p>
              <strong>Shivo puts AI to work across your business from day one.</strong> Deploy intelligent
              AI team members, streamline operations, strengthen your supply chain, and access the latest
              technology — all through one intelligent platform.
            </p>
          </div>

          <div style={{ display: "grid", gap: "3.5rem" }}>
            {BIZ_FEATURES.map((ftr, i) => (
              <div key={i} className={`who-grid biz-row${i % 2 === 1 ? " biz-row--rev" : ""}`} style={{ maxWidth: 1050, margin: "0 auto" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                    <span style={{ color: "var(--crimson)", flexShrink: 0 }}><Icon name={ftr.icon} size={24} /></span>
                    <h3 style={{ margin: 0, fontSize: "1.3rem" }}>{ftr.heading}</h3>
                  </div>
                  <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--crimson)", fontSize: "1.1rem", marginBottom: "0.9rem" }}>{ftr.tagline}</p>
                  {ftr.body.map((b, j) => (
                    <p key={j} style={{ color: "var(--charcoal)", marginBottom: "0.75rem" }}>{b}</p>
                  ))}
                </div>
                <div className="indian-border" style={{ borderRadius: 12, overflow: "hidden" }}>
                  <img src={ftr.image} alt={ftr.heading} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 240 }} loading="lazy" />
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3.5rem", maxWidth: 700, marginInline: "auto" }}>
            <h2 style={{ marginBottom: "0.5rem" }}>Bring Shivo to Your Business</h2>
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--crimson)", fontSize: "1.2rem", marginBottom: "1.5rem" }}>
              Work smarter. Scale faster. Make AI work for you.
            </p>
            <Link href="/contact" className="btn btn-primary">Bring Shivo to Your Business →</Link>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section section--crimson">
        <div className="container">
          <div className="section-header">
            <span className="kicker kicker--light">How Shivo Works For Everyone</span>
            <h2 style={{ color: "var(--ivory)" }}>Next-Generation, Rooted in Our Values</h2>
          </div>
          <div className="grid grid-3">
            {PRINCIPLES.map((p, i) => (
              <div key={i} className="indian-border" style={{ background: "rgba(250,246,240,0.08)", borderRadius: 8, padding: "2.25rem", textAlign: "center" }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", margin: "0 auto 1rem", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--saffron-gold)", color: "var(--deep-crimson)" }}>
                  <Icon name={p.icon} size={28} />
                </div>
                <h3 style={{ color: "var(--saffron-gold)", marginBottom: "0.6rem" }}>{p.title}</h3>
                <p style={{ color: "rgba(250,246,240,0.85)", fontSize: "0.95rem", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--deep">
        <div className="container text-center">
          <span className="kicker kicker--light">See It In Action</span>
          <h2 style={{ color: "var(--ivory)", marginBottom: "1rem" }}>Shivo Lives Inside LCCIA Bandh</h2>
          <p style={{ color: "rgba(250,246,240,0.85)", maxWidth: 600, margin: "0 auto 2rem" }}>
            The best way to understand Shivo is to use it. Join the platform and let the AI work for you.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <a href={BANDH_MEMBER} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Sign up on Bandh ↗</a>
            <a href={BANDH_SUPPLIER} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Register as Supplier ↗</a>
          </div>
        </div>
      </section>
    </>
  );
}
