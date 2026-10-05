import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs py-3'
          : 'bg-white/90 backdrop-blur-md border-b border-neutral-100 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2.5 shrink-0 focus-visible:outline-hidden"
          aria-label="Go Inmotion home"
        >
          <img
            src="/assets/inmotion-logo.png"
            alt="INMOTION"
            className="h-8 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fb = document.getElementById('brand-text-fb');
              if (fb) fb.style.display = 'block';
            }}
          />
          <span id="brand-text-fb" style={{ display: 'none' }} className="font-black text-xl tracking-tight text-[#00112c]">
            INMOTION<span className="text-orange-500">.</span>
          </span>
        </a>

        {/* Simple 4 Nav Links */}
        <nav
          className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-neutral-600"
          aria-label="Primary navigation"
        >
          <a href="#gateways" className="hover:text-[#00112c] transition-colors py-1">
            Gateways
          </a>
          <a href="#solutions" className="hover:text-[#00112c] transition-colors py-1">
            Solutions
          </a>
          <a href="#how-it-works" className="hover:text-[#00112c] transition-colors py-1">
            How It Works
          </a>
          <a href="#why-us" className="hover:text-[#00112c] transition-colors py-1">
            Why Inmotion
          </a>
          <a href="#faq" className="hover:text-[#00112c] transition-colors py-1">
            FAQ
          </a>
        </nav>

        {/* Primary CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#00112c] hover:bg-neutral-800 transition-all rounded-md shadow-xs focus-visible:outline-hidden cursor-pointer"
          >
            <span>Get Gateway Advice</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-3 py-1.5 text-xs font-bold text-white bg-[#00112c] rounded-md cursor-pointer"
          >
            Advice
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-neutral-800 rounded-md focus-visible:outline-hidden"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-2">
          <a
            href="#gateways"
            onClick={closeMenu}
            className="block px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 rounded"
          >
            Partner Gateways
          </a>
          <a
            href="#solutions"
            onClick={closeMenu}
            className="block px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 rounded"
          >
            Payment Solutions
          </a>
          <a
            href="#how-it-works"
            onClick={closeMenu}
            className="block px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 rounded"
          >
            How It Works
          </a>
          <a
            href="#why-us"
            onClick={closeMenu}
            className="block px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 rounded"
          >
            Why Inmotion
          </a>
          <a
            href="#faq"
            onClick={closeMenu}
            className="block px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 rounded"
          >
            FAQ
          </a>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                closeMenu();
                onOpenConsultation();
              }}
              className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#00112c] rounded-md"
            >
              Get Gateway Advice
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 px-4 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-md"
            >
              Chat on WhatsApp (+60 11-3762 1454)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
