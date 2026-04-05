"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";   

export default function HeroSection() {
  return (
    <section className="bg-[#f0f7ff] pt-16 pb-20 md:pt-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-[#0D1B3E] leading-none"
            >
              Finance. Fund.<br />Drive.
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-[#0D1B3E] mt-3 leading-none"
            >
              Apply for car{" "}
              <span className="text-[#14D39A]">finance!</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-lg text-gray-600 max-w-md"
            >
              Ready to get started? Apply now for car finance with Exclusive Car Finance and take the first step towards driving your new car! Our quick and easy application process takes just minutes, with no obligation and a decision in principle in no time.
            </motion.p>

            {/* FIXED BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link href="/Hero" passHref>   
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-8 bg-[#14D39A] hover:bg-[#11b886] text-white font-bold text-lg px-10 py-4  shadow-lg transition-all w-full md:w-auto"
                >
                  Apply Now - It&apos;s free
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Phone */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/mobile_image.webp"
                alt="Car Finance Application"
                width={420}
                height={780}
                className="drop-shadow-2xl rounded-[40px]"
                priority
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}