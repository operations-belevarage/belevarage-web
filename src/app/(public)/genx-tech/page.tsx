"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";

const BANDH_MEMBER = "https://bandh.lccia.in";
const BANDH_SUPPLIER = "https://supplier.lccia.in";

const img = (id: string, w = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

type Capability = {
  key: string;
  tab: string;
  icon: IconName;
  title: string;
  blurb: string;
  features: string[];
  image: string;
};

const CAPABILITIES: Capability[] = [
  {
    key: "manager",
    tab: "AI Business Manager",
    icon: "sparkles",
    title: "An AI business manager for everyone",
    blurb:
      "Every member and supplier on LCCIA Bandh gets a personal AI manager — it personalises discovery, drafts listings, answers buyers, and automates the busywork so people can focus on their craft.",
    features: [
      "Personalised event & product discovery",
      "Auto-generated listings and descriptions",
      "Smart replies and buyer follow-ups",
      "Daily insights in plain language",
    ],
    image: "1460925895917-afdab827c52f",
  },
  {
    key: "agentic",
    tab: "Agentic AI",
    icon: "cpu",
    title: "Agents that run the operations",
    blurb:
      "GenX Tech agents coordinate the moving parts of an event-driven marketplace — scheduling, matching demand to supply, and handling logistics — working for people, never replacing them.",
    features: [
      "Autonomous event & order orchestration",
      "Demand–supply matching across communities",
      "Workflow automation with human-in-the-loop",
      "Governed, auditable AI actions",
    ],
    image: "1591696205602-2f950c417cb9",
  },
  {
    key: "demand",
    tab: "Demand Intelligence",
    icon: "chart",
    title: "Know demand before you stock",
    blurb:
      "Our forecasting turns community signals into confirmed demand. 'Book from Home, Pick on the Way' lets farmers and suppliers pre-sell before they harvest or stock — cutting waste to near zero.",
    features: [
      "Pre-sell and pre-book flows",
      "Harvest & inventory forecasting",
      "Dynamic, fair pricing signals",
      "Waste and surplus reduction",
    ],
    image: "1488459716781-31db52582fe9",
  },
  {
    key: "trust",
    tab: "Trust & Bhasha AI",
    icon: "shield",
    title: "Trust, verified — in your language",
    blurb:
      "GenX Tech powers the genealogy trust graph and conversational AI in Indian languages, so commerce stays safe, personal and accessible to every community across Bharat.",
    features: [
      "Genealogy-based trust verification",
      "Fraud and anomaly detection",
      "Conversational AI in Indian languages",
      "Voice-first, low-literacy friendly flows",
    ],
    image: "1517048676732-d65bc937f952",
  },
];

const PRINCIPLES: { icon: IconName; title: string; desc: string }[] = [
  { icon: "users", title: "Enables, never replaces", desc: "AI that creates livelihoods and augments people — the opposite of job-displacing automation." },
  { icon: "globe", title: "Built for Bharat", desc: "Indian languages, Indian markets, low-bandwidth and voice-first by design." },
  { icon: "lock", title: "Governed & auditable", desc: "Every agentic action is logged, explainable and kept within human guardrails." },
  { icon: "bolt", title: "Real-time by default", desc: "Live demand, live events, live pricing — intelligence that moves at market speed." },
  { icon: "tree", title: "Trust-aware", desc: "Reasoning that understands relationships and community, not just transactions." },
  { icon: "cpu", title: "In-house engineered", desc: "Designed and built by Belevarage — the same team that built LCCIA Bandh." },
];

export default function GenXTechPage() {
  const [active, setActive] = useState(0);
  const cap = CAPABILITIES[active];

  return (
    <>
      {/* HERO */}
      <section className="section section--navy" style={{ paddingTop: 160, paddingBottom: 90 }}>
        <div className="container">
          <div className="who-grid" style={{ maxWidth: 1150, margin: "0 auto" }}>
            <div>
              <span className="kicker kicker--light">Belevarage GenX Tech</span>
              <h1 style={{ color: "var(--ivory)", marginBottom: "1.25rem" }}>
                The <span style={{ color: "var(--saffron-gold)" }}>AI engine</span> inside LCCIA Bandh
              </h1>
              <p style={{ color: "rgba(250,246,240,0.88)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2rem", maxWidth: 560 }}>
                GenX Tech is Belevarage&apos;s in-house artificial intelligence — agentic, multilingual,
                and trust-aware. It runs quietly behind every event and transaction on the Bandh platform,
                enabling people instead of replacing them.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href={BANDH_MEMBER} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Experience it on Bandh ↗</a>
                <Link href="/how-it-works" className="btn btn-outline-light">How the Platform Works</Link>
              </div>
            </div>
            <div className="indian-border" style={{ borderRadius: 12, overflow: "hidden" }}>
              <img src={img("1460925895917-afdab827c52f", 900)} alt="GenX Tech AI analytics powering LCCIA Bandh" style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 300 }} />
            </div>
          </div>
        </div>
      </section>

      {/* TABBED CAPABILITIES */}
      <section className="section section--ivory mandala-bg">
        <div className="container">
          <div className="section-header">
            <span className="kicker">What GenX Tech Does</span>
            <h2>Four Layers of Intelligence</h2>
            <p>One AI fabric, working across the whole LCCIA Bandh platform.</p>
          </div>

          <div className="tabs" style={{ justifyContent: "center" }}>
            {CAPABILITIES.map((c, i) => (
              <button
                key={c.key}
                className={`tab ${i === active ? "tab--active" : ""}`}
                onClick={() => setActive(i)}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Icon name={c.icon} size={16} /> {c.tab}
              </button>
            ))}
          </div>

          <div className="who-grid" style={{ maxWidth: 1050, margin: "2rem auto 0" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <span style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg,var(--crimson),var(--warm-crimson-light))", color: "var(--ivory)", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid var(--saffron-gold)", flexShrink: 0 }}>
                  <Icon name={cap.icon} size={24} />
                </span>
                <h3 style={{ margin: 0, fontSize: "1.4rem" }}>{cap.title}</h3>
              </div>
              <p style={{ color: "var(--charcoal)", marginBottom: "1.25rem" }}>{cap.blurb}</p>
              <ul style={{ listStyle: "none", display: "grid", gap: "0.7rem" }}>
                {cap.features.map((f, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "center", color: "var(--charcoal)" }}>
                    <span style={{ color: "var(--forest-teal)", flexShrink: 0 }}><Icon name="check" size={20} /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="indian-border" style={{ borderRadius: 12, overflow: "hidden" }}>
              <img src={img(cap.image, 800)} alt={cap.title} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 260 }} />
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES GRID */}
      <section className="section section--cream section-border-top">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Our AI Principles</span>
            <h2>Next-Generation, Rooted in Our Values</h2>
          </div>
          <div className="grid grid-3">
            {PRINCIPLES.map((p, i) => (
              <div key={i} className="card corner-ornament" style={{ borderLeft: "none" }}>
                <div className="card__icon" style={{ background: "linear-gradient(135deg,var(--crimson),var(--warm-crimson-light))" }}>
                  <Icon name={p.icon} size={28} />
                </div>
                <h3 className="card__title">{p.title}</h3>
                <p className="card__text">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--crimson">
        <div className="container text-center">
          <span className="kicker kicker--light">See It In Action</span>
          <h2 style={{ color: "var(--ivory)", marginBottom: "1rem" }}>GenX Tech Lives Inside LCCIA Bandh</h2>
          <p style={{ color: "rgba(250,246,240,0.85)", maxWidth: 600, margin: "0 auto 2rem" }}>
            The best way to understand GenX Tech is to use it. Join the platform as a member or supplier and let the AI work for you.
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
