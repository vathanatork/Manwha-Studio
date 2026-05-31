import { downloads } from '../data/downloadsData';

/**
 * Triggers download for the first available platform (Windows)
 * Can be used from any component
 */
export function triggerDownload() {
  // Find the first available download (Windows)
  const availableDownload = downloads.find(d => d.isAvailable && d.downloadUrl);

  if (availableDownload && availableDownload.downloadUrl) {
    const link = document.createElement('a');
    link.href = availableDownload.downloadUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
