"use client";
import { Check } from 'lucide-react';

export default function TrustBadges() {
  const features = [
    "No Deposit Needed",
    "Bad Credit Considered",
    "Buy your car from any dealer"
  ];

  return (
    <section className="w-full bg-[#E9F0FF] py-10 md:py-14 border-t border-blue-50">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center">
     
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-14 w-full mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 group">
             
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[3px] border-[#14D39A] flex items-center justify-center flex-shrink-0 bg-transparent">
                <Check size={20} className="text-[#14D39A] stroke-[4px]" />
              </div>
              
           
              <span className="text-[20px] md:text-[26px] font-[1000] text-[#0D1B3E] tracking-tight whitespace-nowrap">
                {feature}
              </span>
            </div>
          ))}
        </div>

      
        <div className="w-full max-w-4xl text-center">
          <p className="text-[13px] md:text-[15px] text-slate-500 font-bold opacity-80 leading-relaxed tracking-wide">
            Rates from 9.9% APR. Representative APR 19.9% Exclusive Car Finance is a credit broker, not a lender.
          </p>
        </div>

      </div>
    </section>
  );
}