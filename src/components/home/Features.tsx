import { useState } from 'react';
import { Grid2X2, Download, Video, Film, Clock } from 'lucide-react';
import { Section, SectionHeader } from '../ui';

// ============================================
// PANEL DETECTION IMAGE CONFIGURATION
// ============================================
// Place your panel detection screenshot/GIF in public/images/
// Set to null to use the animated placeholder
// ============================================

const panelDetectionMedia = {
  // Image/GIF path (place in public/images/)
  // Examples: '/images/panel-detection.png' or '/images/panel-detection.gif'
  image: null as string | null,

  // Alt text for accessibility
  alt: 'Smart panel detection - before and after comparison',
};

// Animated placeholder component (used when no image is provided)
function PanelDetectionPlaceholder() {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 p-4 md:p-6 bg-bg-primary rounded-xl">
      <div className="text-center">
        <div className="w-[50px] md:w-[60px] h-[130px] md:h-[160px] rounded bg-gradient-to-b from-bg-tertiary via-bg-primary to-bg-tertiary border border-border"
          style={{
            background: `linear-gradient(180deg,
              var(--color-bg-tertiary) 0%, var(--color-bg-tertiary) 30%,
              var(--color-bg-primary) 30%, var(--color-bg-primary) 33%,
              var(--color-bg-tertiary) 33%, var(--color-bg-tertiary) 65%,
              var(--color-bg-primary) 65%, var(--color-bg-primary) 68%,
              var(--color-bg-tertiary) 68%, var(--color-bg-tertiary) 100%)`
          }}
        />
        <span className="block mt-2 text-xs text-text-muted">Before</span>
      </div>
      <div className="text-accent">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-6 md:h-6">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </div>
      <div className="text-center">
        <div className="flex flex-col gap-1.5 md:gap-2">
          <div className="w-[50px] md:w-[60px] h-[36px] md:h-[45px] bg-bg-tertiary rounded border border-accent" />
          <div className="w-[50px] md:w-[60px] h-[36px] md:h-[45px] bg-bg-tertiary rounded border border-accent" />
          <div className="w-[50px] md:w-[60px] h-[36px] md:h-[45px] bg-bg-tertiary rounded border border-accent" />
        </div>
        <span className="block mt-2 text-xs text-text-muted">After</span>
      </div>
    </div>
  );
}

export function Features() {
  const [imageError, setImageError] = useState(false);

  return (
    <Section id="features" background="secondary">
      <SectionHeader
        badge="Features"
        title="From Chapter to Video in Minutes"
        description="Everything you need to create engaging manga recap videos for YouTube"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Large Feature Card - Smart Panel Detection */}
        <div className="md:col-span-2 bg-bg-card border border-border rounded-2xl p-6 md:p-8 hover:bg-bg-tertiary hover:border-border-light transition-all duration-300 hover:-translate-y-1 animate-on-scroll">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-accent/10 rounded-xl mb-4 md:mb-5">
            <Grid2X2 className="w-6 h-6 md:w-8 md:h-8 text-accent" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Smart Panel Detection</h3>
          <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed mb-4 md:mb-6">
            Our AI-powered algorithm automatically detects and separates panels from long-strip manhwa. Fine-tune with manual adjustments when needed.
          </p>
          {/* Panel Detection Visual */}
          {panelDetectionMedia.image && !imageError ? (
            <div className="rounded-xl overflow-hidden bg-bg-primary">
              <img
                src={panelDetectionMedia.image}
                alt={panelDetectionMedia.alt}
                className="w-full h-auto"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <PanelDetectionPlaceholder />
          )}
        </div>

        {/* Multi-Source Downloads */}
        <div className="bg-bg-card border border-border rounded-2xl p-6 md:p-8 hover:bg-bg-tertiary hover:border-border-light transition-all duration-300 hover:-translate-y-1 animate-on-scroll">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-accent/10 rounded-xl mb-4 md:mb-5">
            <Download className="w-6 h-6 md:w-8 md:h-8 text-accent" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Batch Chapter Downloads</h3>
          <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed">
            Download chapters 1-50 in one click from MangaDex, AsuraScans, MangaPark & more. Perfect for binge recap videos.
          </p>
        </div>

        {/* Direct Video Export */}
        <div className="bg-bg-card border border-border rounded-2xl p-6 md:p-8 hover:bg-bg-tertiary hover:border-border-light transition-all duration-300 hover:-translate-y-1 animate-on-scroll">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-accent/10 rounded-xl mb-4 md:mb-5">
            <Video className="w-6 h-6 md:w-8 md:h-8 text-accent" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Direct MP4 Export</h3>
          <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed">
            Export directly to YouTube-ready MP4. Choose 1080p or 4K resolution. No video editing software needed.
          </p>
        </div>

        {/* Transitions */}
        <div className="bg-bg-card border border-border rounded-2xl p-6 md:p-8 hover:bg-bg-tertiary hover:border-border-light transition-all duration-300 hover:-translate-y-1 animate-on-scroll">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-accent/10 rounded-xl mb-4 md:mb-5">
            <Film className="w-6 h-6 md:w-8 md:h-8 text-accent" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Smooth Transitions</h3>
          <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed">
            Add fade transitions between panels. Set custom timing per panel. Make your recaps look professional.
          </p>
        </div>

        {/* Speed */}
        <div className="bg-bg-card border border-border rounded-2xl p-6 md:p-8 hover:bg-bg-tertiary hover:border-border-light transition-all duration-300 hover:-translate-y-1 animate-on-scroll">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-accent/10 rounded-xl mb-4 md:mb-5">
            <Clock className="w-6 h-6 md:w-8 md:h-8 text-accent" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Save Hours of Work</h3>
          <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed">
            What takes 2+ hours manually takes 10 minutes with Manhwa Studio. Focus on content, not tedious editing.
          </p>
        </div>
      </div>
    </Section>
  );
}
