"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Award, 
  Compass, 
  Users, 
  ArrowRight, 
  Flame, 
  Coins, 
  GraduationCap, 
  Ticket, 
  Database, 
  Heart, 
  Sparkles, 
  BookOpen, 
  User, 
  CheckCircle2, 
  ChevronRight, 
  Quote, 
  Sparkle,
  Bookmark
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Header from "@/components/Header";

type PillarKey = "character" | "career" | "community";

export default function Home() {
  // 3C Pillars scroll ref and active state
  const pillarsRef = useRef<HTMLDivElement>(null);
  const [activePillar, setActivePillar] = useState<PillarKey>("character");

  // 3C Pillars content data
  const pillarsData = {
    character: {
      title: "Character",
      urduTitle: "کردار",
      themeColor: "from-[#0A9EDE] to-[#056E9B]",
      accentColor: "#0A9EDE",
      bgColor: "bg-[#F0F9FF]",
      icon: Compass,
      description: "Building moral and ethical strength drawn from the Qur'an and Seerah. YDC instills accountability, empathy, and integrity in South Punjab's youth.",
      features: [
        "Weekly Islamic Study Circles & Mentor Sessions",
        "Socio-Behavioral Self-Evaluation Framework",
        "Earning moral badges through verified community contributions"
      ],
      stat: "Moral Framework Integration",
      statValue: "100%"
    },
    career: {
      title: "Career",
      urduTitle: "کیریئر",
      themeColor: "from-[#0BA242] to-[#066328]",
      accentColor: "#0BA242",
      bgColor: "bg-[#F0FDF4]",
      icon: GraduationCap,
      description: "Fostering self-reliance by offering top-tier IT training, professional development programs, and closing the gap between university education and modern jobs.",
      features: [
        "Practical programming, web development, and digital marketing tracks",
        "Resume building, professional communication, and mock interview setups",
        "Direct connection to regional corporate houses for job placement"
      ],
      stat: "Target Youth Trained (2030)",
      statValue: "1,200+"
    },
    community: {
      title: "Community",
      urduTitle: "خدمت",
      themeColor: "from-[#DD0408] to-[#990205]",
      accentColor: "#DD0408",
      bgColor: "bg-[#FFF5F5]",
      icon: Users,
      description: "Promoting social responsibility through organized Khidmat drives, local charity efforts, and regional youth projects that foster collaborative teamwork.",
      features: [
        "Daily good deeds uploading & tracking",
        "Weekly local community development campaigns",
        "A public community feed displaying volunteer-led solutions"
      ],
      stat: "Khidmat Drives Annually",
      statValue: "1,000+"
    }
  };

  // Scroll pinning calculation for desktop
  useEffect(() => {
    const handleScroll = () => {
      if (!pillarsRef.current) return;
      const rect = pillarsRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const topOffset = -rect.top;
      
      const totalScrollable = containerHeight - window.innerHeight;
      if (totalScrollable <= 0) return;
      
      const scrollRatio = topOffset / totalScrollable;
      
      if (scrollRatio >= 0 && scrollRatio <= 1) {
        if (scrollRatio < 0.33) {
          setActivePillar("character");
        } else if (scrollRatio < 0.66) {
          setActivePillar("career");
        } else {
          setActivePillar("community");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper when navigation buttons are clicked in scroll lock container
  const handlePillarClick = (key: PillarKey) => {
    if (!pillarsRef.current) return;
    const rect = pillarsRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerHeight = rect.height;
    const totalScrollable = containerHeight - window.innerHeight;
    
    let targetScroll = 0;
    if (key === "character") {
      targetScroll = scrollTop + rect.top;
    } else if (key === "career") {
      targetScroll = scrollTop + rect.top + totalScrollable * 0.45;
    } else if (key === "community") {
      targetScroll = scrollTop + rect.top + totalScrollable * 0.9;
    }
    
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#1D1D1D] selection:bg-[#1D1D1D] selection:text-white antialiased">
      {/* Floating Navbar Pill */}
      <Header />

      {/* Section 1: The Hero Area */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center w-full overflow-hidden pt-36 md:pt-44 pb-20 md:pb-24">
        {/* Dotted Grid Background */}
        <div className="dot-grid absolute inset-0 opacity-40 z-0 pointer-events-none"></div>

        {/* Soft Background Radial Glowing Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#0A9EDE]/8 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-20 -right-40 w-[450px] h-[450px] rounded-full bg-[#DD0408]/6 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-[30%] left-[40%] w-[350px] h-[350px] rounded-full bg-[#0BA242]/5 blur-[100px] pointer-events-none"></div>

        {/* Background Watermark Logo */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.035]">
          <img src="/icontransparent.png" alt="" className="w-[800px] h-auto scale-150 animate-[spin_120s_linear_infinite]" />
        </div>
        
        <div className="fluid-bottom-gradient"></div>

        <div className="relative z-10 px-4 md:px-6 max-w-7xl mx-auto w-full">

          {/* Urdu Subtitle */}
          <div className="flex flex-row-reverse flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 mb-6 md:mb-8 font-nastaliq text-base sm:text-lg md:text-2xl leading-loose">
            <span className="text-[#0A9EDE] transition-all hover:scale-105 duration-300">یقینِ محکم</span>
            <span className="text-[#888888] text-[10px] md:text-xs opacity-50 font-sans select-none">•</span>
            <span className="text-[#0BA242] transition-all hover:scale-105 duration-300">عملِ پیہم</span>
            <span className="text-[#888888] text-[10px] md:text-xs opacity-50 font-sans select-none">•</span>
            <span className="text-[#DD0408] transition-all hover:scale-105 duration-300">محبت فاتحِ عالم</span>
          </div>

          {/* Main Hero Header */}
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-normal text-[#1D1D1D] mb-8 leading-[1.25] md:leading-[1.2] max-w-5xl mx-auto">
            Inspiration Drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A9EDE] via-[#DD0408] to-[#C5A059]">Transformation.</span>
          </h1>

          <p className="text-base md:text-xl text-[#555555] max-w-3xl mx-auto mb-10 leading-relaxed px-2 md:px-0">
            A visionary socio-behavioral initiative designed to engage, train, and structurally empower educated youth across South Punjab with character, modern careers, and community values.
          </p>

          {/* Luxury CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
            <a href="https://portal.ydc.org.pk/auth/signup" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-[#1D1D1D] hover:bg-black text-white rounded-full px-8 shadow-xl shadow-black/10 transition-all hover:-translate-y-1 hover:shadow-black/20 group" rightIcon={<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}>
                Join the Movement
              </Button>
            </a>
            <a href="#pillars" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-full px-8 transition-all hover:-translate-y-1">
                Explore Our Core Pillars
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Core Challenge & Vision */}
      <section id="vision" className="py-24 md:py-32 border-t border-[#E5E5E5] bg-[#FAFAFA] relative overflow-hidden scroll-mt-28">
        {/* subtle grid background */}
        <div className="dot-grid absolute inset-0 opacity-[0.02] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Header with floating badge */}
          <div className="flex flex-col items-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white border border-[#E5E5E5] shadow-sm mb-6 transition-transform hover:scale-[1.02] duration-300">
              <span className="font-nastaliq text-base md:text-lg text-[#0A9EDE] leading-none select-none">
                وقت کی آواز
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5E5E5] block"></span>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#555555]">
                Vision & Challenge
              </span>
            </div>
            <h2 className="text-3xl md:text-6xl font-black mb-5 text-[#1D1D1D] tracking-tight text-center max-w-4xl leading-[1.15]">
              Built for the Connected Generation
            </h2>
            <p className="text-sm md:text-lg text-[#555555] max-w-2xl mx-auto text-center leading-relaxed px-2">
              Bridging the gap between standard education and character excellence in South Punjab.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
            
            {/* The Challenge Card (Obsidian Dark Theme) */}
            <div className="relative p-8 md:p-12 rounded-[32px] bg-neutral-950 text-white border border-neutral-900 shadow-xl overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:border-red-950/40 transition-all duration-500 flex flex-col justify-between min-h-[440px]">
              
              {/* Subtle dark grid background & hover glow */}
              <div className="absolute inset-0 opacity-[0.03] dot-grid-dark pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(221,4,8,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-red-950/20 border border-red-900/40 flex items-center justify-center text-red-500 shadow-inner">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_#dc2626] animate-pulse"></span>
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-widest text-neutral-500 bg-neutral-900 px-3.5 py-1.5 rounded-full border border-neutral-800 select-none">
                    Current Gap
                  </span>
                </div>
                
                {/* Main Content */}
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight text-white group-hover:text-red-400 transition-colors duration-300">
                  The Challenge
                </h3>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-normal">
                  The youth of South Punjab face structural difficulties, including scarce employment prospects, a deficit of high-end specialized training, and a growing disconnect between standard academic curricula and actual real-world corporate demands.
                </p>
              </div>

              {/* Bottom Visual: Erratic Dashed Disconnected SVG Line */}
              <div className="mt-8 pt-6 border-t border-neutral-900/80 relative z-10">
                <svg className="w-full h-16 text-neutral-800" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="10" x2="300" y2="10" stroke="#1A1A1A" strokeDasharray="3 3" />
                  <line x1="0" y1="30" x2="300" y2="30" stroke="#1A1A1A" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="300" y2="50" stroke="#1A1A1A" strokeDasharray="3 3" />
                  
                  <path d="M10 20 L70 38 M95 32 L150 48 M175 38 L230 52 M255 42 L290 55" stroke="url(#redGrad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 4" className="group-hover:stroke-red-500 transition-colors duration-500" />
                  
                  <circle cx="70" cy="38" r="3" fill="#dc2626" />
                  <circle cx="150" cy="48" r="3" fill="#dc2626" />
                  <circle cx="230" cy="52" r="3" fill="#dc2626" />
                  <circle cx="290" cy="55" r="3" fill="#dc2626" />
                  <circle cx="290" cy="55" r="7" fill="#dc2626" fillOpacity="0.3" className="animate-ping" />
                  
                  <defs>
                    <linearGradient id="redGrad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ef4444" />
                      <stop offset="0.5" stopColor="#b91c1c" />
                      <stop offset="1" stopColor="#7f1d1d" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

            </div>

            {/* The Solution Card (Prism Glass / White canvas) */}
            <div className="relative p-8 md:p-12 rounded-[32px] bg-white border border-[#E5E5E5] shadow-xl overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 flex flex-col justify-between min-h-[440px]">
              
              {/* Subtle grid background & blue hover glow */}
              <div className="absolute inset-0 opacity-[0.02] dot-grid pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,158,222,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 shadow-inner">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0A9EDE] shadow-[0_0_10px_rgba(10,158,222,0.8)]"></span>
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-widest text-[#0A9EDE] bg-blue-50/50 px-3.5 py-1.5 rounded-full border border-blue-100 select-none">
                    YDC Ecosystem
                  </span>
                </div>
                
                {/* Main Content */}
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight text-[#1D1D1D] group-hover:text-[#0A9EDE] transition-colors duration-300">
                  The Solution
                </h3>
                <p className="text-[#555555] text-sm md:text-base leading-relaxed font-normal">
                  We understand the digital generation. You are purpose-driven, tech-literate, and socially conscious. YDC orchestrates a customized solution that consolidates intellectual skills, daily character development, and physical volunteer service.
                </p>
              </div>

              {/* Bottom Visual: Smooth Connected Gradient Line Graph */}
              <div className="mt-8 pt-6 border-t border-neutral-100 relative z-10">
                <svg className="w-full h-16 text-blue-100" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="10" x2="300" y2="10" stroke="#F8FAFC" strokeDasharray="3 3" />
                  <line x1="0" y1="30" x2="300" y2="30" stroke="#F8FAFC" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="300" y2="50" stroke="#F8FAFC" strokeDasharray="3 3" />
                  
                  <path d="M10 50 C80 50, 100 20, 150 20 C200 20, 220 10, 290 10" stroke="url(#blueGrad)" strokeWidth="3" strokeLinecap="round" />
                  <path d="M10 50 C80 50, 100 20, 150 20 C200 20, 220 10, 290 10 L290 60 L10 60 Z" fill="url(#blueAreaGrad)" opacity="0.08" className="group-hover:opacity-12 transition-opacity duration-300" />
                  
                  <circle cx="70" cy="42" r="5" fill="#0A9EDE" stroke="#fff" strokeWidth="1.5" className="filter drop-shadow-sm group-hover:scale-110 transition-transform" />
                  <circle cx="150" cy="20" r="5" fill="#0BA242" stroke="#fff" strokeWidth="1.5" className="filter drop-shadow-sm group-hover:scale-110 transition-transform" />
                  <circle cx="230" cy="14" r="5" fill="#DD0408" stroke="#fff" strokeWidth="1.5" className="filter drop-shadow-sm group-hover:scale-110 transition-transform" />
                  
                  <defs>
                    <linearGradient id="blueGrad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0A9EDE" />
                      <stop offset="0.5" stopColor="#0BA242" />
                      <stop offset="1" stopColor="#DD0408" />
                    </linearGradient>
                    <linearGradient id="blueAreaGrad" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0A9EDE" stopOpacity="0.4" />
                      <stop offset="1" stopColor="#0A9EDE" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Our Three Pillars (Scroll-Pinning for Desktop, Stacked for Mobile) */}
      <section id="pillars" className="w-full relative">
        
        {/* DESKTOP LAYOUT (Sticky Scroll Locking, 300vh Container) */}
        <div ref={pillarsRef} className="hidden md:block h-[300vh] relative bg-white border-t border-[#E5E5E5]">
          <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-24 md:pt-28 pb-8">
            
            {/* Soft decorative background orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FAFAFA] rounded-full blur-3xl opacity-60 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
              
              {/* Header */}
              <div className="text-center mb-6 md:mb-8">
                <span className="text-xs font-extrabold tracking-widest text-[#555555] uppercase block mb-1.5">Our Core Methodology</span>
                <h2 className="text-3xl md:text-5xl font-black text-[#1D1D1D] tracking-tight mb-2">The 3C Program Model</h2>
                <p className="text-[#555555] text-sm max-w-lg mx-auto">
                  Our structural framework revolves around three vital pillars of personal growth. Scroll down to cycle through each.
                </p>
              </div>

              {/* Selector Tabs (Updates dynamically on scroll, clickable to jump) */}
              <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-6">
                {(Object.keys(pillarsData) as PillarKey[]).map((key) => {
                  const item = pillarsData[key];
                  const isActive = activePillar === key;
                  return (
                    <button
                      key={key}
                      onClick={() => handlePillarClick(key)}
                      className={`relative py-3 px-4 rounded-2xl text-center border font-bold text-base transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                        isActive 
                          ? "bg-[#1D1D1D] border-[#1D1D1D] text-white shadow-xl shadow-black/10 scale-[1.03]" 
                          : "bg-[#FAFAFA] border-[#E5E5E5] text-[#555555] hover:bg-[#F5F5F5]"
                      }`}
                    >
                      <item.icon className={isActive ? "text-white" : "text-[#1D1D1D]"} size={22} />
                      <span>{item.title}</span>
                      <span className="text-[10px] tracking-wider uppercase font-nastaliq block opacity-85">{item.urduTitle}</span>
                    </button>
                  );
                })}
              </div>

              {/* Card Container */}
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-[32px] border border-[#E5E5E5] bg-[#FAFAFA] p-6 md:p-10 overflow-hidden shadow-xl transition-all duration-500 min-h-[340px] flex items-center">
                  
                  {/* Color strip accent */}
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${pillarsData[activePillar].themeColor}`}></div>

                  {/* Urdu Watermark */}
                  <div className="absolute right-6 bottom-[-30px] font-nastaliq text-[280px] text-[#1D1D1D] opacity-[0.035] pointer-events-none select-none">
                    {pillarsData[activePillar].urduTitle}
                  </div>

                  <div className="grid md:grid-cols-12 gap-8 items-center w-full relative z-10 animate-fade-in">
                    <div className="md:col-span-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-white border border-[#E5E5E5] shadow-sm" style={{ color: pillarsData[activePillar].accentColor }}>
                          {React.createElement(pillarsData[activePillar].icon, { size: 24 })}
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-[#1D1D1D]">
                          {pillarsData[activePillar].title} Pillar
                        </span>
                      </div>

                      <p className="text-base text-[#555555] leading-relaxed mb-6">
                        {pillarsData[activePillar].description}
                      </p>

                      <h4 className="font-bold text-[#1D1D1D] mb-3 text-xs uppercase tracking-wider">Key Objectives</h4>
                      <ul className="space-y-3">
                        {pillarsData[activePillar].features.map((feat, index) => (
                          <li key={index} className="flex items-start gap-2.5 text-sm text-[#444444]">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: pillarsData[activePillar].accentColor }} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm min-h-[200px]">
                      <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">
                        {pillarsData[activePillar].stat}
                      </span>
                      <span className="text-5xl font-black tracking-tight" style={{ color: pillarsData[activePillar].accentColor }}>
                        {pillarsData[activePillar].statValue}
                      </span>
                      <div className="h-1.5 w-10 rounded-full mt-4" style={{ backgroundColor: pillarsData[activePillar].accentColor }}></div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

        {/* MOBILE LAYOUT (Stacked vertical list of all 3 cards) */}
        <div className="block md:hidden py-16 px-4 bg-white border-t border-[#E5E5E5] space-y-8">
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold tracking-widest text-[#555555] uppercase block mb-2">Our Core Methodology</span>
            <h2 className="text-3xl font-black text-[#1D1D1D] tracking-tight">The 3C Program Model</h2>
          </div>

          {(Object.keys(pillarsData) as PillarKey[]).map((key) => {
            const item = pillarsData[key];
            return (
              <div key={key} className="relative rounded-3xl border border-[#E5E5E5] bg-[#FAFAFA] p-6 overflow-hidden shadow-md">
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.themeColor}`}></div>

                {/* Urdu Watermark */}
                <div className="absolute right-4 bottom-[-20px] font-nastaliq text-[180px] text-[#1D1D1D] opacity-[0.035] pointer-events-none select-none">
                  {item.urduTitle}
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-[#E5E5E5] shadow-sm" style={{ color: item.accentColor }}>
                      {React.createElement(item.icon, { size: 20 })}
                    </div>
                    <span className="text-xl font-bold tracking-tight text-[#1D1D1D]">
                      {item.title}
                    </span>
                  </div>

                  <p className="text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="font-bold text-[#1D1D1D] text-xs uppercase tracking-wider mb-2">Objectives</h4>
                    <ul className="space-y-2">
                      {item.features.map((feat, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-[#444444]">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: item.accentColor }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#E5E5E5]/60 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-[#888888] uppercase tracking-wider">{item.stat}</span>
                    <span className="text-xl font-black" style={{ color: item.accentColor }}>{item.statValue}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* Section 4: The Core Concept Section */}
      <section id="concept" className="py-20 md:py-28 border-t border-[#E5E5E5] bg-[#1D1D1D] text-white relative overflow-hidden">
        {/* Dark dot grid */}
        <div className="dot-grid-dark absolute inset-0 opacity-40 pointer-events-none"></div>

        {/* Soft Background glows */}
        <div className="absolute top-[20%] -left-40 w-96 h-96 rounded-full bg-[#0A9EDE]/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-20%] w-[500px] h-[500px] rounded-full bg-[#DD0408]/5 blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="mb-2">
              <span className="font-nastaliq text-2xl md:text-3xl text-[#0A9EDE]">
                بنیادی تصور
              </span>
            </div>
            <h2 className="text-3xl md:text-6xl font-bold mb-4 tracking-tight">The Core Concept</h2>
            <p className="text-sm md:text-lg text-[#A3A3A3] max-w-2xl mx-auto px-2">
              The thought behind the initiative: transforming individual character to build a visionary community.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            
            {/* Card 1: Sincerity (الاخلاص) */}
            <div className="bg-[#222222]/80 border border-[#333333] p-8 rounded-3xl relative overflow-hidden group hover:border-white/10 hover:shadow-[0_20px_40px_-20px_rgba(10,158,222,0.25)] transition-all duration-300 flex flex-col min-h-[280px]">
              <div className="absolute top-0 right-0 w-2.5 h-full bg-[#0A9EDE]/20 group-hover:bg-[#0A9EDE]/40 transition-colors"></div>
              
              <div className="flex items-center gap-2 mb-6">
                <Bookmark className="text-[#0A9EDE]" size={18} />
                <span className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider">Sincerity / الاخلاص</span>
              </div>

              {/* Quranic Arabic Verse */}
              <div className="mb-4 text-right" dir="rtl">
                <span className="font-nastaliq text-xl sm:text-2xl text-white tracking-wide leading-relaxed font-semibold">
                  مُخْلِصِينَ لَهُ الدِّينَ
                </span>
                <span className="text-[10px] text-[#888888] font-sans block mt-1">(البينة: 5)</span>
              </div>

              {/* English Description */}
              <p className="text-[#A3A3A3] text-sm leading-relaxed mt-auto pt-4 border-t border-[#333333]">
                Purifying your intent—working solely for the pleasure of the Creator, free from self-interest or validation.
              </p>
            </div>

            {/* Card 2: Insight (البصيرة) */}
            <div className="bg-[#222222]/80 border border-[#333333] p-8 rounded-3xl relative overflow-hidden group hover:border-white/10 hover:shadow-[0_20px_40px_-20px_rgba(11,162,66,0.25)] transition-all duration-300 flex flex-col min-h-[280px]">
              <div className="absolute top-0 right-0 w-2.5 h-full bg-[#0BA242]/20 group-hover:bg-[#0BA242]/40 transition-colors"></div>
              
              <div className="flex items-center gap-2 mb-6">
                <Bookmark className="text-[#0BA242]" size={18} />
                <span className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider">Insight / البصيرة</span>
              </div>

              {/* Quranic Arabic Verse */}
              <div className="mb-4 text-right" dir="rtl">
                <span className="font-nastaliq text-xl sm:text-2xl text-white tracking-wide leading-relaxed font-semibold">
                  أَدْعُو إِلَى اللَّهِ ۚ عَلَىٰ بَصِيرَةٍ
                </span>
                <span className="text-[10px] text-[#888888] font-sans block mt-1">(يوسف: 108)</span>
              </div>

              {/* English Description */}
              <p className="text-[#A3A3A3] text-sm leading-relaxed mt-auto pt-4 border-t border-[#333333]">
                Cultivating deep wisdom—discerning truth from falsehood to navigate complex modern challenges.
              </p>
            </div>

            {/* Card 3: Steadfastness (الاستقامة) */}
            <div className="bg-[#222222]/80 border border-[#333333] p-8 rounded-3xl relative overflow-hidden group hover:border-white/10 hover:shadow-[0_20px_40px_-20px_rgba(221,4,8,0.25)] transition-all duration-300 flex flex-col min-h-[280px]">
              <div className="absolute top-0 right-0 w-2.5 h-full bg-[#DD0408]/20 group-hover:bg-[#DD0408]/40 transition-colors"></div>
              
              <div className="flex items-center gap-2 mb-6">
                <Bookmark className="text-[#DD0408]" size={18} />
                <span className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider">Steadfastness / الاستقامة</span>
              </div>

              {/* Quranic Arabic Verse */}
              <div className="mb-4 text-right" dir="rtl">
                <span className="font-nastaliq text-xl sm:text-2xl text-white tracking-wide leading-relaxed font-semibold">
                  ثُمَّ اسْتَقَامُوا
                </span>
                <span className="text-[10px] text-[#888888] font-sans block mt-1">(فصلت: 30)</span>
              </div>

              {/* English Description */}
              <p className="text-[#A3A3A3] text-sm leading-relaxed mt-auto pt-4 border-t border-[#333333]">
                Remaining unbroken—standing firm on your principles and dedication, through any adversity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 5: Memorial Section (In Loving Memory of Rao Muhammad Zafar (Late)) */}
      <section className="py-20 md:py-28 border-t border-[#E5E5E5] bg-[#FCFBF9] relative overflow-hidden">
        {/* Subtle decorative dot pattern */}
        <div className="dot-grid absolute inset-0 opacity-[0.03] pointer-events-none"></div>
        
        {/* Top/Bottom Radial glows for respect & serenity */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0A9EDE]/3 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            
            {/* Photo Frame (Left column) */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group select-none">
                {/* Frame ambient background glow */}
                <div className="absolute inset-0 bg-[#0A9EDE]/8 rounded-[32px] blur-2xl group-hover:bg-[#0A9EDE]/12 transition-all duration-500"></div>
                
                {/* Classic Framed Picture container */}
                <div className="memorial-frame w-[280px] sm:w-[320px] transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="memorial-inner-frame">
                    <img 
                      src="/raomuhammadzafar.jpg" 
                      alt="Rao Muhammad Zafar" 
                      className="w-full h-auto object-cover aspect-[4/5] filter grayscale contrast-125 brightness-95 group-hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                  
                  {/* Photo Title */}
                  <div className="text-center mt-4">
                    <h3 className="font-serif text-lg font-bold text-[#1D1D1D] tracking-wide">
                      Rao Muhammad Zafar
                    </h3>
                    <p className="text-xs text-[#0A9EDE] uppercase tracking-widest mt-1 font-semibold">
                      (Late)
                    </p>
                  </div>
                </div>

                {/* Decorative Photo Corner Accents */}
                <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#0A9EDE]/25"></div>
                <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#0A9EDE]/25"></div>
                <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#0A9EDE]/25"></div>
                <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#0A9EDE]/25"></div>
              </div>
            </div>

            {/* Dedication & Quotes (Right column) */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="text-[#DD0408] fill-[#DD0408]/10" size={18} />
                <span className="text-xs font-bold text-[#0A9EDE] tracking-wider uppercase">In Loving Memory</span>
              </div>

              {/* Decorative Quote block */}
              <div className="relative">
                <Quote className="absolute -top-7 -left-7 text-[#0A9EDE]/10 rotate-180 w-16 h-16 pointer-events-none" />
                <blockquote className="font-serif text-xl sm:text-2xl text-[#1D1D1D] italic leading-relaxed mb-6 relative z-10">
                  &ldquo;His vision remains our guiding light. He believed that the ultimate purpose of education is not merely to earn a livelihood, but to build a character that serves humanity.&rdquo;
                </blockquote>

                <div className="h-[2px] w-16 bg-gradient-to-r from-[#0A9EDE] via-[#DD0408] to-[#0BA242] mb-6"></div>

                <p className="text-sm md:text-base text-[#555555] leading-relaxed mb-4">
                  Rao Muhammad Zafar was a dedicated educator, social reformer, and the structural guide behind the ideals of the Youth Development Chapter. His lifetime commitment to public service and youth empowerment continues to shape our mission.
                </p>

                <p className="text-xs text-[#888888] font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
                  Mentor <span>&bull;</span> Guide <span>&bull;</span> Visionary
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 6: Final CTA & 5-Year Vision */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-[0.02] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="mb-4">
            <span className="font-nastaliq text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#DD0408] to-[#0A9EDE]">
              مستقبل کے معمار
            </span>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-black text-[#1D1D1D] mb-6 leading-tight tracking-tight">Shape the Future.</h2>
          
          <p className="text-base md:text-xl text-[#555555] leading-relaxed mb-10 px-2 sm:px-0">
            Be part of our 5-Year Plan (2026–2030) to expose <strong className="text-[#1D1D1D]">10,000+</strong> youth to the Islamic worldview annually and train <strong className="text-[#1D1D1D]">1,200+</strong> youth for professional jobs.
          </p>

          <a href="https://portal.ydc.org.pk/auth/signup" className="inline-block w-full sm:w-auto px-4 sm:px-0">
            <Button size="lg" className="w-full sm:w-auto px-10 py-5 text-base sm:text-lg bg-[#1D1D1D] hover:bg-black text-white rounded-full shadow-2xl shadow-black/15 transition-transform hover:-translate-y-1">
              Create Your Profile Today
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5E5E5] py-12 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[#555555] text-sm">
            &copy; {new Date().getFullYear()} Youth Development Center (YDC). All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-[#555555]">
            <a href="#vision" className="hover:text-[#1D1D1D] transition-colors">Vision</a>
            <a href="#pillars" className="hover:text-[#1D1D1D] transition-colors">Methodology</a>
            <a href="#concept" className="hover:text-[#1D1D1D] transition-colors">Core Concept</a>
            <a href="/privacy-policy" className="hover:text-[#1D1D1D] transition-colors">Privacy Policy</a>
            <a href="/data-deletion" className="hover:text-[#1D1D1D] transition-colors">Data Deletion</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
