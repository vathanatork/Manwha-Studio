import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Layout } from './components/layout';
import { HomePage, PricingPage, DocsPage, TermsPage, PrivacyPage, LicensePage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/license" element={<LicensePage />} />
        </Routes>
      </Layout>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
