import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — BELEVARAGE",
  description: "Insights on community commerce, events, and socio-economic impact.",
};

const BLOG_POSTS = [
  {
    slug: "future-of-community-commerce",
    title: "The Future of Community Commerce in India",
    excerpt: "How event-driven models are reshaping local economies and creating trusted marketplaces.",
    category: "Strategy",
    date: "April 15, 2026",
    readTime: "5 min read",
  },
  {
    slug: "genealogy-trust-networks",
    title: "Building Trust Through Genealogy Networks",
    excerpt: "Why relationship-based verification beats anonymous reviews in building commerce trust.",
    category: "Technology",
    date: "April 10, 2026",
    readTime: "4 min read",
  },
  {
    slug: "farmer-empowerment",
    title: "How Pre-selling is Transforming Agriculture",
    excerpt: "The 'Book from Home, Pick on the Way' model eliminating wastage and middlemen.",
    category: "Agriculture",
    date: "April 5, 2026",
    readTime: "6 min read",
  },
  {
    slug: "ai-enables-people",
    title: "AI That Enables People, Not Replaces Them",
    excerpt: "Our philosophy on human-centered artificial intelligence for community platforms.",
    category: "Technology",
    date: "March 28, 2026",
    readTime: "5 min read",
  },
  {
    slug: "cultural-events-commerce",
    title: "Cultural Events as Commerce Catalysts",
    excerpt: "How heritage fairs and festivals create natural, trust-based buying experiences.",
    category: "Culture",
    date: "March 20, 2026",
    readTime: "4 min read",
  },
  {
    slug: "healthcare-access",
    title: "Improving Healthcare Access Through Community",
    excerpt: "The role of health camps and wellness events in connecting providers with communities.",
    category: "Healthcare",
    date: "March 15, 2026",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <section className="section section--crimson">
        <div className="container">
          <div className="hero__content">
            <span className="kicker kicker--light">Insights</span>
            <h1 className="hero__title">BELEVARAGE Blog</h1>
            <p className="hero__subtitle">
              Thoughts on community commerce, trust networks, and building the future of local economies.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="grid grid-3" style={{ maxWidth: 1200, margin: '0 auto' }}>
            {BLOG_POSTS.map((post, i) => (
              <article key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <span className="badge" style={{ marginRight: '0.5rem' }}>{post.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--stone-grey)' }}>{post.readTime}</span>
                </div>
                <h3 className="card__title" style={{ marginBottom: '0.75rem' }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </h3>
                <p className="card__text" style={{ flex: 1 }}>{post.excerpt}</p>
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(140,123,121,0.2)' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--stone-grey)' }}>{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container text-center">
          <h2 className="mb-3">Stay Updated</h2>
          <p style={{ color: 'var(--charcoal)', maxWidth: 600, margin: '0 auto 2rem' }}>
            Get the latest insights on community commerce delivered to your inbox.
          </p>
          <form style={{ maxWidth: 500, margin: '0 auto', display: 'flex', gap: '1rem' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="form-input"
              style={{ flex: 1 }}
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
