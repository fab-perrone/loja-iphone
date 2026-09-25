import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialChannelsSection } from './components/SocialChannelsSection';
import { ProductCatalog } from './components/ProductCatalog';
import { TradeInEstimator } from './components/TradeInEstimator';
import { TrustFeaturesSection } from './components/TrustFeaturesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-amber-400 selection:text-zinc-950">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Flagship Hero Spotlight */}
        <HeroSection />

        {/* Official Social Media Hub (TikTok, Instagram, Facebook, Mercado Livre) */}
        <SocialChannelsSection />

        {/* Product Lineup & Interactive Catalog */}
        <ProductCatalog />

        {/* Trade-in Value Estimator */}
        <TradeInEstimator />

        {/* Key Trust & Warranty Pillars */}
        <TrustFeaturesSection />

        {/* Social Proof & Customer Reviews */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA Widget with number 11965109999 */}
      <FloatingWhatsApp />
    </div>
  );
}
