import React from 'react';
import { WHY_US } from '../data/content';
import { CheckCircle2, ShieldCheck, Scale, Zap, DollarSign } from 'lucide-react';

interface WhySectionProps {
  onOpenConsultation: () => void;
}

export const WhySection: React.FC<WhySectionProps> = ({ onOpenConsultation }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Scale className="w-5 h-5 text-orange-600" />;
      case 1:
        return <DollarSign className="w-5 h-5 text-emerald-600" />;
      case 2:
        return <Zap className="w-5 h-5 text-blue-600" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-purple-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-[#f7f9fc] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">
            Why Inmotion
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00112c] tracking-tight leading-tight mb-3">
            Why Work With a Payment Gateway Advisor?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            Applying directly to gateways often means higher standard rates and slow email queues. We ensure you get the best deal and rapid support.
          </p>
        </div>

        {/* 4 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {WHY_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-neutral-200 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                  {getIcon(idx)}
                </div>

                <h3 className="text-base font-bold text-[#00112c] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Callout */}
        <div className="p-6 rounded-xl bg-white border border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
              Complete Transparency
            </span>
            <h4 className="text-lg font-bold text-[#00112c] mb-1">
              How does Inmotion work with payment gateways?
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We operate similarly to commercial insurance or mortgage brokers: payment gateways pay us an authorized partner referral allowance when you sign up and process transactions through them. There are no retainers or consulting invoices for your business, and you often secure lower rates than applying on your own.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="shrink-0 px-5 py-2.5 text-xs font-bold text-white bg-[#00112c] hover:bg-neutral-800 rounded-md transition-colors cursor-pointer"
          >
            Ask Us Anything
          </button>
        </div>
      </div>
    </section>
  );
};
