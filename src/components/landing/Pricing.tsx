import { Check, Lock } from 'lucide-react';


export default function Pricing({ onRequestAccess }: { onRequestAccess: () => void }) {
  const features = [
    "Unlimited candidate analysis",
    "500+ job role templates",
    "Bulk resume upload (up to 20)",
    "Google Gemini, OpenAI & Claude",
    "PDF report export",
    "AES-256 encrypted local storage",
    "Lifetime access to V1",
    "Email support",
    "48-hour satisfaction guarantee"
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-brand-bgPrimary border-b border-brand-borderDefault scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Simple, honest pricing
          </h2>
          <p className="mt-4 text-base md:text-lg text-brand-textSecondary leading-relaxed">
            One price. Lifetime access. No surprises.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="flex flex-col items-center">
          <div 
            className="w-full max-w-[480px] bg-brand-bgSecondary border border-brand-accentPrimary rounded-2xl p-8 shadow-[0_0_40px_rgba(14,165,233,0.1)] relative"
          >
            {/* Early Access Badge */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-highlight text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-orange-500 shadow-sm">
              Early Access
            </div>

            {/* Title / Header */}
            <div className="text-center mt-2">
              <h3 className="text-2xl font-bold text-white">HireGuard AI</h3>
              <p className="text-sm text-brand-textSecondary mt-1">Full Lifetime License</p>
            </div>

            {/* Price block */}
            <div className="text-center my-8">
              <div className="flex items-center justify-center gap-2">
                <span className="text-brand-textMuted line-through text-xl font-semibold">$$499</span>
                <span className="text-5xl font-extrabold text-white">$349</span>
              </div>
              <p className="text-sm text-brand-textMuted mt-1">one-time purchase</p>
              <div className="mt-2 text-sm text-brand-success font-semibold">
                You save $150
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-brand-borderDefault w-full my-6"></div>

            {/* Features list */}
            <ul className="space-y-4 pb-8">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-0.5 rounded-full bg-green-950/20 text-brand-success border border-brand-success/20">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="text-sm md:text-base text-white font-medium">{feat}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="space-y-4">
              <a
                href="mailto:contact@hireguard.online?subject=HireGuard%20AI%20%E2%80%94%20Purchase%20Request%20%E2%80%94%20%24349&body=Hi%20Wasim,%0D%0A%0D%0AI%20would%20like%20to%20purchase%20HireGuard%20AI%20at%20the%20Early%20Access%20price%20of%20%24349.%0D%0A%0D%0AMy%20name:%0D%0AMy%20company:%0D%0ANumber%20of%20employees:%0D%0AHow%20I%20heard%20about%20HireGuard%20AI:%0D%0A"
                onClick={(e) => {
                  e.preventDefault();
                  onRequestAccess();
                }}
                className="w-full bg-[#0ea5e9] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#0284c7] transition-colors text-center block whitespace-nowrap"
              >
                Request Access — $349
              </a>
              
              {/* Trust signals */}
              <div className="flex flex-col items-center justify-center gap-1.5 text-xs text-brand-textMuted font-medium">
                <span className="flex items-center gap-1">
                  <Lock className="h-3.5 w-3.5" />
                  Secure payment via PayPal
                </span>
              </div>
            </div>

          </div>

          {/* Pricing Comparison Note */}
          <p className="mt-8 text-sm text-brand-textMuted italic text-center max-w-lg leading-relaxed px-4">
            "A freelance HR consultant charges $500&ndash;$1,000 per hire screening. HireGuard AI does it in 30 seconds for a one-time $349."
          </p>
        </div>

      </div>
    </section>
  );
}
