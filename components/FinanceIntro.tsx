"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function FinanceIntro() {
  return (
    <section className="bg-[#E9F0FF] py-20 px-9">
      <div className="max-w-[700px] mx-auto text-center">
        
        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[45px] md:text-[65px] font-[500] text-[#0D1B3E] mb-10 tracking-tighter"
        >
          Types of Finance
        </motion.h2>

        {/* Description Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#0D1B3E] text-[16px] md:text-[19px] font-medium leading-[1.6] opacity-80"
        >
          At Exclusive Car Finance, we understand that choosing the right 
          financing option is essential for your next vehicle purchase. Whether 
          you're interested in Hire Purchase (HP), Personal Contract Purchase 
          (PCP), or zero deposit loans, we offer a range of flexible solutions 
          tailored to your unique financial situation. Our expert team is here to 
          guide you through each option, ensuring you find the best fit to help you 
          drive away in the car you truly want. Discover the possibilities and take 
          the first step towards your new vehicle today!
        </motion.p>

      </div>
    </section>
  );
}