import { Sparkles } from 'lucide-react';
import { Section, Card, IconBox } from '../ui';
import { pricing, betaStatus } from '../../data/pricingData';

export function Guarantee() {
  return (
    <Section background="secondary">
      <Card padding="lg" className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <IconBox icon={Sparkles} size="lg" variant="accent" />
          <div>
            {betaStatus.isBeta ? (
              <>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {pricing.trial.duration}-Day Free Trial
                </h3>
                <p className="text-text-secondary">
                  Try all features completely free for {pricing.trial.duration} days. No credit card required.
                  Test everything before you buy - we want you to love Manhwa Studio!
                </p>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  14-Day Money-Back Guarantee
                </h3>
                <p className="text-text-secondary">
                  Try Manhwa Studio risk-free. If it's not right for you, we'll refund your
                  purchase within 14 days. No questions asked, no hassle.
                </p>
              </>
            )}
          </div>
        </div>
      </Card>
    </Section>
  );
}
