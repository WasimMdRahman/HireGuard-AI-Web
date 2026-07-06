import { useState, useEffect } from 'react';
import { Mail, MessageSquare, X, Check, ArrowRight, ThumbsUp, ThumbsDown, Copy } from 'lucide-react';

interface GuideStep {
  type: 'step' | 'text' | 'warning' | 'tip' | 'checkmark-list' | 'code' | 'heading';
  title?: string;
  text?: string;
  items?: string[];
  code?: string;
  stepNumber?: number;
}

interface GuideContent {
  introduction?: string;
  steps: GuideStep[];
  costPerAnalysis?: string;
  freeTier?: string;
}

interface Guide {
  id: number;
  title: string;
  description: string;
  category: 'API Keys' | 'Resume Upload' | 'Getting Started';
  icon: string;
  badge?: string;
  badgeColor?: string;
  content: GuideContent;
  readTime: string;
}

export default function Guides() {
  const [activeTab, setActiveTab] = useState<'All' | 'API Keys' | 'Resume Upload' | 'Getting Started'>('All');
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [feedbackState, setFeedbackState] = useState<'none' | 'helpful' | 'unhelpful'>('none');

  // Handle Escape key to close modal
  useEffect(() => {
    if (!selectedGuide) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedGuide(null);
        setFeedbackState('none');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGuide]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const guides: Guide[] = [
    {
      id: 1,
      category: 'API Keys',
      icon: '🔑',
      title: 'Get Your Google Gemini API Key',
      description: 'Generate a free Gemini API key from Google AI Studio. Most cost-effective option — recommended for new users.',
      badge: 'Recommended',
      badgeColor: 'text-[#22c55e]',
      readTime: '2 min read',
      content: {
        introduction: 'Gemini 2.5 Flash is the most cost-effective AI provider for HireGuard AI. Each resume analysis costs approximately $0.01-0.03.',
        steps: [
          {
            type: 'heading',
            title: 'Step 1 — Go to Google AI Studio',
          },
          {
            type: 'text',
            text: 'Visit Google AI Studio and sign in with your Google account.',
          },
          {
            type: 'code',
            code: 'aistudio.google.com',
          },
          {
            type: 'heading',
            title: 'Step 2 — Create API Key',
          },
          {
            type: 'text',
            text: 'Click "Get API Key" in the left sidebar. Then click "Create API key" and select "Create API key in new project". Your API key will be generated instantly.',
          },
          {
            type: 'heading',
            title: 'Step 3 — Copy Your API Key',
          },
          {
            type: 'text',
            text: 'Click the copy icon next to your API key. It will look like a long string of letters starting with "AIzaSy". Keep this safe — treat it like a password.',
          },
          {
            type: 'heading',
            title: 'Step 4 — Add to HireGuard AI',
          },
          {
            type: 'text',
            text: 'Open HireGuard AI, go to Settings (gear icon), click the "APIs" tab, select "Google Gemini", paste your API key, and click "Test Connection". A green checkmark means you are ready to scan.',
          },
          {
            type: 'warning',
            text: 'Never share your API key with anyone. HireGuard AI stores it encrypted on your local device only.',
          },
          {
            type: 'tip',
            text: 'Estimated cost per analysis: $0.01-0.03. Free tier available: Yes (rate-limited).',
          },
        ],
      },
    },
    {
      id: 2,
      category: 'API Keys',
      icon: '🤖',
      title: 'Get Your OpenAI API Key',
      description: 'Generate an OpenAI API key for GPT-4o. Most widely used AI provider with excellent accuracy.',
      badge: 'Popular',
      badgeColor: 'text-[#0ea5e9]',
      readTime: '2 min read',
      content: {
        introduction: 'GPT-4o provides excellent resume analysis accuracy. Each analysis costs approximately $0.02-0.05.',
        steps: [
          {
            type: 'heading',
            title: 'Step 1 — Go to OpenAI Platform',
          },
          {
            type: 'text',
            text: 'Visit the OpenAI Platform and sign in or create a free account.',
          },
          {
            type: 'code',
            code: 'platform.openai.com',
          },
          {
            type: 'heading',
            title: 'Step 2 — Add Billing Credits',
          },
          {
            type: 'text',
            text: 'Click your profile icon in the top right, go to "Billing", add a payment method, and add a minimum of $5 credit to start. This covers approximately 100-250 resume analyses.',
          },
          {
            type: 'heading',
            title: 'Step 3 — Create API Key',
          },
          {
            type: 'text',
            text: 'Navigate to the API keys page: click "Create new secret key", name it "HireGuard AI", and click "Create secret key".',
          },
          {
            type: 'code',
            code: 'platform.openai.com/api-keys',
          },
          {
            type: 'warning',
            text: 'IMPORTANT: Copy the key immediately — you cannot view it again after closing the OpenAI creation window. Store it securely.',
          },
          {
            type: 'heading',
            title: 'Step 4 — Add to HireGuard AI',
          },
          {
            type: 'text',
            text: 'Open HireGuard AI, go to Settings → APIs tab, select "OpenAI GPT-4o", paste your key, and click "Test Connection" to unlock the scanner.',
          },
          {
            type: 'tip',
            text: 'Estimated cost per analysis: $0.02-0.05. Free tier available: No (requires pre-paid credits).',
          },
        ],
      },
    },
    {
      id: 3,
      category: 'API Keys',
      icon: '⚡',
      title: 'Get Your Anthropic Claude API Key',
      description: 'Generate an Anthropic API key for Claude 3.5 Sonnet. Best for detailed nuanced resume analysis.',
      badge: 'Advanced',
      badgeColor: 'text-[#f97316]',
      readTime: '2 min read',
      content: {
        introduction: 'Claude 3.5 Sonnet provides the most nuanced and detailed resume analysis. Best for complex hiring scenarios. Each analysis costs approximately $0.03-0.06.',
        steps: [
          {
            type: 'heading',
            title: 'Step 1 — Go to Anthropic Console',
          },
          {
            type: 'text',
            text: 'Visit the Anthropic Console page and sign in or create an account.',
          },
          {
            type: 'code',
            code: 'console.anthropic.com',
          },
          {
            type: 'heading',
            title: 'Step 2 — Add Credits',
          },
          {
            type: 'text',
            text: 'Navigate to "Plans & Billing" and add a minimum of $5 credit to activate your key (covers 80-160 analyses).',
          },
          {
            type: 'heading',
            title: 'Step 3 — Create API Key',
          },
          {
            type: 'text',
            text: 'Go to "API Keys" in the left sidebar, click "Create Key", name it "HireGuard AI", and copy the key immediately (starts with "sk-ant-").',
          },
          {
            type: 'heading',
            title: 'Step 4 — Add to HireGuard AI',
          },
          {
            type: 'text',
            text: 'Open HireGuard AI, go to Settings → APIs, select "Anthropic Claude", paste the key, and click "Test Connection".',
          },
          {
            type: 'warning',
            text: 'Keep your API key private. Never expose it in public code or share it with others.',
          },
          {
            type: 'tip',
            text: 'Estimated cost per analysis: $0.03-0.06. Free tier available: Limited trial only.',
          },
        ],
      },
    },
    {
      id: 4,
      category: 'Resume Upload',
      icon: '📄',
      title: 'How to Upload a Single Resume',
      description: 'Analyze one candidate at a time. Perfect for evaluating your top candidates in detail.',
      readTime: '3 min read',
      content: {
        introduction: 'Use single resume analysis when you want a detailed, focused report on one specific candidate.',
        steps: [
          {
            type: 'heading',
            title: 'Step 1 — Select Your Job Role',
          },
          {
            type: 'text',
            text: 'Open the HireGuard AI dashboard, click "Launch New Hiring Project", and search for your job role from 500+ templates. Or click "Add New Job Role" to paste your own description.',
          },
          {
            type: 'heading',
            title: 'Step 2 — Click "Analyze Candidate"',
          },
          {
            type: 'text',
            text: 'Inside your active job role project page, click the blue "Analyze Candidate" button in the top right corner.',
          },
          {
            type: 'heading',
            title: 'Step 3 — Upload Resume File',
          },
          {
            type: 'text',
            text: 'Click "Choose File" and select the candidate\'s resume.',
          },
          {
            type: 'checkmark-list',
            items: [
              'Supported formats: PDF or DOCX only',
              'Maximum file size: 10MB',
              'Make sure the resume is in English',
            ],
          },
          {
            type: 'heading',
            title: 'Step 4 — Review and Submit',
          },
          {
            type: 'text',
            text: 'Confirm the target requirements are correct, click "Launch AI Risk Scanner", and wait 15-30 seconds for the AI to extract and analyze the data.',
          },
          {
            type: 'heading',
            title: 'Step 5 — View Your Report',
          },
          {
            type: 'text',
            text: 'The candidate match score appears. Review risk flags by severity, read suggested interview questions, and click download/export if needed.',
          },
          {
            type: 'tip',
            text: 'For best results: Use PDF format when possible, ensure resume text is selectable (not a scanned image), and supply a detailed job description.',
          },
        ],
      },
    },
    {
      id: 5,
      category: 'Resume Upload',
      icon: '📚',
      title: 'How to Upload Multiple Resumes',
      description: 'Analyze up to 20 resumes at once. Screen your entire applicant pool in one go and compare candidates by score.',
      badge: 'Time Saver',
      badgeColor: 'text-[#0ea5e9]',
      readTime: '3 min read',
      content: {
        introduction: 'Use multiple resume analysis when you have several applicants for one role and want to rank and compare them quickly.',
        steps: [
          {
            type: 'heading',
            title: 'Step 1 — Open Your Job Role Project',
          },
          {
            type: 'text',
            text: 'From the main dashboard, select your job role or click to create a new one.',
          },
          {
            type: 'heading',
            title: 'Step 2 — Click "Multiple Analysis"',
          },
          {
            type: 'text',
            text: 'Click the "Multiple Analysis" button in the top right. This redirects you to the bulk scanner page.',
          },
          {
            type: 'heading',
            title: 'Step 3 — Upload Multiple Resumes',
          },
          {
            type: 'text',
            text: 'Click "Choose Files" and select up to 20 files from your device.',
          },
          {
            type: 'checkmark-list',
            items: [
              'Supported formats: PDF or DOCX',
              'All resumes analyzed against the same job description',
              'HireGuard AI automatically extracts candidate names from each resume',
            ],
          },
          {
            type: 'heading',
            title: 'Step 4 — Add Job Description',
          },
          {
            type: 'text',
            text: 'Paste your requirements text area. It auto-fills if you are inside an existing job role template.',
          },
          {
            type: 'heading',
            title: 'Step 5 — Launch Analysis',
          },
          {
            type: 'text',
            text: 'Click "Launch AI Risk Scanner". Resumes will scan sequentially. Each resume takes approximately 20-30 seconds to complete.',
          },
          {
            type: 'heading',
            title: 'Step 6 — Compare Candidates',
          },
          {
            type: 'text',
            text: 'All candidates will appear in a list ranked by match score. Click "Show Report" on any candidate to inspect details, or use "Sort by Score" to find the top match.',
          },
          {
            type: 'tip',
            text: 'Pro tips: Name your files clearly (e.g. John_Smith_CV.pdf) for easy reference, analyze candidates against identical requirements for fair comparisons, and sort by score to find the strongest match instantly.',
          },
        ],
      },
    },
    {
      id: 6,
      category: 'Getting Started',
      icon: '📥',
      title: 'How to Export Candidate Reports as PDF',
      description: 'Download professional PDF reports for each candidate to share with your team or keep on file.',
      readTime: '2 min read',
      content: {
        introduction: 'PDF reports are perfect for sharing with co-founders or managers, keeping candidate records on file, preparing for interviews, and documenting hiring decisions.',
        steps: [
          {
            type: 'heading',
            title: 'Step 1 — Open Candidate Report',
          },
          {
            type: 'text',
            text: 'From your job role project dashboard, locate the analyzed candidate and click "Show Report".',
          },
          {
            type: 'heading',
            title: 'Step 2 — Review the Report',
          },
          {
            type: 'text',
            text: 'Verify the match score, risk flags, and interview questions. Adjust key scoring notes if needed.',
          },
          {
            type: 'heading',
            title: 'Step 3 — Export as PDF',
          },
          {
            type: 'text',
            text: 'Click the "Download Report" button at the top or bottom of the screen. The PDF will generate and download to your device automatically.',
          },
          {
            type: 'checkmark-list',
            items: [
              'Includes candidate match score, details, and branding header',
              'Lists all potential hiring risks categorized by severity badges',
              'Exposes evidence text pulled directly from the candidate\'s resume',
              'Includes recommended focus areas and interview questions',
              'Appends a professional disclaimer and confidential tag in the footer',
            ],
          },
          {
            type: 'tip',
            text: 'Tips: Print the PDF or open it on a second screen during interviews, share it with colleagues beforehand, and store copies in your hiring archives.',
          },
        ],
      },
    },
    {
      id: 7,
      category: 'Getting Started',
      icon: '💾',
      title: 'How to Backup and Restore Your Data',
      description: 'Export an encrypted backup of all your data and restore it on any browser or device.',
      readTime: '3 min read',
      content: {
        introduction: 'HireGuard AI stores all data locally in your browser. Clearing your browser cache or switching devices could lead to data loss. We strongly recommend backing up weekly.',
        steps: [
          {
            type: 'heading',
            title: 'How to Export Backup:',
          },
          {
            type: 'heading',
            title: 'Step 1 — Open Settings',
          },
          {
            type: 'text',
            text: 'Click the gear icon in the bottom left of your dashboard and click the "Security" tab.',
          },
          {
            type: 'heading',
            title: 'Step 2 — Export Backup',
          },
          {
            type: 'text',
            text: 'Locate the "Backup & Recovery" block, click "Export Data", and save the encrypted JSON file (named hireguardai_backup_[date].json). Store this safely on Google Drive, Dropbox, or a USB drive.',
          },
          {
            type: 'heading',
            title: 'How to Restore Backup:',
          },
          {
            type: 'heading',
            title: 'Step 1 — Open HireGuard AI on new device',
          },
          {
            type: 'text',
            text: 'Open the website link on your new browser or computer. The onboarding welcome screen will appear.',
          },
          {
            type: 'heading',
            title: 'Step 2 — Import Backup',
          },
          {
            type: 'text',
            text: 'Click "Import Backup" on the welcome screen, select your backup JSON file, enter your security password to decrypt, and your workspace will restore instantly.',
          },
          {
            type: 'warning',
            text: 'Your backup file is fully encrypted. Without your password, it cannot be opened. Never share your backup file with anyone.',
          },
        ],
      },
    },
    {
      id: 8,
      category: 'Getting Started',
      icon: '🛡️',
      title: 'Understanding Risk Levels and Scores',
      description: 'Learn what candidate match scores and risk severity levels mean and how to use them in your hiring decisions.',
      readTime: '3 min read',
      content: {
        introduction: 'The match score and risk flags help focus your evaluation process on critical discrepancies, helping you hire smarter.',
        steps: [
          {
            type: 'heading',
            title: 'Match Scores Explained',
          },
          {
            type: 'checkmark-list',
            items: [
              'Strong Match (80-100% / Green): Candidate skills closely match requirements. Proceed with confidence while verifying key claims.',
              'Good Match (60-79% / Blue): Solid alignment with minor gaps. Use the generated questions to probe these areas in the interview.',
              'Moderate Match (40-59% / Orange): Notable gaps. Requires thorough screening to evaluate capabilities.',
              'Low Match (0-39% / Red): Significant mismatch with requirements. Proceed with caution.',
            ],
          },
          {
            type: 'heading',
            title: 'Risk Levels Explained',
          },
          {
            type: 'checkmark-list',
            items: [
              'HIGH Risk (Red badge): Major gaps, missing core required skills, or timeline contradictions. Must be addressed during screening.',
              'MEDIUM Risk (Orange badge): Vague responsibilities, skills listed without context, or leadership claims lacking scope. Investigating is advised.',
              'LOW Risk (Blue badge): Minor details, timeline adjustments, or general list formatting. Address optionally.',
            ],
          },
          {
            type: 'warning',
            text: 'IMPORTANT REMINDER: HireGuard AI provides guidance only. All findings require human verification. Never make hiring decisions based solely on AI scores or risk flags. The tool assists your judgment — it does not replace it.',
          },
        ],
      },
    },
  ];

  const filteredGuides = activeTab === 'All' 
    ? guides 
    : guides.filter((g) => g.category === activeTab);

  const renderStepContent = (step: GuideStep, index: number) => {
    switch (step.type) {
      case 'heading':
        return (
          <h4 key={index} className="text-white font-medium text-base mt-6 mb-2">
            {step.title}
          </h4>
        );
      case 'text':
        return (
          <p key={index} className="text-[#a3a3a3] text-sm leading-relaxed mb-4">
            {step.text}
          </p>
        );
      case 'code':
        return (
          <div key={index} className="flex items-center justify-between bg-[#262626] border border-[#333333] rounded-lg px-3 py-2 font-mono text-sm text-[#38bdf8] mb-4">
            <span>{step.code}</span>
            <button
              onClick={() => handleCopy(`code-${index}`, step.code || '')}
              className="text-[#737373] hover:text-white transition-colors"
              title="Copy link"
              type="button"
            >
              {copiedId === `code-${index}` ? (
                <span className="text-xs text-[#22c55e]">Copied!</span>
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        );
      case 'warning':
        return (
          <div key={index} className="bg-red-500/10 border-l-3 border-[#ef4444] rounded-r-lg p-4 text-[#fca5a5] text-sm mb-4">
            {step.text}
          </div>
        );
      case 'tip':
        return (
          <div key={index} className="bg-green-500/10 border-l-3 border-[#22c55e] rounded-r-lg p-4 text-[#86efac] text-sm mb-4">
            {step.text}
          </div>
        );
      case 'checkmark-list':
        return (
          <ul key={index} className="space-y-2 mb-4">
            {step.items?.map((item, itemIdx) => (
              <li key={itemIdx} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5" />
                <span className="text-[#a3a3a3] text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Guides Main Grid Section */}
      <section id="guides" className="py-20 md:py-28 bg-[#111111] border-b border-brand-borderDefault scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
            <span className="inline-block bg-[#262626] border border-[#333333] text-[#0ea5e9] rounded-full px-4 py-1.5 text-xs font-semibold mb-4">
              📚 Setup Guides
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Everything you need to get started
            </h2>
            <p className="text-base md:text-xl text-[#a3a3a3] leading-relaxed max-w-[600px]">
              Step-by-step guides to set up your API keys and get the most out of HireGuard AI. Takes less than 5 minutes.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-start md:justify-center gap-2 mb-12 overflow-x-auto pb-3 scrollbar-hide border-b border-[#333333] md:border-none">
            {(['All', 'API Keys', 'Resume Upload', 'Getting Started'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                type="button"
                className={`whitespace-nowrap text-sm font-semibold rounded-full px-5 py-2 transition-all ${
                  activeTab === tab
                    ? 'bg-[#0ea5e9] text-white'
                    : 'bg-[#1a1a1a] border border-[#333333] text-[#737373] hover:border-[#0ea5e9] hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All Guides' : tab}
              </button>
            ))}
          </div>

          {/* Guides Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide) => (
              <div
                key={guide.id}
                onClick={() => setSelectedGuide(guide)}
                className="bg-[#1a1a1a] border border-[#333333] rounded-xl p-6 hover:border-[#0ea5e9] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-4 select-none">{guide.icon}</div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs text-[#0ea5e9] font-bold uppercase tracking-wider">
                      {guide.category}
                    </span>
                    {guide.badge && (
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${guide.badgeColor}`}>
                        {guide.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed line-clamp-3 mb-6">
                    {guide.description}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[#0ea5e9] font-bold text-sm hover:underline mt-auto">
                  View Guide <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Help Support Section below Guides */}
      <section className="bg-[#1a1a1a] border-b border-[#333333] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Still need help?
          </h3>
          <p className="text-[#a3a3a3] text-sm mb-10 max-w-lg mx-auto leading-relaxed">
            Can't find what you're looking for? We respond to every email within 24 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            
            {/* Direct Email Support */}
            <div className="bg-[#111111] border border-[#333333] rounded-xl p-6 flex flex-col justify-between">
              <div>
                <Mail className="h-8 w-8 text-[#0ea5e9] mb-4" />
                <h4 className="text-white font-bold text-base mb-1">
                  Email Support
                </h4>
                <p className="text-sm text-[#a3a3a3] leading-relaxed mb-6">
                  Get personalized help from our team.
                </p>
              </div>
              <a
                href="mailto:contact@hireguard.online"
                className="text-[#0ea5e9] hover:underline font-bold text-sm mt-auto inline-block"
              >
                contact@hireguard.online
              </a>
            </div>

            {/* Request a Guide */}
            <div className="bg-[#111111] border border-[#333333] rounded-xl p-6 flex flex-col justify-between">
              <div>
                <MessageSquare className="h-8 w-8 text-[#0ea5e9] mb-4" />
                <h4 className="text-white font-bold text-base mb-1">
                  Request a Guide
                </h4>
                <p className="text-sm text-[#a3a3a3] leading-relaxed mb-6">
                  Need a guide that doesn't exist yet? Let us know.
                </p>
              </div>
              <a
                href="mailto:contact@hireguard.online?subject=Guide%20Request"
                className="text-[#0ea5e9] hover:underline font-bold text-sm mt-auto inline-flex items-center gap-1"
              >
                Request Guide <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Guide Details Modal */}
      {selectedGuide && (
        <div
          onClick={() => {
            setSelectedGuide(null);
            setFeedbackState('none');
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-0 md:p-4 overflow-y-auto animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[680px] bg-[#1a1a1a] border border-[#333333] rounded-none md:rounded-2xl p-6 md:p-8 text-left shadow-2xl overflow-y-auto max-h-screen md:max-h-[85vh]"
          >
            {/* Close button */}
            <button
              onClick={() => {
                setSelectedGuide(null);
                setFeedbackState('none');
              }}
              className="absolute top-4 right-4 text-[#737373] hover:text-white transition-colors"
              type="button"
              aria-label="Close guide"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 border-b border-[#333333] pb-4 pr-6">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="bg-[#262626] border border-[#333333] text-[#0ea5e9] rounded-md px-2.5 py-0.5 text-xs font-semibold">
                  {selectedGuide.category}
                </span>
                <span className="text-[#737373] text-sm">
                  ⏱ {selectedGuide.readTime}
                </span>
              </div>
              <h3 className="text-white font-bold text-2xl mt-1 leading-tight">
                {selectedGuide.title}
              </h3>
            </div>

            {/* Modal Content */}
            <div className="space-y-4">
              {selectedGuide.content.introduction && (
                <p className="text-[#a3a3a3] text-sm leading-relaxed mb-6 font-medium">
                  {selectedGuide.content.introduction}
                </p>
              )}
              {selectedGuide.content.steps.map((step, idx) => renderStepContent(step, idx))}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-[#333333] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Helpful feedback */}
              <div className="flex items-center gap-3">
                <span className="text-[#737373] text-sm font-medium">Was this helpful?</span>
                {feedbackState === 'none' ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setFeedbackState('helpful')}
                      className="p-1.5 rounded bg-[#262626] border border-[#333333] text-[#737373] hover:text-[#22c55e] hover:border-[#22c55e] transition-colors"
                      type="button"
                      aria-label="Thumbs up"
                    >
                      <ThumbsUp className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setFeedbackState('unhelpful')}
                      className="p-1.5 rounded bg-[#262626] border border-[#333333] text-[#737373] hover:text-[#ef4444] hover:border-[#ef4444] transition-colors"
                      type="button"
                      aria-label="Thumbs down"
                    >
                      <ThumbsDown className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <span className="text-[#22c55e] text-xs font-semibold">
                    {feedbackState === 'helpful' ? 'Thank you! 👍' : 'Thanks for your feedback! We will improve this guide.'}
                  </span>
                )}
              </div>

              {/* Directly email */}
              <div className="text-sm text-[#737373]">
                Need more help?{' '}
                <a
                  href="mailto:contact@hireguard.online"
                  className="text-[#0ea5e9] hover:underline font-bold"
                >
                  contact@hireguard.online
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
