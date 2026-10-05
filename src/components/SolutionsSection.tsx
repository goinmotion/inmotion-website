import React from 'react';
import { SOLUTIONS } from '../data/content';
import { Check, ArrowRight, ShoppingCart, Smartphone, RefreshCw, Globe2 } from 'lucide-react';

interface SolutionsSectionProps {
  onOpenConsultation: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenConsultation }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'online':
        return <ShoppingCart className="w-5 h-5 text-orange-600" />;
      case 'terminal':
        return <Smartphone className="w-5 h-5 text-blue-600" />;
      case 'recurring':
        return <RefreshCw className="w-5 h-5 text-emerald-600" />;
      case 'crossborder':
        return <Globe2 className="w-5 h-5 text-purple-600" />;
      default:
        return <ShoppingCart className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <section id="solutions" className="py-20 bg-[#f7f9fc] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">
            Payment Solutions
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00112c] tracking-tight leading-tight mb-3">
            Payment Solutions at a Glance
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            Whether you sell online, in a retail store, or bill monthly retainers, we match you with the right gateway rails.
          </p>
        </div>

        {/* 4 Clean Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="p-6 sm:p-7 rounded-xl border border-neutral-200 bg-white hover:border-[#00112c] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                  {getIcon(sol.iconType)}
                </div>

                <h3 className="text-xl font-bold text-[#00112c] mb-1">
                  {sol.title}
                </h3>

                <p className="text-xs font-medium text-neutral-500 mb-4">
                  Best for: {sol.bestFor}
                </p>

                <ul className="space-y-2 mb-6 text-xs text-neutral-700">
                  {sol.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500">
                  Gateways: <strong className="text-neutral-900">{sol.partnerNames.join(', ')}</strong>
                </span>

                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="text-xs font-bold text-[#00112c] hover:text-orange-600 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
