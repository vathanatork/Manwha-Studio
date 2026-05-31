// ============================================
// DOCUMENTATION DATA
// Easy to update - just modify the content below
// Version info is imported from appConfig.ts
// ============================================

import { version, getChangelogId } from './appConfig';

// --------------------------------------------
// SIDEBAR NAVIGATION
// --------------------------------------------
export const sidebarSections = [
  {
    title: 'Getting Started',
    links: [
      { id: 'installation', label: 'Installation' },
      { id: 'first-download', label: 'Your First Download' },
      { id: 'interface-overview', label: 'Interface Overview' },
    ],
  },
  {
    title: 'Tutorials',
    links: [
      { id: 'downloading', label: 'Downloading Manga' },
      { id: 'panel-detection', label: 'Panel Detection' },
      { id: 'editing', label: 'Editing Panels' },
      { id: 'exporting', label: 'Exporting Your Work' },
      { id: 'projects', label: 'Managing Projects' },
    ],
  },
  {
    title: 'Features',
    links: [
      { id: 'supported-sources', label: 'Supported Sources' },
      { id: 'export-formats', label: 'Export Formats' },
      { id: 'keyboard-shortcuts', label: 'Keyboard Shortcuts' },
    ],
  },
  {
    title: 'FAQ',
    links: [
      { id: 'faq-license', label: 'License & Activation' },
      { id: 'faq-troubleshooting', label: 'Troubleshooting' },
    ],
  },
  {
    title: 'Changelog',
    links: [
      { id: getChangelogId(), label: `Version ${version.current}` },
    ],
  },
];

// --------------------------------------------
// SYSTEM REQUIREMENTS
// --------------------------------------------
export const systemRequirements = [
  {
    platform: 'Windows',
    requirements: [
      'Windows 10 or later',
      '64-bit processor',
      '4 GB RAM minimum',
      '500 MB disk space',
    ],
  },
  {
    platform: 'macOS',
    requirements: [
      'macOS 10.13 or later',
      'Intel or Apple Silicon',
      '4 GB RAM minimum',
      '500 MB disk space',
    ],
  },
  {
    platform: 'Linux',
    requirements: [
      'Ubuntu 18.04 or equivalent',
      '64-bit processor',
      '4 GB RAM minimum',
      '500 MB disk space',
    ],
  },
];

// --------------------------------------------
// SUPPORTED SOURCES
// --------------------------------------------
export const supportedSources = [
  { name: 'MangaDex', url: 'mangadex.org', batchSupport: true },
  { name: 'AsuraScans', url: 'asuracomic.net', batchSupport: true },
  { name: 'MangaPark', url: 'mangapark.to', batchSupport: true },
  { name: 'ManhwaRead', url: 'manhwaread.com', batchSupport: true },
  // { name: 'WebtoonXYZ', url: 'webtoonxyz.com', batchSupport: true },
  // { name: 'MangaFire', url: 'mangafire.to', batchSupport: true },
  // { name: 'ManhuaUS', url: 'manhuaus.com', batchSupport: true },
];

// --------------------------------------------
// EXPORT FORMATS
// --------------------------------------------
export const exportFormats = [
  {
    name: 'PNG/JPG Images',
    description: 'High-quality individual panel images bundled in a ZIP file.',
    bestFor: 'Social media, editing in other apps',
    details: 'Lossless (PNG) or adjustable (JPG)',
  },
  {
    name: 'PDF',
    description: 'Single document with one panel per page.',
    bestFor: 'Printing, tablets, sharing',
    details: 'Embedded images, small file size',
  },
  {
    name: 'CBZ',
    description: 'Comic Book Archive format.',
    bestFor: 'Comic reader apps',
    details: 'Compatible with CDisplayEx, ComicRack, Calibre',
  },
  {
    name: 'Video Frames',
    description: 'Sequential frames for video creation.',
    bestFor: 'TikTok, YouTube Shorts, Reels',
    details: 'Resolutions: 1080p or 4K',
  },
];

