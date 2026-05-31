import { Camera, BookOpen, Star } from 'lucide-react';
import { Section, SectionHeader } from '../ui';

const useCases = [
  {
    icon: Camera,
    title: 'Content Creators',
    description: 'Create engaging manga/manhwa content for YouTube, TikTok, and Instagram with perfect panel exports.',
  },
  {
    icon: BookOpen,
    title: 'Readers & Collectors',
    description: 'Build your offline library with perfectly organized manga in PDF or CBZ format.',
  },
  {
    icon: Star,
    title: 'Translators',
    description: 'Extract panels, add translated text overlays, and export clean versions for your audience.',
  },
];

export function UseCases() {
  return (
    <Section id="use-cases">
      <SectionHeader
        badge="Use Cases"
        title="Built for Creators Like You"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {useCases.map((useCase, index) => (
          <div
            key={useCase.title}
            className="bg-bg-card border border-border rounded-2xl p-6 md:p-8 text-center hover:border-accent hover:-translate-y-1 transition-all duration-300 animate-on-scroll"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-accent/10 rounded-2xl mx-auto mb-4 md:mb-5">
              <useCase.icon className="w-7 h-7 md:w-8 md:h-8 text-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{useCase.title}</h3>
            <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed">
              {useCase.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
