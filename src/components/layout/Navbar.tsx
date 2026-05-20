"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Communities", href: "/communities" },
  { label: "Businesses", href: "/businesses" },
  { label: "Agriculture", href: "/agriculture" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Investors", href: "/investors" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
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
                <Link href={l.href} className="navbar__link">{l.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/businesses" className="navbar__link navbar__cta">Join Us</Link>
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
          <li style={{ marginTop: "1.5rem" }}>
            <Link href="/businesses" className="btn btn-gold" onClick={() => setMenuOpen(false)}>Join the Community</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
