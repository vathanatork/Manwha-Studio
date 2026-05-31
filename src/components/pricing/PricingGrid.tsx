import { Section, SectionHeader } from '../ui';
import { PricingCard } from './PricingCard';
import { pricingPlans, betaStatus, contact } from '../../data/pricingData';

export function PricingGrid() {
  return (
    <Section>
      <SectionHeader
        badge="Pricing"
        title="Simple, Transparent Pricing"
        description="Start with a 7-day free trial. No credit card required."
      />

      {/* Beta Notice */}
      {betaStatus.isBeta && (
        <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-center">
          <span className="inline-block px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-medium rounded mb-2">
            BETA
          </span>
          <p className="text-text-secondary text-sm">
            {betaStatus.note} Contact us via{' '}
            <a
              href={contact.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Telegram
            </a>
            {' '}or{' '}
            <a
              href={`mailto:${contact.email}`}
              className="text-accent hover:underline font-medium"
            >
              Email
            </a>
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </Section>
  );
}
