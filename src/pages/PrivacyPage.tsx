import { Container, Section } from '../components/ui';
import { company, legalDates, formatLegalDate, dataCollection } from '../data/pricingData';

export function PrivacyPage() {
  return (
    <Section className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Privacy Policy</h1>
          <p className="text-text-muted mb-8">Last updated: {formatLegalDate(legalDates.privacyLastUpdated)}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Privacy Highlight Box */}
            <section className="p-4 bg-bg-secondary rounded-lg border border-green-500/30">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Privacy-First Design</h3>
              <p className="text-text-secondary leading-relaxed">
                {company.name} is a <strong>local-first desktop application</strong>. All your projects, images, and exported files are stored directly on your computer. We do not upload, sync, or have access to your content. Your creative work stays on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Introduction</h2>
              <p className="text-text-secondary leading-relaxed">
                {company.name} ("we", "us", or "our") respects your privacy. This Privacy Policy explains what minimal information we collect, how we use it, and your rights regarding that information. We believe in transparency and collecting only what's necessary to provide our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">2. What We DON'T Collect</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Let's be clear about what we <strong>do not</strong> collect or have access to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                {dataCollection.whatWeDontCollect.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">3. What We Collect</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We collect minimal information necessary to provide licensing and support:
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">3.1 Account Information</h3>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>Email Address:</strong> Required for license key delivery, account management, and important service notifications</li>
                <li><strong>Password:</strong> Securely hashed, used for account authentication</li>
                <li><strong>License Key:</strong> To verify your subscription status</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">3.2 Payment Information</h3>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>Billing Details:</strong> Processed securely by Stripe or PayPal</li>
                <li><strong>We DO NOT store:</strong> Full credit card numbers, CVV, or banking details</li>
                <li><strong>We store:</strong> Transaction IDs and billing history for your records</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">3.3 Anonymous Analytics (Opt-In Only)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you choose to opt-in, we may collect anonymous usage statistics to improve the app:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Which features are most used</li>
                <li>App crash reports and error logs</li>
                <li>General performance metrics</li>
                <li>Operating system and app version</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                <strong>You can disable analytics at any time</strong> in the app settings. Analytics data is anonymized and cannot be used to identify you personally.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">3.4 Support Communications</h3>
              <p className="text-text-secondary leading-relaxed">
                When you contact us for support, we keep records of your communications to help resolve issues and improve our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">4. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>License Management:</strong> Verify your subscription, deliver license keys, process renewals</li>
                <li><strong>Payment Processing:</strong> Complete transactions through our payment providers</li>
                <li><strong>Service Communications:</strong> Send important updates about your account, billing, or the app</li>
                <li><strong>Support:</strong> Respond to your questions and resolve issues</li>
                <li><strong>Improvement:</strong> If you opt-in to analytics, use data to improve the app</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                <strong>We will never:</strong> Sell your data, send spam, or share your information with advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Payment Security</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Your payment security is our priority:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>PCI-DSS Compliance:</strong> All payments processed through Stripe/PayPal, which are PCI-DSS Level 1 certified</li>
                <li><strong>No Card Storage:</strong> We never see or store your full credit card number</li>
                <li><strong>Encrypted Transmission:</strong> All payment data transmitted via SSL/TLS encryption</li>
                <li><strong>Tokenization:</strong> Payment providers use secure tokens instead of actual card details</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Data Sharing</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We only share your information with:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>Payment Processors:</strong> Stripe or PayPal to process your payments</li>
                <li><strong>Email Service:</strong> To send transactional emails (receipts, license keys)</li>
                <li><strong>Legal Requirements:</strong> If required by law or court order</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4 font-semibold">
                We do NOT sell, rent, or trade your personal information to anyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">7. Your Rights</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>Access:</strong> Request a copy of the data we have about you</li>
                <li><strong>Correction:</strong> Update or correct your account information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                <li><strong>Opt-Out:</strong> Disable analytics at any time in app settings</li>
                <li><strong>Unsubscribe:</strong> Opt out of marketing emails (transactional emails will still be sent)</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                To exercise any of these rights, contact us at {company.email.privacy}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">8. Data Retention</h2>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>Account Data:</strong> Retained while your account is active</li>
                <li><strong>Transaction Records:</strong> Kept for 7 years for legal/tax compliance</li>
                <li><strong>Support Communications:</strong> Retained for 2 years</li>
                <li><strong>Analytics Data:</strong> Anonymized data retained for up to 2 years</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                When you delete your account, we remove your personal data within 30 days, except where retention is legally required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">9. Cookies</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our website uses minimal cookies:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>Essential:</strong> Required for login and account functionality</li>
                <li><strong>Analytics:</strong> Only if you accept (Google Analytics or similar)</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                The desktop app does not use cookies or web tracking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">10. Children's Privacy</h2>
              <p className="text-text-secondary leading-relaxed">
                {company.name} is not intended for children under 18. We do not knowingly collect information from children. If you believe a child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">11. Updates to This Policy</h2>
              <p className="text-text-secondary leading-relaxed">
                We may update this Privacy Policy occasionally. We will notify you of significant changes via email or through the app. The "Last updated" date at the top indicates when the policy was last revised.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">12. Contact Us</h2>
              <p className="text-text-secondary leading-relaxed">
                Questions about this Privacy Policy? Contact us:
              </p>
              <div className="mt-4 p-4 bg-bg-secondary rounded-lg">
                <p className="text-text-secondary">
                  <strong>Email:</strong> {company.email.privacy}<br />
                  <strong>Telegram:</strong>{' '}
                  <a href={company.telegram.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    {company.telegram.username}
                  </a><br />
                  <strong>Website:</strong> {company.website}
                </p>
              </div>
            </section>

            {/* Summary Box */}
            <section className="p-4 bg-bg-secondary rounded-lg border border-border-primary mt-8">
              <h3 className="text-lg font-semibold text-text-primary mb-3">TL;DR - Our Privacy Promise</h3>
              <ul className="list-disc pl-6 text-text-secondary space-y-1">
                <li>Your projects and files stay on YOUR computer</li>
                <li>We only collect email for licensing and payments</li>
                <li>Analytics are opt-in only</li>
                <li>We never sell your data</li>
                <li>Payment info is handled by secure, certified processors</li>
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
