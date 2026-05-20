import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { CookieConsent } from "../components/layout/CookieConsent";

export const metadata: Metadata = {
  title: "बेलवरेज BELEVARAGE — Where Community Meets Commerce",
  description: "BELEVARAGE is an event-driven socio-commerce platform that reimagines how commerce happens — powered by events, genealogy-based trust, and AI intelligence.",
  keywords: "socio-commerce, event-driven commerce, community commerce, BELEVARAGE, India, बेलवरेज",
  openGraph: {
    title: "बेलवरेज BELEVARAGE — Where Community Meets Commerce",
    description: "Event-driven socio-commerce platform powered by community trust and AI.",
    type: "website",
    locale: "en_IN",
    siteName: "BELEVARAGE",
  },
  twitter: { card: "summary_large_image" },
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieConsent />
    </>
  );
}
