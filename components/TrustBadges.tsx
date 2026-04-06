"use client";
import React from 'react';

interface BenefitItemProps {
  text: string;
}

export default function TrustBadges() {
  return (
    <section className="bg-[#E9F4F9] pt-32 md:pt-48 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto text-center">

        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            <BenefitItem text="No Deposit Needed" />
            <BenefitItem text="Bad Credit Considered" />
          </div>
          
          <div className="flex justify-center pt-2">
            <BenefitItem text="Buy your car from any dealer" />
          </div>
        </div>

        
        <div className="mt-24">
           <p className="text-[#0D1B3E] text-[10px] md:text-[14px] opacity-60 max-w-2xl mx-auto leading-relaxed font-[500]">
             Rates from 9.9% APR. Representative APR 19.9% Exclusive Car Finance is a credit broker, not a lender.
           </p>
        </div>

      </div>
    </section>
  );
}

function BenefitItem({ text }: BenefitItemProps) {
  return (
    <div className="flex items-center gap-3 group">
      {/* Icon circle */}
      <div className="flex-shrink-0 w-7 h-7 border-2 border-[#14D39A] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="w-4 h-4 text-[#14D39A] stroke-current" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span className="text-[#0D1B3E] font-[500] text-xl md:text-2xl tracking-tighter">
        {text}
      </span>
    </div>
  );
}