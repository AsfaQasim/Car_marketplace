"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section className="bg-[#E9F4F9] py-20 px-6">
      <div className="max-w-[1000px] mx-auto">
        
      
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border-t-[6px] border-[#14D39A]">
          <div className="p-8 md:p-16">
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
              <h2 className="text-[32px] md:text-[45px] font-[1000] text-[#0D1B3E] tracking-tight">
                Send a message
              </h2>
              {/* Placeholder for Logo - Use your Image component here */}
              <div className="text-right">
                <div className="text-[22px] font-[1000] text-[#0D1B3E] leading-tight uppercase tracking-widest">
                  Exclusive
                </div>
                <div className="text-[14px] font-bold text-[#0D1B3E] opacity-60 uppercase tracking-[0.2em] -mt-1">
                  Car Finance
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[#0D1B3E] font-bold text-lg">Your name</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-gray-200 rounded-lg py-4 px-6 outline-none focus:border-[#14D39A] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#0D1B3E] font-bold text-lg">Your email</label>
                <input 
                  type="email" 
                  className="w-full bg-white border border-gray-200 rounded-lg py-4 px-6 outline-none focus:border-[#14D39A] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#0D1B3E] font-bold text-lg">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-gray-200 rounded-lg py-4 px-6 outline-none focus:border-[#14D39A] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#0D1B3E] font-bold text-lg">Your message (optional)</label>
                <textarea 
                  rows={6}
                  className="w-full bg-white border border-gray-200 rounded-lg py-4 px-6 outline-none focus:border-[#14D39A] transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-[#14D39A] hover:bg-[#0D1B3E] text-white font-[1000] py-5 rounded-lg text-xl transition-all duration-300 shadow-lg mt-4"
              >
                Submit
              </motion.button>
            </form>
          </div>
        </div>

        
        <p className="mt-12 text-center text-[#0D1B3E] opacity-50 text-[14px] md:text-[16px] font-medium leading-relaxed max-w-4xl mx-auto">
          All finance is subject to status and income. Applicants must be 18 or over. We look to find the best 
          rate from our panel of lenders and will offer you the best deal that you’re eligible for. We don’t 
          charge a fee for our service, but we do earn a commission. This does not influence the interest rate.
        </p>
      </div>
    </section>
  );
}