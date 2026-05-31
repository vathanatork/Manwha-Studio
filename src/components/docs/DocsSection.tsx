import type {ReactNode} from 'react';

interface DocsSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function DocsSection({ id, title, children }: DocsSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 mb-16">
      <h2 className="text-2xl font-bold text-text-primary mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      <div className="prose prose-invert max-w-none">{children}</div>
    </section>
  );
}

interface DocsSubsectionProps {
  title: string;
  children: ReactNode;
}

export function DocsSubsection({ title, children }: DocsSubsectionProps) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-text-primary mb-3">{title}</h3>
      {children}
    </div>
  );
}

interface DocsParagraphProps {
  children: ReactNode;
}

export function DocsParagraph({ children }: DocsParagraphProps) {
  return (
    <p className="text-text-secondary leading-relaxed mb-4">{children}</p>
  );
}

interface DocsListProps {
  items: string[];
  ordered?: boolean;
}

export function DocsList({ items, ordered }: DocsListProps) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className={`space-y-2 mb-4 ${ordered ? 'list-decimal' : 'list-disc'} list-inside`}>
      {items.map((item, index) => (
        <li key={index} className="text-text-secondary">
          {item}
        </li>
      ))}
    </Tag>
  );
}

interface DocsCalloutProps {
  type: 'info' | 'tip' | 'warning';
  title: string;
  children: ReactNode;
}

const calloutStyles = {
  info: 'bg-accent/10 border-accent',
  tip: 'bg-success/10 border-success',
  warning: 'bg-warning/10 border-warning',
};

export function DocsCallout({ type, title, children }: DocsCalloutProps) {
  return (
    <div className={`p-4 rounded-xl border-l-4 mb-4 ${calloutStyles[type]}`}>
      <strong className="block text-text-primary mb-1">{title}</strong>
      <div className="text-sm text-text-secondary">{children}</div>
    </div>
  );
}
