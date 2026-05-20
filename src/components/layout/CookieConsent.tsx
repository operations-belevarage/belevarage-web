"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("belevarage_cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("belevarage_cookie_consent", "all");
    setShow(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem("belevarage_cookie_consent", "essential");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0,
      background: "var(--deep-ink)", color: "var(--ivory)",
      padding: "1.5rem", zIndex: 9999, boxShadow: "0 -4px 20px rgba(0,0,0,0.15)",
    }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ flex: "1 1 500px" }}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>We value your privacy</h3>
          <p style={{ fontSize: "0.85rem", color: "rgba(250,246,240,0.8)" }}>
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies. Read our <Link href="/cookies" style={{ color: "var(--saffron-gold)", textDecoration: "underline" }}>Cookie Policy</Link> for more info.
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <button onClick={handleEssentialOnly} className="btn" style={{ background: "transparent", color: "var(--ivory)", border: "1px solid rgba(250,246,240,0.3)", padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}>Essential Only</button>
          <button onClick={handleAcceptAll} className="btn btn-gold" style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}>Accept All</button>
        </div>
      </div>
    </div>
  );
}
