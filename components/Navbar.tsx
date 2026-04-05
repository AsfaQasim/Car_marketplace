"use client";
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (

    <header className="fixed top-0 left-0 w-full z-[100] font-sans shadow-md">

      <div className="bg-[#00083D] text-white py-4 px-10">
        <nav className="max-w-[1400px] mx-auto flex justify-between items-center text-[13px] font-[500] uppercase tracking-[0.1em]">
          <a href="#" className="hover:text-[#14D39A] transition-colors">Home</a>
         

          <Link
            href="/finance-calculator"
            className="hover:text-[#14D39A] transition-colors"
          >
            Finance Calculator
          </Link>
          <Link href="/type-of-finance" className="hover:text-[#14D39A] transition-colors">Types of Finance</Link>
          <Link href="/faqs" className="hover:text-[#14D39A] transition-colors">Help & Advice</Link>
          <Link href="/contact" className="hover:text-[#14D39A] transition-colors">Contact</Link>
        </nav>
      </div>


      <div className="bg-[#E9F0FF] py-4 px-10 border-b border-blue-100">
        <div className="max-w-[1400px] mx-auto flex flex-row justify-between items-center">

          {/* LOGO (LEFT ALIGNED) */}
          <div className="flex flex-col items-center leading-none group cursor-pointer">
            <div className="w-10 h-10 border-[3px] border-[#0D1B3E] rounded-full flex items-center justify-center mb-1 transition-transform group-hover:scale-105">
              <span className="font-black text-xl text-[#0D1B3E]">E</span>
            </div>
            <span className="text-xl font-[1000] text-[#0D1B3E] tracking-tighter uppercase leading-none">
              EXCLUSIVE
            </span>
            <span className="text-[9px] tracking-[0.3em] font-bold text-gray-500 uppercase">
              Car Finance
            </span>
          </div>

          {/* EMAIL (CENTER ALIGNED) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="bg-black p-2 rounded-md shadow-sm">
              <Mail size={18} className="text-white fill-none" />
            </div>
            <a href="mailto:sales@exclusivecarfinance.com" className="text-[#00083D] font-[700] text-[15px] hover:text-blue-700 transition-colors">
              sales@exclusivecarfinance.com
            </a>
          </div>

          {/* PHONE (RIGHT ALIGNED) */}
          <div className="flex items-center gap-3">
            <Phone size={24} className="text-[#0D1B3E] fill-[#0D1B3E]" />
            <a href="tel:07858509789" className="text-[#00083D] font-[700] text-[19px] hover:text-blue-700 transition-colors">
              07858 509 789
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}