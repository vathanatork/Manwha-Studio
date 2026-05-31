import { useState } from 'react';
import { Play, Download, X } from 'lucide-react';
import { Button, Container, Badge } from '../ui';
import { triggerDownload } from '../../utils/download';
import { getVersionBadge } from '../../data/appConfig';

// ============================================
// HERO MEDIA CONFIGURATION
// ============================================
// Option 1: Screenshot only (set videoId to null)
// Option 2: Video with thumbnail (set videoId to YouTube video ID)
//
// To get YouTube video ID:
// From URL https://www.youtube.com/watch?v=ABC123 -> videoId = "ABC123"
// ============================================

const heroMedia = {
  // Screenshot image path (place image in public/images/)
  screenshot: '/images/app-screenshot.png',

  // YouTube video ID (set to null to disable video, show only screenshot)
  // Example: 'dQw4w9WgXcQ' for https://www.youtube.com/watch?v=dQw4w9WgXcQ
  videoId: null as string | null,

  // Alt text for accessibility
  alt: 'Manhwa Studio - Create manga recap videos for YouTube',
};

export function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerDownload();
  };

  const handlePlayClick = () => {
    if (heroMedia.videoId) {
      setShowVideo(true);
    }
  };

  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-b from-bg-secondary to-bg-primary">
      <Container>
        <div className="text-center max-w-4xl mx-auto px-4 md:px-0">
          <Badge variant="accent" className="mb-4 md:mb-6">
            {getVersionBadge()}
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 md:mb-6 leading-tight">
            Create{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">
              Manga Recap Videos
            </span>
            {" "}in Minutes
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-text-secondary mb-6 md:mb-8 max-w-2xl mx-auto">
            Download chapters, auto-detect panels, and export video-ready frames. The fastest way to create manga and manhwa recap content.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            <Button size="lg" onClick={handleDownloadClick} fullWidth className="sm:w-auto">
              <Download size={20} />
              Download Free
            </Button>
            {heroMedia.videoId && (
              <Button variant="outline" size="lg" onClick={handlePlayClick} fullWidth className="sm:w-auto">
                <Play size={20} />
                Watch Demo
              </Button>
            )}
          </div>

          {/* Screenshot/Video Section */}
          <div id="demo" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-xl md:rounded-2xl blur-3xl" />
            <div className="relative bg-bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Modal */}
              {showVideo && heroMedia.videoId && (
                <div className="relative aspect-video">
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Close video"
                  >
                    <X size={20} />
                  </button>
                  <iframe
                    src={`https://www.youtube.com/embed/${heroMedia.videoId}?autoplay=1&rel=0`}
                    title="Demo Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Screenshot/Thumbnail */}
              {!showVideo && (
                <div
                  className={`bg-bg-tertiary ${heroMedia.videoId ? 'cursor-pointer group' : ''}`}
                  onClick={handlePlayClick}
                >
                  {!imageError ? (
                    <div className="relative w-full">
                      <img
                        src={heroMedia.screenshot}
                        alt={heroMedia.alt}
                        className="w-full h-auto"
                        onError={() => setImageError(true)}
                      />
                      {/* Play button overlay for video */}
                      {heroMedia.videoId && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/90 group-hover:bg-accent group-hover:scale-110 transition-all flex items-center justify-center shadow-lg">
                            <Play size={32} className="text-white ml-1" fill="white" />
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    // Fallback placeholder if image fails to load
                    <div className="w-full aspect-video flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                          <Play size={28} className="text-accent ml-1" />
                        </div>
                        <p className="text-text-muted text-sm md:text-base">
                          {heroMedia.videoId ? 'Click to watch demo' : 'App Screenshot'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
