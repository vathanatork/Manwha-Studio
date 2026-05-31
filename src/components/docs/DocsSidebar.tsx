import { useEffect, useState } from 'react';
import { sidebarSections } from '../../data/docsData';

export function DocsSidebar() {
  const [activeId, setActiveId] = useState('installation');

  useEffect(() => {
    // Get all section IDs from sidebar
    const sectionIds = sidebarSections.flatMap(section =>
      section.links.map(link => link.id)
    );

    const handleScroll = () => {
      // Navbar height + some buffer
      const offset = 90;
      let currentSection = sectionIds[0];

      // Find the section that is currently at the top of the viewport
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If section top is at or above our offset, it's the active one
          if (rect.top <= offset) {
            currentSection = id;
            break;
          }
        }
      }

      // If we're at the very top, set first section as active
      if (window.scrollY < 50) {
        currentSection = sectionIds[0];
      }

      setActiveId(currentSection);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveId(id);

    const element = document.getElementById(id);
    if (element) {
      // Scroll with offset for navbar
      const navbarHeight = 72;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight - 20,
        behavior: 'smooth'
      });

      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <aside className="docs-sidebar">
      <div className="sidebar-content">
        {sidebarSections.map((section) => (
          <div key={section.title} className="sidebar-section">
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={activeId === link.id ? 'active' : ''}
                    onClick={(e) => handleClick(e, link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
