import React from 'react';
import { X, Printer } from 'lucide-react';
import { PRIVACY_POLICY_DATA, TERMS_OF_SERVICE_DATA } from '../data/content';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
  onSwitchType: (type: 'privacy' | 'terms' | 'disclaimer') => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, onSwitchType }) => {
  if (!type) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden my-auto border border-neutral-200">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50 shrink-0">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSwitchType('privacy')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                type === 'privacy'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200'
              }`}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onSwitchType('terms')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                type === 'terms'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200'
              }`}
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={() => onSwitchType('disclaimer')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                type === 'disclaimer'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200'
              }`}
            >
              Payment Disclaimer
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60 rounded-md transition-colors"
              title="Print document"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60 rounded-md transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-neutral-800 text-sm leading-relaxed">
          {type === 'privacy' && (
            <div className="space-y-6">
              <div className="pb-6 border-b border-neutral-200">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Legal Document</span>
                <h1 className="text-3xl font-black text-neutral-900 tracking-tight mt-1">Privacy Policy</h1>
                <p className="text-xs text-neutral-500 mt-1">Last updated: {PRIVACY_POLICY_DATA.lastUpdated}</p>
              </div>

              <div className="space-y-6">
                {PRIVACY_POLICY_DATA.articles.map((art, idx) => (
                  <article key={idx} className="space-y-2">
                    <h2 className="text-lg font-bold text-neutral-900">{art.title}</h2>
                    {art.content.map((p, pIdx) => (
                      <p key={pIdx} className="text-neutral-600 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </article>
                ))}
              </div>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-6">
              <div className="pb-6 border-b border-neutral-200">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Legal Document</span>
                <h1 className="text-3xl font-black text-neutral-900 tracking-tight mt-1">Terms of Service</h1>
                <p className="text-xs text-neutral-400 mt-1">Last updated: {TERMS_OF_SERVICE_DATA.lastUpdated}</p>
              </div>

              <div className="space-y-6">
                {TERMS_OF_SERVICE_DATA.articles.map((art, idx) => (
                  <article key={idx} className="space-y-2">
                    <h2 className="text-lg font-bold text-neutral-900">{art.title}</h2>
                    {art.content.map((p, pIdx) => (
                      <p key={pIdx} className="text-neutral-600 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </article>
                ))}
              </div>
            </div>
          )}

          {type === 'disclaimer' && (
            <div className="space-y-6">
              <div className="pb-6 border-b border-neutral-200">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Regulatory</span>
                <h1 className="text-3xl font-black text-neutral-900 tracking-tight mt-1">Payment & Financial Disclaimer</h1>
                <p className="text-xs text-neutral-500 mt-1">Entity Notice for Go Inmotion</p>
              </div>

              <div className="space-y-4 text-neutral-600">
                <p>
                  <strong>1. Nature of Advisory:</strong> Go Inmotion operates as an independent commercial and fintech advisory firm. Go Inmotion is NOT a deposit-taking financial institution, remittance operator, or designated payment system provider under financial regulations.
                </p>
                <p>
                  <strong>2. Regulated Financial Services:</strong> All foreign exchange (FX) conversions, multi-currency virtual accounts, international wire transmissions, payment gateway transactions, and smart POS merchant acquiring services are provided strictly by licensed financial institutions and regulated partner fintech platforms (including Airwallex, HitPay, Curlec by Razorpay, and CommercePay).
                </p>
                <p>
                  <strong>3. Independent Provider Relationship:</strong> When you open a merchant account, register for a payment gateway, or initiate a cross-border transfer through our partner referral links or guided onboarding, you enter directly into a commercial agreement with the respective regulated provider, subject to their terms of service, KYC/AML review, and user agreements.
                </p>
                <p>
                  <strong>4. No Professional Financial or Tax Advice:</strong> Information provided on this website, in consultation calls, or across advisory materials is provided solely for commercial informational purposes. It should not be construed as legal, tax, accounting, or formal investment advice.
                </p>
                <div className="p-4 rounded-lg bg-neutral-100 border border-neutral-200 text-xs text-neutral-700">
                  <p className="font-semibold text-neutral-900">Direct Contact for Regulatory Inquiries:</p>
                  <p>Go Inmotion · 202603112901 (LA0088931-P)</p>
                  <p>Email: sales@goinmotion.net · Phone: +60 11-3762 1454</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between shrink-0">
          <span className="text-xs text-neutral-500">
            © 2024 Go Inmotion · All rights reserved
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
