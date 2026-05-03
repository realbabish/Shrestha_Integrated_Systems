import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Camera, Lock, ShieldCheck, ChevronRight, 
  Wifi, Focus, Clock, ShieldAlert, Cpu, Activity 
} from "lucide-react";

// --- NORMAL IMPORTS ---
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// --- ANIMATION COMPONENTS (PURE CSS) ---
const CCTVAnimation = () => (
  <div className="relative w-full aspect-square md:aspect-video bg-[#050608] rounded-xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
    <div className="absolute inset-6 border border-white/5 pointer-events-none flex flex-col justify-between z-10">
       <div className="flex justify-between w-full">
          <div className="w-6 h-6 border-t-2 border-l-2 border-yellow-500/50" />
          <div className="w-6 h-6 border-t-2 border-r-2 border-yellow-500/50" />
       </div>
       <div className="flex justify-between w-full">
          <div className="w-6 h-6 border-b-2 border-l-2 border-yellow-500/50" />
          <div className="w-6 h-6 border-b-2 border-r-2 border-yellow-500/50" />
       </div>
    </div>

    <div className="absolute top-6 right-6 flex items-center gap-3 z-20">
      <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
      <span className="text-red-500 font-mono text-[10px] font-black tracking-[0.2em] uppercase">REC</span>
    </div>

    <div className="absolute z-20 w-32 h-32 border-2 border-yellow-400 bg-yellow-400/5 flex flex-col items-start p-2 backdrop-blur-[2px] animate-custom-track">
       <div className="bg-yellow-400 text-black text-[9px] font-black px-1.5 py-0.5 uppercase mb-1">Target_Lock</div>
       <Focus className="absolute inset-0 m-auto text-yellow-400/30" size={48} />
    </div>
    
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
  </div>
);

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
    <div className="relative w-full aspect-square md:aspect-video bg-zinc-50 rounded-xl border border-zinc-200 overflow-hidden shadow-inner flex items-center justify-center">
      <div className="absolute z-10 w-28 h-40 bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-800 flex flex-col items-center pt-6">
        <div className={`w-16 h-2 rounded-full mb-8 transition-all duration-300 ${granted ? "bg-green-500 shadow-[0_0_20px_#22c55e]" : "bg-blue-500 shadow-[0_0_10px_#3b82f6]"}`} />
        <div className="w-14 h-14 rounded-full border-2 border-zinc-700 flex items-center justify-center">
          <Wifi size={28} className={`transition-colors duration-300 ${granted ? "text-green-500" : "text-zinc-600"}`} />
        </div>
      </div>

      <div className={`absolute z-20 w-20 h-32 bg-zinc-800 rounded-xl border-2 border-zinc-700 shadow-2xl flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${granted ? "translate-x-[-30px] translate-y-[50px] rotate-[-10deg] opacity-100" : "translate-x-[180px] translate-y-[250px] rotate-[30deg] opacity-0"}`}>
        <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-inner">
          <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function Security() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-yellow-400 selection:text-black">
      
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="bg-[#050608] text-white pt-48 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.12)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10 animate-custom-fade">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.4em] text-yellow-400 border border-yellow-400/20 rounded-full uppercase bg-yellow-400/5">
            <ShieldCheck size={14} /> Division 01 / Physical Security
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter leading-[0.9] mb-8">
            Commercial <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 italic">Integration</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            Professional deployment of surveillance, access control, and life safety infrastructure across Ontario.
          </p>
        </div>
      </section>

      {/* --- 15 MINUTE AUDIT BANNER --- */}
      <div className="relative z-20 -mt-12 px-6 max-w-7xl mx-auto">
        <div className="bg-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-200 shadow-2xl rounded-sm">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-yellow-400 text-black shrink-0 rounded-full">
              <Clock size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase text-gray-900 mb-2">Free 15-Minute Assessment</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed max-w-xl">
                Identify legacy bottlenecks and security vulnerabilities with a no-obligation site audit.
              </p>
            </div>
          </div>
          <Link to="/Quote" className="w-full md:w-auto text-center bg-black text-white px-10 py-5 font-black uppercase tracking-widest text-sm hover:bg-yellow-400 hover:text-black transition-all rounded-sm">
            Book Assessment
          </Link>
        </div>
      </div>

      <main className="py-32 space-y-32">
        {/* --- BRAND MARQUEE --- */}
        <div className="bg-gray-50 py-12 border-y border-gray-200 overflow-hidden flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 px-6 max-w-7xl">
            {["AVIGILON", "GENETEC", "ICT", "MERCURY", "HID", "HONEYWELL", "DSC"].map((brand, i) => (
              <span key={i} className="text-xl md:text-2xl font-black text-gray-300 uppercase tracking-tighter hover:text-gray-900 transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* --- VIDEO SURVEILLANCE --- */}
        <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-yellow-400 text-black rounded-sm shadow-xl"><Camera size={32} /></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900">Video Systems</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium border-l-4 border-yellow-400 pl-6">
              Deployment of Avigilon and Genetec AI analytics. We specialize in high-definition perimeters and federated multi-city locations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 font-black uppercase text-[11px] tracking-widest">
              <div className="bg-gray-50 p-4 border border-gray-100 flex items-center gap-3"><div className="w-2 h-2 bg-yellow-500 rotate-45" /> License Plate (LPR)</div>
              <div className="bg-gray-50 p-4 border border-gray-100 flex items-center gap-3"><div className="w-2 h-2 bg-yellow-500 rotate-45" /> Facial Recognition</div>
            </div>
          </div>
          <CCTVAnimation />
        </section>

        {/* --- ACCESS CONTROL --- */}
        <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <AccessTapAnimation />
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-black text-yellow-400 rounded-sm shadow-xl"><Lock size={32} /></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900">Access Control</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium border-l-4 border-black pl-6">
              Frictionless biometric entry and HID mobile credentials. Every cable is traced, every panel is organized, and every system is tested.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-900 font-black uppercase text-[11px] tracking-widest">
              <div className="bg-white p-4 border border-zinc-200 shadow-sm flex items-center gap-3"><div className="w-2 h-2 bg-black" /> Mobile NFC (HID)</div>
              <div className="bg-white p-4 border border-zinc-200 shadow-sm flex items-center gap-3"><div className="w-2 h-2 bg-black" /> Active Directory Sync</div>
            </div>
          </div>
        </section>

        {/* --- ADDITIONAL --- */}
        <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="p-10 bg-gray-50 border border-gray-200 rounded-sm">
            <ShieldAlert size={32} className="text-yellow-600 mb-6" />
            <h3 className="text-2xl font-black uppercase text-gray-900 mb-4">Intrusion Systems</h3>
            <p className="text-gray-600 font-medium leading-relaxed">DSC and Honeywell monitoring arrays for high-risk retail and warehousing.</p>
          </div>
          <div className="p-10 bg-gray-50 border border-gray-200 rounded-sm">
            <Cpu size={32} className="text-yellow-600 mb-6" />
            <h3 className="text-2xl font-black uppercase text-gray-900 mb-4">Life Safety</h3>
            <p className="text-gray-600 font-medium leading-relaxed">Nurse call systems and emergency communication for regional clinics.</p>
          </div>
        </section>
      </main>

      <section className="py-32 bg-yellow-400 border-t-[12px] border-black text-center px-6">
        <h2 className="text-4xl md:text-7xl font-black text-black uppercase tracking-tighter mb-8 leading-none">Ready to Discuss <br/>Infrastructure?</h2>
        <Link to="/Quote" className="inline-flex items-center gap-4 bg-black text-white px-12 py-5 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all shadow-2xl">
          Initialize Request <ChevronRight />
        </Link>
      </section>

      <Footer />

      {/* --- CSS ANIMATIONS --- */}
      <style>{`
        @keyframes customFade { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-custom-fade { animation: customFade 0.8s ease-out forwards; }
        @keyframes customTrack {
          0%, 100% { transform: translate(-60px, -40px) scale(1); }
          25% { transform: translate(90px, 30px) scale(1.15); }
          50% { transform: translate(-20px, 70px) scale(0.9); }
          75% { transform: translate(-80px, -50px) scale(1.1); }
        }
        .animate-custom-track { animation: customTrack 10s infinite ease-in-out; }
      `}</style>
    </div>
  );
}