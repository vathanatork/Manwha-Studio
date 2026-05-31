import { Container, Section } from '../components/ui';
import { pricing, licenseTiers, refundPolicy, company, legalDates, formatLegalDate } from '../data/pricingData';

export function LicensePage() {
  return (
    <Section className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-4">End User License Agreement</h1>
          <p className="text-text-muted mb-8">Last updated: {formatLegalDate(legalDates.licenseLastUpdated)}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="p-4 bg-bg-secondary rounded-lg border border-border-primary">
              <p className="text-text-secondary leading-relaxed">
                <strong>IMPORTANT:</strong> PLEASE READ THIS END USER LICENSE AGREEMENT ("EULA" OR "AGREEMENT") CAREFULLY BEFORE INSTALLING, COPYING, OR USING {company.name.toUpperCase()}. BY INSTALLING, COPYING, OR USING THE SOFTWARE, YOU AGREE TO BE BOUND BY THE TERMS OF THIS AGREEMENT. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT INSTALL OR USE THE SOFTWARE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Definitions</h2>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>"Software"</strong> means {company.name} application, including all updates, upgrades, enhancements, modifications, and associated documentation.</li>
                <li><strong>"Licensor"</strong> means {company.name} and its affiliates.</li>
                <li><strong>"Licensee"</strong> or <strong>"You"</strong> means the individual or entity that has agreed to this EULA.</li>
                <li><strong>"License Key"</strong> means the unique code provided to activate and use the Software.</li>
                <li><strong>"Authorized Device"</strong> means a computer, device, or machine owned or controlled by the Licensee.</li>
                <li><strong>"Subscription"</strong> means a time-limited license to use the Software (monthly or yearly).</li>
                <li><strong>"Lifetime License"</strong> means a perpetual license to use the Software without renewal.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Grant of License</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Subject to the terms of this Agreement and payment of applicable fees, Licensor grants you a limited, non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Download and install the Software on Authorized Devices you own or control</li>
                <li>Use the Software for personal and/or commercial purposes as permitted by your license tier</li>
                <li>Create, edit, and export content using the Software's features</li>
                <li>Receive updates and support during the active license period</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">2.1 License Tiers</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-text-secondary border-collapse mt-4">
                  <thead>
                    <tr className="border-b border-border-primary">
                      <th className="text-left py-3 px-4 font-semibold">License Type</th>
                      <th className="text-left py-3 px-4 font-semibold">Price</th>
                      <th className="text-left py-3 px-4 font-semibold">Devices</th>
                      <th className="text-left py-3 px-4 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {licenseTiers.map((tier, index) => (
                      <tr key={tier.type} className={index < licenseTiers.length - 1 ? 'border-b border-border-primary' : ''}>
                        <td className="py-3 px-4">{tier.type}</td>
                        <td className="py-3 px-4">{tier.price}</td>
                        <td className="py-3 px-4">{tier.devices}</td>
                        <td className="py-3 px-4">{tier.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">3. License Activation and Restrictions</h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">3.1 Activation</h3>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>The Software requires internet activation using a valid License Key</li>
                <li>Each License Key may be activated on the number of devices specified in your license tier</li>
                <li>You may deactivate a device to transfer the license to another device</li>
                <li>Activation requires a valid email address associated with your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">3.2 Restrictions</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                You may NOT:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Copy, reproduce, or distribute the Software except as expressly permitted</li>
                <li>Modify, adapt, translate, or create derivative works of the Software</li>
                <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code</li>
                <li>Remove, alter, or obscure any proprietary notices, labels, or marks</li>
                <li>Sell, rent, lease, sublicense, or transfer the Software or License Key to any third party</li>
                <li>Share, publish, or distribute your License Key</li>
                <li>Use the Software to develop competing products</li>
                <li>Circumvent any technical protection measures in the Software</li>
                <li>Use the Software for any illegal or unauthorized purpose</li>
                <li>Use the Software to infringe on intellectual property rights of others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Subscription Terms</h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">4.1 Free Trial</h3>
              <p className="text-text-secondary leading-relaxed">
                We offer a <strong>{pricing.trial.duration}-day free trial</strong> with full access to all premium features. After the trial period, your subscription will automatically convert to a monthly subscription ({pricing.monthly.priceDisplay}/month) unless you cancel before the trial ends. Free trials require payment information and are limited to one per user.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">4.2 Auto-Renewal</h3>
              <p className="text-text-secondary leading-relaxed">
                Monthly ({pricing.monthly.priceDisplay}/month) and Yearly ({pricing.yearly.priceDisplay}/year) subscriptions automatically renew at the end of each billing period unless cancelled before the renewal date. You will be charged the then-current subscription fee using your registered payment method.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">4.3 Cancellation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                You may cancel your subscription at any time:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Through your account settings on our website</li>
                <li>By contacting customer support</li>
                <li>Cancellation takes effect at the end of the current billing period</li>
                <li>You retain access to premium features until the end of your paid period</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">4.4 Subscription Lapse</h3>
              <p className="text-text-secondary leading-relaxed">
                If your subscription lapses (due to cancellation, failed payment, or expiration), your license will revert to the Free tier. Your projects and data remain accessible, but premium features will be disabled until you resubscribe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Lifetime License Terms</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Lifetime License ({pricing.lifetime.priceDisplay} one-time payment) includes:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Perpetual access to the Software - no recurring payments</li>
                <li>All future updates and new features at no additional cost</li>
                <li>Use on up to 3 devices simultaneously</li>
                <li>Valid for the lifetime of the product (as long as the Software is maintained)</li>
                <li>Non-transferable and bound to the original purchaser's account</li>
                <li>If the Software is discontinued, you retain the right to use the last available version</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Payment and Refunds</h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">6.1 Payment</h3>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>Monthly:</strong> {pricing.monthly.priceDisplay}/month, billed each month</li>
                <li><strong>Yearly:</strong> {pricing.yearly.priceDisplay}/year ({pricing.yearly.savingsText}), billed annually</li>
                <li><strong>Lifetime:</strong> {pricing.lifetime.priceDisplay} one-time payment</li>
                <li>All prices in USD, exclusive of applicable taxes</li>
                <li>Payment processed securely via Stripe or PayPal</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">6.2 Refund Policy</h3>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>{refundPolicy.guaranteeText}:</strong> Request a full refund within {refundPolicy.guaranteeDays} days of initial purchase</li>
                <li>Refund requests must be submitted to {company.email.support}</li>
                <li>Refunds are processed within {refundPolicy.processingDays}</li>
                <li>Renewal payments are generally non-refundable</li>
                <li>Lifetime licenses are eligible for refund within {refundPolicy.guaranteeDays} days of purchase</li>
                <li>Refund abuse may result in account suspension</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">7. Intellectual Property</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Software and all copies thereof are proprietary to Licensor and title thereto remains exclusively with Licensor. All rights in the Software not specifically granted in this Agreement are reserved to Licensor.
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>The Software is protected by copyright, trademark, and other intellectual property laws</li>
                <li>Licensor retains all rights, title, and interest in the Software</li>
                <li>This Agreement does not grant you any rights to trademarks, service marks, or logos</li>
                <li>Your license grants only the right to use, not ownership</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">8. User Content</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                You retain ownership of all content you create, edit, or process using the Software. However:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>You are solely responsible for ensuring you have rights to use any content</li>
                <li>We do not claim ownership of your user-generated content</li>
                <li>You grant us a limited license to display your content within the Software interface</li>
                <li>You are responsible for backing up your content</li>
                <li>We are not liable for any loss of user content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">9. Updates and Support</h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">9.1 Software Updates</h3>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>We may release updates, patches, and new versions from time to time</li>
                <li>Updates may be automatic or require manual installation</li>
                <li>Some updates may be mandatory for continued use</li>
                <li>New features may be added or removed at our discretion</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">9.2 Technical Support</h3>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Free tier: Community support only</li>
                <li>Paid tiers: Email support with response within 48 business hours</li>
                <li>Support is provided in English</li>
                <li>Support does not include customization, training, or third-party integrations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">10. Warranty Disclaimer</h2>
              <p className="text-text-secondary leading-relaxed">
                THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. LICENSOR DOES NOT WARRANT THAT THE SOFTWARE WILL BE ERROR-FREE, UNINTERRUPTED, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE SOFTWARE IS WITH YOU.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">11. Limitation of Liability</h2>
              <p className="text-text-secondary leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL LICENSOR OR ITS SUPPLIERS BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES WHATSOEVER (INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES) ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO USE THE SOFTWARE, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, OR OTHERWISE) AND EVEN IF LICENSOR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL LICENSOR'S TOTAL LIABILITY TO YOU EXCEED THE AMOUNT PAID BY YOU FOR THE SOFTWARE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">12. Indemnification</h2>
              <p className="text-text-secondary leading-relaxed">
                You agree to indemnify, defend, and hold harmless Licensor and its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from: (a) your use of the Software; (b) your violation of this Agreement; (c) your violation of any rights of another party; or (d) your content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">13. Termination</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                This Agreement is effective until terminated:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li><strong>By You:</strong> You may terminate by ceasing all use and deleting all copies of the Software</li>
                <li><strong>By Licensor:</strong> We may terminate immediately if you breach any terms of this Agreement</li>
                <li><strong>Effect of Termination:</strong> Upon termination, you must cease all use and delete all copies of the Software</li>
                <li><strong>Survival:</strong> Sections regarding intellectual property, disclaimers, limitations of liability, and indemnification survive termination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">14. Export Compliance</h2>
              <p className="text-text-secondary leading-relaxed">
                You agree to comply with all applicable export and import laws and regulations. You may not export or re-export the Software to any country, person, or entity prohibited by applicable laws, including U.S. export laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">15. Governing Law</h2>
              <p className="text-text-secondary leading-relaxed">
                This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which Licensor is established, without regard to conflict of law principles. Any dispute arising under this Agreement shall be resolved in the courts of that jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">16. Modifications</h2>
              <p className="text-text-secondary leading-relaxed">
                Licensor reserves the right to modify this Agreement at any time. We will provide notice of material changes through the Software or via email. Your continued use of the Software after such modifications constitutes acceptance of the updated Agreement. If you do not agree to the modified terms, you must discontinue use of the Software.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">17. Severability</h2>
              <p className="text-text-secondary leading-relaxed">
                If any provision of this Agreement is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving its original intent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">18. Entire Agreement</h2>
              <p className="text-text-secondary leading-relaxed">
                This Agreement, together with our Terms of Service and Privacy Policy, constitutes the entire agreement between you and Licensor concerning the Software and supersedes all prior or contemporaneous agreements, representations, warranties, and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">19. Contact Information</h2>
              <p className="text-text-secondary leading-relaxed">
                For questions about this License Agreement, please contact:
              </p>
              <div className="mt-4 p-4 bg-bg-secondary rounded-lg">
                <p className="text-text-secondary">
                  <strong>{company.name}</strong><br />
                  <strong>Email:</strong> {company.email.legal}<br />
                  <strong>Telegram:</strong>{' '}
                  <a href={company.telegram.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    {company.telegram.username}
                  </a><br />
                  <strong>Website:</strong> {company.website}
                </p>
              </div>
            </section>

            <section className="p-4 bg-bg-secondary rounded-lg border border-border-primary mt-8">
              <p className="text-text-secondary leading-relaxed">
                BY INSTALLING OR USING THE SOFTWARE, YOU ACKNOWLEDGE THAT YOU HAVE READ THIS AGREEMENT, UNDERSTAND IT, AND AGREE TO BE BOUND BY ITS TERMS AND CONDITIONS.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
