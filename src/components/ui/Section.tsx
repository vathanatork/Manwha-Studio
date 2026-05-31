import type { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'primary' | 'secondary';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
}

const backgrounds = {
  primary: 'bg-bg-primary',
  secondary: 'bg-bg-secondary',
};

export function Section({
  children,
  className = '',
  id,
  background = 'primary',
  containerSize = 'lg'
}: SectionProps) {
  return (
    <section id={id} className={`py-20 ${backgrounds[background]} ${className}`}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  className = ''
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {badge && (
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-accent-light bg-accent/10 rounded-full border border-accent/30">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
