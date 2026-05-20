import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — BELEVARAGE",
  description: "How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <section className="section section--crimson">
        <div className="container">
          <div className="hero__content">
            <span className="kicker kicker--light">Legal</span>
            <h1 className="hero__title">Privacy Policy</h1>
            <p className="hero__subtitle">
              Your privacy is important to us. Learn how we handle your data.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div className="callout" style={{ marginBottom: '2rem' }}>
              Last updated: April 2026
            </div>

            <h2 className="mb-2">1. Introduction</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              BELEVARAGE (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              use our platform and services.
            </p>

            <h2 className="mb-2">2. Information We Collect</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1rem', lineHeight: 1.7 }}>
              We collect information that you provide directly to us, including:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'var(--charcoal)', lineHeight: 1.7 }}>
              <li>Personal identifiers (name, email address, phone number)</li>
              <li>Business information (for registered businesses)</li>
              <li>Location data (city, address)</li>
              <li>Genealogy and relationship data (with your consent)</li>
              <li>Payment information (processed securely by third parties)</li>
              <li>Communications with us</li>
            </ul>

            <h2 className="mb-2">3. How We Use Your Information</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1rem', lineHeight: 1.7 }}>
              We use the information we collect to:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'var(--charcoal)', lineHeight: 1.7 }}>
              <li>Provide and maintain our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information and updates</li>
              <li>Enable community features and trust networks</li>
              <li>Improve our platform and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="mb-2">4. Genealogy Data</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Our genealogy trust network feature requires storing relationship data. This information:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'var(--charcoal)', lineHeight: 1.7 }}>
              <li>Is only stored with explicit consent from both parties</li>
              <li>Is encrypted and secured</li>
              <li>Is never sold to third parties</li>
              <li>Can be deleted at your request</li>
              <li>Is only used to build trust networks within the platform</li>
            </ul>

            <h2 className="mb-2">5. Data Security</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="mb-2">6. Your Rights</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1rem', lineHeight: 1.7 }}>
              Depending on your location, you may have the right to:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'var(--charcoal)', lineHeight: 1.7 }}>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your information</li>
              <li>Object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>

            <h2 className="mb-2">7. Contact Us</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              If you have any questions about this Privacy Policy, please contact us at:
              <br /><br />
              Email: privacy@belevarage.com<br />
              Address: BELEVARAGE HQ, Mumbai, India
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
