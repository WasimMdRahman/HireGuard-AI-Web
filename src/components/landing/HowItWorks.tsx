import { Upload, Zap, Download } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Resumes",
      description: "Upload up to 20 resumes in PDF or DOCX. Select your job role from 500+ templates or customize your own."
    },
    {
      number: "02",
      icon: Zap,
      title: "AI Analyzes Instantly",
      description: "HireGuard AI scans each resume against your requirements and flags risks and gaps in 30 seconds."
    },
    {
      number: "03",
      icon: Download,
      title: "Get Your Report",
      description: "Detailed candidate report with match score, risk flags, and interview questions. Export as professional PDF."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-brand-bgPrimary border-b border-brand-borderDefault scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Up and running in 3 steps
          </h2>
        </div>

        {/* Steps List */}
        <div className="relative animate-fadeIn">
          {/* Connecting line (Desktop only) */}
          <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-0.5 border-t border-dashed border-brand-borderDefault z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="text-center flex flex-col items-center px-4">
                  
                  {/* Step Number Circle */}
                  <div className="relative flex items-center justify-center h-14 w-14 rounded-full bg-brand-accentPrimary text-white font-extrabold text-sm shadow-md mb-6 z-10 select-none">
                    {step.number}
                  </div>

                  {/* Icon Container */}
                  <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-brand-bgSecondary border border-brand-borderDefault text-brand-accentPrimary shadow-sm mb-6">
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>

                  {/* Step Info */}
                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-brand-textSecondary max-w-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
