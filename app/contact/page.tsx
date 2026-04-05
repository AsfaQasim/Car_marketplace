"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function ContactHero() {
    return (
        <><main className="min-h-screen bg-[#000033] flex flex-col pt-32 px-6 md:px-20">


            <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-32 mt-20">

                <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[30px] md:text-[85px] font-[500] text-white leading-[1.1] tracking-tighter"
                >
                    We'd love to <br />
                    hear from you.
                </motion.h1>


                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:pt-4 md:pl-20"
                >
                    <h2 className="text-[28px] md:text-[40px]  text-gray-400 leading-tight">
                        We are here to answer <br />
                        any question you may <br />
                        have.
                    </h2>
                </motion.div>
            </div>


            <div className="mt-auto pb-20 max-w-[500px] mx-auto text-center space-y-8">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-white text-[14px] md:text-[17px] font-medium leading-relaxed opacity-90"
                >
                    Exclusive Car Finance is a trading name of Exclusive Car Finance Ltd. Registered
                    address: Suite RA01 195-197 Wood Street, London, England, E17 3NU Company
                    number: 13895796. ICO number: ZB870625
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-white text-[14px] md:text-[17px] font-medium leading-relaxed opacity-90"
                >
                    Exclusive Car Finance (FRN: 1042675) is an Appointed Representative of
                    Carfinanced Ltd, who are Authorised and Regulated by the Financial Conduct
                    Authority, FRN 1014460. They are a broker not a lender.
                </motion.p>
            </div>

        </main><ContactForm /></>
    );
}