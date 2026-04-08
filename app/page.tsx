// app/page.tsx
import AiConsultant from '@/components/AiConsultant';
import Calculator from '@/components/Calculator';
import ComparisonTable from '@/components/ComparisonTable';
import FAQSection from '@/components/FAQSection';
import Finance from '@/components/finance';
import Footer from '@/components/Footer';
import HeroSection from '@/components/Hero';
import Callback from '@/components/HowItWorks';
import Navbar from '@/components/Navbar';
import Partners from '@/components/Partners';

import StepCards from '@/components/StepCards';
import Testimonials from '@/components/Testimonials';
import CarBenefits from '@/components/TrustBadges';
import TrustBadges from '@/components/TrustBadges';
import WhyChoose from '@/components/WhyChoose';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div className="pt-[140px] md:pt-[160px]">
        <HeroSection />
        <TrustBadges/>
        <StepCards />
        <Calculator />
        <AiConsultant/>
        <Testimonials />
        <Partners />
        <WhyChoose />
        <ComparisonTable />
        <Callback />
        <FAQSection />
        <Finance />


      </div>

    </main>
  );
}