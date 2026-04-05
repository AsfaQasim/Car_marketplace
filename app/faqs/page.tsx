"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Am I eligible for car finance?",
    answer: "Eligibility depends on various factors including your credit score, income, and residency status in the UK."
  },
  {
    question: "I am 17, can I get finance?",
    answer: "Unfortunately, you are legally required to be 18 years or over in order to take out car finance."
  },
  {
    question: "What if I have bad credit?",
    answer: "We work with a panel of lenders who specialize in bad credit car finance and look at more than just your credit score."
  },
  {
    question: "What is the difference between HP and PCP?",
    answer: "HP (Hire Purchase) means you own the car after final payment. PCP (Personal Contract Purchase) offers lower monthly payments with a final balloon payment option."
  },
  {
    question: "Can I part-exchange my car as a deposit?",
    answer: "Yes, you can use the equity in your current vehicle as a part-exchange deposit for your new finance agreement."
  },
  {
    question: "Can my partner or other family member drive my car?",
    answer: "Yes, as long as they are a named driver on your insurance policy, they can typically drive the financed vehicle."
  },
  
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#E9F4F9] pt-40 pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-[45px] md:text-[70px] font-[500] text-[#0D1B3E] mb-6 tracking-tighter">
            How Can We Help?
          </h1>
          <p className="text-[#0D1B3E] opacity-80 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            On this page, we have included some helpful links to key information on the website. 
            Or you may find answers to your questions in our FAQs.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
    </main>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/50 border border-white/40 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-start gap-4 text-left group"
      >
        <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded flex items-center justify-center transition-colors ${isOpen ? 'bg-[#14D39A]' : 'bg-[#14D39A]'}`}>
          {isOpen ? (
            <Minus className="w-4 h-4 text-white stroke-[4px]" />
          ) : (
            <Plus className="w-4 h-4 text-white stroke-[4px]" />
          )}
        </div>
        <span className="text-[#0D1B3E] font-[600] text-[17px] md:text-[19px] leading-tight">
          {question}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-16 pb-6 text-[#0D1B3E] opacity-70 font-medium leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}