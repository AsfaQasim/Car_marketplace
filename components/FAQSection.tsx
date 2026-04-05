"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const faqs = [
  {
    question: "What car can i afford?",
    answer: `Affordability checks are a helpful way to determine how much you can spend on a car. These checks take into account several factors, including your credit score, the loan amount you're seeking, and your disposable income after paying essential bills each month.

Having a fixed budget and securing your car loan beforehand will give you more confidence when selecting your vehicle. Our car finance calculator is a great tool to help get started!`,
  },
  {
    question: "How much does car finance cost?",
    answer: `The total cost of car finance depends on the loan amount, interest rate (APR), and loan term. It typically includes the principal amount plus interest and any applicable fees. We offer competitive rates starting from 6.9% APR, and our transparent calculator shows you the exact monthly payments and total payable amount before you apply.`,
  },
  {
    question: "Why choose Exclusive Car Finance",
    answer: `We offer fast approvals, competitive interest rates, flexible repayment terms, and a completely hassle-free process. Our team provides personalized support, minimal documentation, and no hidden fees. Thousands of customers trust us for a smooth and transparent car financing experience.`,
  },
  {
    question: "What do i need to apply for car finance?",
    answer: `To apply for car finance, you typically need:
• Valid CNIC / Passport
• Proof of income (salary slips / bank statements)
• Proof of residence
• Bank account details
• Details of the car you want to purchase

Our process is simple and most applications are approved within 24-48 hours.`,
  },
  {
    question: "What is the ideal APR for a car loan?",
    answer: `A good APR for a car loan usually ranges between 6.9% to 12%, depending on your credit score and loan term. Rates below 9% are considered very competitive. We always strive to offer you the best possible rate based on your financial profile.`,
  },
  {
    question: "Is financing a car for 72 months a bad idea?",
    answer: `Financing a car for 72 months (6 years) is generally not recommended. While it reduces your monthly payment, you end up paying significantly more interest over time and may end up owing more than the car’s value (negative equity). Shorter terms (36-60 months) are usually better.`,
  },
  {
    question: "What is the minimum income needed for car finance?",
    answer: `There is no fixed minimum income. It depends on the loan amount and your overall financial situation. Generally, your monthly income should be sufficient to comfortably cover the EMI along with your other expenses. We assess each application individually.`,
  },
  {
    question: "Is making a large down payment on a car a good idea?",
    answer: `Yes, making a large down payment is usually a smart decision. It reduces your loan amount, lowers monthly installments, decreases total interest paid, and improves your chances of loan approval.`,
  },
  {
    question: "How much will my monthly car finance payments be?",
    answer: `Your monthly payment depends on the car price, down payment, loan term, and interest rate. Use our easy car finance calculator on the website to get an accurate estimate instantly based on your preferred loan amount and tenure.`,
  },
  {
    question: "Do Exclusive Car Finance charge any fees?",
    answer: `We believe in complete transparency. There are no hidden fees. The only charges are the standard processing/arrangement fee (clearly mentioned upfront) and the interest as per the agreed APR. All terms are clearly explained before you sign.`,
  },
  {
    question: "How much can i borrow for a car?",
    answer: `The maximum amount you can borrow depends on your income, credit history, and the affordability assessment. We generally finance up to 85-90% of the car value. Our team will give you the maximum pre-approved limit after reviewing your application.`,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f0f7ff] py-16 md:py-24">
      <div className="max-w-x4l px-4 md:px-6">
        
       
        <h2 className="text-2xl font-bold md:text-5xl  text-[#0D1B3E] text-left mb-12">
          Have a question?
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-all"
              >
                <span className="text-[1.1rem] font-semibold text-[#0D1B3E]">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                  className={`text-3xl ${
                    openIndex === index ? "text-[#14D39A]" : "text-gray-400"
                  }`}
                >
                  ↓
                </motion.div>
              </button>

              {/* Divider */}
              {openIndex === index && <div className="h-px bg-gray-100 mx-8" />}

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="px-8 pb-8 pt-6 text-gray-600 leading-relaxed text-[1.02rem]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}