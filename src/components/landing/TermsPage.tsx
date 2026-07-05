// LEGAL DISCLAIMER
// These Terms and Privacy Policy 
// were drafted for HireGuard AI V1.
// They are not a substitute for 
// professional legal advice.
// Review with a qualified attorney 
// before scaling commercially.

import LegalPageHeader from './LegalPageHeader';
import { CONTACT_EMAIL } from './constants';

export default function TermsPage() {
  const sections = [
    { id: "section-1", num: "1", title: "Acceptance of Terms" },
    { id: "section-2", num: "2", title: "Description of Service" },
    { id: "section-3", num: "3", title: "Purchase and License" },
    { id: "section-4", num: "4", title: "AI-Generated Content Disclaimer" },
    { id: "section-5", num: "5", title: "Prohibited Uses" },
    { id: "section-6", num: "6", title: "Bring Your Own API Key" },
    { id: "section-7", num: "7", title: "Payment and Refunds" },
    { id: "section-8", num: "8", title: "Intellectual Property" },
    { id: "section-9", num: "9", title: "Limitation of Liability" },
    { id: "section-10", num: "10", title: "Data and Privacy" },
    { id: "section-11", num: "11", title: "Modifications" },
    { id: "section-12", num: "12", title: "Governing Law" },
    { id: "section-13", num: "13", title: "Contact" }
  ];

  return (
    <div className="bg-brand-bgPrimary min-h-screen text-brand-textPrimary">
      {/* Header */}
      <LegalPageHeader title="Terms of Service" lastUpdated="July 2026" />

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Table of Contents (Sticky Sidebar for Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24 self-start bg-brand-bgSecondary border border-brand-borderDefault rounded-xl p-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4">
              Sections
            </h3>
            <nav className="space-y-2">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block text-xs font-semibold text-brand-textMuted hover:text-brand-accentPrimary transition-colors truncate"
                >
                  {sec.num}. {sec.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Core Terms Content Column */}
          <main className="col-span-1 lg:col-span-9 max-w-3xl text-left space-y-10">
            
            {/* Section 1 */}
            <section id="section-1" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                1. Acceptance of Terms
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-4">
                <p>
                  By accessing and using HireGuard AI (&quot;the Software&quot;, &quot;we&quot;, &quot;our&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not access or use the Software.
                </p>
                <p>
                  These Terms apply to all users of HireGuard AI including individuals and businesses purchasing access to the Software.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                2. Description of Service
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-4">
                <p>
                  HireGuard AI is an AI-powered hiring assistance tool that:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Analyzes candidate resumes against job descriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Identifies potential hiring risks and red flags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Generates candidate-specific interview questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Provides candidate match scores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Exports detailed hiring reports in PDF format</span>
                  </li>
                </ul>
                <p>
                  The Software is designed for use by businesses and individuals involved in hiring decisions who do not have a dedicated HR team.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                3. Purchase and License
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">3.1 One-Time Purchase</h3>
                  <p>
                    HireGuard AI is sold as a one-time purchase product. Upon successful payment you receive a perpetual, non-exclusive, non-transferable license to use the Software.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">3.2 License Restrictions</h3>
                  <p>
                    This license is granted to a single user and a single organization. You may not:
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Share access with other individuals outside your organization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Resell or sublicense the Software</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Transfer the license to another person or organization without written permission from HireGuard AI</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">3.3 Early Access Pricing</h3>
                  <p>
                    The current price of $349 is an Early Access price. HireGuard AI reserves the right to increase pricing at full launch. Early Access purchasers retain lifetime access to V1 at no additional cost.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">3.4 Version Updates</h3>
                  <p>
                    Bug fixes and minor updates for V1 are included at no additional cost. Major version releases (V2 and beyond) may be offered as separate purchases with new pricing.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                4. AI-Generated Content Disclaimer
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">4.1 Guidance Only</h3>
                  <p>
                    All outputs generated by HireGuard AI including match scores, risk flags, and interview questions are for guidance purposes only.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">4.2 No Hiring Decisions</h3>
                  <p>
                    HireGuard AI does not make hiring decisions. All hiring decisions are solely the responsibility of the user. The Software is a tool to assist human judgment &mdash; not replace it.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">4.3 Human Verification Required</h3>
                  <p>
                    All AI-generated findings require human verification during the interview process. Do not use HireGuard AI output as the sole basis for any hiring decision.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">4.4 No Accuracy Guarantee</h3>
                  <p>
                    HireGuard AI makes no guarantee of the accuracy, completeness, or reliability of any AI-generated output. Results may vary based on resume quality, job description clarity, and AI provider performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">4.5 Bias Disclaimer</h3>
                  <p>
                    HireGuard AI analyzes resume content only. The Software does not consider and users must not use outputs to discriminate based on race, gender, age, religion, nationality, disability, or any other protected characteristic.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                5. Prohibited Uses
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-4">
                <p>
                  You agree not to use HireGuard AI to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Discriminate against candidates based on any protected characteristic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Make fully automated hiring decisions without human oversight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Process candidate data in violation of applicable privacy laws including GDPR, CCPA, or PIPEDA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Reverse engineer, decompile, or attempt to extract source code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Resell, sublicense, or distribute the Software to third parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Use the Software for any unlawful purpose under US, Canadian, or applicable local law</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Attempt to circumvent any security or access control features</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                6. Bring Your Own API Key
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">6.1 User Responsibility</h3>
                  <p>
                    HireGuard AI requires users to provide their own API keys from third-party AI providers (Google Gemini, OpenAI GPT-4o, Anthropic Claude).
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">6.2 API Key Security</h3>
                  <p>
                    Users are solely responsible for obtaining, managing, and securing their own API keys. HireGuard AI does not store, transmit, or have any access to user API keys. Keys are stored locally on the user's device only, encrypted with AES-256.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">6.3 API Usage Costs</h3>
                  <p>
                    Users are solely responsible for all costs incurred through their own API key usage. HireGuard AI has no visibility into or control over third-party API pricing.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">6.4 Third-Party Terms</h3>
                  <p>
                    Use of third-party AI providers is subject to each provider's own Terms of Service and Privacy Policy. HireGuard AI is not responsible for third-party provider terms, outages, or pricing changes.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                7. Payment and Refunds
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">7.1 Payment Processing</h3>
                  <p>
                    Payments are processed securely via PayPal. HireGuard AI does not store or have access to your payment card details.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">7.2 Pricing</h3>
                  <p>
                    Current Early Access price: $349 (one-time). All prices are in US Dollars (USD).
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">7.3 Refund Policy</h3>
                  <p>
                    HireGuard AI offers a 48-hour satisfaction guarantee from the date and time of purchase.
                  </p>
                  <p className="mt-2">To request a refund:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Email <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-accentPrimary hover:underline">{CONTACT_EMAIL}</a> within 48 hours of purchase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Include your PayPal transaction ID</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Describe the issue experienced</span>
                    </li>
                  </ul>
                  <p className="mt-2">
                    Refunds are processed within 3-5 business days.
                  </p>
                  <p className="mt-2">
                    After 48 hours from purchase, all sales are final. HireGuard AI reserves the right to deny refund requests that show evidence of significant usage or abuse of the refund policy.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                8. Intellectual Property
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">8.1 HireGuard AI Ownership</h3>
                  <p>
                    HireGuard AI, including all associated branding, design, technology, and AI prompting systems, is the intellectual property of HireGuard AI and its developer.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">8.2 User Content</h3>
                  <p>
                    Candidate data, resumes, and reports processed through the Software remain the property of the user. HireGuard AI makes no claim over any content processed through the Software.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">8.3 Feedback</h3>
                  <p>
                    Any feedback or suggestions provided to HireGuard AI may be used to improve the Software without compensation to the provider.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                9. Limitation of Liability
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">9.1 As-Is Basis</h3>
                  <p>
                    HireGuard AI is provided &quot;as is&quot; without warranty of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">9.2 No Consequential Damages</h3>
                  <p>
                    To the maximum extent permitted by applicable law, HireGuard AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Use or inability to use the Software</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Any hiring decision made based on AI-generated outputs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Loss of data due to browser cache clearing or device failure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Third-party API provider outages or changes</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">9.3 Liability Cap</h3>
                  <p>
                    HireGuard AI's total cumulative liability shall not exceed the amount paid for the Software ($349).
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">9.4 Hiring Decision Liability</h3>
                  <p>
                    HireGuard AI is not responsible for any hiring decisions made based on AI-generated outputs. All hiring decisions are solely the user's responsibility.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                10. Data and Privacy
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-4">
                <p>
                  Your use of HireGuard AI is also governed by our Privacy Policy available at hireguard.online/privacy.
                </p>
                <p>Key data points:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>We store only your email address and payment status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>All candidate data stays on your device &mdash; encrypted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>We never access your API keys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Full details are outlined in our Privacy Policy</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                11. Modifications
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">11.1 Service Changes</h3>
                  <p>
                    HireGuard AI reserves the right to modify, update, or discontinue any aspect of the Software at any time with reasonable notice.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">11.2 Terms Changes</h3>
                  <p>
                    HireGuard AI may update these Terms periodically. Continued use after changes constitutes acceptance. Significant changes will be communicated via email.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                12. Governing Law
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed">
                <p>
                  These Terms shall be governed by applicable law. Any disputes arising from these Terms or use of HireGuard AI shall first be attempted to be resolved through good-faith negotiation between the parties.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                13. Contact
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-4">
                <p>
                  For questions regarding these Terms:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-accentPrimary hover:underline">{CONTACT_EMAIL}</a></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Website: hireguard.online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Response time: Within 2 business days</span>
                  </li>
                </ul>
              </div>
            </section>

          </main>

        </div>
      </div>
    </div>
  );
}
