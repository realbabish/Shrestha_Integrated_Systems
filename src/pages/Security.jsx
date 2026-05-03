import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Camera, Lock, ChevronRight, Wifi, Focus, 
  Clock, ShieldAlert, Cpu, Activity, User, 
  DoorOpen, PhoneCall, Hand
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// NOTE: Ensure these images exist in your assets folder. 
import nursecallImg from '../assets/Nursecall.png';
import alarmImg from '../assets/alarm.jpg';

// ==========================================
// 1. DYNAMIC HARDWARE SHOWCASE (The Cycling Animation)
// ==========================================
const DynamicShowcase = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setStep((prev) => (prev + 1) % 4), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-video bg-[#0a0b0d] rounded-xl border border-zinc-800 overflow-hidden shadow-2xl flex items-center justify-center">
      
      {/* State 0: CCTV Scanning */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${step === 0 ? 'opacity-100' : 'opacity-0'}`}>
        <Camera size={64} className="text-zinc-500 animate-pan-camera mb-4 md:w-16 md:h-16 w-12 h-12" />
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-600 rounded-full animate-pulse" />
          <span className="text-red-500 font-mono text-xs md:text-sm tracking-widest uppercase font-black">Recording</span>
        </div>
      </div>

      {/* State 1: Access Control Tapping */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${step === 1 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-20 h-28 md:w-24 md:h-32 bg-zinc-900 border border-zinc-700 rounded-xl flex items-center justify-center z-10">
          <Wifi size={28} className="text-blue-500 animate-pulse md:w-8 md:h-8" />
        </div>
        <div className="absolute w-12 h-20 md:w-16 md:h-24 bg-zinc-800 border-2 border-zinc-600 rounded-lg animate-card-swipe z-20" />
      </div>

      {/* State 2: Nurse Call Emergency Push */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${step === 2 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-zinc-900 border-4 border-zinc-800 rounded-full flex items-center justify-center shadow-xl">
             <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center animate-pulse-fast shadow-[0_0_30px_rgba(220,38,38,0.8)]">
                <PhoneCall size={20} className="text-white md:w-6 md:h-6" />
             </div>
          </div>
          <Hand size={40} className="text-zinc-400 absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 animate-button-press md:w-12 md:h-12" />
        </div>
        <span className="mt-6 md:mt-8 text-red-500 font-mono text-xs md:text-sm tracking-widest uppercase font-black">Emergency Alert</span>
      </div>

      {/* State 3: Sliding Doors Opening */}
      <div className={`absolute inset-0 flex items-center justify-center bg-zinc-900 transition-opacity duration-1000 ${step === 3 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-36 h-48 md:w-48 md:h-64 border-4 border-zinc-800 bg-zinc-950 overflow-hidden flex">
          {/* Left Door Panel */}
          <div className="w-1/2 h-full bg-zinc-700 border-r border-zinc-600 animate-door-left flex items-center justify-end pr-1 md:pr-2">
             <div className="w-1.5 md:w-2 h-12 md:h-16 bg-zinc-900 rounded-sm" />
          </div>
          {/* Right Door Panel */}
          <div className="w-1/2 h-full bg-zinc-700 border-l border-zinc-600 animate-door-right flex items-center justify-start pl-1 md:pl-2">
             <div className="w-1.5 md:w-2 h-12 md:h-16 bg-zinc-900 rounded-sm" />
          </div>
          <DoorOpen size={32} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500 -z-10 md:w-10 md:h-10" />
        </div>
      </div>
      
    </div>
  );
};

// ==========================================
// 2. FIXED CCTV TARGET TRACKER
// ==========================================
const CCTVTracker = () => (
  <div className="relative w-full aspect-video bg-[#050608] rounded-xl border border-zinc-800 overflow-hidden shadow-2xl">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08)_0%,transparent_100%)] opacity-50" />
    <div className="absolute top-3 left-3 md:top-5 md:left-5 flex items-center gap-2 z-20">
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_red]" />
      <span className="text-red-600 font-mono text-[8px] md:text-[10px] font-black uppercase tracking-widest">Active_Tracking</span>
    </div>

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative animate-target-patrol transform scale-75 md:scale-100">
        <User size={120} className="text-zinc-600 opacity-50" />
        <div className="absolute -inset-4 border-2 border-yellow-400 bg-yellow-400/10 flex flex-col justify-between p-1">
          <div className="flex justify-between items-start text-yellow-400">
            <span className="text-[7px] md:text-[9px] font-black border border-yellow-400 px-1 bg-yellow-400/20 uppercase">ID: Staff_8842</span>
            <Focus size={14} className="animate-spin-slow md:w-4 md:h-4" />
          </div>
          <div className="text-[6px] md:text-[7px] font-black text-yellow-400 uppercase tracking-widest mt-auto">MATCH_99.8%</div>
        </div>
      </div>
    </div>
    
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:40px_40px] pointer-events-none" />
  </div>
);

