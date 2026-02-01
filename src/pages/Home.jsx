import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, Building, Globe, Hospital, ChevronRight, 
  Zap, Server, Cpu, Activity 
} from "lucide-react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// --- COMPONENTS ---

const TechStack = () => {
  const brands = ["AVIGILON", "GENETEC", "ICT GX", "MERCURY", "HID", "KEYSCAN", "DSC", "HONEYWELL"];
  return (
    <div className="bg-yellow-400 py-16 border-y-4 border-black relative overflow-hidden -skew-y-1">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center">
          {brands.map((b) => (
            <div key={b} className="group flex items-center gap-3 cursor-default">
              <div className="w-3 h-3 bg-black rotate-45 group-hover:animate-spin" />
              <span className="text-2xl md:text-4xl font-black text-black italic tracking-tighter hover:scale-110 transition-transform">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </div>
  );
};

const AuthoritySection = () => {
  const sectors = [
    { icon: <Hospital size={40} />, title: "Healthcare", desc: "UHN, CAMH, Cogir, Chartwell", code: "MED-SEC" },
    { icon: <Building size={40} />, title: "Institutional", desc: "City of Hamilton Infrastructure", code: "GOV-OPS" },
    { icon: <Globe size={40} />, title: "Hospitality", desc: "Intercontinental, Hazelton, York Hotel", code: "LUX-ACC" },
    { icon: <ShieldCheck size={40} />, title: "Commercial", desc: "Food Basics, Shoppers, Retail Chains", code: "ENT-RET" },
  ];

  return (
    <section className="py-32 bg-[#050608] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 border-l-8 border-yellow-400 pl-8">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
            Reliability at <span className="text-yellow-400">Scale</span>
          </h2>
          <p className="text-gray-500 font-bold tracking-widest mt-4 uppercase">Deployed across Ontario's Critical Sectors</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((s, i) => (
            <div key={i} className="p-10 bg-[#0a0c10] border border-white/10 hover:bg-yellow-400 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-4 right-4 text-[10px] font-black text-gray-700 group-hover:text-black/50 tracking-widest">{s.code}</div>
              <div className="mb-8 text-yellow-400 group-hover:text-black group-hover:scale-110 transition-all duration-300">{s.icon}</div>
              <h3 className="text-2xl font-black uppercase italic mb-4 group-hover:text-black transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm font-bold group-hover:text-black/80 transition-colors">{s.desc}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 group-hover:h-0 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Shrestha Integrated Systems | National Security Engineering</title>
        <meta 
          name="description" 
          content="Enterprise-grade security integration in Canada. Specialized in Avigilon, Genetec, and ICT for UHN, CAMH, and City of Hamilton projects." 
        />
      </Helmet>

      <div className="min-h-screen bg-[#050608] text-white font-sans selection:bg-red-600 selection:text-white">
        <Navbar />
        
        <main>
          <Hero />

          {/* --- MISSION STATEMENT --- */}
          <section className="py-32 px-6 max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-12 leading-none tracking-tighter uppercase italic">
              Mission-critical systems for the infrastructure that keeps <br/>
              <span className="text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.8)] animate-pulse inline-block mt-4">Canada Running</span>
            </h2>
            <div className="flex justify-center">
              <div className="h-2 w-40 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
          </section>

          <TechStack />
          
          <AuthoritySection />

          {/* --- TECHNICAL EXPERTISE SECTION --- */}
          <section className="py-32 px-6 bg-[#0a0c10] border-t border-white/5 relative overflow-hidden">
             {/* Background Grid Animation */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black tracking-[0.2em] text-yellow-400 uppercase border border-yellow-400/30 rounded-full">
                  <Activity size={12} className="animate-pulse"/> Vetted Technical Lead
                </div>
                <h2 className="text-5xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter leading-none">
                  Full-Fledged <br/><span className="text-yellow-400">Engineering</span>
                </h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed border-l-4 border-gray-700 pl-6">
                  From nurse call systems in <strong className="text-white">Cogir</strong> and <strong className="text-white">Chartwell</strong> facilities to enterprise-level data networking for 
                  <strong className="text-white"> Food Basics</strong> and <strong className="text-white">Shoppers</strong>, we deliver engineered solutions that meet strict institutional standards.
                </p>
                <Link to="/services" className="group inline-flex items-center gap-4 text-xl font-black uppercase italic tracking-widest hover:text-yellow-400 transition-colors">
                  Explore Capabilities 
                  <span className="bg-yellow-400 text-black p-1 group-hover:rotate-45 transition-transform duration-300">
                    <ChevronRight size={20} />
                  </span>
                </Link>
              </div>
              
              {/* The Technical Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Access Control", icon: <Zap /> },
                  { label: "CCTV / VMS", icon: <Camera /> }, // Replaced generic with Camera (imported below)
                  { label: "IT Networking", icon: <Server /> },
                  { label: "Life Safety", icon: <Cpu /> }
                ].map((item, i) => (
                  <div key={i} className={`bg-[#050608] p-8 border border-white/10 hover:border-yellow-400 transition-all duration-300 group flex flex-col items-center justify-center text-center aspect-square ${i % 2 !== 0 ? 'md:translate-y-8' : ''}`}>
                    <div className="text-gray-600 mb-4 group-hover:text-yellow-400 group-hover:scale-125 transition-all duration-300">{item.icon}</div>
                    <span className="font-black uppercase italic tracking-tighter text-xl">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- FINAL CTA --- */}
          <section className="py-24 bg-yellow-400 border-t-8 border-black">
            <div className="max-w-7xl mx-auto px-6 text-center">
               <h2 className="text-5xl md:text-8xl font-black text-black uppercase italic tracking-tighter mb-8">
                 Ready to <span className="text-white drop-shadow-[0_4px_0_rgba(0,0,0,1)]">Deploy?</span>
               </h2>
               <p className="text-black font-bold tracking-[0.2em] mb-12 text-lg">
                 HAMILTON • TORONTO • NIAGARA • BURLINGTON
               </p>
               <Link to="/Quote" className="inline-block bg-black text-white px-16 py-6 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all hover:scale-105 shadow-2xl">
                 Initialize Request
               </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

// Quick fix for the Camera icon used in the grid
import { Camera } from "lucide-react"; 

export default Home;