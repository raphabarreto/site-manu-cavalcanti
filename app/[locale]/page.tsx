import { HeroSection } from '@/components/HeroSection';
import { ServiceCards } from '@/components/ServiceCards';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { PricingSection } from '@/components/PricingSection';
import { Footer } from '@/components/Footer';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <LanguageSwitcher />
      <HeroSection />
      <ServiceCards />
      <PortfolioGrid />
      <PricingSection />
      <Footer />
    </main>
  );
}
