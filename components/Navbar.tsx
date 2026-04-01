"use client";
import { Mail, Phone } from 'lucide-react';


//  navbar
export default function Navbar() {
  return (
    <header className="w-full font-sans">
      {/* 1. DARK BLUE TOP BAR */}
      <div className="bg-[#00083D] text-white py-8 px-10">
        <nav className="max-w-[1600px] mx-auto flex justify-between items-center text-[13px] font-[600] uppercase tracking-wider">
          <a href="#" className="hover:text-[#14D39A] transition-colors">Home</a>
          <a href="#" className="hover:text-[#14D39A] transition-colors">Finance Calculator</a>
          <a href="#" className="hover:text-[#14D39A] transition-colors">Types of Finance</a>
          <a href="#" className="hover:text-[#14D39A] transition-colors">Help & Advice</a>
          <a href="#" className="hover:text-[#14D39A] transition-colors">Contact</a>
        </nav>
      </div>

      {/* 2. LIGHT BLUE BRANDING BAR (Logo & Info in one line) */}
      <div className="bg-[#E9F0FF] py-2 px-10 border-b border-blue-100">
        <div className="max-w-[1400px] mx-auto flex flex-row justify-between items-center">
          
          {/* LOGO (LEFT ALIGNED) */}
          <div className="flex flex-col items-center leading-none">
            {/* E Circle Icon */}
            <div className="w-10 h-10 border-[3px] border-[#0D1B3E] rounded-full flex items-center justify-center mb-1">
              <span className="font-black text-xl text-[#0D1B3E]">E</span>
            </div>
            <span className="text-xl font-[500] text-[#0D1B3E] tracking-tighter uppercase leading-none">
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
            <a href="mailto:sales@exclusivecarfinance.com" className="text-[#00083D] font-[500] text-[15px]">
              sales@exclusivecarfinance.com
            </a>
          </div>

          {/* PHONE (RIGHT ALIGNED) */}
          <div className="flex items-center gap-3">
            <Phone size={24} className="text-[#0D1B3E] fill-[#0D1B3E]" />
            <a href="tel:07858509789" className="text-[#00083D] font-[500]  text-[19px]">
              07858 509 789
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}