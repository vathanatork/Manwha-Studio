import { Section, SectionHeader } from '../ui';
import { FAQItem } from './FAQItem';
import { contact, pricing } from '../../data/pricingData';

const faqs = [
  {
    question: 'How do I purchase a license during beta?',
    answer: `During the beta period, contact us directly via Telegram (${contact.telegram.username}) or email (${contact.email}) to purchase a license. We'll send you the license key after payment confirmation.`,
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'During beta, we accept PayPal, bank transfer, and select payment methods. Contact us to discuss payment options available in your region.',
  },
  {
    question: 'What does "lifetime updates" mean?',
    answer: `With the Lifetime license (${pricing.lifetime.priceDisplay}), you get all future updates forever - no recurring payments, no upgrade fees. Your one-time purchase covers everything.`,
  },
  {
    question: 'Can I transfer my license to another device?',
    answer: 'Yes! You can use your license on up to 3 devices. You can deactivate on one device and activate on another anytime - perfect for when you get a new computer.',
  },
  {
    question: 'What happens after the 7-day free trial?',
    answer: `After the trial, premium features will be locked until you purchase a license. Your projects and files remain safe - you just need to subscribe to continue using all features.`,
  },
  {
    question: 'Is there a refund policy?',
    answer: 'During the beta period, we don\'t offer refunds. However, we encourage you to use the 7-day free trial to fully test all features before purchasing.',
  },
  {
    question: 'Do you offer student discounts?',
    answer: 'Student discounts are not available during the beta period. We may introduce educational pricing in the future - follow us for updates!',
  },
  {
    question: 'What if I have issues or need support?',
    answer: `Contact us anytime via Telegram (${contact.telegram.username}) or email (${contact.email}). We typically respond within 24 hours.`,
  },
];

export function FAQ() {
  return (
    <Section id="faq" background="secondary">
      <SectionHeader title="Frequently Asked Questions" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} {...faq} />
        ))}
      </div>
    </Section>
  );
}
