import { Section, SectionHeader } from '../ui';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Manga Collector',
    avatar: 'AC',
    content: 'Finally a tool that actually works with multiple sources. The panel detection is incredible!',
    rating: 5,
  },
  {
    name: 'Sarah Kim',
    role: 'Digital Artist',
    avatar: 'SK',
    content: 'I use this daily for reference collection. The CBZ export is perfect for my workflow.',
    rating: 5,
  },
  {
    name: 'Mike Johnson',
    role: 'Content Creator',
    avatar: 'MJ',
    content: 'Batch downloading saves me hours every week. Best investment for my hobby.',
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <Section>
      <SectionHeader
        badge="Testimonials"
        title="Loved by Creators"
        description="See what our users are saying"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </Section>
  );
}
