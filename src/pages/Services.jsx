import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  LockIcon, KeyIcon, Camera, ShieldCheck, 
  Network, Hospital, Building2, Server, 
  ShieldAlert, HardHat, Cpu, Zap, ChevronRight,
  Globe, Building, Activity 
} from "lucide-react";

// Local Asset Imports
import acsImg from "../assets/acs.jpg";
import nurseCallImg from "../assets/Nursecall.png";
import networkingImg from "../assets/Networking.jpg";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>National Systems Integration | Shrestha Integrated Systems</title>
      </Helmet>

      <div className="relative min-h-screen bg-[#050608] text-white overflow-hidden font-sans">
        <NavBar />
        <FloatingIcons />

        <main className="relative z-10 pt-32 px-6 pb-24">
          
          {/* --- HERO SECTION --- */}
          <section className="max-w-5xl mx-auto text-center mb-32 animate-fadeIn">
            <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-xs font-black tracking-[0.3em] text-green-400 uppercase bg-green-500/10 border border-green-500/30 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Systems Online
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
              Critical <span className="text-yellow-400">Systems</span> <br/> Engineering
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              <span className="burn-text inline-block mr-2">Leading</span> integration for <span className="text-white">Canada's</span> most demanding environments. 
              Coast-to-coast infrastructure protection.
            </p>
          </section>

          {/* --- WORK SITE SHOWCASE --- */}
          <section className="max-w-7xl mx-auto mb-40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { img: nurseCallImg, label: "Healthcare", title: "Nurse Call Systems" },
                { img: networkingImg, label: "Infrastructure", title: "Enterprise Networking", shift: true },
                { img: acsImg, label: "Institutional", title: "Access Integration" }
              ].map((item, i) => (
                <div key={i} className={`relative group overflow-hidden rounded-sm border border-white/10 aspect-[4/5] hover:border-yellow-400/50 transition-all duration-500 ${item.shift ? 'md:translate-y-12' : ''}`}>
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-2">{item.label}</p>
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- COMPANY SERVICES --- */}
          <section className="max-w-7xl mx-auto mb-40">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-16 border-l-8 border-yellow-400 pl-8">
              Company <span className="text-yellow-400">Services</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: <Camera size={40}/>, title: "Surveillance Intelligence", desc: "Full-scale deployment of Avigilon & Genetec VMS. We integrate AI-driven behavior analytics for high-traffic facilities." },
                { icon: <Cpu size={40}/>, title: "Access Control Matrix", desc: "Mercury & ICT GX/WX certified integration. Multi-factor HID/iStar authentication for government-cleared sites." },
                { icon: <ShieldAlert size={40}/>, title: "Intrusion Detection", desc: "Institutional-grade monitoring arrays using DSC and Bosch. Security diagnostics and system hardening." },
                { icon: <Network size={40}/>, title: "Networking & Fiber", desc: "High-uptime Cisco, Aruba, and Juniper networking. Specialized rack builds and segmented Cat6/Fiber infrastructure." }
              ].map((cap, i) => (
                <div key={i} className="group relative bg-[#0a0c10] border border-white/5 p-12 hover:bg-yellow-400 transition-all duration-500 cursor-default">
                  <div className="relative z-10">
                    <div className="text-yellow-400 group-hover:text-black mb-8 transition-colors">{cap.icon}</div>
                    <h3 className="text-3xl font-black uppercase italic group-hover:text-black transition-colors mb-4 leading-none">{cap.title}</h3>
                    <p className="text-gray-500 group-hover:text-black font-bold text-lg leading-relaxed transition-colors">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- INDUSTRIES SECTION --- */}
          <section className="max-w-7xl mx-auto mb-40 px-4">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-black uppercase tracking-tighter italic">Industries & <span className="text-yellow-400">Specializations</span></h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { area: "Healthcare", sites: "UHN, CAMH, Specialized Clinics", icon: <Hospital size={32}/> },
                { area: "Public Works", sites: "City Infrastructure & Municipal Sites", icon: <Building2 size={32}/> },
                { area: "Luxury Hospitality", sites: "Intercontinental & Luxury Hotels", icon: <Globe size={32}/> },
                { area: "Enterprise Retail", sites: "Food Basics, Shoppers, National Warehousing", icon: <Building size={32}/> },
                { area: "Life Safety", sites: "National LTC & Retirement Communities", icon: <ShieldCheck size={32}/> },
                { area: "Physical Fitness", sites: "National Gym Chains & Leisure Centres", icon: <Activity size={32}/> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-[#0a0c10] border-b-4 border-white/5 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-500 group">
                  <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-2xl font-black uppercase italic mb-3">{item.area}</h3>
                  <p className="text-gray-500 font-bold uppercase tracking-tighter text-sm">{item.sites}</p>
                </div>
              ))}
            </div>
          </section>

          {/* --- FINAL CTA: SHINY WAVING CANADA FLAG --- */}
          <section className="text-center mt-32 relative overflow-hidden bg-gradient-to-t from-red-950 via-black to-black py-40 rounded-sm border-t border-red-600/20 shadow-2xl">
            {/* Waving Canada Flag Background */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" 
                 alt="Canada Flag Background" 
                 className="w-full h-full object-cover animate-flagWave"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
            </div>

            <div className="relative z-10 px-6">
                <h3 className="text-5xl md:text-9xl font-black text-white mb-8 italic uppercase tracking-tighter">
                  Keeping <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,1)]">Canada</span> Running
                </h3>
                <p className="max-w-2xl mx-auto text-gray-300 font-black uppercase tracking-[0.4em] mb-12">
                   Strategic Technical Integration • Coast-to-Coast
                </p>
                <a href="/Quote" className="inline-flex items-center gap-4 bg-white text-black font-black uppercase tracking-[0.3em] px-16 py-6 hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  Contact Technical Lead <ChevronRight />
                </a>
            </div>
          </section>

        </main>
        <Footer />
      </div>

      {/* --- CUSTOM CSS ANIMATIONS --- */}
      <style>{`
        .burn-text {
          font-weight: 900;
          color: #facc15;
          text-transform: uppercase;
          font-style: italic;
          animation: flicker 0.1s infinite alternate, shake 0.4s infinite;
          text-shadow: 
            0 0 5px #fff, 
            0 -2px 10px #facc15, 
            0 -5px 20px #f59e0b, 
            0 -12px 30px #dc2626;
        }

        @keyframes flicker {
          0% { opacity: 0.9; text-shadow: 0 0 10px #facc15, 0 -5px 20px #f59e0b, 0 -10px 30px #dc2626; }
          100% { opacity: 1; text-shadow: 0 0 15px #facc15, 0 -8px 25px #f59e0b, 0 -18px 45px #dc2626; }
        }

        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          25% { transform: translate(-1px, -1px) rotate(-0.3deg); }
          50% { transform: translate(1px, -1px) rotate(0.3deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes flagWave {
          0% { transform: scale(1.15) translateX(0); filter: brightness(0.8) contrast(1.2); }
          50% { transform: scale(1.2) translateX(-15px); filter: brightness(1.1) contrast(1.4); }
          100% { transform: scale(1.15) translateX(0); filter: brightness(0.8) contrast(1.2); }
        }
        .animate-flagWave { animation: flagWave 6s ease-in-out infinite; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 1.5s ease-out forwards; }
      `}</style>
    </>
  );
}

function FloatingIcons() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
      <style>{`
        @keyframes floatUp { to { transform: translateY(-160vh) rotate(360deg); } }
      `}</style>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="absolute bottom-[-150px]" style={{ left: `${Math.random() * 100}%`, animation: `floatUp ${40 + Math.random() * 30}s linear infinite` }}>
          <ShieldCheck size={60} />
        </div>
      ))}
    </div>
  );
}