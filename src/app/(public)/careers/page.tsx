import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — BELEVARAGE",
  description: "Join the team building the future of community commerce.",
};

const OPEN_POSITIONS = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Mumbai / Remote",
    type: "Full-time",
    description: "Build the platform powering community commerce across India. Work with Next.js, Prisma, and modern AI tools.",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Mumbai",
    type: "Full-time",
    description: "Lead product development for event-driven socio-commerce. Define roadmap and work closely with engineering and design.",
  },
  {
    title: "Community Manager",
    department: "Operations",
    location: "Pune / Mumbai",
    type: "Full-time",
    description: "Onboard and support local communities. Build relationships with businesses, farmers, and community leaders.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Mumbai / Remote",
    type: "Full-time",
    description: "Design beautiful, accessible interfaces for web and mobile. Create design systems and user experiences that delight.",
  },
  {
    title: "Data Analyst",
    department: "Analytics",
    location: "Mumbai",
    type: "Full-time",
    description: "Analyze community commerce patterns. Build dashboards and insights that help teams make data-driven decisions.",
  },
  {
    title: "Content Strategist",
    department: "Marketing",
    location: "Mumbai / Remote",
    type: "Full-time",
    description: "Create compelling content about community commerce, events, and social impact. Manage blog, social media, and PR.",
  },
];

const BENEFITS = [
  { icon: "💰", title: "Competitive Salary", desc: "Market-competitive compensation with regular reviews" },
  { icon: "📈", title: "Equity", desc: "Stock options for all full-time employees" },
  { icon: "🏥", title: "Health Coverage", desc: "Comprehensive health insurance for you and family" },
  { icon: "🏖️", title: "Flexible PTO", desc: "Generous leave policy including wellness days" },
  { icon: "🏠", title: "Remote Friendly", desc: "Work from home or office - your choice" },
  { icon: "🎓", title: "Learning Budget", desc: "Annual budget for courses, conferences, and books" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <section className="section section--crimson">
        <div className="container">
          <div className="hero__content">
            <span className="kicker kicker--light">Join Us</span>
            <h1 className="hero__title">Build the Future of Commerce</h1>
            <p className="hero__subtitle">
              We&apos;re looking for passionate people who believe in community, trust, and creating positive impact.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Open Positions</span>
            <h2>Join Our Team</h2>
          </div>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            {OPEN_POSITIONS.map((job, i) => (
              <div key={i} className="card" style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 className="card__title">{job.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--stone-grey)', marginTop: '0.25rem' }}>
                      {job.department} • {job.location} • {job.type}
                    </p>
                  </div>
                  <button className="btn btn-primary">Apply Now</button>
                </div>
                <p style={{ color: 'var(--charcoal)', marginTop: '1rem' }}>{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream mandala-bg">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Why Join</span>
            <h2>Benefits & Perks</h2>
          </div>
          <div className="grid grid-3">
            {BENEFITS.map((benefit, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{benefit.icon}</span>
                <h3 className="card__title">{benefit.title}</h3>
                <p className="card__text">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container text-center">
          <span className="kicker kicker--light">Our Culture</span>
          <h2 style={{ color: 'var(--ivory)', marginBottom: '1rem' }}>Values That Drive Us</h2>
          <div className="grid grid-3" style={{ maxWidth: 900, margin: '2rem auto 0' }}>
            {[
              { title: "Community First", desc: "Every decision prioritizes community welfare" },
              { title: "Trust & Integrity", desc: "We build systems that reward honesty" },
              { title: "Innovation", desc: "Technology that enables people" },
            ].map((value, i) => (
              <div key={i} style={{ padding: '1.5rem' }}>
                <h3 style={{ color: 'var(--saffron-gold)', marginBottom: '0.5rem' }}>{value.title}</h3>
                <p style={{ color: 'rgba(250,246,240,0.8)' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
