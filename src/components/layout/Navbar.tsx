"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// The live LCCIA Bandh platform that Belevarage builds and operates.
const BANDH_MEMBER = "https://bandh.lccia.in";
const BANDH_SUPPLIER = "https://supplier.lccia.in";

// Audience pages grouped under one "Solutions" menu to keep the top row short.
const SOLUTIONS = [
  { label: "Communities", href: "/communities" },
  { label: "Businesses", href: "/businesses" },
  { label: "Agriculture", href: "/agriculture" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Genealogy", href: "/genealogy-trust" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--solid" : "navbar--transparent"}`}>
        <div className="container navbar__inner">
          <Link href="/" className="navbar__logo" aria-label="Belevarage home">
            <span className="navbar__logo-badge">
              <img src="/images/belevarage-live-logo.png" alt="" width={42} height={46} />
            </span>
            <span className="navbar__logo-text">BELEVARAGE</span>
          </Link>

          <ul className="navbar__links">
            <li><Link href="/how-it-works" className="navbar__link">How It Works</Link></li>

            <li className="navbar__has-dropdown">
              <button type="button" className="navbar__link navbar__dropdown-toggle" aria-haspopup="true">
                Solutions <span aria-hidden="true" className="navbar__caret">▾</span>
              </button>
              <ul className="navbar__dropdown">
                {SOLUTIONS.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="navbar__dropdown-link">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li><Link href="/genx-tech" className="navbar__link navbar__link--accent">GenX Tech</Link></li>
            <li><Link href="/about" className="navbar__link">About</Link></li>
            <li><Link href="/contact" className="navbar__link">Contact</Link></li>
            <li>
              <a href={BANDH_SUPPLIER} target="_blank" rel="noopener noreferrer" className="navbar__link">Suppliers</a>
            </li>
            <li>
              <a href={BANDH_MEMBER} target="_blank" rel="noopener noreferrer" className="navbar__link navbar__cta">Sign up ↗</a>
            </li>
          </ul>

          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`} role="dialog" aria-modal="true" aria-label="Main menu">
        <button className="mobile-menu__close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        <ul className="mobile-menu__links">
          <li><Link href="/how-it-works" className="mobile-menu__link" onClick={() => setMenuOpen(false)}>How It Works</Link></li>
          <li className="mobile-menu__group">Solutions</li>
          {SOLUTIONS.map((s) => (
            <li key={s.href}><Link href={s.href} className="mobile-menu__link mobile-menu__link--sub" onClick={() => setMenuOpen(false)}>{s.label}</Link></li>
          ))}
          <li><Link href="/genx-tech" className="mobile-menu__link" onClick={() => setMenuOpen(false)}>GenX Tech</Link></li>
          <li><Link href="/about" className="mobile-menu__link" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/contact" className="mobile-menu__link" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <a href={BANDH_MEMBER} target="_blank" rel="noopener noreferrer" className="btn btn-gold" onClick={() => setMenuOpen(false)}>Sign up on Bandh ↗</a>
            <a href={BANDH_SUPPLIER} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light" onClick={() => setMenuOpen(false)}>Register as Supplier ↗</a>
          </li>
        </ul>
      </div>
    </>
  );
}
