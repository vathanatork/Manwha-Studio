import { Link } from 'lucide-react';
import { Section, SectionHeader } from '../ui';

function StepConnector() {
  return (
    <div className="flex justify-start pl-3 md:pl-3 h-8 md:h-12">
      <svg width="24" height="100%" viewBox="0 0 24 48" preserveAspectRatio="none">
        <path d="M12 0 L12 48" stroke="#2c7be5" strokeWidth="2" strokeDasharray="4 4"/>
        <circle cx="12" cy="24" r="4" fill="#2c7be5"/>
      </svg>
    </div>
  );
}

interface StepProps {
  number: number;
  title: string;
  description: string;
  visual: React.ReactNode;
}

function Step({ number, title, description, visual }: StepProps) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[48px_1fr_200px] gap-3 md:gap-6 items-start">
      {/* Number badge and title row for mobile */}
      <div className="flex items-center gap-3 md:contents">
        <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center bg-accent rounded-xl text-lg md:text-xl font-bold">
          {number}
        </div>
        <h3 className="text-lg md:text-xl font-semibold md:hidden">{title}</h3>
      </div>

      {/* Text content */}
      <div>
        <h3 className="hidden md:block text-xl font-semibold mb-2">{title}</h3>
        <p className="text-text-secondary text-sm md:text-[15px]">
          {description}
        </p>
      </div>

      {/* Visual element */}
      <div className="flex items-center justify-start md:justify-end w-full md:w-auto mt-2 md:mt-0 pl-0 md:pl-0">
        {visual}
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <Section id="how-it-works" background="primary">
      <SectionHeader
        badge="How It Works"
        title="From URL to Export in Minutes"
        description="A streamlined workflow designed for efficiency"
      />

      <div className="max-w-[700px] mx-auto px-4 md:px-0">
        {/* Step 1 */}
        <Step
          number={1}
          title="Paste URL or Upload"
          description="Enter a manga URL from any supported source, or upload your own images directly."
          visual={
            <div className="flex items-center gap-2 px-3 py-2 md:px-3.5 md:py-2.5 bg-bg-secondary border border-border rounded-lg text-xs text-text-muted max-w-full overflow-hidden">
              <Link className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">https://mangadex.org/...</span>
            </div>
          }
        />

        <StepConnector />

        {/* Step 2 */}
        <Step
          number={2}
          title="Auto-Detect Panels"
          description="Our smart algorithm analyzes images and automatically separates individual panels."
          visual={
            <div className="text-center w-full md:w-auto">
              <div className="w-full md:w-[150px] h-1.5 bg-bg-secondary rounded-full overflow-hidden mb-2">
                <div className="h-full bg-accent rounded-full animate-progress" style={{ width: '75%' }} />
              </div>
              <span className="text-xs text-text-muted">Detecting panels... 12/16</span>
            </div>
          }
        />

        <StepConnector />

        {/* Step 3 */}
        <Step
          number={3}
          title="Edit & Refine"
          description="Use professional tools to crop, split, reorder, and enhance your panels."
          visual={
            <div className="flex gap-2">
              <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-accent border border-accent rounded-md text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                </svg>
              </div>
              <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-bg-secondary border border-border rounded-md text-text-muted">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4"/>
                </svg>
              </div>
              <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-bg-secondary border border-border rounded-md text-text-muted">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7V4h16v3"/>
                  <path d="M9 20h6"/>
                  <path d="M12 4v16"/>
                </svg>
              </div>
            </div>
          }
        />

        <StepConnector />

        {/* Step 4 */}
        <Step
          number={4}
          title="Export Anywhere"
          description="Save as images, PDF, CBZ, or video frames. Perfect for any platform or use case."
          visual={
            <div className="flex gap-1.5 md:gap-2 flex-wrap">
              <div className="px-2.5 py-1 md:px-3 md:py-1.5 bg-bg-secondary border border-border rounded-md text-xs font-semibold text-text-secondary">PNG</div>
              <div className="px-2.5 py-1 md:px-3 md:py-1.5 bg-bg-secondary border border-border rounded-md text-xs font-semibold text-text-secondary">PDF</div>
              <div className="px-2.5 py-1 md:px-3 md:py-1.5 bg-bg-secondary border border-border rounded-md text-xs font-semibold text-text-secondary">CBZ</div>
              <div className="px-2.5 py-1 md:px-3 md:py-1.5 bg-bg-secondary border border-border rounded-md text-xs font-semibold text-text-secondary">MP4</div>
            </div>
          }
        />
      </div>
    </Section>
  );
}
