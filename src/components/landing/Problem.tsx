import { AlertTriangle, DollarSign, Clock } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Unverified Claims",
      description: "Candidates exaggerate skills and experience. Without an HR team these go undetected until it's too late."
    },
    {
      icon: DollarSign,
      title: "Expensive Mistakes",
      description: "The average bad hire costs $17,000 in lost time, rehiring costs, and reduced productivity."
    },
    {
      icon: Clock,
      title: "Generic Interviews",
      description: "Using the same questions for every candidate means missing the specific red flags in their background."
    }
  ];

  return (
    <section id="problem" className="py-20 md:py-28 bg-brand-bgPrimary border-b border-brand-borderDefault scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Hiring without HR is a gamble
        </h2>
        <p className="mt-4 text-base md:text-lg text-brand-textSecondary max-w-xl mx-auto leading-relaxed">
          Most founders make hiring decisions based on gut feeling. Here's what that costs.
        </p>

        {/* Problem Cards */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div 
                key={idx} 
                className="bg-brand-bgSecondary rounded-xl border border-brand-borderDefault border-t-[3px] border-t-brand-error p-6 text-left shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Icon with Red Accent */}
                  <div className="inline-flex items-center justify-center p-3 rounded-lg bg-red-950/20 text-brand-error mb-6 border border-brand-error/20">
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{prob.title}</h3>
                  <p className="text-sm md:text-base text-brand-textSecondary leading-relaxed">{prob.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
