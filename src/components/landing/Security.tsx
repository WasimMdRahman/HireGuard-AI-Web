import { Lock, Key, Server } from 'lucide-react';

export default function Security() {
  const securityPoints = [
    {
      icon: Lock,
      title: "AES-256 Encryption",
      description: "All candidate data and API keys encrypted and stored exclusively in your browser."
    },
    {
      icon: Key,
      title: "Bring Your Own API Key",
      description: "Connect Google Gemini, OpenAI, or Anthropic. We never see, store, or transmit your key."
    },
    {
      icon: Server,
      title: "Zero Server Storage",
      description: "Resumes and reports never touch our servers. Not by policy &mdash; by design."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a] text-white border-t border-brand-borderDefault">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Your data is yours. Always.
          </h2>
          <p className="mt-4 text-base md:text-lg text-brand-textSecondary leading-relaxed">
            Zero-knowledge architecture. We are technically incapable of accessing your candidate data &mdash; not by policy, by design.
          </p>
        </div>

        {/* Security Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div 
                key={idx}
                className="bg-brand-bgSecondary border border-brand-borderDefault border-l-[3px] border-l-brand-success rounded-xl p-6 text-left shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container in green */}
                  <div className="inline-flex items-center justify-center p-3 rounded-lg bg-green-950/20 text-brand-success mb-6 border border-brand-success/20">
                    <Icon className="h-6 w-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {point.title}
                  </h3>
                  <p 
                    className="text-sm md:text-base text-brand-textSecondary leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: point.description }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