// ==========================================
// 3. ACCESS CONTROL
// ==========================================
const AccessTapAnimation = () => {
  const [granted, setGranted] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setGranted(true);
      setTimeout(() => setGranted(false), 2000);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-video bg-zinc-50 rounded-xl border border-zinc-200 overflow-hidden shadow-inner flex items-center justify-center">
      <div className="absolute z-10 w-24 h-36 md:w-28 md:h-40 bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-800 flex flex-col items-center pt-5 md:pt-6">
        <div className={`w-12 md:w-16 h-1.5 md:h-2 rounded-full mb-6 md:mb-8 transition-all duration-300 ${granted ? "bg-green-500 shadow-[0_0_20px_#22c55e]" : "bg-blue-500 shadow-[0_0_10px_#3b82f6]"}`} />
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-zinc-700 flex items-center justify-center">
          <Wifi size={24} className={granted ? "text-green-500" : "text-zinc-600"} />
        </div>
      </div>
      <div className={`absolute z-20 w-16 h-28 md:w-20 md:h-32 bg-zinc-800 rounded-xl border-2 border-zinc-700 shadow-2xl flex flex-col items-center justify-center transition-all duration-700 ${granted ? "translate-x-[-20px] translate-y-[40px] md:translate-x-[-30px] md:translate-y-[50px] rotate-[-10deg] opacity-100" : "translate-x-[120px] translate-y-[180px] md:translate-x-[180px] md:translate-y-[250px] rotate-[30deg] opacity-0"}`}>
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-inner"><div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-500 rounded-full animate-pulse" /></div>
      </div>
    </div>
  );
};

