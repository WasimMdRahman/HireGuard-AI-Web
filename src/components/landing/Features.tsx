import { FileSearch, Target, MessageSquare, Upload, Briefcase, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: FileSearch,
      title: "Resume Risk Analysis",
      description: "AI scans every resume for unverified claims, vague experience, and red flags — categorized by severity."
    },
    {
      icon: Target,
      title: "Candidate Match Score",
      description: "Every candidate gets an objective match score based on your specific job requirements. Compare fairly."
    },
    {
      icon: MessageSquare,
      title: "Specific Interview Questions",
      description: "Questions generated from the actual resume — not generic templates. Probe exactly where the risks are."
    },
    {
      icon: Upload,
      title: "Bulk Resume Upload",
      description: "Analyze up to 20 resumes at once. Screen your entire applicant pool in minutes not days."
    },
    {
      icon: Briefcase,
      title: "500+ Job Role Templates",
      description: "Pre-built templates across Tech, Healthcare, Business and Law. Customize for your exact needs."
    },
    {
      icon: Shield,
      title: "Complete Data Privacy",
      description: "API keys and candidate data encrypted locally on your device. We are technically incapable of accessing your data."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-brand-bgSecondary border-b border-brand-borderDefault scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Everything you need to hire confidently
          </h2>
          <p className="mt-4 text-base md:text-lg text-brand-textSecondary leading-relaxed">
            The hiring intelligence of an experienced HR team &mdash; at a fraction of the cost.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="bg-brand-bgCard rounded-xl border border-brand-borderDefault border-t-[3px] border-t-brand-accentPrimary p-6 text-left hover:border-brand-accentPrimary transition-all duration-300 group"
              >
                {/* Sky Blue Icon */}
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-sky-950/20 text-brand-accentPrimary mb-6 border border-brand-accentPrimary/20">
                  <Icon className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-sm md:text-base text-brand-textSecondary leading-relaxed">{feat.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
