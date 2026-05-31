// ============================================
// APP CONFIGURATION
// Central place for version, beta status, and app info
// Update here and it will reflect across all pages
// ============================================

// --------------------------------------------
// VERSION INFO
// --------------------------------------------
export const version = {
  // Current version number
  current: '1.0.0',

  // Display formats
  display: 'v1.0.0',
  short: '1.0',
  major: '1',

  // Release info
  releaseDate: 'December 2024',
  releaseDateFull: 'December 15, 2024',
};

// --------------------------------------------
// BETA STATUS
// Set isBeta to false when ready for production
// --------------------------------------------
export const beta = {
  // Toggle this to switch between beta and production
  isBeta: true,

  // Beta messaging
  badge: 'BETA',
  message: 'Beta Version - Contact us to purchase a license',
  note: 'Online payment coming soon. For now, please contact us directly.',

  // What changes in beta mode:
  // - No refunds available
  // - No student discounts
  // - Manual purchase via contact
  // - Shows beta badge on pricing page
};

// --------------------------------------------
// APP INFO
// --------------------------------------------
export const app = {
  name: 'Manhwa Studio',
  tagline: 'The Ultimate Manhwa Creation Tool',
  description: 'Download, edit, and export manga panels with ease',

  // File naming for downloads
  filePrefix: 'Manhwa-Studio',

  // Get filename with version
  getFileName: (platform: 'windows' | 'mac' | 'linux') => {
    const ext = {
      windows: '.exe',
      mac: '.dmg',
      linux: '.AppImage',
    };
    return `${app.filePrefix}-Setup-${version.current}${ext[platform]}`;
  },
};

// --------------------------------------------
// DOWNLOAD PATHS
// For large files on Google Drive, link directly to the preview page
// Users will click "Download" button on Google Drive
// --------------------------------------------
export const downloads = {
  // Google Drive share link (opens in new tab, user clicks download)
  windows: 'https://drive.google.com/file/d/16KFZJSZnFz2PnSc3y-kvGhEicIp5Bjso/view?usp=sharing',
  mac: null as string | null, // Not available yet
  linux: null as string | null, // Not available yet
};

// --------------------------------------------
// HELPER FUNCTIONS
// --------------------------------------------

// Get version badge text (e.g., "Version 1.0 Released" or "Beta")
export function getVersionBadge(): string {
  if (beta.isBeta) {
    return `${beta.badge} - Version ${version.short}`;
  }
  return `Version ${version.short} Released`;
}

// Get changelog section ID
export function getChangelogId(): string {
  return `version-${version.current.replace(/\./g, '-')}`;
}
