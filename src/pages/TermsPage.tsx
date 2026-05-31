import { Container, Section } from '../components/ui';
import { pricing, refundPolicy, company, legalDates, formatLegalDate } from '../data/pricingData';

export function TermsPage() {
  return (
    <Section className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Terms of Service</h1>
          <p className="text-text-muted mb-8">Last updated: {formatLegalDate(legalDates.termsLastUpdated)}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-text-secondary leading-relaxed">
                By downloading, installing, accessing, or using Manhwa Studio ("the Software", "Service", or "Platform"), you ("User", "you", or "your") agree to be bound by these Terms of Service ("Terms"), our Privacy Policy, and License Agreement. If you do not agree to these Terms, do not use the Software. These Terms constitute a legally binding agreement between you and Manhwa Studio ("we", "us", or "our").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Eligibility</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                To use our Service, you must:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Be at least 18 years of age, or the age of majority in your jurisdiction</li>
                <li>Have the legal capacity to enter into a binding agreement</li>
                <li>Not be prohibited from using the Service under applicable laws</li>
                <li>Provide accurate and complete registration information</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Account Registration</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                To access certain features, you may need to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                We reserve the right to suspend or terminate accounts that violate these Terms or contain false information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">4. License Grant</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Subject to your compliance with these Terms and payment of applicable fees, we grant you a limited, non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Download and install the Software on devices you own or control</li>
                <li>Use the Software for personal or commercial purposes as permitted by your license tier</li>
                <li>Create, edit, and export content using the Software's features</li>
                <li>Access updates and new features during your active subscription period</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Subscription Plans and Pricing</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                {company.name} offers the following license options:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>Free Trial:</strong> {pricing.trial.duration}-day full access trial, no payment required upfront</li>
                <li><strong>Monthly Subscription:</strong> {pricing.monthly.priceDisplay}/month, full access, billed monthly, auto-renews until cancelled</li>
                <li><strong>Yearly Subscription:</strong> {pricing.yearly.priceDisplay}/year ({pricing.yearly.savingsText}), full access, billed annually, auto-renews until cancelled</li>
                <li><strong>Lifetime License:</strong> {pricing.lifetime.priceDisplay} one-time purchase, perpetual access to current and future features</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                All prices are in USD. Prices are exclusive of applicable taxes unless otherwise stated. We reserve the right to modify pricing with 30 days' notice to existing subscribers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Payment Terms</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                By purchasing a subscription or license, you agree to the following:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>Payment Processing:</strong> Payments are processed securely through our third-party payment processors (e.g., Stripe, PayPal). We do not store your full payment card details.</li>
                <li><strong>Authorization:</strong> You authorize us to charge your payment method for the subscription fees and any applicable taxes.</li>
                <li><strong>Automatic Renewal:</strong> Subscriptions automatically renew at the end of each billing period unless cancelled before the renewal date.</li>
                <li><strong>Failed Payments:</strong> If payment fails, we may suspend access until payment is received. We will attempt to notify you before suspension.</li>
                <li><strong>Currency:</strong> All transactions are processed in the currency displayed at checkout.</li>
                <li><strong>Taxes:</strong> You are responsible for any applicable sales tax, VAT, or other taxes based on your location.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">7. Free Trial</h2>
              <p className="text-text-secondary leading-relaxed">
                We offer a <strong>{pricing.trial.duration}-day free trial</strong> with full access to all premium features. At the end of the {pricing.trial.duration}-day trial period, your subscription will automatically convert to a paid subscription ({pricing.monthly.priceDisplay}/month) unless you cancel before the trial ends. You will be charged on the first day after the trial period. Free trials are limited to one per user and require payment information to activate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">8. Cancellation and Refund Policy</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Cancellation:</strong>
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>You may cancel your subscription at any time through your account settings or by contacting support</li>
                <li>Cancellation takes effect at the end of the current billing period</li>
                <li>You will retain access to premium features until the end of your paid period</li>
                <li>No partial refunds for unused portions of the billing period (except as stated below)</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4 mb-4">
                <strong>Refund Policy:</strong>
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>We offer a <strong>{refundPolicy.guaranteeText}</strong> on all first-time purchases</li>
                <li>To request a refund, contact us within {refundPolicy.guaranteeDays} days of your initial purchase</li>
                <li>Refunds are processed within {refundPolicy.processingDays} to your original payment method</li>
                <li>Lifetime licenses are eligible for refund within {refundPolicy.guaranteeDays} days of purchase</li>
                <li>Renewal payments are non-refundable unless required by law</li>
                <li>Refunds may be denied if we detect abuse of the refund policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">9. Restrictions</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                You may not:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Software</li>
                <li>Modify, adapt, translate, or create derivative works of the Software</li>
                <li>Distribute, sell, lease, rent, sublicense, or transfer the Software to third parties</li>
                <li>Remove, alter, or obscure any proprietary notices, labels, or marks</li>
                <li>Use the Software for any illegal, unauthorized, or harmful purpose</li>
                <li>Share, publish, or distribute your license key or account credentials</li>
                <li>Circumvent any technical measures designed to control access to the Software</li>
                <li>Use the Software to infringe on intellectual property rights of others</li>
                <li>Use automated tools to abuse the Service or create fake accounts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">10. Content Responsibility</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                You are solely responsible for the content you download, edit, create, and distribute using the Software. You represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>You have all necessary rights, licenses, and permissions for any content you process</li>
                <li>Your use of the Software does not violate any third-party intellectual property rights</li>
                <li>Your content does not contain illegal, harmful, or objectionable material</li>
                <li>You will comply with all applicable copyright and intellectual property laws</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                We do not endorse, verify, or take responsibility for any user-generated content. You agree to indemnify us against any claims arising from your content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">11. Intellectual Property</h2>
              <p className="text-text-secondary leading-relaxed">
                The Software and all related materials, including but not limited to the source code, algorithms, designs, graphics, user interface, logos, trademarks, documentation, and all improvements and modifications thereto, are owned by Manhwa Studio and protected by copyright, trademark, and other intellectual property laws. Your license does not grant you any ownership rights in the Software. All rights not expressly granted are reserved.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">12. Third-Party Services</h2>
              <p className="text-text-secondary leading-relaxed">
                The Software may integrate with or link to third-party services, websites, or content. We do not control, endorse, or assume responsibility for any third-party services. Your use of third-party services is subject to their respective terms and privacy policies. We are not liable for any damages or losses arising from your use of third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">13. Disclaimer of Warranties</h2>
              <p className="text-text-secondary leading-relaxed">
                THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY. WE DO NOT WARRANT THAT THE SOFTWARE WILL BE ERROR-FREE, UNINTERRUPTED, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. YOU USE THE SOFTWARE AT YOUR OWN RISK.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">14. Limitation of Liability</h2>
              <p className="text-text-secondary leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL MANHWA STUDIO, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING FROM: (A) YOUR USE OR INABILITY TO USE THE SOFTWARE; (B) ANY UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA; (C) ANY THIRD-PARTY CONDUCT OR CONTENT; OR (D) ANY OTHER MATTER RELATING TO THE SOFTWARE. OUR TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE GREATER OF (I) THE AMOUNT PAID BY YOU FOR THE SOFTWARE IN THE 12 MONTHS PRECEDING THE CLAIM, OR (II) ONE HUNDRED US DOLLARS ($100).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">15. Indemnification</h2>
              <p className="text-text-secondary leading-relaxed">
                You agree to indemnify, defend, and hold harmless Manhwa Studio and its officers, directors, employees, agents, and affiliates from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from: (a) your use of the Software; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) your content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">16. Termination</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We may suspend or terminate your access to the Software immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Your license to use the Software is immediately revoked</li>
                <li>You must cease all use of the Software and delete all copies</li>
                <li>We may delete your account and associated data</li>
                <li>Any outstanding payment obligations remain due</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                Sections regarding intellectual property, disclaimers, limitations of liability, indemnification, and governing law survive termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">17. Modifications to Service and Terms</h2>
              <p className="text-text-secondary leading-relaxed">
                We reserve the right to modify, suspend, or discontinue the Software or any part thereof at any time. We may update these Terms from time to time. We will notify users of material changes via email or through the Software. Continued use of the Software after changes constitutes acceptance of the new Terms. If you do not agree to the modified Terms, you must stop using the Software.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">18. Governing Law and Dispute Resolution</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Manhwa Studio is established, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the Software shall be resolved through:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>Informal Resolution:</strong> We encourage you to contact us first to resolve any disputes informally</li>
                <li><strong>Arbitration:</strong> If informal resolution fails, disputes shall be resolved through binding arbitration</li>
                <li><strong>Class Action Waiver:</strong> You agree to resolve disputes individually and waive any right to participate in class actions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">19. Severability</h2>
              <p className="text-text-secondary leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">20. Entire Agreement</h2>
              <p className="text-text-secondary leading-relaxed">
                These Terms, together with our Privacy Policy and License Agreement, constitute the entire agreement between you and {company.name} regarding your use of the Software, and supersede all prior agreements, understandings, and communications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">21. Contact Us</h2>
              <p className="text-text-secondary leading-relaxed">
                If you have questions, concerns, or requests regarding these Terms, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-bg-secondary rounded-lg">
                <p className="text-text-secondary">
                  <strong>Email:</strong> {company.email.support}<br />
                  <strong>Telegram:</strong>{' '}
                  <a href={company.telegram.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    {company.telegram.username}
                  </a><br />
                  <strong>Website:</strong> {company.website}
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
