"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 md:px-16 py-16 md:py-24 grid md:grid-cols-2 items-center overflow-hidden">
      
      {/* LEFT SIDE: Text & Animated Button */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#0D1B3E] leading-[1.1] mb-6">
          Car <span className="relative">
            Finance
            <span className="absolute bottom-2 left-0 w-full h-3 bg-[#14D39A]/20 -z-10"></span>
          </span> . <br />
          Made Simple.
        </h1>
        <p className="text-xl text-gray-500 font-semibold mb-10">
          No impact on your credit score
        </p>

        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "#11b886" }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#14D39A] text-white px-10 py-5 rounded-lg text-lg font-bold shadow-lg shadow-emerald-100 transition-colors"
        >
          Get My Quote
        </motion.button>
      </motion.div>

      {/* RIGHT SIDE: Jumping/Floating Car */}
      <div className="relative mt-12 md:mt-0 flex justify-center">
        
        <motion.div 
          animate={{ 
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.1, 0.3] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-0 w-3/4 h-6 bg-black/20 blur-xl rounded-[100%]"
        />

        {/* THE JUMPING CAR */}
        <motion.div
          animate={{ 
            y: [0, -20, 0], 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative z-10"
        >
          <Image 
            src="/hero-car.jpg" 
            alt="Exclusive Car"
            width={800}
            height={500}
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}