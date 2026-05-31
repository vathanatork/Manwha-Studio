// ============================================
// PRICING & LEGAL DATA
// Easy to update - just modify the values below
// Beta status is imported from appConfig.ts
// ============================================

import { beta } from './appConfig';

// --------------------------------------------
// BETA STATUS (re-exported from appConfig)
// --------------------------------------------
export const betaStatus = {
  isBeta: beta.isBeta,
  badge: beta.badge,
  message: beta.message,
  note: beta.note,
};

// --------------------------------------------
// CONTACT INFO (for purchases during beta)
// --------------------------------------------
export const contact = {
  email: 'chanudomvathana.tork@gmail.com',
  telegram: {
    username: '@tork_vathana',
    url: 'https://t.me/tork_vathana',
  },
};

// --------------------------------------------
// PRICING CONFIGURATION
// --------------------------------------------
export const pricing = {
  // Free Trial
  trial: {
    name: 'Free Trial',
    price: 0,
    priceDisplay: '$0',
    duration: 7, // days
    durationText: '7 days',
    description: 'Try everything free for 7 days',
    features: [
      'All features included',
      'All export formats',
      'Unlimited downloads',
      'No watermarks',
    ],
    limitations: ['7-day limit'],
  },

  // Monthly Subscription
  monthly: {
    name: 'Monthly',
    price: 2.99,
    priceDisplay: '$2.99',
    period: 'month',
    periodText: '/month',
    description: 'Full access, billed monthly',
    features: [
      'All features included',
      'All export formats',
      'Unlimited downloads',
      'No watermarks',
      '1 device',
      'Email support',
      'Auto-renews monthly',
    ],
  },

  // Yearly Subscription
  yearly: {
    name: 'Yearly',
    price: 24.99,
    priceDisplay: '$24.99',
    period: 'year',
    periodText: '/year',
    monthlyEquivalent: 2.08, // $24.99 / 12
    monthlyEquivalentDisplay: '~$2.08/mo',
    savingsPercent: 30,
    savingsText: '~30% off',
    description: 'Best value for committed users',
    features: [
      'All features included',
      'All export formats',
      'Unlimited downloads',
      'No watermarks',
      '1 device',
      'Priority email support',
      'Auto-renews yearly',
    ],
  },

  // Lifetime License
  lifetime: {
    name: 'Lifetime',
    price: 130,
    priceDisplay: '$50',
    period: 'one-time',
    periodText: 'one-time',
    description: 'Pay once, use forever',
    features: [
      'All features included',
      'All export formats',
      'Unlimited downloads',
      'No watermarks',
      'Up to 3 devices',
      'Priority support',
      'All future updates',
      'No recurring payments',
    ],
  },
};

// --------------------------------------------
// PRICING PAGE PLANS (for PricingGrid)
// --------------------------------------------
export const pricingPlans = [
  {
    name: pricing.trial.name,
    price: pricing.trial.priceDisplay,
    description: pricing.trial.description,
    features: [
      { text: 'All features included', included: true },
      { text: 'All export formats', included: true },
      { text: 'Unlimited downloads', included: true },
      { text: 'No watermarks', included: true },
      { text: `${pricing.trial.duration}-day limit`, included: false },
    ],
    buttonText: 'Download Free',
    buttonHref: '/#download',
  },
  {
    name: pricing.monthly.name,
    price: pricing.monthly.priceDisplay,
    period: pricing.monthly.periodText,
    description: pricing.monthly.description,
    features: [
      { text: 'All features included', included: true },
      { text: 'All export formats', included: true },
      { text: 'Unlimited downloads', included: true },
      { text: 'No watermarks', included: true },
      { text: '1 device', included: true },
      { text: 'Email support', included: true },
    ],
    buttonText: 'Contact to Purchase',
    buttonHref: '#contact',
  },
  {
    name: pricing.yearly.name,
    price: pricing.yearly.priceDisplay,
    period: pricing.yearly.periodText,
    badge: pricing.yearly.savingsText,
    description: pricing.yearly.description,
    features: [
      { text: 'All features included', included: true },
      { text: 'All export formats', included: true },
      { text: 'Unlimited downloads', included: true },
      { text: 'No watermarks', included: true },
      { text: '1 device', included: true },
      { text: 'Priority email support', included: true },
      { text: pricing.yearly.monthlyEquivalentDisplay, included: true },
    ],
    buttonText: 'Contact to Purchase',
    buttonHref: '#contact',
    featured: true,
  },
  {
    name: pricing.lifetime.name,
    price: pricing.lifetime.priceDisplay,
    period: pricing.lifetime.periodText,
    description: pricing.lifetime.description,
    features: [
      { text: 'Everything included forever', included: true },
      { text: 'All future updates', included: true },
      { text: 'Up to 3 devices', included: true },
      { text: 'Priority support', included: true },
      { text: 'No recurring payments', included: true },
    ],
    buttonText: 'Contact to Purchase',
    buttonHref: '#contact',
  },
];

