import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img
        src="/logo.svg"
        alt="Manhwa Studio - Panel · Video Editor"
        className="h-16"
      />
    </Link>
  );
}
