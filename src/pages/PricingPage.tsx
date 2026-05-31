import { PricingGrid, FAQ, PurchaseForm, Guarantee } from '../components/pricing';

export function PricingPage() {
  return (
    <div className="pt-12">
      <PricingGrid />
      <FAQ />
      <PurchaseForm />
      <Guarantee />
    </div>
  );
}