// --------------------------------------------
// REFUND POLICY
// --------------------------------------------
export const refundPolicy = {
  guaranteeDays: 14,
  guaranteeText: '14-day money-back guarantee',
  processingDays: '5-10 business days',
};

// --------------------------------------------
// COMPANY INFO
// --------------------------------------------
export const company = {
  name: 'Manhwa Studio',
  email: {
    support: 'chanudomvathana.tork@gmail.com',
    legal: 'chanudomvathana.tork@gmail.com',
    privacy: 'chanudomvathana.tork@gmail.com',
  },
  telegram: {
    username: '@tork_vathana',
    url: 'https://t.me/tork_vathana',
  },
  website: 'https://manhwastudio.com',
};

// --------------------------------------------
// LEGAL PAGE DATES
// Format: Will be displayed as "Month Day, Year"
// --------------------------------------------
export const legalDates = {
  termsLastUpdated: new Date('2024-05-31'),
  privacyLastUpdated: new Date('2024-05-31'),
  licenseLastUpdated: new Date('2024-05-31'),
};

// Helper function to format date
export function formatLegalDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

// --------------------------------------------
// LICENSE TIERS TABLE DATA
// --------------------------------------------
export const licenseTiers = [
  {
    type: 'Free Trial',
    price: pricing.trial.priceDisplay,
    devices: 'Up to 3',
    duration: `${pricing.trial.duration} days (full access)`,
  },
  {
    type: 'Monthly',
    price: `${pricing.monthly.priceDisplay}${pricing.monthly.periodText}`,
    devices: 'Up to 3',
    duration: '1 Month (auto-renews)',
  },
  {
    type: 'Yearly',
    price: `${pricing.yearly.priceDisplay}${pricing.yearly.periodText} (${pricing.yearly.savingsText})`,
    devices: 'Up to 3',
    duration: '1 Year (auto-renews)',
  },
  {
    type: 'Lifetime',
    price: `${pricing.lifetime.priceDisplay} (${pricing.lifetime.periodText})`,
    devices: 'Up to 3',
    duration: 'Perpetual + all updates',
  },
];

// --------------------------------------------
// DATA COLLECTION INFO (for Privacy Policy)
// --------------------------------------------
export const dataCollection = {
  whatWeCollect: [
    {
      category: 'Account Information',
      items: [
        'Email Address: Required for license key delivery and account management',
        'Password: Securely hashed, used for account authentication',
        'License Key: To verify your subscription status',
      ],
    },
    {
      category: 'Payment Information',
      items: [
        'Billing Details: Processed securely by Stripe or PayPal',
        'We DO NOT store: Full credit card numbers, CVV, or banking details',
        'We store: Transaction IDs and billing history for your records',
      ],
    },
    {
      category: 'Anonymous Analytics (Opt-In Only)',
      items: [
        'Which features are most used',
        'App crash reports and error logs',
        'General performance metrics',
        'Operating system and app version',
      ],
    },
  ],
  whatWeDontCollect: [
    'Your Projects & Files: All stored locally on your computer',
    'Your Browsing Activity: We don\'t track websites you visit',
    'Personal Files: App only accesses files you explicitly open',
    'Screenshots or Screen Recording: We don\'t capture your screen',
    'Keystrokes or Input: We don\'t log what you type',
  ],
};
