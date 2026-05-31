import { DocsSidebar, DocsContent } from '../components/docs';
import '../styles/docs.css';

export function DocsPage() {
  return (
    <div className="docs-page">
      <DocsSidebar />
      <div className="docs-main">
        <DocsContent />
      </div>
    </div>
  );
}
