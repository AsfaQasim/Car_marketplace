"use client";
import React, { useState } from 'react';
import { Mail, Phone, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Finance Calculator", href: "/finance-calculator" },
    { name: "Types of Finance", href: "/type-of-finance" },
    { name: "Help & Advice", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] font-sans shadow-md">
      
      {/* 1. Top Nav: Desktop (Hidden on Mobile) */}
      <div className="hidden lg:block bg-[#00083D] text-white py-4 px-10">
        <nav className="max-w-[1400px] mx-auto flex justify-between items-center text-[13px] font-[500] uppercase tracking-[0.1em]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#14D39A] transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* 2. Main Nav: Mobile & Desktop Branding */}
      <div className="bg-[#E9F0FF] py-4 px-6 md:px-10 border-b border-blue-100">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">

          {/* LOGO (LEFT) */}
          <Link href="/" className="flex flex-col items-center leading-none group cursor-pointer">
            <div className="w-8 h-8 md:w-10 md:h-10 border-[3px] border-[#0D1B3E] rounded-full flex items-center justify-center mb-1 transition-transform group-hover:scale-105">
              <span className="font-black text-lg md:text-xl text-[#0D1B3E]">E</span>
            </div>
            <span className="text-sm md:text-xl font-[1000] text-[#0D1B3E] tracking-tighter uppercase leading-none">
              EXCLUSIVE
            </span>
          </Link>

          {/* MOBILE HAMBURGER (CENTERED ON MOBILE) */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#0D1B3E] hover:bg-blue-100 rounded-md transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* EMAIL & PHONE (RIGHT - HIDDEN ON SMALL MOBILE) */}
          <div className="hidden sm:flex items-center gap-6">
            <div className="hidden md:flex items-center gap-3">
              <div className="bg-black p-2 rounded-md">
                <Mail size={18} className="text-white" />
              </div>
              <a href="mailto:sales@exclusivecarfinance.com" className="text-[#00083D] font-bold text-center  text-[14px]">
                sales@exclusivecarfinance.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={24} className="text-[#0D1B3E] fill-[#0D1B3E]" />
              <a href="tel:07858509789" className="text-[#00083D] font-bold text-[16px] md:text-[19px]">
                07858 509 789
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 3. MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="lg:hidden bg-[#00083D] text-white w-full py-6 px-10 absolute top-full left-0 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold uppercase tracking-widest hover:text-[#14D39A]"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-gray-700" />
            <div className="flex flex-col gap-4 items-center">
              <a href="tel:07858509789" className="flex items-center gap-2 text-[#14D39A] font-bold">
                <Phone size={18} /> 07858 509 789
              </a>
              <a href="mailto:sales@exclusivecarfinance.com" className="text-sm opacity-70">
                sales@exclusivecarfinance.com
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}