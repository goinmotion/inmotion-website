import React from 'react';
import { HOW_IT_WORKS } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">
            Simple Process
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00112c] tracking-tight leading-tight mb-3">
            How It Works in 3 Steps
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            No endless sales pitches. We give you clear recommendations so you can start processing payments quickly.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {HOW_IT_WORKS.map((step) => (
            <div
              key={step.step}
              className="p-6 sm:p-7 rounded-xl border border-neutral-200 bg-[#f7f9fc] flex flex-col justify-between"
            >
              <div>
                <span className="w-9 h-9 rounded-full bg-[#00112c] text-white text-sm font-black flex items-center justify-center mb-6">
                  {step.step}
                </span>

                <h3 className="text-lg font-bold text-[#00112c] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Step Banner Action */}
        <div className="p-6 rounded-xl bg-[#00112c] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">
              Ready to find the ideal payment gateway?
            </h4>
            <p className="text-xs text-neutral-300 mt-0.5">
              Takes 5 minutes. No fees, no contracts, and zero obligation.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="shrink-0 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-md transition-all inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Start Step 1 Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
