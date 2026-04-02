"use client";

import { PencilIcon, MagnifyingGlassIcon, KeyIcon } from '@heroicons/react/24/outline'; 
import { motion } from 'framer-motion';

export default function StepCards() {
  const steps = [
    {
      title: "Discover Your Ideal Quote",
      description: "Fill out our quick online form, and we'll match you with the best car finance options from our wide range of lenders.",
      icon: <PencilIcon className="w-9 h-9 text-[#0D1B3E]" />,
    },
    {
      title: "Conditional Approval",
      description: "Relax while we find the best car finance deal for you. Our team handles everything, including the paperwork.",
      icon: <MagnifyingGlassIcon className="w-9 h-9 text-[#0D1B3E]" />,
    },
    {
      title: "Select Your Vehicle",
      description: "Pick your car from any trusted dealership, and we'll handle the financing. Need assistance? We can help with that.",
      icon: <KeyIcon className="w-9 h-9 text-[#0D1B3E]" />,
    }
  ];

  return (
  
    <section className="bg-[#E9F0FF] py-16 md:py-20 px-6 md:px-16">
      <div className="max-w-[1350px] mx-auto grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            // Background is lighter blue (#F8FAFF)
            className="bg-[#F8FAFF] p-8 md:p-10 rounded-[35px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-blue-50"
          >
            {/* Icon Container - Small and Rounded (Perfect Copy) */}
            <div className="mb-6 w-16 h-16 bg-white rounded-2xl shadow-inner flex items-center justify-center border border-gray-100">
              {step.icon}
            </div>

            {/* Title - Smaller than 28px, tracking is very tight (Pixel Perfection) */}
            <h3 className="text-[20px] md:text-[23px] font-[1000] text-[#0D1B3E] leading-tight mb-4 uppercase tracking-tighter">
              {step.title}
            </h3>

            {/* Description - Semi-bold and Slightly Smaller (Good Visual Balance) */}
            <p className="text-[14px] md:text-[15px] text-slate-500 font-semibold leading-relaxed max-w-[310px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}