"use client";
import { Check, X } from 'lucide-react';
import Image from 'next/image';

export default function ComparisonTable() {
  const rows = [
    { feature: "Requires initial Deposit", hp: "Optional", pcp: "Optional", loan: false },
    { feature: "Car is yours at the end of the agreement", hp: true, pcp: "Optional", loan: true },
    { feature: "Fixed monthly payments", hp: true, pcp: true, loan: true },
    { feature: "Avoid (final) balloon payment", hp: true, pcp: false, loan: true },
    { feature: "Avoid excess mileage charge", hp: true, pcp: false, loan: true },
    { feature: "Secured against an asset (e.g. a car)", hp: true, pcp: true, loan: false },
    { feature: "Support with vehicle issues", hp: true, pcp: true, loan: false },
  ];

  return (
    <section className="bg-[#E9F0FF] py-20 md:px-16">
      {/* 1. Heading */}
      <div className="max-w-[1000px] mx-auto text-center mb-16 px-4">
        <h2 className="text-[35px] md:text-[70px] font-[1000] text-[#0D1B3E] tracking-tighter uppercase leading-none">
          Explore Our <span className="text-[#14D39A]">Car Finance</span> Options
        </h2>
        <p className="text-[16px] md:text-[18px] text-slate-500 max-w-3xl mx-auto mt-6 leading-relaxed font-semibold">
          Making the process seamless and straightforward. Whether you have good or bad credit, we're here to support you every step of the way.
        </p>
      </div>

    
      <div className="max-w-[700px] mx-auto bg-white rounded-[10px] overflow-hidden border border-gray-100 shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-[#F8FAFF]">
              <th className="p-8 text-[20px] font-[1000] text-[#0D1B3E] w-1/3">Finance Features</th>
              <th className="p-8 text-center text-[18px] md:text-[20px] font-[1000] text-[#0D1B3E] leading-tight">Hire Purchase <br/> (HP)</th>
              <th className="p-8 text-center text-[18px] md:text-[20px] font-[1000] text-[#0D1B3E] leading-tight">Personal Contract <br/> Purchase (PCP)</th>
              <th className="p-8 text-center text-[18px] md:text-[20px] font-[1000] text-[#0D1B3E] leading-tight">Personal <br/> Loan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className="p-8 text-[17px] font-[700] text-[#0D1B3E]">{row.feature}</td>
                <td className="p-8 text-center">{renderStatus(row.hp)}</td>
                <td className="p-8 text-center">{renderStatus(row.pcp)}</td>
                <td className="p-8 text-center">{renderStatus(row.loan)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-16 flex flex-col items-center gap-6">

        <div className="flex justify-center items-center">
            <img 
              src="/google_image.webp" 
              alt="Google and Trustpilot Reviews" 
              className="h-[50px] md:h-[50px] object-contain"
            />
        </div>

        {/* Apply Button */}
        <button className="bg-[#14D39A] text-white px-14 py-5  text-[22px] font-[1000] shadow-xl shadow-emerald-200 hover:scale-105 transition-all">
          Apply Now
        </button>
      </div>

    </section>
  );
}

function renderStatus(status: any) {
  if (status === true) return <Check className="mx-auto text-[#14D39A] stroke-[5px]" size={32} />;
  if (status === false) return <X className="mx-auto text-[#FF4D4D] stroke-[5px]" size={32} />;
  return <span className="font-[1000] text-slate-400 text-[18px]">{status}</span>;
}