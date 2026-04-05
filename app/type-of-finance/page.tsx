"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FinanceIntro from '@/components/FinanceIntro';
import FinanceAccordion from '@/components/FinanceAccordion';

export default function TypesOfFinancePage() {
    return (
        <><main className="min-h-screen bg-[#111319] flex flex-col items-center justify-center pt-40 pb-20 px-6 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                className="relative w-full max-w-[900px] flex justify-center"
            >
                <Image
                    src="/front_image.webp"
                    alt="Audi Front View"
                    width={450}
                    height={300}
                    className="object-contain"
                    priority />


                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[#14D39A] opacity-10 blur-[120px] -z-10"></div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-10"
            >
                <h1 className="text-[50px] md:text-[70px] font-[300] text-white leading-tight tracking-tighter   max-w-4xl">
                    Looking for quick <br />
                    <span className="inline-block">& easy car finance?</span>
                </h1>
            </motion.div>

            {/* 2. CTA Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <button className="bg-[#14D39A] hover:bg-white hover:text-[#0D1B3E] text-white font-bold py-4 px-10  text-lg uppercase transition-all duration-300 mb-20 shadow-[0_10px_30px_rgba(20,211,154,0.3)]">
                    Types of Finance
                </button>
            </motion.div>




        </main><FinanceIntro />
        <FinanceAccordion/>
        </>  
        
)}