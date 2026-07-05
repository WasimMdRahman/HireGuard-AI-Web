import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GOOGLE_FORM_URL } from './constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-brand-bgPrimary transition-all duration-200 border-b border-brand-borderDefault ${
      isScrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.5)] py-3' : 'py-4'
    }`}>
      {/* Full width container */}
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-10">
          {/* Logo - replaced with favicon.ico icon only */}
          <Link to="/" className="flex items-center flex-shrink-0 hover:opacity-90 transition-opacity">
            <img src="/favicon.ico" alt="HireGuard AI Logo" className="h-8 w-8 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="/#features" className="text-brand-textSecondary hover:text-white font-medium transition-colors text-sm">
              Features
            </a>
            <a href="/#how-it-works" className="text-brand-textSecondary hover:text-white font-medium transition-colors text-sm">
              How It Works
            </a>
            <a href="/#pricing" className="text-brand-textSecondary hover:text-white font-medium transition-colors text-sm">
              Pricing
            </a>
            <Link to="/terms" className="text-brand-textSecondary hover:text-white font-medium transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-brand-textSecondary hover:text-white font-medium transition-colors text-sm">
              Privacy Policy
            </Link>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accentPrimary hover:bg-brand-accentHover text-white font-semibold px-4 py-2 rounded-lg transition-all shadow-sm text-sm border border-transparent flex-shrink-0"
            >
              Request Access
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-textSecondary hover:text-white hover:bg-brand-bgSecondary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-4 pt-2 pb-3 space-y-1 bg-brand-bgPrimary border-t border-brand-borderDefault mt-2 shadow-xl">
          <a
            href="/#features"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-brand-textSecondary hover:text-white hover:bg-brand-bgSecondary"
          >
            Features
          </a>
          <a
            href="/#how-it-works"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-brand-textSecondary hover:text-white hover:bg-brand-bgSecondary"
          >
            How It Works
          </a>
          <a
            href="/#pricing"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-brand-textSecondary hover:text-white hover:bg-brand-bgSecondary"
          >
            Pricing
          </a>
          <Link
            to="/terms"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-brand-textSecondary hover:text-white hover:bg-brand-bgSecondary"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-brand-textSecondary hover:text-white hover:bg-brand-bgSecondary"
          >
            Privacy Policy
          </Link>
          <div className="pt-2 pb-1">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full bg-brand-accentPrimary hover:bg-brand-accentHover text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-base"
            >
              Request Access
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
