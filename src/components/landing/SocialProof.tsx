export default function SocialProof() {
  return (
    <section className="bg-brand-bgSecondary border-y border-brand-borderDefault py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-3 divide-x divide-brand-borderDefault max-w-4xl mx-auto">
          {/* Stat 1 */}
          <div className="px-4">
            <div className="text-2xl md:text-5xl font-extrabold text-brand-accentPrimary">500+</div>
            <div className="text-xs md:text-sm text-brand-textMuted mt-2 font-semibold uppercase tracking-wider">
              Job Role Templates
            </div>
          </div>
          {/* Stat 2 */}
          <div className="px-4">
            <div className="text-2xl md:text-5xl font-extrabold text-brand-accentPrimary">30s</div>
            <div className="text-xs md:text-sm text-brand-textMuted mt-2 font-semibold uppercase tracking-wider">
              Analysis Time
            </div>
          </div>
          {/* Stat 3 */}
          <div className="px-4">
            <div className="text-2xl md:text-5xl font-extrabold text-brand-highlight">
              $17K
            </div>
            <div className="text-xs md:text-sm text-brand-textMuted mt-2 font-semibold uppercase tracking-wider">
              Avg Bad Hire Cost
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
