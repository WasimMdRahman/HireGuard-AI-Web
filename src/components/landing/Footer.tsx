import { Shield } from 'lucide-react';
import { GOOGLE_FORM_URL } from './constants';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-brand-borderDefault pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-brand-borderDefault">
          
          {/* Left Column */}
          <div className="md:col-span-5 text-left space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg select-none">
              <Shield className="h-6 w-6 stroke-[2.5] text-brand-accentPrimary" />
              <span className="text-white">HireGuard AI</span>
            </div>
            <p className="text-sm text-brand-textMuted max-w-sm leading-relaxed">
              AI hiring assistant for teams without HR.
            </p>
            <a 
              href="mailto:contact@hireguard.online"
              className="text-[#0ea5e9] text-sm hover:underline transition-colors mt-2 block"
            >
              contact@hireguard.online
            </a>
          </div>

          {/* Middle Columns (Product & Legal) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8 text-left">
            {/* Product Links */}
            <div>
              <h4 className="text-xs font-semibold text-brand-textSecondary uppercase tracking-widest mb-4">
                Product
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="/#features" className="text-sm text-brand-textMuted hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/#how-it-works" className="text-sm text-brand-textMuted hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="text-sm text-brand-textMuted hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a 
                    href={GOOGLE_FORM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-brand-textMuted hover:text-white transition-colors"
                  >
                    Request Access
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-xs font-semibold text-brand-textSecondary uppercase tracking-widest mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/terms" 
                    className="text-[#737373] hover:text-white text-sm transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a 
                    href="/privacy" 
                    className="text-[#737373] hover:text-white text-sm transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-3 text-left md:text-right space-y-4">
            <div>
              <div className="text-sm text-white font-medium">Built for founders.</div>
              <div className="text-sm text-brand-textMuted mt-1">Priced for small teams.</div>
            </div>
            <p className="text-xs text-brand-textMuted leading-relaxed">
              Early access pricing ends at full launch.
            </p>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 text-center text-xs text-brand-textMuted">
          <p>&copy; {new Date().getFullYear()} HireGuard AI. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
