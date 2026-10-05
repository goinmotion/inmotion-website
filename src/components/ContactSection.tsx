import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { MessageSquare, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessType: 'Online E-Commerce',
    contact: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;

    const waText = encodeURIComponent(
      `Hi Go Inmotion team,\n\nName: ${formData.name}\nBusiness Type: ${formData.businessType}\nContact: ${formData.contact}\n\nI would like a payment gateway recommendation.`
    );

    setSubmitted(true);
    window.open(`https://wa.me/601137621454?text=${waText}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#00112c] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400 block">
              Direct Advisory Desk
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Ready to Pick the Right Payment Gateway?
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Speak with an independent advisor today. We will evaluate your monthly volume and recommend the best gateway for your business.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-white/10 hover:bg-white/15 rounded-md transition-colors"
              >
                <Mail className="w-4 h-4 text-orange-400" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>

            <p className="text-xs text-neutral-400 pt-2">
              Phone Hotline: {COMPANY_INFO.phone} · Mon–Fri, 9am–6pm (SGT/MYT)
            </p>
          </div>

          {/* Right Column: Super Quick 3-Field Request Form */}
          <div className="lg:col-span-6 bg-white text-neutral-900 p-6 sm:p-7 rounded-xl shadow-xl">
            {submitted ? (
              <div className="p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-[#00112c]">Message Formatted!</h4>
                <p className="text-xs text-neutral-600">
                  Redirecting to WhatsApp to connect with our advisory desk.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-orange-600 underline cursor-pointer"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <h3 className="text-base font-bold text-[#00112c]">
                  Get a Gateway Recommendation
                </h3>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Your Name or Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rachel / Apex Retail"
                    className="w-full px-3 py-2 rounded-md border border-neutral-300 text-xs text-neutral-900 focus:outline-hidden focus:border-[#00112c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    What does your business need?
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-neutral-300 text-xs text-neutral-900 focus:outline-hidden focus:border-[#00112c]"
                  >
                    <option value="Online E-Commerce">Online E-Commerce Website (Shopify, WooCommerce, Custom)</option>
                    <option value="Retail In-Store POS">Retail / Dining In-Store Card Machine</option>
                    <option value="Subscriptions & SaaS">Recurring Subscriptions & Direct Debit</option>
                    <option value="Cross-Border Payouts">Cross-Border Supplier Payouts & Multi-Currency</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    WhatsApp or Email *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="+60 1x-xxx xxxx or name@company.com"
                    className="w-full px-3 py-2 rounded-md border border-neutral-300 text-xs text-neutral-900 focus:outline-hidden focus:border-[#00112c]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#00112c] hover:bg-orange-600 rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                >
                  <span>Connect with Advisor</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                </button>

                <p className="text-[11px] text-neutral-500 text-center">
                  Independent advisory service. No sales spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
