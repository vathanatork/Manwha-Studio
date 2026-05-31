import { Star } from 'lucide-react';
import { Card } from '../ui';

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export function TestimonialCard({ name, role, avatar, content, rating }: TestimonialCardProps) {
  return (
    <Card hover padding="lg">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-text-muted'}
          />
        ))}
      </div>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">"{content}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-bg-tertiary flex items-center justify-center text-text-muted text-sm font-medium">
          {avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-text-primary">{name}</p>
          <p className="text-xs text-text-muted">{role}</p>
        </div>
      </div>
    </Card>
  );
}
