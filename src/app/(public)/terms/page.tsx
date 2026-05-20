import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — BELEVARAGE",
  description: "Terms and conditions for using the BELEVARAGE platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <section className="section section--crimson">
        <div className="container">
          <div className="hero__content">
            <span className="kicker kicker--light">Legal</span>
            <h1 className="hero__title">Terms of Use</h1>
            <p className="hero__subtitle">
              Please read these terms carefully before using our platform.
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

            <h2 className="mb-2">1. Acceptance of Terms</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              By accessing or using BELEVARAGE (&ldquo;Platform&rdquo;), you agree to be bound by these Terms of Use. 
              If you do not agree to these terms, please do not use our Platform.
            </p>

            <h2 className="mb-2">2. Description of Service</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              BELEVARAGE is an event-driven socio-commerce platform that connects communities through 
              events, trust networks, and commerce. We facilitate connections between businesses, farmers, 
              healthcare providers, and community members.
            </p>

            <h2 className="mb-2">3. User Accounts</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1rem', lineHeight: 1.7 }}>
              To use certain features of the Platform, you must register for an account. You agree to:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'var(--charcoal)', lineHeight: 1.7 }}>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly update your information if it changes</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>

            <h2 className="mb-2">4. User Conduct</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1rem', lineHeight: 1.7 }}>
              You agree not to use the Platform to:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'var(--charcoal)', lineHeight: 1.7 }}>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Post false, misleading, or fraudulent information</li>
              <li>Harass, abuse, or harm others</li>
              <li>Interfere with the Platform&apos;s security features</li>
              <li>Use automated systems to access the Platform</li>
            </ul>

            <h2 className="mb-2">5. Trust Network and Genealogy</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              The Platform&apos;s genealogy trust network feature allows users to verify relationships. 
              You agree to only establish verified connections with individuals you actually know. 
              Falsifying relationships or attempting to manipulate the trust network is prohibited.
            </p>

            <h2 className="mb-2">6. Transactions</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              BELEVARAGE facilitates connections between buyers and sellers but is not a party to transactions. 
              Users are responsible for the terms of their transactions, product quality, payment, and dispute resolution. 
              We encourage users to transact within their trust networks for added security.
            </p>

            <h2 className="mb-2">7. Content and Intellectual Property</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Users retain ownership of content they post but grant BELEVARAGE a license to use, 
              display, and distribute such content on the Platform. The Platform and its original 
              content are owned by BELEVARAGE and protected by intellectual property laws.
            </p>

            <h2 className="mb-2">8. Termination</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              We may suspend or terminate your account and access to the Platform at our discretion, 
              without notice, for conduct that we believe violates these Terms or is harmful to other users.
            </p>

            <h2 className="mb-2">9. Limitation of Liability</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              BELEVARAGE shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use of or inability to use the Platform.
            </p>

            <h2 className="mb-2">10. Changes to Terms</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              We reserve the right to modify these Terms at any time. We will notify users of significant changes. 
              Continued use of the Platform after changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="mb-2">11. Governing Law</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              These Terms shall be governed by and construed in accordance with the laws of India. 
              Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai.
            </p>

            <h2 className="mb-2">12. Contact</h2>
            <p style={{ color: 'var(--charcoal)', lineHeight: 1.7 }}>
              For questions about these Terms, please contact us at:
              <br /><br />
              Email: legal@belevarage.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
