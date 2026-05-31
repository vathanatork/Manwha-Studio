import { Section } from '../ui';
import { downloads, platformIcons, currentVersion } from '../../data/downloadsData';
import { getChangelogId } from '../../data/appConfig';

export function Download() {
  const handleDownload = (downloadUrl: string | null, isAvailable: boolean) => {
    if (!isAvailable || !downloadUrl) return;

    // Trigger actual download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = ''; // Browser will use the filename from the URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section id="download" background="secondary">
      <div className="bg-gradient-to-br from-bg-tertiary to-bg-card border border-border rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center animate-on-scroll">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3">Download Manhwa Studio</h2>
        <p className="text-text-secondary text-base md:text-lg mb-6 md:mb-10">
          Start with a free trial. No credit card required.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-5 mb-6 md:mb-8">
          {downloads.map((download) => (
            <button
              key={download.platform}
              onClick={() => handleDownload(download.downloadUrl, download.isAvailable)}
              disabled={!download.isAvailable}
              className={`flex items-center gap-3 md:gap-4 px-5 py-4 md:px-7 md:py-5 bg-bg-primary border rounded-xl transition-all duration-200 text-left
                ${download.isAvailable
                  ? 'border-border hover:border-accent hover:-translate-y-0.5 cursor-pointer'
                  : 'border-border/50 opacity-60 cursor-not-allowed'
                }`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`flex-shrink-0 md:w-6 md:h-6 ${download.isAvailable ? 'text-text-primary' : 'text-text-muted'}`}
              >
                <path d={platformIcons[download.platform]} />
              </svg>
              <div>
                <span className={`block text-sm md:text-base font-semibold ${download.isAvailable ? 'text-text-primary' : 'text-text-muted'}`}>
                  {download.name}
                </span>
                <span className="text-xs md:text-sm text-text-muted">
                  {download.isAvailable
                    ? `${download.fileType} (${download.fileSize})`
                    : 'Coming Soon'
                  }
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Coming soon note for unavailable platforms */}
        {downloads.some(d => !d.isAvailable) && (
          <p className="text-xs md:text-sm text-text-muted mb-4 md:mb-6">
            macOS and Linux versions are coming soon. Join our newsletter to get notified!
          </p>
        )}

        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm text-text-muted">
          <span>Version {currentVersion}</span>
          <span className="text-border hidden sm:inline">|</span>
          <span>7-day free trial</span>
          <span className="text-border hidden sm:inline">|</span>
          <a href={`/docs#${getChangelogId()}`} className="text-accent hover:underline">
            Release Notes
          </a>
        </div>
      </div>
    </Section>
  );
}
