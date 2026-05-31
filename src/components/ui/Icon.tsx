import type { LucideProps } from 'lucide-react';
import type { ComponentType } from 'react';

type IconType = ComponentType<LucideProps>;

interface IconProps {
  icon: IconType;
  size?: number;
  className?: string;
}

export function Icon({ icon: IconComponent, size = 24, className = '' }: IconProps) {
  return <IconComponent size={size} className={className} />;
}

interface IconBoxProps {
  icon: IconType;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'accent' | 'success' | 'warning' | 'default';
  className?: string;
}

const boxSizes = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

const iconSizes = {
  sm: 20,
  md: 24,
  lg: 32,
};

const boxVariants = {
  accent: 'bg-accent/10 text-accent',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  default: 'bg-bg-tertiary text-text-secondary',
};

export function IconBox({ icon: IconComponent, size = 'md', variant = 'accent', className = '' }: IconBoxProps) {
  return (
    <div
      className={`
        ${boxSizes[size]}
        ${boxVariants[variant]}
        rounded-xl flex items-center justify-center
        ${className}
      `}
    >
      <IconComponent size={iconSizes[size]} />
    </div>
  );
}
