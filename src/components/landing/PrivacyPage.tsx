// LEGAL DISCLAIMER
// These Terms and Privacy Policy 
// were drafted for HireGuard AI V1.
// They are not a substitute for 
// professional legal advice.
// Review with a qualified attorney 
// before scaling commercially.

import LegalPageHeader from './LegalPageHeader';


export default function PrivacyPage() {
  const sections = [
    { id: "section-1", num: "1", title: "Who We Are" },
    { id: "section-2", num: "2", title: "What We Collect" },
    { id: "section-3", num: "3", title: "How We Use Your Data" },
    { id: "section-4", num: "4", title: "Local Data Storage" },
    { id: "section-5", num: "5", title: "Third Party Services" },
    { id: "section-6", num: "6", title: "Data Retention" },
    { id: "section-7", num: "7", title: "Your Rights" },
    { id: "section-8", num: "8", title: "Security" },
    { id: "section-9", num: "9", title: "Children's Privacy" },
    { id: "section-10", num: "10", title: "International Users" },
    { id: "section-11", num: "11", title: "Cookies" },
    { id: "section-12", num: "12", title: "Changes to this Policy" },
    { id: "section-13", num: "13", title: "Contact" }
  ];

  return (
    <div className="bg-brand-bgPrimary min-h-screen text-brand-textPrimary">
      {/* Header */}
      <LegalPageHeader title="Privacy Policy" lastUpdated="July 2026" />

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

          {/* Core Content Column */}
          <main className="col-span-1 lg:col-span-9 max-w-3xl text-left space-y-10">
            
            {/* Introduction Box */}
            <div className="bg-brand-bgSecondary border-l-[3px] border-l-brand-accentPrimary rounded-xl p-6 mb-10 shadow-md">
              <p className="text-sm text-white font-medium leading-relaxed">
                HireGuard AI is built on a zero-knowledge architecture. We are technically incapable of accessing your candidate data, API keys, or hiring reports &mdash; not by policy, but by design. This Privacy Policy explains exactly what we do and do not collect.
              </p>
            </div>

            {/* Section 1 */}
            <section id="section-1" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                1. Who We Are
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-4">
                <p>
                  HireGuard AI is an AI-powered hiring assistance tool built for small businesses and founders hiring without a dedicated HR team.
                </p>
                <p>
                  Contact: <a href="mailto:contact@hireguard.online" className="text-[#0ea5e9] hover:underline transition-colors duration-200">contact@hireguard.online</a><br />
                  Website: hireguard.online
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                2. What We Collect
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">2.1 Information You Provide:</h3>
                  <p>We collect only:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Email address &mdash; for purchase verification and account access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Payment confirmation &mdash; processed entirely by PayPal. We never see or store your card details.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">2.2 What We DO NOT Collect:</h3>
                  <p>We never collect:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Candidate resumes or documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Candidate personal information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>API keys of any kind</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Hiring reports or analysis results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Candidate names or contact details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Audio or video recordings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Biometric data of any kind</span>
                    </li>
                  </ul>
                  <p className="mt-4 font-medium text-white">
                    All of the above are stored locally on your device only and are never transmitted to HireGuard AI servers.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">2.3 Automatically Collected Data:</h3>
                  <p>We may collect basic analytics:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Pages visited on hireguard.online</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Browser type (not fingerprinting)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Country-level location only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Referral source (how you found us)</span>
                    </li>
                  </ul>
                  <p className="mt-2">
                    This data is aggregated and never linked to individual users.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                3. How We Use Your Data
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-4">
                <p>We use your email address only for:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Verifying your purchase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Sending your app access link</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Responding to support requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Notifying you of significant product updates</span>
                  </li>
                </ul>
                <p>We do not:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Sell your data to any third party</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Share your data with advertisers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Use your data for AI training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Send unsolicited marketing emails</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                4. Local Data Storage
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-6">
                <p className="font-semibold text-white">This section is critical to understand:</p>
                
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">4.1 What Stays On Your Device:</h3>
                  <p>
                    The following data is stored exclusively in your browser's local storage &mdash; encrypted with AES-256 &mdash; and never transmitted to HireGuard AI:
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Your AI provider API keys</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Candidate resumes and documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Hiring analysis reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Candidate names and details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Job role configurations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>All project data and history</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">4.2 Encryption:</h3>
                  <p>
                    All locally stored sensitive data is encrypted using AES-256 via CryptoJS before being written to local storage. The encryption key is derived from your device &mdash; HireGuard AI never holds it.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">4.3 Your Responsibility:</h3>
                  <p>You are responsible for:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Backing up your local data using the built-in export feature</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Protecting access to your device</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Understanding that clearing browser cache permanently deletes all local HireGuard AI data</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">4.4 Data Export:</h3>
                  <p>
                    HireGuard AI provides a built-in encrypted backup feature. You can export all your data as an encrypted JSON file and restore it on any browser or device.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                5. Third Party Services
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-4">
                <p>HireGuard AI uses these services:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Service 1 */}
                  <div className="bg-brand-bgSecondary border border-brand-borderDefault rounded-xl p-4 space-y-2">
                    <h4 className="font-bold text-white text-sm">PayPal (Payment)</h4>
                    <p className="text-xs text-brand-textSecondary">
                      <strong>Purpose:</strong> Processes your $349 payment
                    </p>
                    <p className="text-xs text-brand-textSecondary">
                      <strong>Data shared:</strong> Email, payment amount
                    </p>
                    <p className="text-xs text-brand-textSecondary">
                      <strong>Their policy:</strong> <a href="https://www.paypal.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-accentPrimary hover:underline">paypal.com/privacy</a>
                    </p>
                    <p className="text-xs text-brand-textMuted italic">
                      We receive: Order confirmation only
                    </p>
                  </div>

                  {/* Service 2 */}
                  <div className="bg-brand-bgSecondary border border-brand-borderDefault rounded-xl p-4 space-y-2">
                    <h4 className="font-bold text-white text-sm">Firebase/Supabase (Auth)</h4>
                    <p className="text-xs text-brand-textSecondary">
                      <strong>Purpose:</strong> Stores email + payment status
                    </p>
                    <p className="text-xs text-brand-textSecondary">
                      <strong>Data stored:</strong> Email, payment status only
                    </p>
                    <p className="text-xs text-brand-textSecondary">
                      <strong>Security:</strong> Encrypted at rest + in transit
                    </p>
                    <p className="text-xs text-brand-success font-semibold">
                      Certified: SOC 2 Type 2
                    </p>
                  </div>

                  {/* Service 3 */}
                  <div className="bg-brand-bgSecondary border border-brand-borderDefault rounded-xl p-4 space-y-2">
                    <h4 className="font-bold text-white text-sm">AI Providers (Your Keys)</h4>
                    <p className="text-xs text-brand-textSecondary">
                      <strong>Providers:</strong> Google Gemini, OpenAI, Anthropic Claude
                    </p>
                    <p className="text-xs text-brand-textSecondary">
                      <strong>Important:</strong> You interact with these directly via your own API key. HireGuard AI has zero visibility.
                    </p>
                    <p className="text-xs text-brand-textMuted italic">
                      Their policies: Each provider's own Privacy Policy applies.
                    </p>
                  </div>

                  {/* Service 4 */}
                  <div className="bg-brand-bgSecondary border border-brand-borderDefault rounded-xl p-4 space-y-2">
                    <h4 className="font-bold text-white text-sm">Vercel (Hosting)</h4>
                    <p className="text-xs text-brand-textSecondary">
                      <strong>Purpose:</strong> Hosts the HireGuard AI web application
                    </p>
                    <p className="text-xs text-brand-textSecondary">
                      <strong>Data:</strong> Standard server access logs
                    </p>
                    <p className="text-xs text-brand-textSecondary">
                      <strong>Their policy:</strong> <a href="https://vercel.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-accentPrimary hover:underline">vercel.com/privacy</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                6. Data Retention
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-4">
                <p>
                  <strong>Email and payment status:</strong><br />
                  Retained while your account is active. Deleted on request within 30 days.
                </p>
                <p>
                  <strong>Local data (candidates, API keys):</strong><br />
                  Stored on your device until you delete it. HireGuard AI has no access to or copies of this data.
                </p>
                <p>
                  <strong>Analytics data:</strong><br />
                  Aggregated only. Not linked to individual users. Retained for 12 months maximum.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                7. Your Rights
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-4">
                <p>You have the right to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span><strong>Access</strong> &mdash; Request a copy of personal data we hold about you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span><strong>Correction</strong> &mdash; Request correction of inaccurate personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span><strong>Deletion</strong> &mdash; Request deletion of your account and associated data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span><strong>Portability</strong> &mdash; Export your local data using the built-in feature</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span><strong>Objection</strong> &mdash; Object to processing of your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span><strong>Withdrawal</strong> &mdash; Withdraw consent at any time</span>
                  </li>
                </ul>
                <p className="mt-2">
                  To exercise any of these rights:<br />
                  Email: <a href="mailto:contact@hireguard.online" className="text-[#0ea5e9] hover:underline transition-colors duration-200">contact@hireguard.online</a><br />
                  Response time: Within 30 days
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                8. Security
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">8.1 Local Data Security:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>AES-256 encryption for all sensitive local data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Encryption key derived from device &mdash; never stored by us</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Auto-lock after inactivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Password protection for sensitive settings</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">8.2 Account Security:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Email authentication only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>Passwords hashed &mdash; never stored in plain text</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>HTTPS enforced on all connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                      <span>No sensitive data stored server-side</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-2">8.3 Honest Limitations:</h3>
                  <p>
                    We cannot guarantee absolute security of any internet-based service. If you clear your browser cache, locally stored data is permanently deleted. We strongly recommend using the encrypted backup feature.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                9. Children's Privacy
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed">
                <p>
                  HireGuard AI is not intended for users under 18 years of age. We do not knowingly collect personal data from minors. If you believe a minor has provided data, contact <a href="mailto:contact@hireguard.online" className="text-[#0ea5e9] hover:underline transition-colors duration-200">contact@hireguard.online</a> immediately.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                10. International Users
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-4">
                <p>
                  HireGuard AI is primarily designed for users in the United States and Canada. If you access from other regions, your data may be subject to different privacy laws.
                </p>
                <p>
                  <strong>US Users:</strong> We comply with applicable US federal and state privacy laws.
                </p>
                <p>
                  <strong>Canadian Users:</strong> We comply with PIPEDA (Personal Information Protection and Electronic Documents Act).
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                11. Cookies
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed space-y-4">
                <p>HireGuard AI uses minimal cookies:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>Essential cookies only &mdash; required for authentication and security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>No advertising or tracking cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accentPrimary font-bold mt-0.5">&bull;</span>
                    <span>No third-party marketing cookies</span>
                  </li>
                </ul>
                <p>
                  You can disable cookies in your browser but this may affect authentication functionality.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-brand-accentPrimary pb-2 border-b border-brand-borderDefault mb-4">
                12. Changes to this Policy
              </h2>
              <div className="text-sm text-brand-textSecondary leading-relaxed">
                <p>
                  We may update this Privacy Policy periodically. We will notify you of significant changes via email at least 14 days before changes take effect. Continued use after changes constitutes acceptance.
                </p>
                <p className="mt-2 font-mono text-xs">
                  Current version: July 2026
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
                  For privacy questions or to exercise your rights:
                </p>
                <p>
                  Email: <a href="mailto:contact@hireguard.online" className="text-[#0ea5e9] hover:underline transition-colors duration-200">contact@hireguard.online</a><br />
                  Subject line: &quot;Privacy Request &mdash; [Your Request Type]&quot;<br />
                  Response time: Within 30 days
                </p>
              </div>
            </section>

          </main>

        </div>
      </div>
    </div>
  );
}
