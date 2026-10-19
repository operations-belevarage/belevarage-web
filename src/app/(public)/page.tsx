import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import { IMAGES } from "@/lib/images";

// Live LCCIA Bandh platform — every path on this site funnels here.
const BANDH_MEMBER = "https://bandh.lccia.in";
const BANDH_SUPPLIER = "https://supplier.lccia.in";

type UseCase = {
  icon: IconName;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  image: string | null; // null => gradient + icon header
};

const USE_CASES: UseCase[] = [
  {
    icon: "store",
    title: "Community Commerce",
    problem: "Small businesses are invisible on giant marketplaces",
    solution: "Host community events that bring customers to you organically",
    outcome: "Local economies thrive, relationships deepen, trust grows",
    image: IMAGES.vegMarket,
  },
  {
    icon: "leaf",
    title: "Agriculture",
    problem: "Much produce is lost to wastage, and middlemen take a heavy cut of the value",
    solution: "Book from Home, Pick on the Way — pre-sell before you harvest",
    outcome: "Confirmed demand, direct income, far less waste",
    image: IMAGES.spiceMarket,
  },
  {
    icon: "heart",
    title: "Healthcare",
    problem: "Community health access is fragmented and impersonal",
    solution: "Host health camps and wellness workshops through trusted events",
    outcome: "Providers reach communities through trust, not ads",
    image: null,
  },
  {
    icon: "star",
    title: "Cultural Trade",
    problem: "Traditional artisans can't compete with mass production online",
    solution: "Cultural fairs and heritage events showcase authentic craft",
    outcome: "Heritage preserved, artisans empowered, culture celebrated",
    image: IMAGES.classicalDance,
  },
];

type Product = {
  name: string;
  lead: string;
  tagline: string;
  body: string;
  icon: IconName;
  image: string | null;
  href: string;
};

// Founder-approved product write-ups (English, public-safe). Verbatim copy.
const PRODUCTS: Product[] = [
  {
    name: "Eventra",
    lead: "plan any function, start to finish",
    tagline: "From one line to a finished plan.",
    body: "Describe your event in a single sentence and Eventra drafts the whole thing — guest list, vendors, budget and timeline. Find trusted vendors from your own community, send invitations, and keep everyone in sync, whether it's a wedding, a naming day, or a community gathering.",
    icon: "calendar",
    image: IMAGES.festiveDiyas,
    href: "/communities",
  },
  {
    name: "LevaKart",
    lead: "shop your community",
    tagline: "Your market, online.",
    body: "LevaKart is the community marketplace where you buy from sellers and businesses you can trust — your own people, your own market, on your phone. Every shop in one place; order and track with ease.",
    icon: "store",
    image: IMAGES.bananaMarket,
    href: "/businesses",
  },
  {
    name: "Find a Doctor",
    lead: "verified doctors, clear details",
    tagline: "Know who, what and when — before you go.",
    body: "Find a Doctor lists genuine, verified doctors with their consultation fee, clinic and timings shown up front. No guesswork — just the right doctor, the real cost, and when they're available.",
    icon: "heart",
    image: null,
    href: "/healthcare",
  },
  {
    name: "Sugee",
    lead: "the farmer's market, online",
    tagline: "A fair, direct market for farmers.",
    body: "Sugee brings the market to the farmer's phone — a simple, transparent place to buy farm supplies and sell produce, in the farmer's own language. Built for the people who grow what the community eats.",
    icon: "leaf",
    image: IMAGES.vegMarket,
    href: "/agriculture",
  },
];

