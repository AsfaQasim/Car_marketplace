"use client";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#E9F4F9] py-16 px-6 md:px-20 text-[#0D1B3E]">
      <div className="max-w-[1200px] mx-auto">

        {/* 1. Top Disclaimer Text */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-[13px] md:text-[15px] leading-relaxed text-gray-500 font-medium">
            All finance is subject to status and income. Applicants must be 18 or over.
            We look to find the best rate from our panel of lenders and will offer you the
            best deal that you're eligible for. We don't charge a fee for our service,
            but we do earn a commission. This does not influence the interest rate
            you're offered in any way.
          </p>
        </div>

        {/* 2. Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          <div className="flex flex-col justify-center items-center md:items-start gap-6">
            <div className="w-48">
              <Image
                src="/exclusive.webp"
                alt="Exclusive Car Finance"
                width={200}
                height={60}
                className="object-contain grayscale contrast-125"
              />
            </div>

            <div className="bg-[#0D1B3E] w-9 h-9 rounded-xl flex items-center justify-center mx-12 hover:bg-[#14D39A] transition-all duration-300 cursor-pointer shadow-lg">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1.4em"
                width="1.4em"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05-6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path>
              </svg>
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-[1000] mb-6 uppercase tracking-tight">Quick Links</h4>
            <ul className="space-y-4 font-bold text-[15px]">
              <li className="hover:text-[#14D39A] cursor-pointer transition-colors">Home</li>
              <li className="hover:text-[#14D39A] cursor-pointer transition-colors">Finance Calculator</li>
              <li className="hover:text-[#14D39A] cursor-pointer transition-colors">Types of Finance</li>
              <li className="hover:text-[#14D39A] cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Right Column: Lenders & Legal */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-[1000] mb-2 uppercase tracking-tight leading-tight">
              We compare the best
            </h4>
            <h4 className="text-xl font-[1000] mb-6 uppercase tracking-tight leading-tight">
              deals from over lenders
            </h4>

            <div className="flex flex-row items-center justify-center md:justify-start gap-2 mb-8 opacity-70 hover:opacity-100 transition-opacity duration-300 flex-nowrap overflow-visible">
              <div className="relative w-20 h-10 flex-shrink-0">
                <Image src="/lenders1.webp" alt="Autolend" fill className="object-contain" />
              </div>
              <div className="relative w-24 h-10 flex-shrink-0">
                <Image src="/lenders2.webp" alt="V12" fill className="object-contain" />
              </div>
              <div className="relative w-28 h-10 flex-shrink-0">
                <Image src="/lenders3.webp" alt="Close Brothers" fill className="object-contain" />
              </div>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[13px] font-bold text-slate-500">
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
              <span className="hover:underline cursor-pointer">Complaints Policy</span>
              <span className="hover:underline cursor-pointer">Terms & Conditions</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}