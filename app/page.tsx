// app/page.tsx
import Calculator from '@/components/Calculator';
import ComparisonTable from '@/components/ComparisonTable';
import HeroSection from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Partners from '@/components/Partners';
import StepCards from '@/components/StepCards';
import Testimonials from '@/components/Testimonials';
import TrustBadges from '@/components/TrustBadges';
import WhyChoose from '@/components/WhyChoose';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div className="pt-[140px] md:pt-[160px]">
        <HeroSection />
        <TrustBadges />
        <StepCards />
        <Calculator />
        <Testimonials/>
        <Partners/>
        <WhyChoose/>
        <ComparisonTable/>
      </div>


      <div className="h-[800px] bg-white"></div>
    </main>
  );
}