// ==========================================
// MAIN PAGE LAYOUT
// ==========================================
export default function Security() {
  const brands = ["AVIGILON", "GENETEC", "ICT", "MERCURY", "HID", "HONEYWELL", "DSC"];
  const marqueeBrands = [...brands, ...brands, ...brands];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden w-full">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="bg-[#050608] text-white pt-32 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.1)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center lg:text-left">
            {/* Fluid typography fix */}
            <h1 className="text-[13vw] sm:text-[10vw] md:text-[6rem] lg:text-[7rem] font-black uppercase tracking-tighter leading-[1] md:leading-[0.85] mb-6 md:mb-8 w-full">
              Integrated <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 italic">Security</span>
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed mb-8 md:mb-10">
              Authorized technical deployment of surveillance, access, and life safety architectures. We build unified ecosystems for Ontario's most critical environments.
            </p>
            <Link to="/Quote" className="inline-flex items-center justify-center gap-3 md:gap-4 w-full sm:w-auto bg-yellow-400 text-black px-8 md:px-10 py-4 font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] rounded-sm">
              Initialize Project <ChevronRight size={16}/>
            </Link>
          </div>
          
          <DynamicShowcase />
        </div>
      </section>

      {/* --- REVOLVING BRANDS MARQUEE --- */}
      <div className="bg-zinc-50 border-b border-zinc-200 overflow-hidden py-8 md:py-10 flex w-full">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {marqueeBrands.map((brand, i) => (
            <span key={i} className="mx-6 md:mx-10 text-xl md:text-2xl font-black text-zinc-300 uppercase tracking-tighter cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </div>

      <main className="py-20 md:py-32 space-y-24 md:space-y-40 w-full">
        
        {/* --- VIDEO SURVEILLANCE --- */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 md:p-4 bg-yellow-400 text-black rounded-sm shadow-xl"><Camera size={28} className="md:w-8 md:h-8" /></div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-none">AI Video <br/>Analytics</h2>
            </div>
            <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-medium border-l-4 border-yellow-400 pl-4 md:pl-6">
              Certified deployment for **Avigilon Control Center** and **Genetec Security Center**. We utilize deep-learning neural networks for license plate recognition (LPR), object classification, and federated cloud monitoring.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {["Facial Recognition AI", "LPR Gate Management", "Thermal Intrusion Detection", "Smart-Search Metadata"].map((item, i) => (
                <div key={i} className="bg-zinc-50 p-3 md:p-4 border border-zinc-100 flex items-center gap-3 font-black uppercase text-[9px] md:text-[10px] tracking-widest text-zinc-800 rounded-sm">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-500 rotate-45 shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <CCTVTracker />
          </div>
        </section>

        {/* --- ACCESS CONTROL --- */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <AccessTapAnimation />
          <div>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 md:p-4 bg-black text-yellow-400 rounded-sm shadow-xl"><Lock size={28} className="md:w-8 md:h-8" /></div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-none">Enterprise <br/>Access</h2>
            </div>
            <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-medium border-l-4 border-black pl-4 md:pl-6">
              Frictionless biometric entry for staff, total lockdown for threats. We engineer hardware for multi-tenant and high-risk environments using **HID mobile credentials** and **ICT Protege GX**.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {["Biometric & Fingerprint Entry", "Mobile NFC/Bluetooth Fobs", "Elevator Dispatch Integration", "OSDP Secure Encryption"].map((text, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-[10px] md:text-xs uppercase tracking-widest text-zinc-800 bg-white p-3 md:p-4 border border-zinc-200 shadow-sm">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black shrink-0" /> {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- INTRUSION & LIFE SAFETY --- */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 md:mb-20">
             <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter italic text-zinc-900">Critical Monitoring</h2>
             <div className="w-16 md:w-24 h-1 bg-yellow-400 mx-auto mt-4 md:mt-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Intrusion Block */}
            <div className="bg-[#050608] p-6 md:p-10 border border-zinc-800 rounded-xl flex flex-col h-full shadow-2xl">
              <img 
                src={alarmImg} 
                alt="DSC Intrusion Hardware" 
                className="w-full h-40 md:h-48 object-cover rounded-lg mb-6 md:mb-8 border border-zinc-700 bg-zinc-900" 
                onError={(e) => e.target.style.display = 'none'}
              />
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <ShieldAlert size={28} className="text-yellow-400 md:w-8 md:h-8" />
                <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-tighter">Intrusion</h3>
              </div>
              <p className="text-zinc-400 font-medium text-sm md:text-base leading-relaxed flex-1">
                UL-listed commercial monitoring. We deploy **DSC PowerSeries** and **Honeywell** hardware with redundant cellular dual-path signaling for high-risk retail and warehousing.
              </p>
            </div>

            {/* Life Safety Block */}
            <div className="bg-zinc-50 p-6 md:p-10 border border-zinc-200 rounded-xl flex flex-col h-full shadow-xl">
              <img 
                src={nursecallImg} 
                alt="Nurse Call System" 
                className="w-full h-40 md:h-48 object-cover rounded-lg mb-6 md:mb-8 border border-zinc-300 bg-zinc-200" 
                onError={(e) => e.target.style.display = 'none'}
              />
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <Activity size={28} className="text-black md:w-8 md:h-8" />
                <h3 className="text-xl md:text-2xl font-black uppercase text-zinc-900 tracking-tighter">Life Safety</h3>
              </div>
              <p className="text-zinc-600 font-medium text-sm md:text-base leading-relaxed flex-1">
                Professional nurse-call and emergency alert deployment for regional clinics. We modernize legacy emergency hardware to meet current healthcare communication standards.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* --- FINAL CTA --- */}
      <section className="py-24 md:py-40 bg-yellow-400 border-t-[12px] border-black text-center px-4 sm:px-6 w-full">
        <h2 className="text-[11vw] sm:text-5xl md:text-8xl font-black text-black uppercase tracking-tighter mb-6 md:mb-10 leading-[1] md:leading-none w-full">
          Ready to <br/>Secure?
        </h2>
        <Link to="/Quote" className="inline-flex items-center justify-center gap-4 w-full sm:w-auto bg-black text-white px-10 md:px-16 py-5 md:py-6 font-black uppercase tracking-[0.2em] text-[10px] md:text-sm hover:bg-white hover:text-black transition-all shadow-2xl rounded-sm">
          Initialize Project <ChevronRight size={18} className="md:w-5 md:h-5"/>
        </Link>
      </section>

      <Footer />

      {/* --- PURE CSS ENGINE --- */}
      <style>{`
        /* Marquee Animation */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 20s linear infinite; }
        
        /* Cycle Animations */
        @keyframes panCamera { 0%, 100% { transform: rotate(-15deg); } 50% { transform: rotate(15deg); } }
        .animate-pan-camera { animation: panCamera 4s ease-in-out infinite; }

        @keyframes cardSwipe { 0%, 100% { transform: translate(50px, 30px) rotate(15deg); } 50% { transform: translate(0px, 0px) rotate(0deg); } }
        .animate-card-swipe { animation: cardSwipe 3.5s ease-in-out infinite; }

        @keyframes buttonPress { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-10px, -15px); } }
        .animate-button-press { animation: buttonPress 3.5s ease-in-out infinite; }
        
        @keyframes pulseFast { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(0.9); opacity: 0.8; } }
        .animate-pulse-fast { animation: pulseFast 0.8s ease-in-out infinite; }

        @keyframes doorLeft { 0%, 100% { transform: translateX(0); } 40%, 60% { transform: translateX(-90%); } }
        .animate-door-left { animation: doorLeft 3.5s ease-in-out infinite; }

        @keyframes doorRight { 0%, 100% { transform: translateX(0); } 40%, 60% { transform: translateX(90%); } }
        .animate-door-right { animation: doorRight 3.5s ease-in-out infinite; }

        /* CCTV Silhouette Patrol */
        @keyframes targetPatrol {
          0%, 100% { transform: translate(-40px, -15px); }
          25% { transform: translate(60px, 10px); }
          50% { transform: translate(15px, 40px); }
          75% { transform: translate(-30px, -5px); }
        }
        .animate-target-patrol { animation: targetPatrol 12s infinite ease-in-out; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin 8s linear infinite; }
      `}</style>
    </div>
  );
}