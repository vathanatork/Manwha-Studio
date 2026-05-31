import { Check, X } from 'lucide-react';
import { Card, Button, Badge } from '../ui';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  badge?: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonHref: string;
  featured?: boolean;
}

export function PricingCard({
  name,
  price,
  period,
  badge,
  description,
  features,
  buttonText,
  buttonHref,
  featured,
}: PricingCardProps) {
  return (
    <Card
      padding="lg"
      className={`relative ${
        featured
          ? 'border-accent bg-gradient-to-br from-accent/5 to-purple-500/5 scale-105'
          : ''
      }`}
    >
      {(featured || badge) && (
        <Badge variant="accent" className="absolute -top-3 left-1/2 -translate-x-1/2">
          {badge || 'Best Value'}
        </Badge>
      )}

      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-text-primary mb-4">{name}</h3>
        <div className="flex items-baseline justify-center gap-1 mb-2">
          <span className="text-4xl font-bold text-text-primary">{price}</span>
          {period && <span className="text-text-muted">{period}</span>}
        </div>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center gap-3 text-sm ${
              feature.included ? 'text-text-secondary' : 'text-text-muted'
            }`}
          >
            {feature.included ? (
              <Check size={18} className="text-success flex-shrink-0" />
            ) : (
              <X size={18} className="text-text-muted flex-shrink-0" />
            )}
            {feature.text}
          </li>
        ))}
      </ul>

      <Button
        variant={featured ? 'primary' : 'outline'}
        fullWidth
        href={buttonHref}
      >
        {buttonText}
      </Button>
    </Card>
  );
}
