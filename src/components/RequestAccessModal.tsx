import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { X, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../lib/emailjs';

interface RequestAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  hiresPerYear: string;
  heardFrom: string;
  message: string;
  agreeToTerms: boolean;
}

interface TouchState {
  name: boolean;
  email: boolean;
  company: boolean;
  hiresPerYear: boolean;
  heardFrom: boolean;
  agreeToTerms: boolean;
}

export default function RequestAccessModal({ isOpen, onClose }: RequestAccessModalProps) {
  const [activeTab, setActiveTab] = useState<'form' | 'email'>('form');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    hiresPerYear: '',
    heardFrom: '',
    message: '',
    agreeToTerms: false,
  });

  const [touched, setTouched] = useState<TouchState>({
    name: false,
    email: false,
    company: false,
    hiresPerYear: false,
    heardFrom: false,
    agreeToTerms: false,
  });

  // Handle Escape key to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Validation checks
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errors = {
    name: formData.name.trim().length < 2 ? 'Please enter your full name' : null,
    email: !emailRegex.test(formData.email) ? 'Please enter a valid email address' : null,
    company: formData.company.trim().length < 2 ? 'Please enter your company name' : null,
    hiresPerYear: !formData.hiresPerYear ? 'Please select an option' : null,
    agreeToTerms: !formData.agreeToTerms ? 'You must agree to the terms' : null,
  };

  const isFormValid = !errors.name && !errors.email && !errors.company && !errors.hiresPerYear && !errors.agreeToTerms;

  const handleBlur = (field: keyof TouchState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    
    // Mark all as touched on submit attempt
    setTouched({
      name: true,
      email: true,
      company: true,
      hiresPerYear: true,
      heardFrom: true,
      agreeToTerms: true,
    });

    if (!isFormValid) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          hires_per_year: formData.hiresPerYear,
          heard_from: formData.heardFrom || 'Not specified',
          message: formData.message || 'No additional message',
          to_email: 'contact@hireguard.online',
          reply_to: formData.email,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setIsSuccess(true);
    } catch (err) {
      setError('Failed to send. Please try the email app option or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    // Reset state on close
    setFormData({
      name: '',
      email: '',
      company: '',
      hiresPerYear: '',
      heardFrom: '',
      message: '',
      agreeToTerms: false,
    });
    setTouched({
      name: false,
      email: false,
      company: false,
      hiresPerYear: false,
      heardFrom: false,
      agreeToTerms: false,
    });
    setSubmitAttempted(false);
    setIsSuccess(false);
    setError(null);
    setActiveTab('form');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-0 md:p-4 overflow-y-auto animate-fade-in"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-[520px] bg-[#1a1a1a] border border-[#333333] rounded-none md:rounded-2xl p-6 md:p-8 text-left shadow-2xl overflow-y-auto max-h-screen md:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#737373] hover:text-white transition-colors"
          type="button"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 mb-6 pr-6">
          <div className="inline-block bg-[#0ea5e9] text-white rounded-full text-xs px-3 py-1 font-semibold">
            Early Access — $349
          </div>
          <h2 className="text-white font-bold text-2xl">
            Request Access to HireGuard AI
          </h2>
          <p className="text-[#a3a3a3] text-sm leading-relaxed">
            Fill in your details and we'll get back to you within a few hours with payment instructions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-[#333333] pb-4 flex-col sm:flex-row">
          <button
            type="button"
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-2.5 px-4 text-sm font-semibold rounded-lg border text-center transition-all ${
              activeTab === 'form'
                ? 'bg-[#262626] border-[#0ea5e9] text-white'
                : 'bg-transparent border-[#333333] text-[#737373] hover:border-[#0ea5e9]'
            }`}
          >
            📧 Send via Form
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('email')}
            className={`flex-1 py-2.5 px-4 text-sm font-semibold rounded-lg border text-center transition-all ${
              activeTab === 'email'
                ? 'bg-[#262626] border-[#0ea5e9] text-white'
                : 'bg-transparent border-[#333333] text-[#737373] hover:border-[#0ea5e9]'
            }`}
          >
            ✉️ Open Email App
          </button>
        </div>

        {/* Tab 1: Form Option */}
        {activeTab === 'form' && (
          <div>
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-white text-xl font-bold mb-2">
                  Request Received!
                </h3>
                <p className="text-[#a3a3a3] text-sm mb-6 leading-relaxed">
                  Thanks {formData.name}! We've received your request and will email you at{' '}
                  <span className="text-[#0ea5e9] font-medium">{formData.email}</span> within a few hours with payment instructions.
                </p>
                <p className="text-[#737373] text-xs">
                  Expected response time: Within 24 hours
                </p>
                <button 
                  onClick={handleClose}
                  className="mt-6 text-[#0ea5e9] text-sm hover:underline"
                >
                  Close this window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-[#a3a3a3] text-sm font-medium">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    placeholder="John Smith"
                    className="w-full bg-[#262626] border border-[#333333] rounded-lg px-4 py-3 text-white placeholder-[#737373] focus:border-[#0ea5e9] focus:outline-none"
                  />
                  {(touched.name || submitAttempted) && errors.name && (
                    <p className="text-[#ef4444] text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Work Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-[#a3a3a3] text-sm font-medium">
                    Work Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    placeholder="john@company.com"
                    className="w-full bg-[#262626] border border-[#333333] rounded-lg px-4 py-3 text-white placeholder-[#737373] focus:border-[#0ea5e9] focus:outline-none"
                  />
                  {(touched.email || submitAttempted) && errors.email && (
                    <p className="text-[#ef4444] text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Company Name */}
                <div className="space-y-1">
                  <label htmlFor="company" className="block text-[#a3a3a3] text-sm font-medium">
                    Company Name *
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={() => handleBlur('company')}
                    placeholder="Acme Inc."
                    className="w-full bg-[#262626] border border-[#333333] rounded-lg px-4 py-3 text-white placeholder-[#737373] focus:border-[#0ea5e9] focus:outline-none"
                  />
                  {(touched.company || submitAttempted) && errors.company && (
                    <p className="text-[#ef4444] text-xs mt-1">{errors.company}</p>
                  )}
                </div>

                {/* Hires Per Year */}
                <div className="space-y-1">
                  <label htmlFor="hiresPerYear" className="block text-[#a3a3a3] text-sm font-medium">
                    How many hires per year?
                  </label>
                  <select
                    id="hiresPerYear"
                    name="hiresPerYear"
                    value={formData.hiresPerYear}
                    onChange={handleChange}
                    onBlur={() => handleBlur('hiresPerYear')}
                    className="w-full bg-[#262626] border border-[#333333] rounded-lg px-4 py-3 text-white focus:border-[#0ea5e9] focus:outline-none appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23a3a3a3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="1-5 hires">1-5 hires</option>
                    <option value="5-10 hires">5-10 hires</option>
                    <option value="10-25 hires">10-25 hires</option>
                    <option value="25+ hires">25+ hires</option>
                  </select>
                  {(touched.hiresPerYear || submitAttempted) && errors.hiresPerYear && (
                    <p className="text-[#ef4444] text-xs mt-1">{errors.hiresPerYear}</p>
                  )}
                </div>

                {/* How did you hear about us */}
                <div className="space-y-1">
                  <label htmlFor="heardFrom" className="block text-[#a3a3a3] text-sm font-medium">
                    How did you hear about HireGuard AI?
                  </label>
                  <select
                    id="heardFrom"
                    name="heardFrom"
                    value={formData.heardFrom}
                    onChange={handleChange}
                    className="w-full bg-[#262626] border border-[#333333] rounded-lg px-4 py-3 text-white focus:border-[#0ea5e9] focus:outline-none appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23a3a3a3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Twitter / X">Twitter / X</option>
                    <option value="Friend or colleague">Friend or colleague</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message (Optional) */}
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-[#a3a3a3] text-sm font-medium">
                    Anything else? (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your hiring needs..."
                    rows={3}
                    className="w-full bg-[#262626] border border-[#333333] rounded-lg px-4 py-3 text-white placeholder-[#737373] focus:border-[#0ea5e9] focus:outline-none resize-none"
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="space-y-1 pt-2">
                  <div className="flex items-start gap-3">
                    <input 
                      id="agreeToTerms"
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      onBlur={() => handleBlur('agreeToTerms')}
                      className="mt-1 accent-[#0ea5e9] h-4 w-4 cursor-pointer"
                    />
                    <label htmlFor="agreeToTerms" className="text-[#737373] text-sm cursor-pointer select-none">
                      I agree to the{' '}
                      <a 
                        href="/terms" 
                        className="text-[#0ea5e9] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Terms of Service
                      </a>
                      {' '}and{' '}
                      <a 
                        href="/privacy" 
                        className="text-[#0ea5e9] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                  {(touched.agreeToTerms || submitAttempted) && errors.agreeToTerms && (
                    <p className="text-[#ef4444] text-xs mt-1">{errors.agreeToTerms}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] disabled:bg-[#0284c7] text-white font-bold py-3 rounded-xl transition-colors disabled:cursor-not-allowed text-base whitespace-nowrap"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending your request...
                    </>
                  ) : (
                    'Request Access — $349 →'
                  )}
                </button>

                {/* Error Banner */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-sm text-red-400 mt-3">
                    {error}
                  </div>
                )}
              </form>
            )}
          </div>
        )}

        {/* Tab 2: Email App Option */}
        {activeTab === 'email' && (
          <div className="text-center py-6">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-white font-bold text-lg mb-2">
              Open in your email app
            </h3>
            <p className="text-[#a3a3a3] text-sm mb-6 max-w-[380px] mx-auto leading-relaxed">
              Click below to open your email app with a pre-filled request. Just hit send and we'll get back to you within a few hours.
            </p>

            <a
              href="mailto:contact@hireguard.online?subject=HireGuard%20AI%20Access%20Request%20%E2%80%94%20%24349&body=Hi%20Wasim,%0D%0A%0D%0AI%20am%20interested%20in%20purchasing%20HireGuard%20AI.%0D%0A%0D%0AMy%20name:%20%0D%0AMy%20company:%20%0D%0AMy%20work%20email:%20%0D%0AHires%20per%20year:%20%0D%0AHow%20I%20heard%20about%20HireGuard%20AI:%20%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you!%0D%0A"
              className="inline-block bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold px-8 py-3 rounded-xl transition-colors mb-4 text-center whitespace-nowrap"
            >
              Open Email App →
            </a>

            <p className="text-[#737373] text-xs">
              This will open Gmail, Outlook, or your default email app
            </p>

            <div className="mt-6 pt-6 border-t border-[#333333]">
              <p className="text-[#737373] text-sm">
                Or email us directly at:
              </p>
              <a 
                href="mailto:contact@hireguard.online"
                className="text-[#0ea5e9] hover:underline text-sm font-medium mt-1 inline-block"
              >
                contact@hireguard.online
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
