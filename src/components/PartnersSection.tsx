import React from 'react';
import { PARTNERS } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

interface PartnersSectionProps {
  onOpenConsultation: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="gateways" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">
            Our FinTech Network
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00112c] tracking-tight leading-tight mb-3">
            Our Partnered Payment Gateways
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            We partner with trusted, licensed payment platforms so you get the best fit, priority onboarding, and lower merchant rates.
          </p>
        </div>

        {/* 4 Gateway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="p-6 sm:p-7 rounded-xl border border-neutral-200 bg-white hover:border-[#00112c] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-2xl font-black text-[#00112c] tracking-tight">
                    {partner.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    {partner.settlementSpeed}
                  </span>
                </div>

                <span className="inline-block text-xs font-bold text-orange-600 mb-3">
                  {partner.badge}
                </span>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-5">
                  {partner.description}
                </p>

                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2 font-bold">
                    Supported Payment Methods
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {partner.supportedMethods.map((method, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2.5 py-1 text-xs font-medium rounded bg-neutral-100 text-neutral-800"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={partner.referralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-3 text-xs font-bold text-white bg-[#00112c] hover:bg-neutral-800 rounded-md transition-colors text-center inline-flex items-center justify-center gap-1.5"
                >
                  <span>{partner.buttonLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
                </a>

                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto py-2.5 px-4 text-xs font-bold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors cursor-pointer"
                >
                  Ask Us to Compare
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Note */}
        <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 text-center text-xs text-neutral-600">
          Not sure which gateway fits your business?{' '}
          <button
            type="button"
            onClick={onOpenConsultation}
            className="text-orange-600 font-bold hover:underline cursor-pointer"
          >
            Request a 10-minute comparison call
          </button>
          {' '}or message our advisory desk on WhatsApp.
        </div>
      </div>
    </section>
  );
};
