"use client";
import React from 'react';
import { motion } from 'framer-motion';
import HowToUse from '@/components/HowToUse';
import ComparisonTable from '@/components/ComparisonTable';
import { Calculator } from 'lucide-react';
import FinanceCalculator from '@/components/Calculator';
import CalculatorTool from '@/components/CalculatorTool';
import CarBenefits from '@/components/CarBenefits';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function FinanceCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#E9F0FF]">

      {/* Blue Header Section - Static Background */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1000px] mx-auto bg-[#0D1B3E] rounded-[40px] p-12 md:p-20 text-center shadow-2xl">


          <h1 className="text-[35px] md:text-[60px] font-[500] text-white leading-tight tracking-tighter overflow-hidden">


            <motion.span
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="block"
            >
              Have you tried our Finance
            </motion.span>


            <motion.span
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1, duration: 0.8 }}
              className="block text-white"
            >
              Calculator?
            </motion.span>
          </h1>
        </div>
      </section>


      <HowToUse />
    <FinanceCalculator/>
    <CalculatorTool/>
    <CarBenefits/>
    </main>

  );
}