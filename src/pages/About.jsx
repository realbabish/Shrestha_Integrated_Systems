import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Terminal, Shield, Cpu, ChevronRight, Activity, Server, Users, Wrench, CheckCircle } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; 

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Shrestha Integrated Systems</title>
        <meta name="description" content="Small business agility with enterprise-grade expertise. Specialized security and IT integration for Hamilton, Niagara, and the GTA." />
        <link rel="canonical" href="https://integratedsystems.ca/about" />
      </Helmet>

      <div className="relative min-h-screen bg-gray-50 font-sans selection:bg-yellow-400 selection:text-black">
        
        {/* --- DARK HEADER --- */}
        <div className="bg-[#050608] relative pb-40">
          <Navbar />
          <div className="relative z-10 pt-24 px-6 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-black tracking-[0.3em] text-yellow-400 uppercase border border-yellow-400/30 rounded-full bg-yellow-400/5">
              <Terminal size={12} /> System Origin
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase leading-none text-white">
              Big System <span className="text-yellow-400">Expertise.</span> <br/>
              <span className="text-gray-400">Small Business Agility.</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-gray-400 font-medium leading-relaxed">
              We bring <span className="text-white font-bold">Level-1 institutional standards</span> to businesses that value precision over bureaucracy. No middlemen—just direct access to technical leadership.
            </p>
          </div>
        </div>

        <main className="relative z-10 text-gray-900 pb-24">

          {/* --- THE BRIDGE CARD (Fixes the overlapping issue) --- */}
          <div className="max-w-6xl mx-auto px-6 relative z-20 -mt-20 mb-32">
             <div className="bg-white rounded-sm shadow-xl border border-gray-200 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="flex items-center gap-6">
                 <Activity className="text-yellow-500 shrink-0" size={56} />
                 <div>
                   <h3 className="text-4xl font-black text-gray-900 mb-1">100%</h3>
                   <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Technician Owned & Operated</p>
                 </div>
               </div>
               <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="font-bold text-sm">Direct Communication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="font-bold text-sm">Rapid Deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="font-bold text-sm">Precision Focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="font-bold text-sm">Zero Corporate Bloat</span>
                  </div>
               </div>
             </div>
          </div>

          {/* --- THE LEAD TECH STORY (Robust Grid Layout) --- */}
          <section className="max-w-7xl mx-auto px-6 mb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: The Narrative */}
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight text-gray-900">
                  The Technical <br/><span className="text-yellow-600">Advantage</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed border-l-4 border-yellow-400 pl-6">
                  Working in high-stakes environments like regional healthcare networks and critical municipal infrastructure taught us one thing: <strong>The details matter.</strong>
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Shrestha Integrated Systems is a boutique firm by design. We don't want to be the biggest company in Ontario; we want to be the most reliable one for our clients. When you call us, you aren't getting a ticket number—you're getting a solution from someone who personally knows your system's architecture.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-sm flex items-center gap-3 shadow-sm">
                    <Users className="text-yellow-600" />
                    <div>
                      <p className="font-bold text-gray-900 text-sm uppercase">Personalized</p>
                      <p className="text-[10px] text-yellow-700 font-mono uppercase tracking-widest">Service First</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 p-4 rounded-sm flex items-center gap-3 shadow-sm">
                    <Wrench className="text-gray-600" />
                    <div>
                      <p className="font-bold text-gray-900 text-sm uppercase">Hands-On</p>
                      <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Expert Install</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Visual Feature Box */}
              <div className="bg-gray-900 p-10 md:p-12 rounded-sm shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-8">How We Operate</h3>
                <div className="space-y-8 relative z-10">
                  <div>
                    <h4 className="text-yellow-400 font-black uppercase text-sm mb-2 tracking-widest">01 // Consultation</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Speak directly with the lead technician designing your system. No sales pitches.</p>
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-black uppercase text-sm mb-2 tracking-widest">02 // Deployment</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Clean cable management, secure mounting, and rigorous testing on every single device.</p>
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-black uppercase text-sm mb-2 tracking-widest">03 // Handover</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Full system documentation, network maps, and administrative training provided.</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* --- WHY SMALLER IS BETTER --- */}
          <section className="bg-white border-y border-gray-200 py-24 mb-32 relative shadow-sm">
             <div className="max-w-7xl mx-auto px-6 relative z-10">
               <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-900">Why Choose a <span className="text-yellow-600">Specialist?</span></h2>
               </div>
               <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { icon: <Cpu size={32}/>, title: "No Bloatware", desc: "Large integrators push systems that maximize their margins. We spec hardware (Mercury, ICT, Ubiquiti) that maximizes your uptime." },
                   { icon: <Server size={32}/>, title: "Agile Networking", desc: "We move fast. Need a VLAN change or a camera moved? You don't need three weeks and a committee meeting. We just get it done." },
                   { icon: <Shield size={32}/>, title: "Accountability", desc: "The person selling the job is the person programming the job. There is zero 'lost in translation' between sales and tech." }
                 ].map((item, i) => (
                   <div key={i} className="group p-8 hover:bg-gray-50 border border-gray-100 hover:border-yellow-400 transition-all rounded-sm shadow-sm">
                     <div className="mb-6 text-yellow-500 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                     <h3 className="text-xl font-black text-gray-900 uppercase mb-3">{item.title}</h3>
                     <p className="text-gray-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </div>
          </section>

          {/* --- FINAL CTA --- */}
          <section className="text-center max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-gray-900">
              Enterprise Tech. <br/> <span className="text-gray-400">Personal Service.</span>
            </h2>
            <p className="text-sm md:text-base text-yellow-600 font-bold uppercase tracking-widest mb-10">
              Direct Access to Technical Leadership.
            </p>
            <Link to="/Quote" className="inline-flex items-center gap-3 bg-gray-900 text-white font-black uppercase tracking-[0.2em] px-10 py-5 hover:bg-yellow-400 hover:text-gray-900 transition-all shadow-xl rounded-sm">
              Talk to a Technician <ChevronRight size={20} />
            </Link>
          </section>

        </main>
        
        <Footer />
      </div>
    </>
  );
}