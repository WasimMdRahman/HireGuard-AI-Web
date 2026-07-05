import { Check } from 'lucide-react';


export default function FinalCTA({ onRequestAccess }: { onRequestAccess: () => void }) {
  return (
    <section className="bg-brand-accentPrimary py-20 md:py-28 text-white relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,100 100,0 100,100" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Ready to hire smarter?
        </h2>
        
        {/* Subheading */}
        <p className="text-base md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
          Join founders making confident hiring decisions without an HR team.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 max-w-lg">
          <a
            href="mailto:contact@hireguard.online?subject=HireGuard%20AI%20%E2%80%94%20Purchase%20Request%20%E2%80%94%20%24349&body=Hi%20Wasim,%0D%0A%0D%0AI%20would%20like%20to%20purchase%20HireGuard%20AI%20at%20the%20Early%20Access%20price%20of%20%24349.%0D%0A%0D%0AMy%20name:%0D%0AMy%20company:%0D%0ANumber%20of%20employees:%0D%0AHow%20I%20heard%20about%20HireGuard%20AI:%0D%0A"
            onClick={(e) => {
              e.preventDefault();
              onRequestAccess();
            }}
            className="w-full sm:w-auto flex-grow bg-white text-[#0ea5e9] hover:bg-sky-50 text-base font-bold px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all text-center whitespace-nowrap"
          >
            Request Access — $349
          </a>
          <a
            href="mailto:contact@hireguard.online"
            className="w-full sm:w-auto flex-grow bg-transparent border border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-center whitespace-nowrap font-bold text-base"
          >
            contact@hireguard.online
          </a>
        </div>

        {/* Verification signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/75 text-xs md:text-sm font-medium">
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4 stroke-[3]" />
            One-time purchase
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4 stroke-[3]" />
            48-hour guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4 stroke-[3]" />
            Your data stays private
          </span>
        </div>

      </div>
    </section>
  );
}
