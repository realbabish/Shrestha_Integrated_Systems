import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Camera, Lock, ChevronRight, Wifi, Focus, 
  Clock, ShieldAlert, Cpu, Activity, User, 
  DoorOpen, PhoneCall, Hand, ShieldCheck, Network
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// --- PROJECT IMAGES ---
import nursecallImg from '../assets/Nursecall.png';
import alarmImg from '../assets/alarm.jpg';

// --- LOGO IMPORTS (Matching Home Page) ---
import ubiquitiLogo from "../assets/Ubiquity.webp";
import mercuryLogo from "../assets/authentic-mercury-logo_11700594.avif";
import hidLogo from "../assets/HID.png";
import keyscanLogo from "../assets/Keyscan.jpg";
import ictProtegeLogo from "../assets/ICT-protege.png";
import honeywellLogo from "../assets/Honeywell.png";
import genetecLogo from "../assets/Genetec.png";
import ciscoLogo from "../assets/Cisco.png";
import avigilonLogo from "../assets/avigilon.jpg";

// ==========================================
// 1. DYNAMIC HARDWARE SHOWCASE
// ==========================================
const DynamicShowcase = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setStep((prev) => (prev + 1) % 4), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-video bg-[#0a0b0d] rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl flex items-center justify-center group hover:border-zinc-700 transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.05)_0%,transparent_100%)] pointer-events-none" />
      
      {/* State 0: CCTV Scanning */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${step === 0 ? 'opacity-100' : 'opacity-0'}`}>
        <Camera size={64} className="text-zinc-500 animate-pan-camera mb-4 md:w-16 md:h-16 w-12 h-12" />
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_15px_red]" />
          <span className="text-red-500 font-mono text-xs md:text-sm tracking-widest uppercase font-black">Recording</span>
        </div>
      </div>

      {/* State 1: Access Control Tapping */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${step === 1 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-20 h-28 md:w-24 md:h-32 bg-zinc-900 border border-zinc-700 rounded-xl flex items-center justify-center z-10 shadow-2xl">
          <Wifi size={28} className="text-blue-500 animate-pulse md:w-8 md:h-8" />
        </div>
        <div className="absolute w-12 h-20 md:w-16 md:h-24 bg-zinc-800 border-2 border-zinc-600 rounded-lg animate-card-swipe z-20 shadow-xl" />
      </div>

      {/* State 2: Nurse Call Emergency Push */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${step === 2 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-zinc-900 border-4 border-zinc-800 rounded-full flex items-center justify-center shadow-2xl">
             <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center animate-pulse-fast shadow-[0_0_30px_rgba(220,38,38,0.8)]">
                <PhoneCall size={20} className="text-white md:w-6 md:h-6" />
             </div>
          </div>
          <Hand size={40} className="text-zinc-400 absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 animate-button-press md:w-12 md:h-12" />
        </div>
        <span className="mt-6 md:mt-8 text-red-500 font-mono text-xs md:text-sm tracking-widest uppercase font-black">Emergency Alert</span>
      </div>

      {/* State 3: Sliding Doors Opening */}
      <div className={`absolute inset-0 flex items-center justify-center bg-zinc-950 transition-opacity duration-1000 ${step === 3 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-36 h-48 md:w-48 md:h-64 border-4 border-zinc-800 bg-black overflow-hidden flex shadow-inner">
          <div className="w-1/2 h-full bg-zinc-800 border-r border-zinc-700 animate-door-left flex items-center justify-end pr-1 md:pr-2 shadow-xl">
             <div className="w-1.5 md:w-2 h-12 md:h-16 bg-zinc-900 rounded-sm" />
          </div>
          <div className="w-1/2 h-full bg-zinc-800 border-l border-zinc-700 animate-door-right flex items-center justify-start pl-1 md:pl-2 shadow-xl">
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
  <div className="relative w-full aspect-video bg-[#050608] rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl group hover:border-zinc-700 transition-colors">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08)_0%,transparent_100%)] opacity-50" />
    <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 z-20 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-zinc-800">
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_red]" />
      <span className="text-red-500 font-mono text-[8px] md:text-[10px] font-black uppercase tracking-widest">Active_Tracking</span>
    </div>

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative animate-target-patrol transform scale-75 md:scale-100">
        <User size={120} className="text-zinc-600 opacity-50" />
        <div className="absolute -inset-4 border-2 border-yellow-400 bg-yellow-400/10 flex flex-col justify-between p-1">
          <div className="flex justify-between items-start text-yellow-400">
            <span className="text-[7px] md:text-[9px] font-black border border-yellow-400 px-1 bg-yellow-400/20 uppercase">ID: Authorized</span>
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
    <div className="relative w-full aspect-video bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden shadow-inner flex items-center justify-center group hover:border-yellow-400/50 transition-colors">
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
// 4. IMAGE LOGO MARQUEE 
// ==========================================
const ImageMarquee = () => {
  const brands = [
    { name: "Avigilon", logo: avigilonLogo },
    { name: "Genetec", logo: genetecLogo },
    { name: "Ubiquiti", logo: ubiquitiLogo },
    { name: "Cisco", logo: ciscoLogo },
    { name: "ICT Protege", logo: ictProtegeLogo },
    { name: "Keyscan", logo: keyscanLogo },
    { name: "Mercury", logo: mercuryLogo },
    { name: "HID", logo: hidLogo },
    { name: "Honeywell", logo: honeywellLogo }
  ];
  
  const marqueeBrands = [...brands, ...brands];

  return (
    <div className="bg-zinc-50 py-10 md:py-12 border-y border-zinc-200 relative overflow-hidden w-full">
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {marqueeBrands.map((brand, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-8 mx-3 md:mx-6 cursor-default">
              <div className="w-1 h-1 bg-zinc-300 rounded-full hidden md:block" />
              <div className="h-14 w-32 md:h-16 md:w-40 flex items-center justify-center">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-full w-full object-contain mix-blend-multiply opacity-70 hover:opacity-100 transition-opacity duration-300" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// MAIN PAGE LAYOUT
// ==========================================
export default function Security() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden w-full">
      <Helmet>
        <title>Commercial Security & Access Control | Shrestha Integrated Systems</title>
        <meta name="description" content="Enterprise IP surveillance, access control, and network-hardened security installations across Niagara and Southern Ontario." />
      </Helmet>

      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="bg-[#050608] text-white pt-32 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.1)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1.5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400 mb-5 md:mb-6">
              <ShieldCheck size={14} className="md:w-4 md:h-4" /> Lead Technician Deployment
            </div>
            
            <h1 className="text-[13vw] sm:text-[10vw] md:text-[6rem] lg:text-[7rem] font-black uppercase tracking-tighter leading-[1] md:leading-[0.85] mb-6 md:mb-8 w-full">
              Integrated <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 italic">Security</span>
            </h1>
            
            <p className="text-zinc-400 text-sm sm:text-base md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed mb-8 md:mb-10">
              We connect commercial IP surveillance, access control systems, and hardened network infrastructure into one resilient platform for multi-facility operations across Southern Ontario.
            </p>
            
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start mb-8 md:mb-10">
              {[
                "Commercial IP CCTV",
                "Access Control Networks",
                "Isolated Security VLANs"
              ].map((item) => (
                <span key={item} className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                  {item}
                </span>
              ))}
            </div>
            
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 md:p-6 max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10 backdrop-blur-sm">
              <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white mb-3 flex items-center gap-2">
                <Network size={14} className="text-blue-400" /> Network-First Architecture
              </p>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                We don't just mount cameras—we architect encrypted, isolated network pathways backed by CCNA-level logic to protect both your physical and digital perimeters.
              </p>
            </div>
            
            <Link to="/Quote" className="inline-flex items-center justify-center gap-3 md:gap-4 w-full sm:w-auto bg-yellow-400 text-black px-8 md:px-10 py-4 font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)] rounded-sm">
              Initialize Project <ChevronRight size={16}/>
            </Link>
          </div>
          
          <DynamicShowcase />
        </div>
      </section>

      {/* --- REVOLVING BRANDS MARQUEE (UPDATED) --- */}
      <ImageMarquee />

      <main className="py-20 md:py-32 space-y-24 md:space-y-40 w-full">
        
        {/* --- VIDEO SURVEILLANCE --- */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 md:p-4 bg-yellow-400 text-black rounded-xl shadow-xl"><Camera size={28} className="md:w-8 md:h-8" /></div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-none">IP Surveillance <br/>& Analytics</h2>
            </div>
            <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-medium border-l-4 border-yellow-400 pl-4 md:pl-6">
              We deploy integrated IP surveillance platforms for commercial properties and multi-tenant environments with clear video retention, remote monitoring, and network-aware design that supports modern incident response workflows.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {["Facial Recognition AI", "LPR Gate Management", "Thermal Intrusion Detection", "Smart-Search Metadata"].map((item, i) => (
                <div key={i} className="bg-white p-4 border border-zinc-200 shadow-sm flex items-center gap-3 font-black uppercase text-[9px] md:text-[10px] tracking-widest text-zinc-800 rounded-lg hover:border-yellow-400 transition-colors">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-500 rounded-full shrink-0" /> {item}
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
              <div className="p-3 md:p-4 bg-zinc-900 text-white rounded-xl shadow-xl"><Lock size={28} className="md:w-8 md:h-8" /></div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-none">Enterprise <br/>Access</h2>
            </div>
            <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-medium border-l-4 border-zinc-900 pl-4 md:pl-6">
              Frictionless biometric entry, secure mobile credentials, and hardened network controls are integrated to support staff movement and high-risk site protection without compromising network integrity.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {["Biometric & Fingerprint Entry", "Mobile NFC/Bluetooth Fobs", "Elevator Dispatch Integration", "OSDP Secure Encryption"].map((text, i) => (
                <li key={i} className="flex items-center gap-4 font-bold text-[10px] md:text-xs uppercase tracking-widest text-zinc-800 bg-zinc-50 p-4 border border-zinc-200 rounded-lg shadow-sm hover:border-zinc-400 transition-colors">
                  <div className="p-1.5 bg-white border border-zinc-200 rounded-md shadow-sm">
                    <ShieldCheck size={14} className="text-blue-500" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- INTRUSION & LIFE SAFETY (BENTO STYLE) --- */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 md:mb-20">
             <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-zinc-900">Critical <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Monitoring</span></h2>
             <div className="w-16 md:w-24 h-1.5 bg-red-500 mx-auto mt-6 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Intrusion Block */}
            <div className="group relative bg-[#050608] p-8 md:p-10 border border-zinc-800 rounded-3xl flex flex-col h-full shadow-2xl overflow-hidden hover:border-red-500/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img 
                src={alarmImg} 
                alt="DSC Intrusion Hardware" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500 mix-blend-luminosity" 
                onError={(e) => e.target.style.display = 'none'}
              />
              
              <div className="relative z-20 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-auto">
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <ShieldAlert size={24} className="text-red-500" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">Active Defense</span>
                </div>
                
                <div className="mt-40">
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tighter mb-4">Intrusion Systems</h3>
                  <p className="text-zinc-400 font-medium text-sm md:text-base leading-relaxed">
                    UL-listed commercial monitoring. We deploy high-end hardware with redundant cellular dual-path signaling for high-risk commercial and industrial facilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Life Safety Block */}
            <div className="group relative bg-zinc-100 p-8 md:p-10 border border-zinc-200 rounded-3xl flex flex-col h-full shadow-xl overflow-hidden hover:border-blue-500/50 transition-colors">
              <img 
                src={nursecallImg} 
                alt="Nurse Call System" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-multiply" 
                onError={(e) => e.target.style.display = 'none'}
              />
              
              <div className="relative z-20 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-auto">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    <Activity size={24} className="text-blue-600" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Rapid Response</span>
                </div>
                
                <div className="mt-40">
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-zinc-900 tracking-tighter mb-4">Life Safety</h3>
                  <p className="text-zinc-600 font-medium text-sm md:text-base leading-relaxed">
                    Professional nurse-call and emergency alert deployments. We modernize legacy emergency hardware to meet strict, current healthcare communication standards.
                  </p>
                </div>
              </div>
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
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
        
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