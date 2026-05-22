"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header
        className={`w-full max-w-5xl bg-white/90 backdrop-blur-xl border border-[#E5E5E5] shadow-xl shadow-black/5 px-4 md:px-8 flex flex-col pointer-events-auto transition-all duration-300 ${
          isMenuOpen ? "rounded-3xl py-4 h-auto" : "rounded-full h-16 md:h-20 justify-center"
        }`}
      >
        <div className="flex items-center justify-between w-full h-16 md:h-20 shrink-0">
          <div className="flex items-center gap-2">
            <img src="/logocolor.png" alt="YDC Logo" className="h-10 md:h-14 w-auto drop-shadow-sm" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-base font-semibold text-[#555555]">
            <a href="#vision" className="hover:text-[#0A9EDE] transition-colors">Our Vision</a>
            <a href="#pillars" className="hover:text-[#0A9EDE] transition-colors">Methodology</a>
            <a href="#app" className="hover:text-[#0A9EDE] transition-colors">Digital Ecosystem</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 md:gap-5">
            <a 
              href="https://portal.ydc.etc/auth/login" 
              className="hidden md:inline-block text-sm md:text-base font-bold px-2 md:px-4 py-2 text-[#555555] hover:text-[#0A9EDE] transition-colors"
            >
              Sign In
            </a>
            
            {/* Desktop Join Button */}
            <a href="https://portal.ydc.etc/auth/signup" className="hidden sm:block">
              <Button className="bg-[#0A9EDE] hover:bg-[#098bc1] text-white rounded-full px-6 text-sm shadow-lg shadow-[#0A9EDE]/20 transition-transform hover:-translate-y-0.5" size="md">
                Join the Movement
              </Button>
            </a>
            
            {/* Mobile Join Button (Compact) */}
            <a href="https://portal.ydc.etc/auth/signup" className="sm:hidden">
              <Button className="bg-[#0A9EDE] hover:bg-[#098bc1] text-white rounded-full px-4 text-xs shadow-lg shadow-[#0A9EDE]/20 transition-transform" size="sm">
                Join
              </Button>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#555555] hover:text-[#0A9EDE] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-5 pt-4 pb-2 border-t border-[#E5E5E5]/60 mt-2 w-full animate-in fade-in slide-in-from-top-3 duration-250">
            <a
              href="#vision"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-semibold text-[#555555] hover:text-[#0A9EDE] transition-colors px-2"
            >
              Our Vision
            </a>
            <a
              href="#pillars"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-semibold text-[#555555] hover:text-[#0A9EDE] transition-colors px-2"
            >
              Methodology
            </a>
            <a
              href="#app"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-semibold text-[#555555] hover:text-[#0A9EDE] transition-colors px-2"
            >
              Digital Ecosystem
            </a>
            
            <div className="h-[1px] bg-[#E5E5E5] w-full my-1"></div>
            
            <a
              href="https://portal.ydc.etc/auth/login"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-bold text-[#555555] hover:text-[#0A9EDE] transition-colors px-2"
            >
              Sign In
            </a>
            
            <a
              href="https://portal.ydc.etc/auth/signup"
              onClick={() => setIsMenuOpen(false)}
              className="w-full px-2"
            >
              <Button className="w-full bg-[#0A9EDE] hover:bg-[#098bc1] text-white rounded-full py-3 shadow-lg shadow-[#0A9EDE]/20 transition-transform" size="md">
                Join the Movement
              </Button>
            </a>
          </div>
        )}
      </header>
    </div>
  );
}
