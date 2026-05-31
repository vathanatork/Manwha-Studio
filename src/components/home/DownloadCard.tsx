import type { LucideProps } from 'lucide-react';
import { ComponentType } from 'react';
import { Card, Button } from '../ui';

interface DownloadCardProps {
  icon: ComponentType<LucideProps>;
  platform: string;
  version: string;
  size: string;
  href: string;
  primary?: boolean;
}

export function DownloadCard({ icon: Icon, platform, version, size, href, primary }: DownloadCardProps) {
  return (
    <Card
      hover
      padding="lg"
      className={primary ? 'border-accent bg-gradient-to-br from-accent/5 to-purple-500/5' : ''}
    >
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-bg-tertiary flex items-center justify-center">
          <Icon size={32} className="text-text-secondary" />
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-1">{platform}</h3>
        <p className="text-sm text-text-muted mb-4">
          {version} • {size}
        </p>
        <Button
          variant={primary ? 'primary' : 'outline'}
          fullWidth
          href={href}
          external
        >
          Download
        </Button>
      </div>
    </Card>
  );
}
