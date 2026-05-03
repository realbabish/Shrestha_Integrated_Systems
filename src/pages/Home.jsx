import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, Globe, ChevronRight, 
  Server, Cpu, Camera, Clock, Terminal, Bot, Activity,
  Lock, Network, Zap
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// --- 1. AUDIT BANNER ---
const AuditBanner = () => (
  <div className="relative z-20 -mt-8 md:-mt-16 px-4 sm:px-6 animate-slide-up-delayed w-full max-w-[100vw]">
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl border border-zinc-200 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-1.5 md:w-2 h-full bg-yellow-400" />
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-6 md:gap-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
          <div className="p-3 md:p-4 bg-yellow-400/10 text-yellow-600 rounded-full shrink-0 border border-yellow-400/20">
            <Clock size={28} className="md:w-8 md:h-8" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-black text-zinc-900 uppercase tracking-tight">
              Free 15-Minute System Audit
            </h3>
            <p className="text-zinc-500 font-medium text-xs md:text-sm mt-2 md:mt-1 max-w-xl leading-relaxed px-2 md:px-0">
              Identify legacy hardware bottlenecks and security vulnerabilities in your perimeter. Direct intake with engineering—no sales scripts.
            </p>
          </div>
        </div>
        <Link 
          to="/Quote" 
          className="w-full md:w-auto text-center bg-zinc-900 text-white px-8 md:px-10 py-4 md:py-5 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-yellow-400 hover:text-black transition-all rounded-lg shadow-xl"
        >
          Initialize Request
        </Link>
      </div>
    </div>
  </div>
);

