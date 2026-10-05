import React, { useState } from 'react';
import { ArrowRight, Check, MessageSquare, ShoppingCart, Smartphone, RefreshCw, Globe2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreGateways: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreGateways }) => {
  const [selectedNeed, setSelectedNeed] = useState<number>(0);

  const needs = [
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      label: 'Website Checkout',
      bestMatch: 'HitPay & CommercePay',
      tagline: 'Accept Visa, Mastercard, FPX & eWallets on Shopify, WooCommerce, or custom sites.',
      perk: 'Zero setup fees · Next-day bank settlement',
    },
    {
      id: 'terminal',
      icon: Smartphone,
      label: 'In-Store Card Machine',
      bestMatch: 'HitPay Smart POS',
      tagline: 'Wireless 4G & Wi-Fi Android card terminals for retail stores, pop-ups, and dining.',
      perk: 'No monthly machine rental · Tap to pay PayWave',
    },
    {
      id: 'subscription',
      icon: RefreshCw,
      label: 'Recurring Billing',
      bestMatch: 'Curlec by Razorpay',
      tagline: 'Auto-charge customer accounts via FPX Direct Debit and automated card subscription.',
      perk: 'Eliminate failed payment churn · 60s digital mandate',
    },
    {
      id: 'crossborder',
      icon: Globe2,
      label: 'Multi-Currency / Payouts',
      bestMatch: 'Airwallex',
      tagline: 'Receive USD/EUR/SGD and pay overseas suppliers with wholesale FX rates.',
      perk: 'Local clearing in 150+ countries · Sub-0.5% FX margins',
    },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#f7f9fc] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Clean, punchy messaging */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-md bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
              <span>Independent Payment Gateway Advisors</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00112c] tracking-tight leading-[1.1] mb-4">
              Find the Right Payment Gateway for Your Business.
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal mb-8 max-w-xl">
              We compare leading payment gateways, negotiate lower transaction rates, and fast-track your merchant approval with dedicated partner support.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-[#00112c] hover:bg-neutral-800 transition-all rounded-md shadow-xs cursor-pointer"
              >
                <span>Get Gateway Advice</span>
                <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all rounded-md"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Micro Trust Points */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-neutral-500">
              <span className="flex items-center gap-1.5 text-neutral-700">
                <Check className="w-3.5 h-3.5 text-emerald-600" /> Independent Consultation
              </span>
              <span className="flex items-center gap-1.5 text-neutral-700">
                <Check className="w-3.5 h-3.5 text-emerald-600" /> Unbiased Comparison
              </span>
              <span className="flex items-center gap-1.5 text-neutral-700">
                <Check className="w-3.5 h-3.5 text-emerald-600" /> Fast-Track Approvals
              </span>
            </div>
          </div>

          {/* Right Column: Super Simple Interactive Gateway Matcher */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-neutral-200/90 shadow-md p-6">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Quick Gateway Matcher
                </span>
                <span className="text-[11px] font-mono text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded">
                  Instant Assessment
                </span>
              </div>

              <p className="text-xs font-bold text-neutral-800 mb-2.5">
                What payment method does your business need?
              </p>

              {/* 4 Need Chips */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {needs.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = selectedNeed === idx;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedNeed(idx)}
                      className={`p-2.5 rounded-lg border text-left transition-all text-xs font-bold flex items-center gap-2 cursor-pointer ${
                        isSelected
                          ? 'border-[#00112c] bg-neutral-900 text-white shadow-xs'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-orange-400' : 'text-neutral-500'}`} />
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Match Result Preview */}
              <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200/80 mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Recommended Match
                  </span>
                  <span className="text-xs font-black text-[#00112c]">
                    {needs[selectedNeed].bestMatch}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mb-2">
                  {needs[selectedNeed].tagline}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span>{needs[selectedNeed].perk}</span>
                </div>
              </div>

              {/* Connect CTA */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#00112c] hover:bg-orange-600 transition-colors rounded-md text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Connect With Advisor for {needs[selectedNeed].bestMatch}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Partner Logo Strip */}
        <div className="mt-14 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 shrink-0">
            Partnered With Leading Gateways:
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-black text-neutral-800 tracking-tight">
            <span className="hover:text-orange-600 transition-colors">Airwallex</span>
            <span className="text-neutral-300">·</span>
            <span className="hover:text-orange-600 transition-colors">HitPay</span>
            <span className="text-neutral-300">·</span>
            <span className="hover:text-orange-600 transition-colors">Curlec by Razorpay</span>
            <span className="text-neutral-300">·</span>
            <span className="hover:text-orange-600 transition-colors">CommercePay</span>
          </div>
        </div>
      </div>
    </section>
  );
};
