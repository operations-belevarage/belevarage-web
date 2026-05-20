import Link from "next/link";

const PLATFORM = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Communities", href: "/communities" },
  { label: "For Businesses", href: "/businesses" },
  { label: "For Farmers", href: "/agriculture" },
  { label: "For Healthcare", href: "/healthcare" },
];
const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Our Impact", href: "/impact" },
  { label: "Investors", href: "/investors" },
  { label: "Careers", href: "/careers" },
  { label: "Press & Media", href: "/press" },
  { label: "Blog", href: "/blog" },
];
const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-name">बेलवरेज BELEVARAGE</div>
            <div className="footer__tagline">Where Community Meets Commerce</div>
            <p className="footer__desc">
              An event-driven socio-commerce platform rooted in Indian values. 
              Connecting communities through trust, heritage, and meaningful commerce.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🇮🇳</span>
              <span style={{ color: 'rgba(250,246,240,0.6)', fontSize: '0.85rem' }}>
                Proudly Indian • Globally Inspired
              </span>
            </div>
          </div>
          <div>
            <div className="footer__heading">Platform</div>
            <ul className="footer__links">
              {PLATFORM.map((l) => (
                <li key={l.href}><Link href={l.href} className="footer__link">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer__heading">Company</div>
            <ul className="footer__links">
              {COMPANY.map((l) => (
                <li key={l.href}><Link href={l.href} className="footer__link">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer__heading">Legal</div>
            <ul className="footer__links">
              {LEGAL.map((l) => (
                <li key={l.href}><Link href={l.href} className="footer__link">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} BELEVARAGE. सत्यमेव जयते</span>
          <span>Event-Driven • Trust-Anchored • Community-Powered</span>
        </div>
      </div>
    </footer>
  );
}
