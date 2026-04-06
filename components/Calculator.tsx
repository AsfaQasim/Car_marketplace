"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FinanceCalculator() {
  const [amount, setAmount] = useState(9512);
  const [deposit, setDeposit] = useState(10);
  const [term, setTerm] = useState(24);
  const [apr, setApr] = useState(9.9); // User can now change this

  // Results state
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  // Calculation Logic (Fixed for accurate interest)
  useEffect(() => {
    const principal = amount - deposit;
    const totalWithInterest = principal + (principal * (apr / 100) * (term / 12));
    const monthly = totalWithInterest / term;
    
    setMonthlyPayment(Number(monthly.toFixed(2)));
    setTotalInterest(Number((totalWithInterest - principal).toFixed(2)));
  }, [amount, deposit, term, apr]);

  return (
    <section className="bg-[#E9F0FF] py-20 px-6 md:px-16 w-full flex justify-center">
      <div className="max-w-[1200px] w-full">
        <h2 className="text-[40px] md:text-[60px] font-[1000] text-[#0D1B3E] text-center mb-16 tracking-tighter uppercase leading-none">
          The finance <span className="text-[#14D39A]">calculator</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Inputs */}
          <div className="bg-[#F8FAFF] p-10 rounded-[40px] shadow-sm space-y-8">
            {/* Loan Amount Input */}
            <div className="space-y-2">
              <label htmlFor="loan-amount" className="block text-sm font-bold text-gray-400 uppercase tracking-widest">
                Loan Amount (£)
              </label>
              <input 
                id="loan-amount"
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full p-5 bg-white border border-gray-100 rounded-2xl text-2xl font-black text-[#0D1B3E] focus:ring-2 focus:ring-[#14D39A] outline-none transition-all"
              />
            </div>

            {/* Deposit Input */}
            <div className="space-y-2">
              <label htmlFor="deposit" className="block text-sm font-bold text-gray-400 uppercase tracking-widest">
                Your Deposit (£)
              </label>
              <input 
                id="deposit"
                type="number" 
                value={deposit} 
                onChange={(e) => setDeposit(Number(e.target.value))}
                className="w-full p-5 bg-white border border-gray-100 rounded-2xl text-2xl font-black text-[#0D1B3E] focus:ring-2 focus:ring-[#14D39A] outline-none transition-all"
              />
            </div>

            {/* APR Input (Newly Added for Flexibility) */}
            <div className="space-y-2">
              <label htmlFor="apr" className="block text-sm font-bold text-gray-400 uppercase tracking-widest">
                Interest Rate (APR %)
              </label>
              <input 
                id="apr"
                type="number" 
                step="0.1"
                value={apr} 
                onChange={(e) => setApr(Number(e.target.value))}
                className="w-full p-5 bg-white border border-gray-100 rounded-2xl text-2xl font-black text-[#0D1B3E] focus:ring-2 focus:ring-[#14D39A] outline-none transition-all"
              />
            </div>

            {/* Term Selection */}
            <div className="space-y-4">
              <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest">
                Loan term (months)
              </label>
              <div className="grid grid-cols-4 gap-4">
                {[24, 36, 48, 60].map((m) => (
                  <button
                    key={m} 
                    type="button"
                    onClick={() => setTerm(m)}
                    className={`py-5 rounded-2xl text-lg font-black transition-all ${
                      term === m 
                      ? 'bg-[#14D39A] text-white shadow-xl shadow-emerald-100' 
                      : 'bg-white text-[#0D1B3E] border border-gray-100 hover:bg-gray-50'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-[#14D39A] text-white py-6 rounded-[20px] text-xl font-black shadow-lg hover:bg-[#0D1B3E] transition-all uppercase tracking-tighter">
               Get car finance quote
            </button>
          </div>

          {/* Right Side: Results Card */}
          <div className="sticky top-32">
            <div className="bg-white border border-gray-50 shadow-xl rounded-[40px] p-10">
               <div className="flex justify-between items-center mb-10">
                  <h4 className="text-3xl font-[1000] text-[#0D1B3E]">Hire Purchase (HP)</h4>
                  <span className="bg-emerald-50 text-[#14D39A] px-4 py-2 rounded-full text-sm font-black">APR {apr}%</span>
               </div>
               
               <div className="space-y-6">
                  <div className="flex justify-between items-center text-xl font-bold text-slate-400">
                    <span>{term} monthly payments</span>
                    <span className="text-[#0D1B3E] text-2xl">£{monthlyPayment}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-xl font-bold text-slate-400">
                    <span>Total interest charge</span>
                    <span className="text-[#0D1B3E] text-2xl">£{totalInterest}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-3xl font-[1000] border-t border-dashed border-gray-200 pt-8 mt-8 text-[#0D1B3E]">
                    <span>Total Payable</span>
                    <span className="text-[#14D39A]">£{(Number(amount) + Number(totalInterest)).toFixed(2)}</span>
                  </div>
               </div>

               <p className="mt-10 text-xs text-gray-400 font-medium leading-relaxed italic">
                 * Figures are for illustration purposes only. Final rates depend on individual credit assessment.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}