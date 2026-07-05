import { Shield, ArrowRight } from 'lucide-react';
import { GOOGLE_FORM_URL } from './constants';

export default function ReportShowcase() {
  const highlights = [
    "Candidate match score with color-coded rating",
    "Risk flags by severity &mdash; High, Medium, Low",
    "Evidence pulled directly from their resume",
    "Candidate-specific interview questions &mdash; never generic"
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-bgSecondary border-b border-brand-borderDefault">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-bgCard border border-brand-borderDefault text-brand-accentLight font-semibold text-xs md:text-sm uppercase tracking-wider">
              Sample Output
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Professional reports you can share and file
            </h2>
            <p className="text-base md:text-lg text-brand-textSecondary leading-relaxed">
              Every analysis generates a clean PDF report with candidate details, risk assessment, and interview questions — ready to share with your co-founder or keep on record.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  {/* Arrow Icon in sky blue */}
                  <span className="mt-1.5 flex-shrink-0 text-brand-accentPrimary text-sm font-extrabold">&rarr;</span>
                  <span 
                    className="text-sm md:text-base text-brand-textSecondary font-medium"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>

            {/* Access CTA link */}
            <div className="pt-4">
              <a 
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-accentPrimary hover:text-brand-accentLight font-bold text-base hover:underline group"
              >
                Request Access &mdash; $349
                <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: PDF Preview Mockup */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-xl bg-brand-bgCard rounded-xl shadow-2xl border border-brand-borderDefault p-6 md:p-10 text-left relative">
              {/* Colored top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-accentPrimary"></div>
              
              {/* Report Title Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-brand-borderDefault pb-6 mb-6 gap-4">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-sky-950/20 rounded text-brand-accentPrimary">
                    <Shield className="h-4.5 w-4.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-extrabold text-brand-accentPrimary font-mono tracking-wider">HIREGUARD AI REPORT</span>
                </div>
                <div className="text-xs text-brand-textMuted font-mono">
                  DATE: 2026-07-05 &bull; ID: #EVAL-9042
                </div>
              </div>

              {/* Candidate Info Details */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 bg-brand-bgSecondary/60 p-4 rounded-lg border border-brand-borderDefault">
                <div>
                  <div className="text-[10px] text-brand-textMuted uppercase tracking-wider font-semibold">CANDIDATE</div>
                  <div className="text-xs font-bold text-white mt-0.5">Sarah Johnson</div>
                </div>
                <div>
                  <div className="text-[10px] text-brand-textMuted uppercase tracking-wider font-semibold">ROLE TEMPLATE</div>
                  <div className="text-xs font-bold text-white mt-0.5">Senior Dev</div>
                </div>
                <div>
                  <div className="text-[10px] text-brand-textMuted uppercase tracking-wider font-semibold">SCORE</div>
                  <div className="text-xs font-bold text-brand-success mt-0.5 flex items-center gap-1">
                    85% <span className="text-[10px] bg-green-950/20 px-1.5 py-0.5 rounded text-brand-success border border-brand-success/20">STRONG</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-brand-textMuted uppercase tracking-wider font-semibold">STATUS</div>
                  <div className="text-xs font-bold text-white mt-0.5">Completed</div>
                </div>
              </div>

              {/* Assessment Section */}
              <div className="space-y-4 mb-6">
                <div className="text-[11px] font-bold text-brand-textMuted uppercase tracking-wider border-b border-brand-borderDefault pb-1">
                  1. Severity Risk Analysis
                </div>
                
                <div className="bg-brand-bgSecondary border border-brand-borderDefault rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-extrabold bg-brand-error text-white px-2 py-0.5 rounded tracking-wide uppercase">
                      High Risk
                    </span>
                    <h4 className="text-xs font-bold text-white">Unverified Skill Claim (AWS/Cloud)</h4>
                  </div>
                  <p className="text-xs text-brand-textSecondary leading-relaxed">
                    <strong>Findings:</strong> Sarah lists 'Lead AWS Architect' at Alpha Corp, managing a $2M infrastructure stack. However, public employment records and descriptions only indicate general cloud operations assistance.
                  </p>
                </div>
              </div>

              {/* Interview Questions Section */}
              <div className="space-y-4 mb-8">
                <div className="text-[11px] font-bold text-brand-textMuted uppercase tracking-wider border-b border-brand-borderDefault pb-1">
                  2. Targeted Interview Guide
                </div>
                
                <div className="space-y-3">
                  <div className="border border-brand-borderDefault bg-brand-bgSecondary rounded-lg p-3.5 text-xs">
                    <p className="font-bold text-brand-accentLight mb-1">PROBE: Technical Depth & Scale</p>
                    <p className="text-brand-textSecondary leading-relaxed">
                      "Your resume mentions architecture leadership for AWS. Can you walk me through your migration planning process, detailing specific services used and the network architecture design?"
                    </p>
                  </div>
                  
                  <div className="border border-brand-borderDefault bg-brand-bgSecondary rounded-lg p-3.5 text-xs">
                    <p className="font-bold text-brand-accentLight mb-1">PROBE: Employment Timeline</p>
                    <p className="text-brand-textSecondary leading-relaxed">
                      "I noticed a gap between June 2024 and March 2025. Could you tell me about the consulting projects or courses you pursued during this period?"
                    </p>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-brand-bgSecondary border border-brand-borderDefault rounded p-3.5 text-[10px] text-brand-textMuted leading-relaxed">
                <strong>Disclaimer:</strong> HireGuard AI evaluation data is provided for hiring support only. All hiring decisions require human screening, references, and professional validation before extending offers.
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