const PILLARS: { icon: IconName; title: string; desc: string }[] = [
  { icon: "calendar", title: "Event Engine", desc: "Every interaction starts with an event — a shared moment that brings people together and creates commerce naturally." },
  { icon: "tree", title: "Genealogy Trust", desc: "Build your digital family tree. Trade with people your community knows. Trust is verified by relationships, not ratings." },
  { icon: "sparkles", title: "GenX Tech AI", desc: "Meet Shivo — your AI business manager. Personalisation, automation and agentic AI that enables people instead of replacing them." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — Belevarage as the maker of LCCIA Bandh */}
      <section className="hero">
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMAGES.heritage})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.22 }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(92,20,16,0.92) 0%, rgba(129,30,24,0.82) 45%, rgba(129,30,24,0.55) 100%)" }} />
        <div className="hero__mandala" />
        <div className="container">
          <div className="hero__content">
            <span className="kicker kicker--light animate-in">The Company Behind LCCIA Bandh</span>
            <h1 className="hero__title animate-in delay-1">
              We Build Where<br />
              <span style={{ color: "var(--saffron-gold)" }}>Community</span> Meets Commerce
            </h1>
            <p className="hero__subtitle animate-in delay-2" style={{ marginTop: "0.5rem" }}>
              Belevarage is the company behind LCCIA Bandh — India&apos;s event-driven socio-commerce
              network, powered by community trust and our in-house AI, Shivo. We don&apos;t just build the
              platform — we take it to market and grow its revenue.{" "}
              <strong style={{ color: "var(--ivory)" }}>LCCIA Bandh is a Belevarage platform.</strong>{" "}
              Join as a member, register as a supplier, and start trading the way it was meant to be.
            </p>
            <div className="hero__actions animate-in delay-3">
              <a href={BANDH_MEMBER} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Sign up on Bandh ↗</a>
              <a href={BANDH_SUPPLIER} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Register as Supplier ↗</a>
            </div>
          </div>
        </div>
        <div className="hero__scroll-indicator">⌄</div>
      </section>

      {/* PIVOT — the three doors into LCCIA Bandh */}
      <section className="section section--ivory mandala-bg" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
        <div className="container">
          <div className="section-header">
            <span className="kicker">Enter the Platform</span>
            <h2>Three Ways Into LCCIA Bandh</h2>
            <p>Belevarage runs it all. Pick your door — members, suppliers, or explore the AI that powers it.</p>
          </div>
          <div className="grid grid-3">
            <PivotCard
              image={IMAGES.festiveDiyas}
              icon="users"
              badge="For Members"
              title="Join the Community"
              desc="Discover events near you, connect with trusted people, and shop a marketplace built on relationships — not anonymous listings."
              points={["Free member sign-up", "Event-driven discovery", "Trusted, local commerce"]}
              ctaLabel="Sign up on Bandh ↗"
              href={BANDH_MEMBER}
            />
            <PivotCard
              image={IMAGES.bananaMarket}
              icon="store"
              badge="For Suppliers"
              title="Grow Your Business"
              desc="Register as a supplier and reach communities through events instead of ad spend. Confirmed demand, direct relationships, real growth."
              points={["Supplier registration", "Pre-sell before you stock", "Reach buyers who trust you"]}
              ctaLabel="Register as Supplier ↗"
              href={BANDH_SUPPLIER}
              featured
            />
            <PivotCard
              image={IMAGES.diyaFlame}
              icon="sparkles"
              badge="The AI Engine"
              title="Meet Shivo"
              desc="Agentic AI, demand intelligence and automation run quietly behind every Bandh transaction — enabling people, not replacing them."
              points={["AI business manager", "Demand intelligence", "Built for India"]}
              ctaLabel="Explore GenX Tech →"
              href="/genx-tech"
              internal
            />
          </div>
        </div>
      </section>

      {/* WHO IS BELEVARAGE */}
      <section className="section section--cream section-border-top">
        <div className="container">
          <div className="who-grid" style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div>
              <span className="kicker">Who We Are</span>
              <h2>Belevarage — behind LCCIA Bandh, end to end</h2>
              <p style={{ color: "var(--charcoal)", margin: "1rem 0 1.25rem" }}>
                We are an Indian technology company on a mission to make commerce human again.
                We don&apos;t just build the <strong>LCCIA Bandh Platform</strong> — we own it, take it to
                market, and grow its revenue, running it end to end: the event engine, the genealogy-based
                trust network, and Shivo, our in-house GenX Tech AI.
              </p>
              <ul style={{ listStyle: "none", display: "grid", gap: "0.85rem", marginBottom: "1.75rem" }}>
                {[
                  { icon: "calendar" as IconName, text: "A live, event-driven marketplace serving communities across India" },
                  { icon: "tree" as IconName, text: "Trust anchored in verified relationships, not star ratings" },
                  { icon: "cpu" as IconName, text: "Shivo, our GenX Tech AI, built in-house for Indian markets and languages" },
                ].map((row, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--crimson)", flexShrink: 0, marginTop: 2 }}><Icon name={row.icon} size={22} /></span>
                    <span style={{ color: "var(--charcoal)" }}>{row.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn btn-primary">Our Story →</Link>
            </div>
            <div className="indian-border" style={{ borderRadius: 12, overflow: "hidden" }}>
              <img src={IMAGES.teamIndia} alt="The Belevarage team building and running the LCCIA Bandh platform" style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 280 }} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section section--ivory paisley-bg">
        <div className="container">
          <div className="section-header">
            <span className="kicker">The Problem We Solve</span>
            <h2>Commerce Today Is Structurally Broken</h2>
            <p>Digital marketplaces made trade anonymous, stripped away trust, excluded small businesses, and fragmented local economies.</p>
          </div>
          <div className="grid grid-3" style={{ maxWidth: 980, margin: "0 auto" }}>
            {[
              { icon: "users" as IconName, text: "Anonymous commerce — no trust, no relationships, fake reviews" },
              { icon: "store" as IconName, text: "Excluded small businesses — invisible unless they pay for ads" },
              { icon: "globe" as IconName, text: "Broken discovery — exhausting search with no community context" },
              { icon: "leaf" as IconName, text: "Agricultural dysfunction — wastage, middlemen, volatile income" },
              { icon: "cpu" as IconName, text: "AI job displacement — technology that replaces instead of enables" },
              { icon: "heart" as IconName, text: "Fragmented healthcare — communities disconnected from providers" },
            ].map((item, i) => (
              <div key={i} className="card" style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start", borderLeft: "none" }}>
                <span style={{ color: "var(--crimson)", flexShrink: 0 }}><Icon name={item.icon} size={26} /></span>
                <p style={{ fontSize: "0.95rem", color: "var(--charcoal)" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section--cream mandala-bg">
        <div className="container">
          <div className="section-header">
            <span className="kicker">How LCCIA Bandh Works</span>
            <h2>Four Steps to Trusted Commerce</h2>
          </div>
          <div className="grid grid-4" style={{ maxWidth: 1100, margin: "0 auto" }}>
            {[
              { step: "01", title: "Engage", desc: "Discover events in your community — markets, fairs, workshops, health camps." },
              { step: "02", title: "Experience", desc: "Attend and participate. Meet real people. See real products. Feel real trust." },
              { step: "03", title: "Trust", desc: "Build your trust network through genealogy and verified community connections." },
              { step: "04", title: "Transact", desc: "Commerce flows naturally from community. Buy from people your network trusts." },
            ].map((item, i) => (
              <div key={i} className="card" style={{ textAlign: "center", borderTop: "4px solid var(--saffron-gold)", borderLeft: "none" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700, color: "var(--crimson)", opacity: 0.25, display: "block", marginBottom: "0.5rem" }}>{item.step}</span>
                <h3 style={{ margin: "0.5rem 0" }}>{item.title}</h3>
                <p className="card__text">{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/how-it-works" className="btn btn-primary">Learn How It Works →</Link>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="section section--crimson">
        <div className="container">
          <div className="section-header">
            <span className="kicker kicker--light">Three Interlocking Pillars</span>
            <h2 style={{ color: "var(--ivory)" }}>The Engine Behind LCCIA Bandh</h2>
          </div>
          <div className="grid grid-3">
            {PILLARS.map((p, i) => (
              <div key={i} className="indian-border" style={{ background: "rgba(250,246,240,0.08)", borderRadius: "8px", padding: "2.5rem", textAlign: "center", position: "relative" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", margin: "0 auto 1rem", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--saffron-gold)", color: "var(--deep-crimson)" }}>
                  <Icon name={p.icon} size={30} />
                </div>
                <h3 style={{ color: "var(--saffron-gold)", marginBottom: "0.75rem" }}>{p.title}</h3>
                <p style={{ color: "rgba(250,246,240,0.85)", fontSize: "0.95rem", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/genx-tech" className="btn btn-gold">Meet Shivo →</Link>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section section--ivory mandala-bg">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Sectors We Transform</span>
            <h2>One Platform, Every Community Need</h2>
            <p>From local retail to agriculture, healthcare to cultural heritage — LCCIA Bandh makes commerce human again.</p>
          </div>
          <div className="grid grid-2">
            {USE_CASES.map((uc, i) => (
              <div key={i} className="card" style={{ borderLeft: "4px solid var(--saffron-gold)", padding: 0, overflow: "hidden" }}>
                {uc.image ? (
                  <img src={uc.image} alt={uc.title} style={{ width: "100%", height: 180, objectFit: "cover" }} loading="lazy" />
                ) : (
                  <div className="sector-head"><Icon name={uc.icon} size={54} /></div>
                )}
                <div style={{ padding: "1.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                    <span style={{ color: "var(--crimson)" }}><Icon name={uc.icon} size={24} /></span>
                    <h3 className="card__title" style={{ margin: 0 }}>{uc.title}</h3>
                  </div>
                  <div style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
                    <p style={{ color: "var(--warm-crimson-light)", fontWeight: 500, marginBottom: "0.3rem" }}>Problem: {uc.problem}</p>
                    <p style={{ color: "var(--forest-teal)", fontWeight: 500, marginBottom: "0.3rem" }}>Solution: {uc.solution}</p>
                    <p style={{ color: "var(--charcoal)" }}>Outcome: {uc.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SUITE */}
      <section className="section section--cream section-border-top">
        <div className="container">
          <div className="section-header">
            <span className="kicker">The Belevarage Product Suite</span>
            <h2>Apps That Do the Work For You</h2>
            <p>Each one lives inside LCCIA Bandh and is powered by Shivo, our AI.</p>
          </div>
          <div className="grid grid-2">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="section section--deep peacock-pattern">
        <div className="container">
          <div className="section-header">
            <span className="kicker kicker--light">Impact & Employment</span>
            <h2 style={{ color: "var(--ivory)" }}>AI That Enables People, Not Replaces Them</h2>
            <p style={{ color: "rgba(250,246,240,0.8)" }}>Every event on LCCIA Bandh generates employment. Every community strengthens its local economy.</p>
          </div>
          <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
            <Link href="/impact" className="btn btn-gold">Explore Our Impact →</Link>
          </div>
        </div>
      </section>

      {/* GENEALOGY TRUST */}
      <section className="section section--cream mandala-bg section-border-top">
        <div className="container">
          <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
            <div className="lotus-divider" style={{ marginBottom: "2rem" }}>
              <div className="lotus-divider__line" />
              <span className="lotus-divider__icon"><Icon name="tree" size={26} /></span>
              <div className="lotus-divider__line" />
            </div>
            <span className="kicker">Genealogy Trust Network</span>
            <h2>Trade With People Your Network Trusts</h2>
            <p style={{ color: "var(--charcoal)", margin: "1rem auto 1.5rem", maxWidth: 680 }}>
              Build your digital family tree. Connect with your community. Every relationship you verify strengthens
              the trust network — making commerce safer, more personal, and more meaningful for everyone.
            </p>
            <div className="callout" style={{ marginBottom: "1.5rem", textAlign: "left", maxWidth: 680, marginInline: "auto" }}>
              Like a trusted family circle for your community — extended into relationship-driven commerce.
            </div>
            <Link href="/genealogy-trust" className="btn btn-primary">Discover the Trust Network →</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="join" className="section section--crimson">
        <div className="container text-center">
          <div className="lotus-divider" style={{ marginBottom: "2rem" }}>
            <div className="lotus-divider__line" />
            <span className="lotus-divider__icon" style={{ color: "var(--ivory)" }}>❋</span>
            <div className="lotus-divider__line" />
          </div>
          <span className="kicker kicker--light">Get Started Today</span>
          <h2 style={{ color: "var(--ivory)", marginBottom: "1rem" }}>Step Into LCCIA Bandh</h2>
          <p style={{ color: "rgba(250,246,240,0.85)", maxWidth: 600, margin: "0 auto 2rem" }}>
            Join as a member, register as a supplier, and experience community commerce powered by Belevarage&apos;s GenX Tech.
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

/* ---- Product card: a founder-approved product write-up ---- */
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card" style={{ borderLeft: "4px solid var(--saffron-gold)", padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {product.image ? (
        <img src={product.image} alt={product.name} style={{ width: "100%", height: 180, objectFit: "cover" }} loading="lazy" />
      ) : (
        <div className="sector-head"><Icon name={product.icon} size={54} /></div>
      )}
      <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ color: "var(--crimson)" }}><Icon name={product.icon} size={24} /></span>
          <h3 className="card__title" style={{ margin: 0, fontSize: "1.3rem" }}>{product.name}</h3>
        </div>
        <p style={{ color: "var(--stone-grey)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0.35rem 0 0.75rem" }}>{product.lead}</p>
        <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--crimson)", fontSize: "1.15rem", marginBottom: "0.75rem" }}>{product.tagline}</p>
        <p className="card__text" style={{ marginBottom: "1.25rem" }}>{product.body}</p>
        <div style={{ marginTop: "auto" }}>
          <Link href={product.href} className="btn btn-secondary">Learn more →</Link>
        </div>
      </div>
    </div>
  );
}

/* ---- Pivot card: the three doors into the Bandh platform ---- */
function PivotCard({
  image, icon, badge, title, desc, points, ctaLabel, href, featured, internal,
}: {
  image: string;
  icon: IconName;
  badge: string;
  title: string;
  desc: string;
  points: string[];
  ctaLabel: string;
  href: string;
  featured?: boolean;
  internal?: boolean;
}) {
  const cta = internal ? (
    <Link href={href} className={`btn ${featured ? "btn-gold" : "btn-primary"}`} style={{ width: "100%" }}>{ctaLabel}</Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`btn ${featured ? "btn-gold" : "btn-primary"}`} style={{ width: "100%" }}>{ctaLabel}</a>
  );
  return (
    <div className="card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", border: featured ? "2px solid var(--saffron-gold)" : undefined }}>
      <div style={{ position: "relative", height: 170 }}>
        <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
        <span className="badge" style={{ position: "absolute", top: "0.9rem", left: "0.9rem", background: "var(--deep-crimson)", color: "var(--ivory)", border: "1px solid var(--saffron-gold)" }}>{badge}</span>
        <div style={{ position: "absolute", bottom: "-24px", left: "1.5rem", width: 48, height: 48, borderRadius: "50%", background: "var(--crimson)", color: "var(--ivory)", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid var(--saffron-gold)", boxShadow: "0 4px 12px rgba(129,30,24,0.35)" }}>
          <Icon name={icon} size={24} />
        </div>
      </div>
      <div style={{ padding: "2.25rem 1.75rem 1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 className="card__title" style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>{title}</h3>
        <p className="card__text" style={{ marginBottom: "1rem" }}>{desc}</p>
        <ul style={{ listStyle: "none", display: "grid", gap: "0.5rem", marginBottom: "1.5rem" }}>
          {points.map((p, i) => (
            <li key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.88rem", color: "var(--charcoal)" }}>
              <span style={{ color: "var(--forest-teal)", flexShrink: 0 }}><Icon name="check" size={18} /></span>
              {p}
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "auto" }}>{cta}</div>
      </div>
    </div>
  );
}
