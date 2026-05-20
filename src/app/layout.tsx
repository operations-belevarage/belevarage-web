import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "बेलवरेज BELEVARAGE — Where Community Meets Commerce",
  description: "Event-driven socio-commerce platform powered by community trust and AI. An Indian approach to modern commerce.",
  keywords: ["socio-commerce", "event-driven commerce", "community commerce", "BELEVARAGE", "India", "बेलवरेज", "community", "trust"],
  authors: [{ name: "BELEVARAGE" }],
  openGraph: {
    title: "बेलवरेज BELEVARAGE — Where Community Meets Commerce",
    description: "Event-driven socio-commerce platform powered by community trust and AI.",
    type: "website",
    locale: "en_IN",
    siteName: "BELEVARAGE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#811E18" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
