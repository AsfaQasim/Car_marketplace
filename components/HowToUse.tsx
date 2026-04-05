"use client";
import React from 'react';
import Image from 'next/image';

const steps = [
  {
    title: "Set Your Monthly Budget",
    description: "Determine what you can afford each month. By making a deposit, you can lower your monthly repayments."
  },
  {
    title: "Choose Your Loan Term",
    description: "A longer repayment period reduces monthly payments but increases total interest. Use our calculator's slider to see the impact on your payments."
  }
];

export default function HowToUse() {
  return (
    <section className="bg-[#E9F0FF] py-10 px-8 md:px-20">
      <div className="max-w-[1200px]  grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side: The Light Blue Card Content */}
        <div className="bg-[#E9F4F9] rounded-[5px] p-16 md:p-16 h-full flex flex-col justify-center">
          <h2 className="text-[32px] md:text-[45px] font-[500] text-[#0D1B3E] leading-tight mb-8">
            How to use our Finance <br />
            Calculator...
          </h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg md:text-xl font-[1000] text-[#0D1B3E] uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[#0D1B3E] opacity-70 font-semibold leading-relaxed text-[14px] md:text-[16px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[420px] aspect-[1/1] md:aspect-[4/5]">
            <Image 
              src="/mobile_image.webp" 
              alt="Finance Calculator Mobile View"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}