// --- 2. BRAND MARQUEE ---
const TechStack = () => {
  const brands = ["AVIGILON", "GENETEC", "UBIQUITI", "CISCO", "ICT PROTEGE", "MERCURY", "HID", "HONEYWELL", "NVIDIA JETSON"];
  const marqueeBrands = [...brands, ...brands];

  return (
    <div className="bg-zinc-50 py-12 md:py-16 border-y border-zinc-200 relative overflow-hidden mt-12 md:mt-20 w-full">
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />
      
      <p className="text-center text-zinc-400 font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] mb-8 md:mb-10 px-4">
        Authorized Deployment & Integration For
      </p>
      
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {marqueeBrands.map((b, i) => (
            <div key={i} className="flex items-center gap-3 md:gap-4 mx-4 md:mx-8 cursor-default">
              <div className="w-1.5 h-1.5 bg-yellow-400 rotate-45 shrink-0" />
              <span className="text-xl md:text-3xl font-black text-zinc-300 uppercase tracking-tighter hover:text-zinc-900 transition-colors">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 3. BENTO GRID ---
const BentoGrid = () => {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      <div className="mb-12 md:mb-16 border-l-4 border-yellow-400 pl-4 md:pl-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-zinc-900 leading-[1.1] md:leading-none">
          Enterprise <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 italic">Integration</span>
        </h2>
        <p className="text-zinc-500 font-medium mt-4 max-w-2xl text-sm md:text-lg">
          We engineer the infrastructure that keeps facilities secure and data moving. Every cable traced, every neural network optimized.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:auto-rows-[300px]">
        
        {/* Box 1: AI (Large) */}
        <div className="md:col-span-2 bg-[#050608] rounded-2xl p-6 md:p-10 relative overflow-hidden group border border-zinc-800 shadow-2xl flex flex-col justify-end min-h-[320px] md:min-h-0">
          <div className="absolute top-0 right-0 p-4 md:p-8 opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-110 pointer-events-none">
            <Bot size={140} className="md:w-[180px] md:h-[180px] text-yellow-400" />
          </div>
          <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-400 font-mono text-[9px] md:text-[10px] uppercase tracking-widest font-black">Edge Computing</span>
          </div>
          <div className="relative z-10 w-full md:w-3/4 mt-12 md:mt-0">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-3 leading-tight">Custom AI Solutions</h3>
            <p className="text-zinc-400 font-medium text-sm leading-relaxed">
              Deploying low-latency LLMs and computer vision utilizing high-performance Jetson Nano hardware. We build autonomous receptionists and predictive analytics for modern enterprises.
            </p>
          </div>
        </div>

        {/* Box 2: Access Control (Tall) */}
        <div className="md:row-span-2 bg-yellow-400 rounded-2xl p-6 md:p-10 relative overflow-hidden group shadow-xl flex flex-col min-h-[280px] md:min-h-0">
          <ShieldCheck size={40} className="md:w-12 md:h-12 text-black mb-6 md:mb-8 shrink-0" />
          <h3 className="text-2xl md:text-3xl font-black uppercase text-black mb-3 md:mb-4 tracking-tight leading-none">Access <br/>Control</h3>
          <p className="text-black/70 font-bold text-xs md:text-sm leading-relaxed mb-auto">
            Frictionless biometric entry and HID mobile credentials. Total lockdown against threats utilizing ICT unified platforms.
          </p>
          <Link to="/Security" className="mt-6 md:mt-8 inline-flex items-center gap-2 text-black font-black uppercase text-[10px] md:text-xs tracking-widest hover:underline underline-offset-4 w-fit">
            Explore Security <ChevronRight size={16} />
          </Link>
        </div>

        {/* Box 3: Networking (Square) */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-10 relative overflow-hidden group shadow-lg min-h-[240px] md:min-h-0 flex flex-col">
          <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Network size={120} className="md:w-[140px] md:h-[140px] text-zinc-900" />
          </div>
          <Server size={28} className="md:w-8 md:h-8 text-blue-600 mb-4 md:mb-6 shrink-0" />
          <h3 className="text-xl md:text-2xl font-black uppercase text-zinc-900 mb-2 leading-tight">IT Networking</h3>
          <p className="text-zinc-500 font-medium text-xs md:text-sm leading-relaxed relative z-10">
            CCNA-certified routing, VLAN segmentation, and Ubiquiti long-range wireless backhauls.
          </p>
        </div>

        {/* Box 4: Video Surveillance (Square) */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 relative overflow-hidden group shadow-xl min-h-[240px] md:min-h-0 flex flex-col">
          <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 rounded-full animate-pulse" />
            <span className="text-red-500 font-mono text-[8px] md:text-[9px] uppercase tracking-widest">REC</span>
          </div>
          <Camera size={28} className="md:w-8 md:h-8 text-white mb-4 md:mb-6 shrink-0" />
          <h3 className="text-xl md:text-2xl font-black uppercase text-white mb-2 leading-tight">Video Analytics</h3>
          <p className="text-zinc-400 font-medium text-xs md:text-sm leading-relaxed relative z-10">
            Avigilon & Genetec deployments featuring LPR, facial recognition, and federated cloud VMS.
          </p>
        </div>

      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shrestha Integrated Systems | Edge AI, Security & IT Networking</title>
        <meta name="description" content="Professional installation of commercial CCTV, structured cabling, custom AI solutions, and access control across Ontario." />
      </Helmet>

      {/* Overflow-x-hidden on the main wrapper prevents ANY side-scrolling on mobile */}
      <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden w-full">
        <Navbar />
        
        <main className="w-full">
          {/* --- HERO --- */}
          <section className="bg-[#050608] pt-32 pb-24 md:pt-48 md:pb-40 px-4 sm:px-6 relative flex flex-col items-center text-center overflow-hidden w-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] opacity-20" />
            
            <div className="max-w-6xl mx-auto relative z-10 animate-fade-in-up mt-8 md:mt-0 w-full flex flex-col items-center">
              <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 mb-8 md:mb-10 text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] text-yellow-400 border border-yellow-400/20 rounded-full uppercase bg-yellow-400/5 shadow-[0_0_15px_rgba(250,204,21,0.1)]">
                <Terminal size={12} className="md:w-3.5 md:h-3.5 shrink-0" /> Systems Engineering & Deployment
              </div>
              
              {/* FLUID TYPOGRAPHY FIX: Uses '11vw' on mobile so it dynamically fits the screen width, preventing cutoff */}
              <h1 className="text-[11vw] sm:text-[9vw] md:text-[7rem] lg:text-[8.5rem] font-black uppercase tracking-tighter leading-[1.1] md:leading-[0.85] mb-8 md:mb-10 text-white w-full">
                <span className="block mb-1 md:mb-0">Hardened</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 italic block py-1">Infrastructure</span>
              </h1>
              
              <p className="text-zinc-400 text-sm sm:text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-10 md:mb-12 px-2 md:px-0">
                We engineer the physical layer of your business. From enterprise surveillance and zero-latency networking to autonomous AI hardware integration.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-md sm:max-w-none mx-auto">
                <Link to="/Quote" className="w-full sm:w-auto bg-yellow-400 text-black px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-white transition-all rounded-sm shadow-[0_0_20px_rgba(250,204,21,0.3)] text-center">
                  Initialize Project
                </Link>
                <Link to="/Networking" className="w-full sm:w-auto bg-transparent border-2 border-zinc-700 text-white px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:border-blue-500 hover:text-blue-400 transition-all rounded-sm text-center">
                  View Network Specs
                </Link>
              </div>
            </div>
          </section>

          <AuditBanner />
          <TechStack />
          <BentoGrid />

          {/* --- TECHNICAL AUTHORITY --- */}
          <section className="py-16 md:py-24 bg-zinc-900 border-y border-zinc-800 w-full">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-10 text-center">
               <div className="flex flex-col items-center gap-3">
                 <Globe className="text-yellow-400 mb-1 md:mb-2 shrink-0" size={28} />
                 <span className="text-white font-black uppercase tracking-widest text-sm md:text-base">Regional Coverage</span>
                 <span className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Niagara • Hamilton • GTA</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                 <Activity className="text-yellow-400 mb-1 md:mb-2 shrink-0" size={28} />
                 <span className="text-white font-black uppercase tracking-widest text-sm md:text-base">High Availability</span>
                 <span className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">99.9% Uptime SLA</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                 <Cpu className="text-yellow-400 mb-1 md:mb-2 shrink-0" size={28} />
                 <span className="text-white font-black uppercase tracking-widest text-sm md:text-base">Edge Processing</span>
                 <span className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Local AI Neural Nets</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                 <Lock className="text-yellow-400 mb-1 md:mb-2 shrink-0" size={28} />
                 <span className="text-white font-black uppercase tracking-widest text-sm md:text-base">Secure Handover</span>
                 <span className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Zero-Trust Architectures</span>
               </div>
            </div>
          </section>

          {/* --- FINAL CTA --- */}
          <section className="py-24 md:py-40 bg-yellow-400 border-t-[12px] md:border-t-[16px] border-black text-center px-4 sm:px-6 w-full">
            <div className="max-w-4xl mx-auto flex flex-col items-center w-full">
               {/* Using fluid text here too to prevent cutoff on small devices */}
               <h2 className="text-[10vw] sm:text-5xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[1] md:leading-[0.9] mb-6 md:mb-8 w-full">
                 Deploy Modern <br/>Systems
               </h2>
               <p className="text-black/70 font-black tracking-[0.2em] md:tracking-[0.3em] mb-10 md:mb-12 text-[10px] md:text-xs uppercase px-2 text-center w-full">
                 Direct Engineering Contact • No Middlemen
               </p>
               <Link to="/Quote" className="inline-flex items-center justify-center gap-3 md:gap-4 w-full sm:w-auto max-w-md bg-black text-white px-8 md:px-16 py-5 md:py-6 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-white hover:text-black transition-all shadow-2xl rounded-sm">
                 Commence Intake <ChevronRight size={16} className="md:w-5 md:h-5 shrink-0"/>
               </Link>
            </div>
          </section>
        </main>

        <Footer />

        <style>{`
          @keyframes fadeInUp { 
            from { opacity: 0; transform: translateY(20px); } 
            to { opacity: 1; transform: translateY(0); } 
          }
          .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
          
          @keyframes slideUpDelayed { 
            from { opacity: 0; transform: translateY(30px); } 
            to { opacity: 1; transform: translateY(0); } 
          }
          .animate-slide-up-delayed { animation: slideUpDelayed 0.8s ease-out 0.2s forwards; opacity: 0; }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee { animation: marquee 20s linear infinite; }
        `}</style>
      </div>
    </>
  );
}