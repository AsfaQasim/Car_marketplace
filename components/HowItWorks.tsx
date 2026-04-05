
"use client";
import { CheckCircle2, Search, Car, Key } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <Search className="w-8 h-8 text-[#14D39A]" />,
    title: "Apply Online",
    description: "Fill out our simple application form in under 2 minutes. It's quick and won't affect your credit score."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-[#14D39A]" />,
    title: "Get Approved",
    description: "Receive an instant decision. We compare over 20 lenders to find you the best rate available."
  },
  {
    icon: <Car className="w-8 h-8 text-[#14D39A]" />,
    title: "Choose Your Car",
    description: "Buy from any reputable dealer in the UK. We'll handle the paperwork and payment directly."
  },
  {
    icon: <Key className="w-8 h-8 text-[#14D39A]" />,
    title: "Drive Away",
    description: "Sign your documents electronically and pick up your new car. Simple, fast, and secure."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B3E] mb-6">
            How it <span className="text-[#14D39A]">Works</span>
          </h2>
          <p className="text-lg text-gray-600">
            Getting car finance has never been easier. Follow our simple process and drive away in your new car.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="mb-6 w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 h-px bg-gray-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
