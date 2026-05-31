import { Button, Container } from '../ui';

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-bg-primary to-bg-secondary">
      <Container size="md">
        <div className="text-center animate-on-scroll px-4 md:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Ready to Level Up Your Workflow?
          </h2>
          <p className="text-base md:text-lg text-text-secondary mb-6 md:mb-8 max-w-xl mx-auto">
            Join thousands of creators using Manhwa Studio to streamline their content creation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Button size="lg" href="#download" fullWidth className="sm:w-auto">
              Download Free Trial
            </Button>
            <Button variant="outline" size="lg" href="/pricing" fullWidth className="sm:w-auto">
              View Pricing
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
