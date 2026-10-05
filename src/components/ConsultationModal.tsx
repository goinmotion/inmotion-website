import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    need: 'Online Website Checkout (FPX, Cards, eWallets)',
    volume: '$20,000 - $50,000 / month',
    name: '',
    company: '',
    contact: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Hi Go Inmotion team,\n\nI need advice on choosing a payment gateway.\n\n*Name:* ${formData.name}\n*Company:* ${formData.company}\n*Contact:* ${formData.contact}\n*Payment Need:* ${formData.need}\n*Estimated Monthly Volume:* ${formData.volume}\n\nPlease recommend the best options and rates.`
    );

    window.open(`https://wa.me/601137621454?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl p-6 sm:p-7 border border-neutral-200">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
          <div>
            <h3 className="text-lg font-black text-[#00112c]">
              Get Gateway Recommendation
            </h3>
            <p className="text-xs text-neutral-500">
              Independent payment advisory · Zero obligation
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-md cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-lg font-bold text-[#00112c]">Connecting via WhatsApp!</h4>
            <p className="text-xs text-neutral-600 max-w-xs mx-auto">
              Your details have been pre-filled. Our advisor will review your volume and reply with the best gateway match shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 px-4 py-2 text-xs font-bold text-white bg-[#00112c] rounded-md cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Primary Payment Requirement
              </label>
              <select
                value={formData.need}
                onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-md border border-neutral-300 text-neutral-900 focus:outline-hidden focus:border-[#00112c]"
              >
                <option value="Online Website Checkout (FPX, Cards, eWallets)">Online Website Checkout (FPX, Cards, eWallets)</option>
                <option value="In-Store Smart POS Card Terminal">In-Store Smart POS Card Terminal (Retail/Dining)</option>
                <option value="Subscriptions & FPX Direct Debit">Subscriptions & Automated FPX Direct Debit</option>
                <option value="Cross-Border Payouts & FX">Cross-Border Payouts & Multi-Currency Accounts</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Estimated Monthly Sales Volume
              </label>
              <select
                value={formData.volume}
                onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-md border border-neutral-300 text-neutral-900 focus:outline-hidden focus:border-[#00112c]"
              >
                <option value="New Business / Under $10,000">New Business / Under $10,000 / mo</option>
                <option value="$10,000 - $50,000">$10,000 - $50,000 / mo</option>
                <option value="$50,000 - $200,000">$50,000 - $200,000 / mo (Volume discount eligible)</option>
                <option value="Over $200,000+">Over $200,000+ / mo (Enterprise custom rates)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rachel"
                  className="w-full px-3 py-2 text-xs rounded-md border border-neutral-300 text-neutral-900 focus:outline-hidden focus:border-[#00112c]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Apex Retail"
                  className="w-full px-3 py-2 text-xs rounded-md border border-neutral-300 text-neutral-900 focus:outline-hidden focus:border-[#00112c]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                WhatsApp Number or Email *
              </label>
              <input
                type="text"
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                placeholder="+60 1x-xxx xxxx or name@company.com"
                className="w-full px-3 py-2 text-xs rounded-md border border-neutral-300 text-neutral-900 focus:outline-hidden focus:border-[#00112c]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#00112c] hover:bg-orange-600 rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-orange-400" />
                <span>Chat with Advisor on WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
