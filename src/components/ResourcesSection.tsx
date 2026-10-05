import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ResourcesSectionProps {
  onOpenConsultation: () => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ onOpenConsultation }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [monthlyVolume, setMonthlyVolume] = useState<number>(50000);

  // 0.5% typical gateway rate savings on high volume + FX optimization
  const estimatedSavings = Math.round(monthlyVolume * 0.005);
  const annualSavings = estimatedSavings * 12;

  return (
    <section id="faq" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Calculator */}
        <div className="mb-20 rounded-xl border border-neutral-200 bg-[#f7f9fc] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 mb-6 border-b border-neutral-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 block mb-1">
                Fee Estimator
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#00112c] tracking-tight">
                See How Much You Could Save on Transaction Fees
              </h3>
            </div>

            <div className="text-left md:text-right">
              <span className="text-xs text-neutral-500 block">Est. Annual Fee Savings</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono tabular-nums">
                +${annualSavings.toLocaleString()} USD
              </span>
            </div>
          </div>

          <div className="space-y-4 max-w-xl">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-neutral-700">Estimated Monthly Processing Volume</span>
              <span className="text-[#00112c] font-mono text-sm">${monthlyVolume.toLocaleString()} USD</span>
            </div>
            <input
              type="range"
              min="10000"
              max="250000"
              step="5000"
              value={monthlyVolume}
              onChange={(e) => setMonthlyVolume(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
            />
            <div className="flex justify-between text-[11px] font-mono text-neutral-400">
              <span>$10,000/mo</span>
              <span>$100,000/mo</span>
              <span>$250,000+/mo</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-600">
              Processing over $50k/mo? We can help you negotiate custom volume rate tiers directly with gateway partners.
            </p>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="shrink-0 px-4 py-2 text-xs font-bold text-white bg-[#00112c] hover:bg-neutral-800 rounded-md transition-colors cursor-pointer"
            >
              Request Custom Rate Review
            </button>
          </div>
        </div>

        {/* 4 Clean FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">
              Common Questions
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-[#00112c] tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="rounded-lg border border-neutral-200 overflow-hidden bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-50 cursor-pointer"
                  >
                    <span className="text-sm font-bold text-neutral-900">
                      {faq.question}
                    </span>
                    <span className="text-neutral-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/50">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
