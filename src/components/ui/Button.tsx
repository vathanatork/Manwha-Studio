import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
}

const variants = {
  primary: 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent-glow',
  secondary: 'bg-bg-tertiary text-text-primary hover:bg-border',
  outline: 'border border-border text-text-primary hover:border-accent hover:text-accent-light',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  fullWidth,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-lg
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  if (href) {
    // External links (open in new tab)
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
          {children}
        </a>
      );
    }

    // Hash links (same page anchors like #contact or /#download)
    // Use regular <a> tag for proper scroll behavior
    if (href.startsWith('#') || href.includes('#')) {
      return (
        <a href={href} className={baseClasses}>
          {children}
        </a>
      );
    }

    // Internal navigation (use React Router)
    return (
      <Link to={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
