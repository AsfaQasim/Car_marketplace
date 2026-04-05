"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const accordionData = [
  {
    title: "HP (HIRE PURCHASE)",
    content: "Hire Purchase is a simple and flexible way to finance your car. You pay an initial deposit and then spread the rest of the cost over 1 to 5 years. Once the final payment is made, you own the vehicle outright."
  },
  {
    title: "PERSONAL CONTRACT PURCHASE",
    content: "PCP offers lower monthly repayments by deferring a significant portion of the cost to the end of the agreement. You have the flexibility to return the car, trade it in, or pay the balloon payment to own it."
  },
  {
    title: "BAD CREDIT FINANCE",
    content: "We specialize in helping people with various credit backgrounds. Even if you've been refused elsewhere, our expert team works with specialist lenders to find a deal that fits your budget."
  },
  {
    title: "ZERO DEPOSIT CAR FINANCE",
    content: "Get on the road without any upfront costs. Our zero deposit options allow you to finance the full value of the vehicle, making it easier to manage your initial cash flow."
  }
];

export default function FinanceAccordion(){
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#E9F0FF]  pb-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="space-y-0">
          {accordionData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-b border-gray-300/50"
            >
              {/* Header / Button */}
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full py-8 flex justify-between items-center group transition-all"
              >
                <span className="text-[#0D1B3E] text-xl md:text-2xl font-[500] tracking-tight text-left uppercase">
                  {item.title}
                </span>
                
                {/* Rotating Arrow */}
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`w-6 h-6 text-[#0D1B3E] transition-opacity ${activeIndex === index ? 'opacity-100' : 'opacity-30 group-hover:opacity-100'}`} />
                </motion.div>
              </button>

              {/* Animated Content Section */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-[#0D1B3E] text-[16px] md:text-[18px] font-bold opacity-80 leading-relaxed">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Apply Now Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#14D39A] hover:bg-[#0D1B3E] text-white font-[1000] py-5 px-16 text-lg rounded-sm transition-all duration-300 uppercase shadow-lg">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}