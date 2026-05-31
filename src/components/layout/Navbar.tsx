import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '../ui';
import { Container } from '../ui';
import { triggerDownload } from '../../utils/download';

const navLinks = [
  { href: '/#features', label: 'Features', sectionId: 'features' },
  { href: '/#how-it-works', label: 'How it Works', sectionId: 'how-it-works' },
  { href: '/docs', label: 'Documentation', sectionId: null },
  { href: '/pricing', label: 'Pricing', sectionId: null },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll spy for home page sections
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(null);
      return;
    }

    const sectionIds = navLinks
      .filter(link => link.sectionId)
      .map(link => link.sectionId as string);

    const handleScroll = () => {
      let current: string | null = null;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isActive = (link: typeof navLinks[0]) => {
    // For section links on home page
    if (link.sectionId && location.pathname === '/') {
      return activeSection === link.sectionId;
    }
    // For page links
    if (!link.sectionId) {
      return location.pathname === link.href;
    }
    return false;
  };

  const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    if (link.sectionId) {
      e.preventDefault();
      setMobileMenuOpen(false);

      if (location.pathname !== '/') {
        // Navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(link.sectionId!);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home, just scroll
        const element = document.getElementById(link.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  const handleDownloadClick = () => {
    setMobileMenuOpen(false);
    triggerDownload();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-18">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-sm font-medium transition-colors ${
                  isActive(link)
                    ? 'text-accent-light'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" href="/pricing">
              Buy License
            </Button>
            <Button size="sm" onClick={handleDownloadClick}>
              Download Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link)
                      ? 'bg-accent/10 text-accent-light'
                      : 'text-text-secondary hover:bg-bg-tertiary'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 mt-4 px-4">
                <Button variant="outline" size="sm" href="/pricing" fullWidth onClick={() => setMobileMenuOpen(false)}>
                  Buy License
                </Button>
                <Button size="sm" onClick={handleDownloadClick} fullWidth>
                  Download
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
