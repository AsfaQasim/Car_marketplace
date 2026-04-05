

"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const partnerLogos = [
  "/lenders1.webp",
  "/lenders2.webp",
  "/lenders3.webp",
   "/lenders1.webp",
  "/lenders2.webp",
  "/lenders3.webp",
  "/lenders1.webp",
  "/lenders2.webp",
  "/lenders3.webp",
   "/lenders1.webp",
  "/lenders2.webp",
  "/lenders3.webp",
 
];

export default function Partners() {
  return (
    <section className="bg-[#E9F0FF] py-16 overflow-hidden">
      <div className="w-full text-center mb-10">
        <h3 className="text-[30px] md:text-[32px] font-[700] text-[#0D1B3E] tracking-tight">
          We compare the best deals from over 20 lenders
        </h3>
      </div>

      {/* Infinite Slider Wrapper */}
      <div className="bg-white py-12 flex items-center border-y border-blue-50">
        <motion.div 
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{
            x: [0, -1000], 
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          
        >
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0  opacity-70 hover:grayscale-0  transition-all duration-300">
              <Image 
                src={logo} 
                alt="Partner Lender" 
                width={185} 
                height={60} 
                className="object-contain h-[50px] md:h-[60px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}