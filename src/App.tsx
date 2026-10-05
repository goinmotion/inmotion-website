/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PartnersSection } from './components/PartnersSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ProcessSection } from './components/ProcessSection';
import { WhySection } from './components/WhySection';
import { ResourcesSection } from './components/ResourcesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);
  const [consultationOpen, setConsultationOpen] = useState<boolean>(false);

  const handleOpenConsultation = () => {
    setConsultationOpen(true);
  };

  const handleExploreGateways = () => {
    const el = document.getElementById('gateways');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#00112c] font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <Header onOpenConsultation={handleOpenConsultation} />

      <main>
        {/* 1. Hero with 1-Click Gateway Matcher */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onExploreGateways={handleExploreGateways}
        />

        {/* 2. Partnered Payment Gateways */}
        <PartnersSection onOpenConsultation={handleOpenConsultation} />

        {/* 3. Solutions at a Glance (4 solutions) */}
        <SolutionsSection onOpenConsultation={handleOpenConsultation} />

        {/* 4. How It Works in 3 Steps */}
        <ProcessSection onOpenConsultation={handleOpenConsultation} />

        {/* 5. Why Inmotion */}
        <WhySection onOpenConsultation={handleOpenConsultation} />

        {/* 6. Simple Fee Estimator & FAQs */}
        <ResourcesSection onOpenConsultation={handleOpenConsultation} />

        {/* 7. Contact & WhatsApp Desk */}
        <ContactSection onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type: 'privacy' | 'terms') => setLegalModalType(type)} />

      {/* Modals */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        onSwitchType={(type: 'privacy' | 'terms' | 'disclaimer') => setLegalModalType(type)}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
