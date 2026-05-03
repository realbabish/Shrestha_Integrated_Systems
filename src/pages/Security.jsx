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
// If your path is different, adjust the '../assets/...' part below.
import nursecallImg from '../assets/nursecall.png';
import alarmImg from '../assets/alarm.jpg';

// ==========================================
// 1. DYNAMIC HARDWARE SHOWCASE (The Cycling Animation)
// ==========================================
const DynamicShowcase = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Cycles every 3.5 seconds
    const timer = setInterval(() => setStep((prev) => (prev + 1) % 4), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-video bg-[#0a0b0d] rounded-xl border border-zinc-800 overflow-hidden shadow-2xl flex items-center justify-center">
      
      {/* State 0: CCTV Scanning */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${step === 0 ? 'opacity-100' : 'opacity-0'}`}>
        <Camera size={64} className="text-zinc-500 animate-pan-camera mb-4" />
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase font-black">Recording</span>
        </div>
      </div>

      {/* State 1: Access Control Tapping */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${step === 1 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-24 h-32 bg-zinc-900 border border-zinc-700 rounded-xl flex items-center justify-center z-10">
          <Wifi size={32} className="text-blue-500 animate-pulse" />
        </div>
        <div className="absolute w-16 h-24 bg-zinc-800 border-2 border-zinc-600 rounded-lg animate-card-swipe z-20" />
      </div>

      {/* State 2: Nurse Call Emergency Push */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${step === 2 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative">
          <div className="w-24 h-24 bg-zinc-900 border-4 border-zinc-800 rounded-full flex items-center justify-center shadow-xl">
             <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center animate-pulse-fast shadow-[0_0_30px_rgba(220,38,38,0.8)]">
                <PhoneCall size={24} className="text-white" />
             </div>
          </div>
          <Hand size={48} className="text-zinc-400 absolute -bottom-8 -right-8 animate-button-press" />
        </div>
        <span className="mt-8 text-red-500 font-mono text-sm tracking-widest uppercase font-black">Emergency Alert</span>
      </div>

      {/* State 3: Sliding Doors Opening */}
      <div className={`absolute inset-0 flex items-center justify-center bg-zinc-900 transition-opacity duration-1000 ${step === 3 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-48 h-64 border-4 border-zinc-800 bg-zinc-950 overflow-hidden flex">
          {/* Left Door Panel */}
          <div className="w-1/2 h-full bg-zinc-700 border-r border-zinc-600 animate-door-left flex items-center justify-end pr-2">
             <div className="w-2 h-16 bg-zinc-900 rounded-sm" />
          </div>
          {/* Right Door Panel */}
          <div className="w-1/2 h-full bg-zinc-700 border-l border-zinc-600 animate-door-right flex items-center justify-start pl-2">
             <div className="w-2 h-16 bg-zinc-900 rounded-sm" />
          </div>
          <DoorOpen size={40} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500 -z-10" />
        </div>
      </div>
      
    </div>
  );
};

// ==========================================
// 2. FIXED CCTV TARGET TRACKER (Tracking a silhouette)
// ==========================================
const CCTVTracker = () => (
  <div className="relative w-full aspect-video bg-[#050608] rounded-xl border border-zinc-800 overflow-hidden shadow-2xl">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08)_0%,transparent_100%)] opacity-50" />
    <div className="absolute top-5 left-5 flex items-center gap-2 z-20">
      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_red]" />
      <span className="text-red-600 font-mono text-[10px] font-black uppercase tracking-widest">Active_Tracking</span>
    </div>

    {/* The moving container that holds BOTH the person and the tracking box */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative animate-target-patrol">
        
        {/* The Digital Silhouette (What is being tracked) */}
        <User size={120} className="text-zinc-600 opacity-50" />

        {/* The Tracking Box locked onto the Silhouette */}
        <div className="absolute -inset-4 border-2 border-yellow-400 bg-yellow-400/10 flex flex-col justify-between p-1">
          <div className="flex justify-between items-start text-yellow-400">
            <span className="text-[9px] font-black border border-yellow-400 px-1 bg-yellow-400/20 uppercase">ID: Staff_8842</span>
            <Focus size={16} className="animate-spin-slow" />
          </div>
          <div className="text-[7px] font-black text-yellow-400 uppercase tracking-widest mt-auto">MATCH_99.8%</div>
        </div>

      </div>
    </div>
    
    {/* Grid Overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
  </div>
);

// ==========================================
// 3. ACCESS CONTROL (Unchanged - Perfect as is)
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
      <div className="absolute z-10 w-28 h-40 bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-800 flex flex-col items-center pt-6">
        <div className={`w-16 h-2 rounded-full mb-8 transition-all duration-300 ${granted ? "bg-green-500 shadow-[0_0_20px_#22c55e]" : "bg-blue-500 shadow-[0_0_10px_#3b82f6]"}`} />
        <div className="w-14 h-14 rounded-full border-2 border-zinc-700 flex items-center justify-center">
          <Wifi size={28} className={granted ? "text-green-500" : "text-zinc-600"} />
        </div>
      </div>
      <div className={`absolute z-20 w-20 h-32 bg-zinc-800 rounded-xl border-2 border-zinc-700 shadow-2xl flex flex-col items-center justify-center transition-all duration-700 ${granted ? "translate-x-[-30px] translate-y-[50px] rotate-[-10deg] opacity-100" : "translate-x-[180px] translate-y-[250px] rotate-[30deg] opacity-0"}`}>
        <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-inner"><div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse" /></div>
      </div>
    </div>
  );
};

// ==========================================
// MAIN PAGE LAYOUT
// ==========================================
export default function Security() {
  // Brand Array duplicated for seamless scrolling
  const brands = ["AVIGILON", "GENETEC", "ICT", "MERCURY", "HID", "HONEYWELL", "DSC"];
  const marqueeBrands = [...brands, ...brands, ...brands];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-yellow-400 selection:text-black">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="bg-[#050608] text-white pt-48 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.1)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-[6rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Integrated <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 italic">Security</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed mb-10">
              Authorized technical deployment of surveillance, access, and life safety architectures. We build unified ecosystems for Ontario's most critical environments.
            </p>
            <Link to="/Quote" className="inline-flex items-center gap-4 bg-yellow-400 text-black px-10 py-4 font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] rounded-sm">
              Initialize Project <ChevronRight size={16}/>
            </Link>
          </div>
          
          {/* The new "Keep Changing" hardware showcase */}
          <DynamicShowcase />
        </div>
      </section>

      {/* --- REVOLVING BRANDS MARQUEE --- */}
      <div className="bg-zinc-50 border-b border-zinc-200 overflow-hidden py-10 flex">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {marqueeBrands.map((brand, i) => (
            <span key={i} className="mx-10 text-2xl font-black text-zinc-300 uppercase tracking-tighter cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </div>

      <main className="py-32 space-y-40">
        
        {/* --- VIDEO SURVEILLANCE --- */}
        <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-yellow-400 text-black rounded-sm shadow-xl"><Camera size={32} /></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900">AI Video <br/>Analytics</h2>
            </div>
            <p className="text-zinc-600 text-lg leading-relaxed mb-10 font-medium border-l-4 border-yellow-400 pl-6">
              Certified deployment for **Avigilon Control Center** and **Genetec Security Center**. We utilize deep-learning neural networks for license plate recognition (LPR), object classification, and federated cloud monitoring.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Facial Recognition AI", "LPR Gate Management", "Thermal Intrusion Detection", "Smart-Search Metadata"].map((item, i) => (
                <div key={i} className="bg-zinc-50 p-4 border border-zinc-100 flex items-center gap-3 font-black uppercase text-[10px] tracking-widest text-zinc-800 rounded-sm">
                  <div className="w-2 h-2 bg-yellow-500 rotate-45" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <CCTVTracker />
          </div>
        </section>

        {/* --- ACCESS CONTROL --- */}
        <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <AccessTapAnimation />
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-black text-yellow-400 rounded-sm shadow-xl"><Lock size={32} /></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900">Enterprise <br/>Access</h2>
            </div>
            <p className="text-zinc-600 text-lg leading-relaxed mb-10 font-medium border-l-4 border-black pl-6">
              Frictionless biometric entry for staff, total lockdown for threats. We engineer hardware for multi-tenant and high-risk environments using **HID mobile credentials** and **ICT Protege GX**.
            </p>
            <ul className="space-y-4">
              {["Biometric & Fingerprint Entry", "Mobile NFC/Bluetooth Fobs", "Elevator Dispatch Integration", "OSDP Secure Encryption"].map((text, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest text-zinc-800 bg-white p-4 border border-zinc-200 shadow-sm">
                  <div className="w-2 h-2 bg-black" /> {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- INTRUSION & LIFE SAFETY (With Images) --- */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Critical Monitoring</h2>
             <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Intrusion Block */}
            <div className="bg-[#050608] p-10 border border-zinc-800 rounded-xl flex flex-col h-full shadow-2xl">
              {/* Fallback styling on the img tag ensures it looks good even if path is wrong */}
              <img 
                src={alarmImg} 
                alt="DSC Intrusion Hardware" 
                className="w-full h-48 object-cover rounded-lg mb-8 border border-zinc-700 bg-zinc-900" 
                onError={(e) => e.target.style.display = 'none'} // Hides if image missing
              />
              <div className="flex items-center gap-4 mb-4">
                <ShieldAlert size={32} className="text-yellow-400" />
                <h3 className="text-2xl font-black uppercase text-white tracking-tighter">Intrusion</h3>
              </div>
              <p className="text-zinc-400 font-medium leading-relaxed flex-1">
                UL-listed commercial monitoring. We deploy **DSC PowerSeries** and **Honeywell** hardware with redundant cellular dual-path signaling for high-risk retail and warehousing.
              </p>˙
            </div>

            {/* Life Safety Block */}
            <div className="bg-zinc-50 p-10 border border-zinc-200 rounded-xl flex flex-col h-full shadow-xl">
              <img 
                src={nursecallImg} 
                alt="Nurse Call System" 
                className="w-full h-48 object-cover rounded-lg mb-8 border border-zinc-300 bg-zinc-200" 
                onError={(e) => e.target.style.display = 'none'} // Hides if image missing
              />
              <div className="flex items-center gap-4 mb-4">
                <Activity size={32} className="text-black" />
                <h3 className="text-2xl font-black uppercase text-zinc-900 tracking-tighter">Life Safety</h3>
              </div>
              <p className="text-zinc-600 font-medium leading-relaxed flex-1">
                Professional nurse-call and emergency alert deployment for regional clinics. We modernize legacy emergency hardware to meet current healthcare communication standards.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* --- FINAL CTA --- */}
      <section className="py-40 bg-yellow-400 border-t-[12px] border-black text-center px-6">
        <h2 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter mb-10 leading-none">Ready to <br/>Secure?</h2>
        <Link to="/Quote" className="inline-flex items-center gap-6 bg-black text-white px-16 py-6 font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all shadow-2xl rounded-sm">
          Initialize Project <ChevronRight size={20}/>
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

        @keyframes cardSwipe { 0%, 100% { transform: translate(60px, 40px) rotate(15deg); } 50% { transform: translate(0px, 0px) rotate(0deg); } }
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
          0%, 100% { transform: translate(-60px, -20px); }
          25% { transform: translate(80px, 10px); }
          50% { transform: translate(20px, 60px); }
          75% { transform: translate(-40px, -10px); }
        }
        .animate-target-patrol { animation: targetPatrol 12s infinite ease-in-out; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
      `}</style>
    </div>
  );
}