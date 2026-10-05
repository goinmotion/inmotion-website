import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#f7f9fc] text-neutral-700 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <a href="#home" className="inline-block">
              <img
                src="/assets/inmotion-logo.png"
                alt="INMOTION"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-black text-lg tracking-tight text-[#00112c] block mt-1">
                INMOTION<span className="text-orange-500">.</span>
              </span>
            </a>
            <p className="text-xs text-neutral-500 leading-relaxed font-normal">
              Independent payment gateway advisors. We help businesses choose, compare, and implement the right payment gateways.
            </p>
          </div>

          {/* Partner Gateways */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00112c] mb-3">
              Partner Gateways
            </h4>
            <ul className="space-y-2 text-xs font-medium text-neutral-600">
              <li>
                <a href="#gateways" className="hover:text-[#00112c]">HitPay (POS & E-Commerce)</a>
              </li>
              <li>
                <a href="#gateways" className="hover:text-[#00112c]">Airwallex (Multi-Currency)</a>
              </li>
              <li>
                <a href="#gateways" className="hover:text-[#00112c]">Curlec by Razorpay (Direct Debit)</a>
              </li>
              <li>
                <a href="#gateways" className="hover:text-[#00112c]">CommercePay (Regional SEA)</a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00112c] mb-3">
              Payment Solutions
            </h4>
            <ul className="space-y-2 text-xs font-medium text-neutral-600">
              <li>
                <a href="#solutions" className="hover:text-[#00112c]">Online Payment Gateway</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#00112c]">In-Store POS Terminals</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#00112c]">Subscriptions & Direct Debit</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#00112c]">Cross-Border Payouts & FX</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00112c] mb-3">
              Contact Desk
            </h4>
            <div className="space-y-1.5 text-xs text-neutral-600">
              <p className="font-bold text-[#00112c]">{COMPANY_INFO.name}</p>
              <p className="text-neutral-500 font-mono text-[11px]">{COMPANY_INFO.registrationNo}</p>
              <p>{COMPANY_INFO.email}</p>
              <p>{COMPANY_INFO.phone}</p>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-bold inline-flex items-center gap-1 pt-1"
              >
                WhatsApp Desk <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Legal & Regulatory Notice */}
        <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>{COMPANY_INFO.copyright} · Go Inmotion is an independent payment advisory firm.</p>
          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#00112c] cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#00112c] cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
