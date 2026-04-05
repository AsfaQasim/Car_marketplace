"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CarBenefits() {
  return (
    <section className="bg-[#E9F4F9] pb-16 px-6">
      <div className="max-w-[1000px] mx-auto text-center">

     
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-[600px] mx-auto mb-10"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Image
              src="/new_car.webp"
              alt="Black Range Rover"
              width={700}
              height={300}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
         
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            <BenefitItem text="No Deposit Needed" />
            <BenefitItem text="Bad Credit Considered" />
          </div>
          
        
          <div className="flex justify-center">
            <BenefitItem text="Buy your car from any dealer" />
          </div>
        </div>

        
        <p className="mt-16 text-[#0D1B3E] text-[11px] md:text-[13px] opacity-70 max-w-2xl mx-auto leading-relaxed">
          Rates from 9.9% APR. Representative APR 19.9% Exclusive Car Finance is a credit broker, not a lender.
        </p>

      </div>
    </section>
  );
}


function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-shrink-0 w-6 h-6 border-2 border-[#14D39A] rounded-full flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#14D39A] stroke-current" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span className="text-[#0D1B3E] font-bold text-lg md:text-xl tracking-tight">
        {text}
      </span>
    </div>
  );
}