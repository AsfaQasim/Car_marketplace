"use client";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "As a first-time car buyer, I didn't know where to start, but Exclusive Car Finance guided me through every detail. They helped me understand my options and find a finance plan that fit my needs perfectly. Highly recommend them!",
    name: "Emily R",
    image: "/my_car.webp" 
  },
  {
    text: "Exclusive Car Finance made the whole process incredibly easy. From getting my quote to driving off in my new car, they took care of everything. I couldn't be happier with my new car!",
    name: "James W",
    image: "/my_car.webp"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    
    <section className="bg-[#E9F0FF] py-16 md:py-24 px-2 md:px-10">
      

      <div className="max-w-[1000px] mx-auto bg-white rounded-[5px] md:rounded-[60px] p-10 md:p-20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 z-10">
          <div className="flex items-center  gap-3 mb-8">
            <Image src="/google_image.webp" alt="Trustpilot" width={200} height={40} className="object-contain" />
         
          </div>

          <h2 className="text-[30px] md:text-[65px] font-[500] text-[#0D1B3E] leading-[1] tracking-tighter  mb-10">
            What our <br /> customers say!
          </h2>

          <div className="min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[18px] md:text-[23px] font-bold text-[#0D1B3E] leading-[1.5] mb-6 italic">
                  "{testimonials[index].text}"
                </p>
                <p className="text-lg font-black text-slate-400 uppercase tracking-[0.2em]">
                  {testimonials[index].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT IMAGE (CAR) */}
        <div className="flex-1 flex justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0] 
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.4 }
              }}
              className="w-full"
            >
              <Image 
                src={testimonials[index].image} 
                alt="Car" 
                width={700} 
                height={450} 
                className="w-full h-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.15)]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}