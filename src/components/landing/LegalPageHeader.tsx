import { Link } from 'react-router-dom';

interface LegalPageHeaderProps {
  title: string;
  lastUpdated: string;
}

export default function LegalPageHeader({ title, lastUpdated }: LegalPageHeaderProps) {
  return (
    <header className="bg-brand-bgSecondary border-b border-brand-borderDefault py-12 mt-16">
      <div className="max-w-4xl mx-auto px-6 text-left space-y-4">
        
        {/* Back Link */}
        <div>
          <Link 
            to="/" 
            className="text-brand-accentPrimary hover:text-brand-accentLight font-semibold text-sm transition-colors hover:underline"
          >
            &larr; Back to HireGuard AI
          </Link>
        </div>

        {/* Badge */}
        <div className="inline-block px-3 py-1 rounded-full bg-brand-bgCard border border-brand-borderDefault text-brand-accentPrimary text-xs font-bold uppercase tracking-wider">
          Legal
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          {title}
        </h1>

        {/* Subheading */}
        <p className="text-xs md:text-sm text-brand-textMuted font-mono">
          Last updated: {lastUpdated}
        </p>

      </div>
    </header>
  );
}
