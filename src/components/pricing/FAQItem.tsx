import { Card } from '../ui';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <Card padding="md">
      <h3 className="text-base font-semibold text-text-primary mb-2">{question}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{answer}</p>
    </Card>
  );
}
