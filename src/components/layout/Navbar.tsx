"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// The live LCCIA Bandh platform that Belevarage builds and operates. These are
// external destinations — the whole marketing site funnels visitors here.
const BANDH_MEMBER = "https://bandh.lccia.in";
const BANDH_SUPPLIER = "https://supplier.lccia.in";

const NAV_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "GenX Tech", href: "/genx-tech" },
  { label: "Communities", href: "/communities" },
  { label: "Businesses", href: "/businesses" },
  { label: "Agriculture", href: "/agriculture" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--solid" : "navbar--transparent"}`}>
        <div className="container navbar__inner">
          <Link href="/" className="navbar__logo">
            <img
              src="/images/logo.svg"
              alt=""
              style={{ height: "45px", width: "auto" }}
            />
            <div>
              <div className="navbar__logo-text">बेलवरेज</div>
              <div className="navbar__logo-tagline">BELEVARAGE</div>
            </div>
          </Link>
          <ul className="navbar__links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`navbar__link${l.label === "GenX Tech" ? " navbar__link--accent" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={BANDH_SUPPLIER}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__link"
              >
                Suppliers ↗
              </a>
            </li>
            <li>
              <a
                href={BANDH_MEMBER}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__link navbar__cta"
              >
                Sign up on Bandh ↗
              </a>
            </li>
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <button className="mobile-menu__close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        <ul className="mobile-menu__links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="mobile-menu__link" onClick={() => setMenuOpen(false)}>{l.label}</Link>
            </li>
          ))}
          <li style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <a href={BANDH_MEMBER} target="_blank" rel="noopener noreferrer" className="btn btn-gold" onClick={() => setMenuOpen(false)}>
              Sign up on Bandh ↗
            </a>
            <a href={BANDH_SUPPLIER} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light" onClick={() => setMenuOpen(false)}>
              Register as Supplier ↗
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
