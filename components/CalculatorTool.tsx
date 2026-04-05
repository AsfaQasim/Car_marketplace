"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function CalculatorTool() {
  const [amount, setAmount] = useState(4000);

  return (
    <section className="bg-[#E9F4F9] py-16 px-6">
      <div className="max-w-[800px] mx-auto text-center">
        
        
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#0D1B3E] text-sm md:text-base italic">Google</span>
            <div className="flex text-gray-400 text-xs uppercase font-bold tracking-tighter leading-none flex-col">
               <span>Customer Reviews</span>
            </div>
          </div>
          <div className="h-6 w-[1px] bg-gray-300 hidden md:block"></div>
          <div className="flex items-center gap-1">
             <span className="text-[#14D39A] text-xl">★</span>
             <span className="font-bold text-[#0D1B3E]">Trustpilot</span>
             <span className="flex gap-0.5 ml-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="bg-[#14D39A] text-white text-[10px] p-0.5 rounded-sm">★</span>
                ))}
             </span>
          </div>
        </div>

        {/* 2. Main Animated Heading */}
        <h2 className="text-[40px] md:text-[60px] font-[500] text-[#0D1B3E] mb-2 tracking-tighter">
          Finance. <span className="relative inline-block">
            Fund.
            <div className="absolute bottom-2 left-0 w-full h-2 bg-[#14D39A] -z-10 opacity-50"></div>
          </span> Drive.
        </h2>
        <p className="text-[#0D1B3E] font-[800] mb-12 opacity-80 lowercase tracking-wide text-sm md:text-base">
          No impact on your credit score
        </p>

        {/* 3. Input Box & Button */}
        <div className="max-w-[450px] mx-auto space-y-4">
          <h4 className="text-[#0D1B3E] font-black text-xl md:text-2xl mb-4">
            How much would you like to finance?
          </h4>
          
          <div className="relative group">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-[#0D1B3E]">
              £
            </div>
            <input 
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full item-center justify-center bg-white border-2 border-transparent focus:border-[#14D39A] rounded-xl py-6 pl-16 pr-6 font-black text-[#0D1B3E] outline-none transition-all shadow-sm"
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#14D39A] hover:bg-[#0D1B3E] text-white font-[600]
            ] text-xl py-6 rounded-xl uppercase tracking-wider transition-colors shadow-lg"
          >
            Get My Quote
          </motion.button>
        </div>

      </div>
    </section>
  );
}