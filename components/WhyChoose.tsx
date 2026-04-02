"use client";
import { ShieldCheck, Clock, UserCheck, Award, CreditCard, CheckCircle } from 'lucide-react';

export default function WhyChoose() {
  const benefits = [
    {
      title: "No Credit Score Impact",
      desc: "Our soft search technology won't affect your credit rating",
      icon: <ShieldCheck size={28} className="text-[#0D1B3E]" />
    },
    {
      title: "60-Second Decisions",
      desc: "Get instant approval decisions in just one minute",
      icon: <Clock size={28} className="text-[#0D1B3E]" />
    },
    {
      title: "Trusted UK Lenders",
      desc: "We work with a panel of FCA-regulated lenders",
      icon: <UserCheck size={28} className="text-[#0D1B3E]" />
    },
    {
      title: "All Credit Histories",
      desc: "Good, bad, or no credit – we help everyone find finance",
      icon: <Award size={28} className="text-[#0D1B3E]" />
    },
    {
      title: "Competitive Rates",
      desc: "Access to exclusive rates you won't find elsewhere",
      icon: <CreditCard size={28} className="text-[#0D1B3E]" />
    },
    {
      title: "No Hidden Fees",
      desc: "Transparent pricing with no surprise charges",
      icon: <CheckCircle size={28} className="text-[#0D1B3E]" />
    }
  ];

  return (
    <section className="bg-[#E9F0FF] py-20 px-6 md:px-16">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[60px] font-[1000] text-[#0D1B3E] tracking-tighter mb-6">
            Why Choose ExclusiveCarFinance?
          </h2>
          <p className="max-w-3xl mx-auto text-[16px] md:text-[18px] text-slate-500 font-semibold leading-relaxed">
            We're not just another finance broker. We're your trusted partner in finding the perfect car finance deal, tailored to your unique circumstances.
          </p>
        </div>

        {/* Grid of Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border-[1px] border-purple-200 flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                {item.icon}
              </div>
              
              {/* Text */}
              <div>
                <h4 className="text-[20px] font-black text-[#0D1B3E] mb-2 leading-tight">
                  {item.title}
                </h4>
                <p className="text-[14px] text-slate-500 font-medium leading-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}