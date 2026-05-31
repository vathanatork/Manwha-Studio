import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isDocsPage = location.pathname === '/docs';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 ${isDocsPage ? '' : 'pt-18'}`}>{children}</main>
      {!isDocsPage && <Footer />}
    </div>
  );
}
