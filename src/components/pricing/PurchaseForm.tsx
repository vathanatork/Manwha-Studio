import { Mail, Send } from 'lucide-react';
import { Section, Card, Button } from '../ui';
import { contact, betaStatus, pricing } from '../../data/pricingData';

export function PurchaseForm() {
  return (
    <Section id="contact">
      <Card padding="lg" className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          {/* Beta Badge */}
          <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full mb-4">
            Beta Version
          </span>

          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Contact Us to Purchase
          </h2>
          <p className="text-sm text-text-secondary">
            {betaStatus.note}
          </p>
        </div>

        {/* Pricing Summary */}
        <div className="bg-bg-primary rounded-xl p-4 mb-6">
          <h3 className="text-sm font-medium text-text-muted mb-3">Available Plans</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Monthly</span>
              <span className="text-text-primary font-medium">{pricing.monthly.priceDisplay}/month</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Yearly <span className="text-green-400">({pricing.yearly.savingsText})</span></span>
              <span className="text-text-primary font-medium">{pricing.yearly.priceDisplay}/year</span>
            </div>
            <div className="flex justify-between text-sm pt-2 border-t border-border">
              <span className="text-text-secondary">Lifetime</span>
              <span className="text-accent font-semibold">{pricing.lifetime.priceDisplay} one-time</span>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-text-muted text-center">Contact us via</h3>

          {/* Telegram Button */}
          <Button
            variant="primary"
            fullWidth
            size="lg"
            href={contact.telegram.url}
            external
          >
            <Send size={20} />
            Message on Telegram
          </Button>

          <p className="text-center text-text-muted text-sm">or</p>

          {/* Email Button */}
          <Button
            variant="outline"
            fullWidth
            size="lg"
            href={`mailto:${contact.email}?subject=Manhwa Studio License Purchase&body=Hi, I'm interested in purchasing a license for Manhwa Studio.%0A%0APlan: [Monthly/Yearly/Lifetime]%0A%0AThank you!`}
            external
          >
            <Mail size={20} />
            Send Email
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-text-muted mb-2">Contact Details</p>
          <p className="text-sm text-text-secondary">
            <strong>Email:</strong> {contact.email}
          </p>
          <p className="text-sm text-text-secondary">
            <strong>Telegram:</strong>{' '}
            <a
              href={contact.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {contact.telegram.username}
            </a>
          </p>
        </div>

        {/* Guarantee */}
        <p className="mt-6 text-center text-xs text-text-muted">
          14-day money-back guarantee on all purchases
        </p>
      </Card>
    </Section>
  );
}
