import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { 
  Camera, ShieldCheck, Network, Hospital, 
  Building2, ShieldAlert, Cpu, 
  ChevronRight, Globe, Building, Activity, Clock 
} from "lucide-react";

// Local Asset Imports
import acsImg from "../assets/acs.jpg";
import nurseCallImg from "../assets/Nursecall.png";
import networkingImg from "../assets/Networking.jpg";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

// Prominent 15-Minute Assessment Component
const AuditFeature = () => (
  <div className="max-w-7xl mx-auto px-6 mb-24">
    <div className="bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-200 shadow-xl rounded-sm">
      <div className="flex items-start gap-6">
        <div className="p-4 bg-yellow-400 text-gray-900 shrink-0 rounded-full">
          <Clock size={36} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase text-gray-900 mb-2">Free 15-Minute System Assessment</h2>
          <p className="text-gray-600 font-medium max-w-xl text-sm md:text-base leading-relaxed">
            Not sure if your current infrastructure supports modern high-definition upgrades? 
            We offer a quick, no-obligation site audit to identify legacy bottlenecks and security vulnerabilities.
          </p>
        </div>
      </div>
      <Link to="/Quote" className="w-full md:w-auto text-center bg-gray-900 text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-gray-900 transition-all whitespace-nowrap rounded-sm">
        Schedule Audit
      </Link>
    </div>
  </div>
);

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Commercial Systems Integration | Shrestha Integrated Systems</title>
        <meta name="description" content="Technical deployment of commercial CCTV, access control, and IT networking. Specializing in healthcare, retail, and institutional infrastructure." />
        <link rel="canonical" href="https://integratedsystems.ca/services" />
      </Helmet>

      <div className="relative min-h-screen bg-gray-50 font-sans">
        
        {/* --- DARK HEADER (Fixes Invisible Navbar) --- */}
        <div className="bg-[#050608] relative pb-32">
          <NavBar />
          <div className="relative z-10 pt-32 px-6 max-w-5xl mx-auto text-center animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase leading-none text-white">
              Commercial <br/><span className="text-yellow-400">Systems</span> Integration
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Precision deployment of security and networking solutions for commercial, 
              institutional, and healthcare properties across Ontario.
            </p>
          </div>
        </div>

        <main className="relative z-10 pb-24 text-gray-900">
          
          {/* --- THE AUDIT CTA (Pulled up to overlap dark/light transition) --- */}
          <div className="-mt-16 relative z-20">
            <AuditFeature />
          </div>

          {/* --- WORK SITE SHOWCASE --- */}
          <section className="max-w-7xl mx-auto mb-32 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { img: nurseCallImg, label: "Healthcare", title: "Nurse Call Systems", alt: "Nurse call system deployment for regional healthcare facilities" },
                { img: networkingImg, label: "Infrastructure", title: "IT Networking", shift: true, alt: "Structured cabling and IT infrastructure installation" },
                { img: acsImg, label: "Commercial", title: "Access Integration", alt: "Professional access control and intercom installation" }
              ].map((item, i) => (
                <div key={i} className={`relative group overflow-hidden bg-white border border-gray-200 shadow-md aspect-[4/5] rounded-sm ${item.shift ? 'md:translate-y-12' : ''}`}>
                  <img src={item.img} alt={item.alt} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-2">{item.label}</p>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- CORE CAPABILITIES --- */}
          <section className="max-w-7xl mx-auto mb-32 px-6">
            <div className="flex items-center gap-4 mb-16">
              <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
              <h2 className="text-4xl font-black uppercase tracking-tight text-gray-900">Core Capabilities</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Camera size={36}/>, title: "Video Surveillance", desc: "Installation and management of high-definition VMS platforms. We specialize in Avigilon and Genetec deployments for large-scale facilities." },
                { icon: <Cpu size={36}/>, title: "Access & Intercom", desc: "Mercury and ICT certified integration. We manage hardware deployment for multi-tenant buildings and commercial offices." },
                { icon: <ShieldAlert size={36}/>, title: "Intrusion Systems", desc: "Deployment of institutional-grade monitoring arrays and security hardening for warehouses and retail spaces." },
                { icon: <Network size={36}/>, title: "Structured Cabling", desc: "Certified Cat6, Cat6A, and Fiber-optic infrastructure. We provide clean, labeled, and tested rack builds." }
              ].map((cap, i) => (
                <div key={i} className="p-10 bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 rounded-sm">
                  <div className="text-yellow-600 mb-6">{cap.icon}</div>
                  <h3 className="text-2xl font-black uppercase mb-4 text-gray-900">{cap.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* --- SECTOR SPECIALIZATIONS --- */}
          <section className="max-w-7xl mx-auto mb-32 px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-black uppercase tracking-tight text-gray-900">Sector Specializations</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { area: "Healthcare", sites: "Regional Hospitals & Clinics", icon: <Hospital size={28}/> },
                { area: "Institutional", sites: "Civic & Municipal Infrastructure", icon: <Building2 size={28}/> },
                { area: "Hospitality", sites: "Hotels & Resort Properties", icon: <Globe size={28}/> },
                { area: "Retail", sites: "National Chains & Warehousing", icon: <Building size={28}/> },
                { area: "Life Safety", sites: "Long-Term Care Communities", icon: <ShieldCheck size={28}/> },
                { area: "Commercial", sites: "Fitness & Leisure Facilities", icon: <Activity size={28}/> }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white border border-gray-200 text-center flex flex-col items-center hover:shadow-md transition-shadow rounded-sm">
                  <div className="text-gray-400 mb-4">{item.icon}</div>
                  <h3 className="text-lg font-black uppercase mb-1 text-gray-900">{item.area}</h3>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{item.sites}</p>
                </div>
              ))}
            </div>
          </section>

          {/* --- FINAL CTA --- */}
          <section className="text-center bg-yellow-400 py-24 shadow-inner">
            <div className="relative z-10 px-6 max-w-4xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
                  Ready to Discuss Your Infrastructure?
                </h3>
                <p className="text-gray-900/80 font-black uppercase tracking-[0.2em] mb-12 text-sm">
                   Professional Integration • Serving Ontario
                </p>
                <Link to="/Quote" className="inline-flex items-center gap-4 bg-gray-900 text-white font-black uppercase tracking-[0.2em] px-12 py-5 hover:bg-white hover:text-gray-900 transition-all shadow-xl rounded-sm">
                  Book Your Assessment <ChevronRight />
                </Link>
            </div>
          </section>

        </main>
        <Footer />
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
      `}</style>
    </>
  );
}