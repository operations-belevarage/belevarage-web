import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — BELEVARAGE",
  description: "How we use cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <section className="section section--crimson">
        <div className="container">
          <div className="hero__content">
            <span className="kicker kicker--light">Legal</span>
            <h1 className="hero__title">Cookie Policy</h1>
            <p className="hero__subtitle">
              Understanding how and why we use cookies on our platform.
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

            <h2 className="mb-2">1. What Are Cookies</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Cookies are small text files that are placed on your device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>

            <h2 className="mb-2">2. How We Use Cookies</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1rem', lineHeight: 1.7 }}>
              BELEVARAGE uses cookies for the following purposes:
            </p>
            
            <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Essential Cookies</h3>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1rem', lineHeight: 1.7 }}>
              These cookies are necessary for the Platform to function properly. They enable core functionality 
              such as security, network management, and account access.
            </p>

            <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Functional Cookies</h3>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1rem', lineHeight: 1.7 }}>
              These cookies enable enhanced functionality and personalization, such as remembering your 
              preferences and settings.
            </p>

            <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Analytics Cookies</h3>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1rem', lineHeight: 1.7 }}>
              These cookies help us understand how visitors interact with our Platform by collecting 
              and reporting information anonymously. This helps us improve our services.
            </p>

            <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Marketing Cookies</h3>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              These cookies are used to deliver relevant advertisements and track the effectiveness 
              of our marketing campaigns.
            </p>

            <h2 className="mb-2">3. Third-Party Cookies</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              We may allow third-party service providers to place cookies on your device for the purposes 
              listed above. These providers include analytics services (such as Google Analytics) and 
              advertising partners.
            </p>

            <h2 className="mb-2">4. Managing Cookies</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1rem', lineHeight: 1.7 }}>
              Most web browsers allow you to control cookies through their settings. You can usually:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'var(--charcoal)', lineHeight: 1.7 }}>
              <li>View cookies stored on your device</li>
              <li>Delete specific cookies or all cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies</li>
              <li>Allow all cookies</li>
            </ul>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Please note that disabling certain cookies may affect the functionality of our Platform.
            </p>

            <h2 className="mb-2">5. Cookie Consent</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              When you first visit our Platform, you will see a cookie banner requesting your consent 
              to use non-essential cookies. You can change your preferences at any time through the 
              cookie settings.
            </p>

            <h2 className="mb-2">6. Updates to This Policy</h2>
            <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              We may update this Cookie Policy from time to time. We will notify you of any changes by 
              posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date.
            </p>

            <h2 className="mb-2">7. Contact Us</h2>
            <p style={{ color: 'var(--charcoal)', lineHeight: 1.7 }}>
              If you have any questions about our Cookie Policy, please contact us at:
              <br /><br />
              Email: privacy@belevarage.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