// --------------------------------------------
// KEYBOARD SHORTCUTS
// --------------------------------------------
export const keyboardShortcuts = [
  { action: 'Select All', windows: 'Ctrl + A', mac: 'Cmd + A' },
  { action: 'Deselect All', windows: 'Ctrl + D', mac: 'Cmd + D' },
  { action: 'Delete Selected', windows: 'Delete', mac: 'Backspace' },
  { action: 'Undo', windows: 'Ctrl + Z', mac: 'Cmd + Z' },
  { action: 'Redo', windows: 'Ctrl + Shift + Z', mac: 'Cmd + Shift + Z' },
  { action: 'Selection Tool', windows: 'V', mac: 'V' },
  { action: 'Crop Tool', windows: 'C', mac: 'C' },
  { action: 'Split Tool', windows: 'S', mac: 'S' },
  { action: 'Brush Tool', windows: 'B', mac: 'B' },
  { action: 'Text Tool', windows: 'T', mac: 'T' },
  { action: 'Export', windows: 'Ctrl + E', mac: 'Cmd + E' },
];

// --------------------------------------------
// FAQ - LICENSE
// --------------------------------------------
export const faqLicense = [
  {
    question: 'How long is the free trial?',
    answer: 'The free trial lasts 7 days from your first launch. During the trial, you have access to all features.',
  },
  {
    question: 'How do I activate my license?',
    answer: "After purchasing, you'll receive a license key via email. Enter this key in the activation dialog that appears when the trial ends, or go to Settings > License to activate early.",
  },
  {
    question: 'Can I use my license on multiple computers?',
    answer: 'Each license allows activation on up to 2 devices. If you need more, contact support.',
  },
  {
    question: 'What happens when my license expires?',
    answer: "Standard licenses don't expire. Once purchased, you can use that version forever. Subscription licenses (if offered) require renewal for continued use.",
  },
  {
    question: 'Can I transfer my license to a new computer?',
    answer: 'Yes. Deactivate on your old computer first (Settings > License > Deactivate), then activate on your new computer.',
  },
  {
    question: 'Does it work offline?',
    answer: 'Yes! Once activated, Manhwa Studio works offline. It only needs internet for downloading manga and occasional license verification.',
  },
];

// --------------------------------------------
// FAQ - TROUBLESHOOTING
// --------------------------------------------
export const faqTroubleshooting = [
  {
    question: 'Download fails or hangs',
    answer: 'Some websites may block automated access.',
    tips: [
      'Wait a few minutes and try again',
      'Use a different source if available',
      'Check if the website is accessible in your browser',
    ],
  },
  {
    question: "Panel detection isn't working correctly",
    answer: 'Panel detection works best with traditional manhwa format. For complex layouts:',
    tips: [
      'Disable auto-detection and use manual split tool',
      'Adjust the detection sensitivity in settings',
    ],
  },
  {
    question: "App won't start / crashes on launch",
    answer: 'Try these steps:',
    tips: [
      'Restart your computer',
      'Reinstall the application',
      'Check if your system meets the minimum requirements',
      'Disable antivirus temporarily (some flag Electron apps)',
    ],
  },
  {
    question: 'Export is slow or fails',
    answer: 'Large exports can take time. If it fails:',
    tips: [
      'Try exporting fewer panels at once',
      'Ensure you have enough disk space',
      'Close other memory-intensive applications',
    ],
  },
];

// --------------------------------------------
// CHANGELOG
// --------------------------------------------
export const changelog = [
  {
    version: version.current,
    date: version.releaseDate,
    description: 'Initial release of Manhwa Studio!',
    features: [
      'Multi-source downloading (MangaDex, AsuraScans, MangaPark, and more)',
      'Automatic panel detection for manhwa/webtoon format',
      'Professional editing tools (crop, split, brush, text, shapes)',
      'Export to multiple formats (images, PDF, CBZ, video frames)',
      'Project management with auto-save',
      'Cross-platform support (Windows, macOS, Linux)',
      'Offline capability',
    ],
  },
];
