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

// --- 1. AUDIT BANNER (Overlaps the Hero) ---
const AuditBanner = () => (
  <div className="relative z-20 -mt-16 px-6 animate-slide-up-delayed">
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl border border-zinc-200 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400" />
      <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-10 gap-8">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-yellow-400/10 text-yellow-600 rounded-full shrink-0 border border-yellow-400/20">
            <Clock size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">
              Free 15-Minute System Audit
            </h3>
            <p className="text-zinc-500 font-medium text-sm mt-1 max-w-xl leading-relaxed">
              Identify legacy hardware bottlenecks and security vulnerabilities in your perimeter. Direct intake with engineering—no sales scripts.
            </p>
          </div>
        </div>
        <Link 
          to="/Quote" 
          className="w-full md:w-auto text-center bg-zinc-900 text-white px-10 py-5 font-black uppercase tracking-[0.2em] text-xs hover:bg-yellow-400 hover:text-black transition-all rounded-lg whitespace-nowrap shadow-xl"
        >
          Initialize Request
        </Link>
      </div>
    </div>
  </div>
);

// --- 2. THE BRAND MARQUEE ---
const TechStack = () => {
  const brands = ["AVIGILON", "GENETEC", "UBIQUITI", "CISCO", "ICT PROTEGE", "MERCURY", "HID", "HONEYWELL", "NVIDIA JETSON"];
  const marqueeBrands = [...brands, ...brands];

  return (
    <div className="bg-zinc-50 py-16 border-y border-zinc-200 relative overflow-hidden mt-20">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10" />
      
      <p className="text-center text-zinc-400 font-black text-[10px] uppercase tracking-[0.4em] mb-10">
        Authorized Deployment & Integration For
      </p>
      
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {marqueeBrands.map((b, i) => (
            <div key={i} className="flex items-center gap-4 mx-8 cursor-default">
              <div className="w-1.5 h-1.5 bg-yellow-400 rotate-45" />
              <span className="text-2xl md:text-3xl font-black text-zinc-300 uppercase tracking-tighter hover:text-zinc-900 transition-colors">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 3. BENTO BOX CAPABILITIES GRID ---
const BentoGrid = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16 border-l-4 border-yellow-400 pl-6">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-900 leading-none">
          Enterprise <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 italic">Integration</span>
        </h2>
        <p className="text-zinc-500 font-medium mt-4 max-w-2xl text-lg">
          We engineer the infrastructure that keeps facilities secure and data moving. Every cable traced, every neural network optimized.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        
        {/* Box 1: AI & Automation (Large) */}
        <div className="md:col-span-2 bg-[#050608] rounded-2xl p-10 relative overflow-hidden group border border-zinc-800 shadow-2xl flex flex-col justify-end">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-110">
            <Bot size={180} className="text-yellow-400" />
          </div>
          <div className="absolute top-8 left-8 flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-400 font-mono text-[10px] uppercase tracking-widest font-black">Edge Computing</span>
          </div>
          <div className="relative z-10 w-3/4">
            <h3 className="text-3xl font-black uppercase text-white mb-3">Custom AI Solutions</h3>
            <p className="text-zinc-400 font-medium leading-relaxed">
              Deploying low-latency LLMs and computer vision utilizing high-performance Jetson Nano hardware. We build autonomous receptionists and predictive analytics for modern enterprises.
            </p>
          </div>
        </div>

        {/* Box 2: Access Control (Tall) */}
        <div className="md:row-span-2 bg-yellow-400 rounded-2xl p-10 relative overflow-hidden group shadow-xl flex flex-col">
          <ShieldCheck size={48} className="text-black mb-8" />
          <h3 className="text-3xl font-black uppercase text-black mb-4 tracking-tight">Access <br/>Control</h3>
          <p className="text-black/70 font-bold text-sm leading-relaxed mb-auto">
            Frictionless biometric entry and HID mobile credentials. Total lockdown against threats utilizing ICT unified platforms.
          </p>
          <Link to="/Security" className="mt-8 inline-flex items-center gap-2 text-black font-black uppercase text-xs tracking-widest group-hover:underline underline-offset-4">
            Explore Security <ChevronRight size={16} />
          </Link>
        </div>

        {/* Box 3: IT Networking (Square) */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-10 relative overflow-hidden group shadow-lg">
          <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Network size={140} className="text-zinc-900" />
          </div>
          <Server size={32} className="text-blue-600 mb-6" />
          <h3 className="text-2xl font-black uppercase text-zinc-900 mb-2">IT Networking</h3>
          <p className="text-zinc-500 font-medium text-sm leading-relaxed">
            CCNA-certified routing, VLAN segmentation, and Ubiquiti long-range wireless backhauls.
          </p>
        </div>

        {/* Box 4: Video Surveillance (Square) */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 relative overflow-hidden group shadow-xl">
          <div className="absolute top-6 right-6 flex items-center gap-2">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            <span className="text-red-500 font-mono text-[9px] uppercase tracking-widest">REC</span>
          </div>
          <Camera size={32} className="text-white mb-6" />
          <h3 className="text-2xl font-black uppercase text-white mb-2">Video Analytics</h3>
          <p className="text-zinc-400 font-medium text-sm leading-relaxed">
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

      <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
        <Navbar />
        
        <main>
          {/* --- REBUILT CINEMATIC HERO --- */}
          <section className="bg-[#050608] pt-48 pb-40 px-6 relative flex flex-col items-center text-center overflow-hidden">
            {/* Background Grid & Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
            
            <div className="max-w-5xl mx-auto relative z-10 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 text-[10px] font-black tracking-[0.3em] text-yellow-400 border border-yellow-400/20 rounded-full uppercase bg-yellow-400/5 shadow-[0_0_15px_rgba(250,204,21,0.1)]">
                <Terminal size={14} /> Systems Engineering & Deployment
              </div>
              
              <h1 className="text-6xl md:text-[7rem] lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-8 text-white">
                Hardened <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 italic">Infrastructure</span>
              </h1>
              
              <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-12">
                We engineer the physical layer of your business. From enterprise surveillance and zero-latency networking to autonomous AI hardware integration.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/Quote" className="w-full sm:w-auto bg-yellow-400 text-black px-12 py-5 font-black uppercase tracking-[0.2em] text-xs hover:bg-white transition-all rounded-sm shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                  Initialize Project
                </Link>
                <Link to="/Networking" className="w-full sm:w-auto bg-transparent border-2 border-zinc-700 text-white px-12 py-5 font-black uppercase tracking-[0.2em] text-xs hover:border-blue-500 hover:text-blue-400 transition-all rounded-sm">
                  View Network Specs
                </Link>
              </div>
            </div>
          </section>

          <AuditBanner />

          <TechStack />
          
          <BentoGrid />

          {/* --- TECHNICAL AUTHORITY STRIP --- */}
          <section className="py-24 bg-zinc-900 border-y border-zinc-800">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
               <div className="flex flex-col items-center gap-3">
                 <Globe className="text-yellow-400 mb-2" size={32} />
                 <span className="text-white font-black uppercase tracking-widest">Regional Coverage</span>
                 <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">Niagara • Hamilton • GTA</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                 <Activity className="text-yellow-400 mb-2" size={32} />
                 <span className="text-white font-black uppercase tracking-widest">High Availability</span>
                 <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">99.9% Uptime SLA</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                 <Cpu className="text-yellow-400 mb-2" size={32} />
                 <span className="text-white font-black uppercase tracking-widest">Edge Processing</span>
                 <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">Local AI Neural Nets</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                 <Lock className="text-yellow-400 mb-2" size={32} />
                 <span className="text-white font-black uppercase tracking-widest">Secure Handover</span>
                 <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">Zero-Trust Architectures</span>
               </div>
            </div>
          </section>

          {/* --- FINAL CTA --- */}
          <section className="py-40 bg-yellow-400 border-t-[16px] border-black text-center px-6">
            <div className="max-w-4xl mx-auto">
               <h2 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[0.9] mb-8">
                 Deploy Modern <br/>Systems
               </h2>
               <p className="text-black/70 font-black tracking-[0.3em] mb-12 text-xs uppercase">
                 Direct Engineering Contact • No Middlemen
               </p>
               <Link to="/Quote" className="inline-flex items-center gap-4 bg-black text-white px-16 py-6 font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all shadow-2xl rounded-sm">
                 Commence Intake <ChevronRight size={18}/>
               </Link>
            </div>
          </section>
        </main>

        <Footer />

        {/* --- PERFORMANCE CSS --- */}
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