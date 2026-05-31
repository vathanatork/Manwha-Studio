import { downloads } from '../data/downloadsData';

/**
 * Triggers download for the first available platform (Windows)
 * Can be used from any component
 */
export function triggerDownload() {
  // Find the first available download (Windows)
  const availableDownload = downloads.find(d => d.isAvailable && d.downloadUrl);

  if (availableDownload && availableDownload.downloadUrl) {
    // Open in new tab for external links (Google Drive, etc.)
    window.open(availableDownload.downloadUrl, '_blank', 'noopener,noreferrer');
  } else {
    // Fallback: scroll to download section if no download available
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/**
 * Get the primary download info for display
 */
export function getPrimaryDownload() {
  return downloads.find(d => d.isAvailable) || downloads[0];
}
