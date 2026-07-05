import { Shield } from 'lucide-react';


export default function Hero({ onRequestAccess }: { onRequestAccess: () => void }) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-bgPrimary flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in space-y-8 flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-bgSecondary border border-brand-borderDefault text-brand-accentLight font-semibold text-xs md:text-sm select-none">
          <span>⚡</span> Early Access &mdash; Limited Spots
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
          Stop Making<br className="hidden sm:inline" />
          {" "}<span className="text-brand-highlight">$17,000</span> Hiring Mistakes
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-brand-textSecondary max-w-2xl leading-relaxed">
          HireGuard AI analyzes candidate resumes, flags hiring risks, and generates interview questions specific to each candidate — in 30 seconds. Built for founders without an HR team.
        </p>

        {/* Pricing Display */}
        <div className="bg-brand-bgSecondary border border-brand-borderDefault rounded-xl px-6 py-4 flex flex-col items-center space-y-1 max-w-xs w-full shadow-md">
          <div className="flex items-center gap-3">
            <span className="text-brand-textMuted line-through text-lg font-semibold">$$499</span>
            <span className="text-white text-3xl font-extrabold">&rarr; $349</span>
          </div>
          <span className="text-brand-success text-xs font-bold uppercase tracking-wider">
            Early Access Price &mdash; Save $150
          </span>
          <span className="text-brand-textMuted text-[11px] italic mt-1">
            Price increases to $499 at full launch
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 max-w-lg">
          <a
            href="mailto:contact@hireguard.online?subject=HireGuard%20AI%20%E2%80%94%20Access%20Request%20%E2%80%94%20%24349&body=Hi%20Wasim,%0D%0A%0D%0AI%20would%20like%20to%20purchase%20access%20to%20HireGuard%20AI.%0D%0A%0D%0AMy%20name:%0D%0AMy%20company:%0D%0ANumber%20of%20hires%20per%20year:%0D%0AHow%20I%20heard%20about%20HireGuard%20AI:%0D%0A"
            onClick={(e) => {
              e.preventDefault();
              onRequestAccess();
            }}
            className="w-full sm:w-auto flex-1 bg-[#0ea5e9] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#0284c7] transition-colors text-center whitespace-nowrap"
          >
            Request Access — $349
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto flex-1 bg-transparent border border-brand-borderDefault text-brand-textSecondary hover:border-brand-accentPrimary hover:text-white text-base font-bold px-8 py-4 rounded-xl transition-all text-center"
          >
            See How It Works ↓
          </a>
        </div>

        {/* Trust Signals Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-brand-textMuted text-xs md:text-sm font-medium pt-2">
          <span className="flex items-center gap-1.5">
            <span className="text-brand-success text-sm">&bull;</span> One-time &mdash; no subscription ever
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-brand-success text-sm">&bull;</span> Your data never leaves your device
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-brand-success text-sm">&bull;</span> 48-hour satisfaction guarantee
          </span>
        </div>

        {/* Hero Mockup */}
        <div className="w-full max-w-xl px-4 pt-8">
          <div className="bg-brand-bgSecondary rounded-2xl shadow-2xl border border-brand-borderDefault p-6 md:p-8 text-left transition-all duration-300 transform md:-rotate-1 hover:rotate-0 hover:shadow-cyan-950/10 relative overflow-hidden">
            {/* Header row */}
            <div className="flex justify-between items-center border-b border-brand-borderDefault pb-4 mb-4">
              <span className="text-brand-accentPrimary font-bold text-sm tracking-wider uppercase flex items-center gap-1.5">
                <Shield className="h-4 w-4" />
                HireGuard AI
              </span>
              <span className="text-white text-xs font-semibold">Candidate Evaluation Report</span>
            </div>

            {/* Candidate row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 bg-brand-bgCard/40 p-3 rounded-lg border border-brand-borderDefault text-xs">
              <div>
                <span className="text-brand-textMuted block font-medium">Name:</span>
                <span className="text-white font-bold">Sarah Johnson</span>
              </div>
              <div>
                <span className="text-brand-textMuted block font-medium">Role:</span>
                <span className="text-white font-bold">Senior Software Engineer</span>
              </div>
              <div>
                <span className="text-brand-textMuted block font-medium">Score:</span>
                <span className="text-brand-success font-extrabold">85% &mdash; Strong Match</span>
              </div>
            </div>

            {/* Risk Section */}
            <div className="space-y-3 mb-6">
              <div className="text-brand-accentPrimary text-[10px] uppercase font-bold tracking-widest">
                POTENTIAL HIRING RISKS
              </div>
              
              {/* Risk 1 */}
              <div className="p-3 bg-brand-bgCard border border-brand-borderDefault rounded-lg flex items-center justify-between text-xs gap-3">
                <div className="text-brand-textSecondary">
                  <span className="text-white font-semibold">Unverified Skill Claim:</span> 5 years AWS claimed, history shows only 2.
                </div>
                <span className="text-[9px] font-extrabold bg-brand-error text-white px-2 py-0.5 rounded tracking-wide">
                  HIGH
                </span>
              </div>

              {/* Risk 2 */}
              <div className="p-3 bg-brand-bgCard border border-brand-borderDefault rounded-lg flex items-center justify-between text-xs gap-3">
                <div className="text-brand-textSecondary">
                  <span className="text-white font-semibold">Employment Gap:</span> Unexplained 9-month timeline gap in 2024.
                </div>
                <span className="text-[9px] font-extrabold bg-brand-highlight text-white px-2 py-0.5 rounded tracking-wide">
                  MEDIUM
                </span>
              </div>
            </div>

            {/* Questions preview */}
            <div className="space-y-3">
              <div className="text-brand-accentPrimary text-[10px] uppercase font-bold tracking-widest">
                SUGGESTED INTERVIEW QUESTIONS
              </div>
              <ul className="list-disc list-inside space-y-2 text-brand-textSecondary text-xs">
                <li>
                  "Can you detail your specific architecture work on AWS during your tenure at Alpha Corp?"
                </li>
                <li>
                  "Could you walk us through your projects or activities during the 9-month transition in 2024?"
                </li>
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-brand-borderDefault pt-4 mt-6 text-center">
              <span className="text-brand-textMuted text-[10px] font-mono tracking-wider">
                HireGuard AI &mdash; For Guidance Only
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
