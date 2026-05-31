import { Container } from '../ui';

const sources = [
  'MangaDex',
  'AsuraScans',
  'MangaPark',
  'ManhwaRead',
  'WebtoonXYZ',
  '+ More',
];

export function Sources() {
  return (
    <section className="py-10 md:py-16 border-b border-border">
      <Container>
        <p className="text-center text-text-muted text-xs md:text-sm mb-4 md:mb-6">
          Download from your favorite sources
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {sources.map((source) => (
            <div
              key={source}
              className="px-4 py-2 md:px-6 md:py-3 bg-bg-secondary border border-border rounded-lg text-xs md:text-sm font-medium text-text-secondary hover:border-accent hover:text-text-primary transition-all duration-200"
            >
              {source}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
