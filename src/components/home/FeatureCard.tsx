import type { LucideProps } from 'lucide-react';
import type {ComponentType} from 'react';
import { Card, IconBox } from '../ui';

interface FeatureCardProps {
  icon: ComponentType<LucideProps>;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card hover padding="lg">
      <IconBox icon={icon} size="lg" className="mb-4" />
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </Card>
  );
}
