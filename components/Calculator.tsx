"use client";
import { useState, useEffect } from 'react';

export default function FinanceCalculator() {
  const [amount, setAmount] = useState(9512);
  const [deposit, setDeposit] = useState(10);
  const [term, setTerm] = useState(24);
  const [apr, setApr] = useState(9.9);

  // Results state
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  // Calculation Logic
  useEffect(() => {
    const principal = amount - deposit;
    const totalWithInterest = principal + (principal * (apr / 100) * (term / 12));
    const monthly = totalWithInterest / term;
    
    setMonthlyPayment(Number(monthly.toFixed(2)));
    setTotalInterest(Number((totalWithInterest - principal).toFixed(2)));
  }, [amount, deposit, term, apr]);

  return (
    <section className="bg-[#E9F0FF] py-16 px-4 md:px-16 max-w-[1400px]">
      <h2 className="text-5xl font-[1000] text-[#0D1B3E] text-center gap-4 mb-12 tracking-tighter">
        The finance <span className="text-[#14D39A]">calculator</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Inputs */}
        <div className="bg-[#F8FAFF] p-8 rounded-[30px]  space-y-6">
          <div>
            <label className="block text-sm font-[500] text-gray-400 mb-2">Loan Amount</label>
            <input 
              type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full p-4 bg-white border border-gray-100 rounded-xl text-xl font-black text-[#0D1B3E]"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Your Deposit</label>
            <input 
              type="number" value={deposit} onChange={(e) => setDeposit(Number(e.target.value))}
              className="w-full p-4 bg-white border border-gray-100 rounded-xl text-xl font-black text-[#0D1B3E]"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-400 mb-4 uppercase">Loan term (months)</label>
            <div className="grid grid-cols-4 gap-3">
              {[24, 36, 48, 60].map((m) => (
                <button
                  key={m} onClick={() => setTerm(m)}
                  className={`py-4 rounded-xl text-lg font-bold transition-all ${
                    term === m ? 'bg-[#14D39A] text-white shadow-lg shadow-emerald-200' : 'bg-white text-[#0D1B3E] hover:bg-gray-50'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-[#14D39A] text-white py-5 rounded-2xl text-xl font-[1000] shadow-lg hover:bg-[#11b886] transition-all">
             Get car finance quote
          </button>
        </div>

        {/* Right Side: Results */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-100 shadow-sm rounded-[30px] p-8">
             <div className="flex justify-between items-center mb-6">
                <h4 className="text-2xl font-[1000] text-[#0D1B3E]">Hire Purchase (HP)</h4>
                <span className="bg-emerald-50 text-[#14D39A] px-3 py-1 rounded-full text-xs font-black">APR {apr}%</span>
             </div>
             <div className="space-y-4">
                <div className="flex justify-between text-lg font-bold text-slate-400">
                  {term} months <span className="text-[#0D1B3E]">£{monthlyPayment}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-slate-400">
                  Interest <span className="text-[#0D1B3E]">£{totalInterest}</span>
                </div>
                <div className="flex justify-between text-2xl font-[1000] border-t border-dashed pt-4 mt-4 text-[#0D1B3E]">
                  Total Payable <span>£{(Number(amount) + Number(totalInterest)).toFixed(2)}</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}