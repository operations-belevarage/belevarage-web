import Link from "next/link";

const BANDH_MEMBER = "https://bandh.lccia.in";
const BANDH_SUPPLIER = "https://supplier.lccia.in";
const STUDIO = "https://studio.belevarage.com";

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
        <div className="footer__grid footer__grid--5">
          <div>
            <div className="footer__brand-name">बेलवरेज BELEVARAGE</div>
            <div className="footer__tagline">The team behind LCCIA Bandh</div>
            <p className="footer__desc">
              Belevarage builds and operates the LCCIA Bandh Platform — India&apos;s
              event-driven socio-commerce network, powered by community trust and
              our GenX Tech AI. Heritage values, next-generation technology.
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
              <span style={{ fontSize: "1.5rem" }}>🇮🇳</span>
              <span style={{ color: "rgba(250,246,240,0.6)", fontSize: "0.85rem" }}>
                Proudly Indian • Globally Inspired
              </span>
            </div>
          </div>

          <div>
            <div className="footer__heading">LCCIA Bandh</div>
            <ul className="footer__links">
              <li>
                <a href={BANDH_MEMBER} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--cta">
                  Member Sign Up ↗
                </a>
              </li>
              <li>
                <a href={BANDH_SUPPLIER} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--cta">
                  Supplier Registration ↗
                </a>
              </li>
              <li>
                <a href={BANDH_MEMBER} target="_blank" rel="noopener noreferrer" className="footer__link">
                  Member Login ↗
                </a>
              </li>
              <li><Link href="/genx-tech" className="footer__link">GenX Tech (AI)</Link></li>
              <li>
                <a href={STUDIO} target="_blank" rel="noopener noreferrer" className="footer__link">
                  APAI Studio ↗
                </a>
              </li>
            </ul>
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
          <span>Builders of LCCIA Bandh • Powered by GenX Tech</span>
        </div>
      </div>
    </footer>
  );
}
