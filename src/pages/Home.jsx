import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { 
  ShieldCheck, Building, Globe, Hospital, ChevronRight, 
  Zap, Server, Cpu, Activity, Camera, Clock 
} from "lucide-react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// --- COMPONENTS ---

// Designed to sit right below the Hero buttons
const AuditBanner = () => (
  <div className="relative z-20 -mt-12 px-6">
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6">
        <div className="flex items-center gap-5">
          <div className="p-3 bg-yellow-400 text-black rounded-full shrink-0">
            <Clock size={28} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-tight">
              Free 15-Minute System Assessment
            </h3>
            <p className="text-gray-600 font-medium text-sm mt-1">
              Identify legacy bottlenecks and security vulnerabilities with no obligation.
            </p>
          </div>
        </div>
        <Link 
          to="/Quote" 
          className="w-full md:w-auto text-center bg-black text-white px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-yellow-400 hover:text-black transition-colors rounded-sm whitespace-nowrap"
        >
          Book Assessment
        </Link>
      </div>
    </div>
  </div>
);

const TechStack = () => {
  const brands = ["AVIGILON", "GENETEC", "ICT GX", "MERCURY", "HID", "KEYSCAN", "DSC", "HONEYWELL"];
  return (
    <div className="bg-gray-50 py-12 border-b border-gray-200 relative overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <p className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em] mb-6">Authorized deployment for enterprise hardware</p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 items-center">
          {brands.map((b) => (
            <div key={b} className="group flex items-center gap-2 cursor-default">
              <div className="w-2 h-2 bg-yellow-400 rotate-45" />
              <span className="text-xl md:text-2xl font-black text-gray-400 italic tracking-tighter hover:text-gray-900 transition-colors">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AuthoritySection = () => {
  const sectors = [
    { icon: <Hospital size={32} />, title: "Healthcare", desc: "Regional Clinics & Care Facilities", code: "MED" },
    { icon: <Building size={32} />, title: "Institutional", desc: "Municipal Infrastructure", code: "GOV" },
    { icon: <Globe size={32} />, title: "Hospitality", desc: "Premium Hotels & Resorts", code: "LUX" },
    { icon: <ShieldCheck size={32} />, title: "Commercial", desc: "Retail Chains & Warehousing", code: "COM" },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 border-l-4 border-yellow-400 pl-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900">
            Reliability at <span className="text-yellow-600">Scale</span>
          </h2>
          <p className="text-gray-600 font-medium mt-2">Deployed across Ontario's core sectors.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, i) => (
            <div key={i} className="p-8 bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 group rounded-sm relative">
              <div className="absolute top-4 right-4 text-[10px] font-black text-gray-400 group-hover:text-yellow-600 tracking-widest">{s.code}</div>
              <div className="mb-6 text-yellow-600 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <h3 className="text-xl font-black uppercase mb-2 text-gray-900">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
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
        <title>Shrestha Integrated Systems | Security & IT Networking</title>
        <meta name="description" content="Professional installation of commercial CCTV, structured cabling, access control, and automatic doors across the Niagara region." />
      </Helmet>

      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-yellow-400 selection:text-black">
        {/* Note: You may need to adjust your Navbar component to look good on a white background if it was hardcoded for dark mode */}
        <Navbar />
        
        <main>
          <Hero />

          <AuditBanner />

          {/* --- POLITE & LIGHT MISSION STATEMENT --- */}
          <section className="py-24 px-6 max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight uppercase text-gray-900">
              Reliable technical integration for the systems that keep your facility running smoothly.
            </h2>
            <div className="flex justify-center mb-8">
              <div className="h-1 w-24 bg-yellow-400 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-medium">
              We specialize in modernizing legacy security hardware and deploying clean, high-uptime IT networking. 
              Direct access to a lead technician ensures your project is completed with precision, on time, and without the corporate runaround.
            </p>
          </section>

          <TechStack />
          
          <AuthoritySection />

          {/* --- TECHNICAL EXPERTISE SECTION (Scrubbed 'Engineering') --- */}
          <section className="py-24 px-6 bg-gray-50 border-t border-gray-200 relative">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black tracking-[0.2em] text-yellow-700 bg-yellow-100 uppercase rounded-full border border-yellow-200">
                  <Activity size={12} /> Vetted Technical Lead
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight leading-none text-gray-900">
                  Expert <br/><span className="text-yellow-600">Integration</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed border-l-4 border-yellow-400 pl-6">
                  From nurse call systems in regional care facilities to enterprise-level data networking for 
                  national retailers, we deliver technical solutions that meet strict institutional standards. 
                  Every cable is traced, every panel is organized, and every system is tested.
                </p>
                <Link to="/services" className="group inline-flex items-center gap-3 text-lg font-black uppercase tracking-widest text-gray-900 hover:text-yellow-600 transition-colors">
                  Explore Capabilities 
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              {/* The Technical Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Access Control", icon: <Zap /> },
                  { label: "CCTV / VMS", icon: <Camera /> },
                  { label: "IT Networking", icon: <Server /> },
                  { label: "Life Safety", icon: <Cpu /> }
                ].map((item, i) => (
                  <div key={i} className={`bg-white p-8 border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 group flex flex-col items-center justify-center text-center aspect-square rounded-sm ${i % 2 !== 0 ? 'md:translate-y-6' : ''}`}>
                    <div className="text-gray-400 mb-4 group-hover:text-yellow-600 group-hover:scale-110 transition-all duration-300">{item.icon}</div>
                    <span className="font-black uppercase tracking-tight text-gray-900">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- FINAL CTA --- */}
          <section className="py-24 bg-yellow-400 border-t-8 border-black">
            <div className="max-w-4xl mx-auto px-6 text-center">
               <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight mb-6">
                 Ready to get started?
               </h2>
               <p className="text-black/80 font-bold tracking-[0.2em] mb-10 text-sm uppercase">
                 HAMILTON • TORONTO • NIAGARA • BURLINGTON
               </p>
               <Link to="/Quote" className="inline-block bg-black text-white px-12 py-5 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-xl rounded-sm">
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

export default Home;