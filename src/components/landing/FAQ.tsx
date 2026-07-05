import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: { q: string; a: ReactNode }[] = [
    {
      q: "Do I need technical knowledge?",
      a: "No technical knowledge required. The setup wizard guides you through connecting your API key step by step. If you can use email, you can use HireGuard AI."
    },
    {
      q: "What is a BYOK system?",
      a: "Instead of charging a subscription, HireGuard AI uses your own API key from Google Gemini, OpenAI, or Anthropic. You pay only for what you use — typically a few cents per analysis. Your key stays on your device and we never see it."
    },
    {
      q: "Is my candidate data secure?",
      a: "Completely. All candidate data, resumes, and API keys are encrypted with AES-256 and stored only in your browser. HireGuard AI servers never receive or store any of this."
    },
    {
      q: "What if I clear my browser cache?",
      a: "Your data is stored locally so clearing cache removes it. Use the built-in encrypted backup feature to export your data regularly. Restore instantly on any browser."
    },
    {
      q: "Does HireGuard AI make hiring decisions?",
      a: "No — and by design. HireGuard AI provides guidance only. All final decisions require human judgment. The tool helps you ask better questions and spot red flags — not replace your decision making."
    },
    {
      q: "What is your refund policy?",
      a: (
        <>
          48-hour satisfaction guarantee. If HireGuard AI doesn't work as described contact us at{" "}
          <a 
            href="mailto:contact@hireguard.online?subject=HireGuard%20AI%20%E2%80%94%20Refund%20Request"
            className="text-[#0ea5e9] hover:underline"
          >
            contact@hireguard.online
          </a>{" "}
          within 48 hours for a full refund.
        </>
      )
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-brand-bgSecondary border-b border-brand-borderDefault">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-brand-bgCard border border-brand-borderDefault rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none transition-colors hover:bg-brand-bgSecondary/60"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white text-sm md:text-base pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-brand-textSecondary transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-brand-accentPrimary' : ''
                    }`} 
                  />
                </button>
                
                <div
                  className={`transition-all duration-200 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-48 border-t border-brand-borderDefault' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-sm md:text-base text-brand-textSecondary leading-relaxed bg-brand-bgCard">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
