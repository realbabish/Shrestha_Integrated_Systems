import React from "react";
import { Helmet } from "react-helmet-async";
import { Terminal, Award, Shield, Cpu, ChevronRight, Activity, Server, Users, Wrench } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; 

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Shrestha Integrated | Specialized Security Engineering</title>
        <meta name="description" content="Small business agility with enterprise-grade expertise. Specialized security integration for Hamilton and the GTA." />
      </Helmet>

      <Navbar />

      <div className="relative min-h-screen bg-[#050608] text-white overflow-hidden font-sans selection:bg-yellow-400 selection:text-black">
        
        {/* GLOBAL BACKGROUND GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0"></div>

        <main className="relative z-10 pt-32 pb-24">

          {/* --- HERO SECTION --- */}
          <section className="max-w-6xl mx-auto px-6 mb-32 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-black tracking-[0.3em] text-gray-400 uppercase border border-gray-700 rounded-full bg-gray-900/50">
              <Terminal size={12} className="text-yellow-400"/> System Origin
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
              Big System <span className="text-yellow-400">Expertise.</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
                Small Business Agility.
              </span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-gray-400 font-medium leading-relaxed border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              We bring <span className="text-white font-bold">Level-1 Trauma Center standards</span> to businesses that value precision over bureaucracy. No sales reps, no middlemen—just direct access to lead engineering.
            </p>
          </section>

          {/* --- THE LEAD TECH STORY --- */}
          <section className="max-w-7xl mx-auto px-6 mb-40">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              {/* Left: The Visual Component */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-gray-600 rounded-sm opacity-20 blur-xl animate-pulse"></div>
                <div className="relative bg-[#0a0c10] border border-white/10 p-8 md:p-12">
                   <div className="flex justify-between items-start mb-12">
                     <Activity className="text-yellow-400" size={48} />
                     <div className="text-right">
                       <h3 className="text-4xl font-black text-white">100%</h3>
                       <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Technician Owned</p>
                     </div>
                   </div>
                   <div className="space-y-6">
                      {[
                        { label: "Direct Communication", val: "Speak to the Engineer, Not Sales" },
                        { label: "Rapid Deployment", val: "No Corporate Red Tape" },
                        { label: "Precision Focus", val: "Quality Over Quantity" }
                      ].map((stat, i) => (
                        <div key={i} className="border-b border-white/5 pb-4">
                          <p className="text-white font-black uppercase italic text-xl">{stat.label}</p>
                          <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">{stat.val}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              {/* Right: The Narrative */}
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase italic tracking-tighter">
                  The <span className="burn-text inline-block mr-2">Lead</span> Advantage
                </h2>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Working in high-stakes environments like <strong>UHN</strong> and <strong>City of Hamilton</strong> taught me one thing: <span className="text-white">The details matter.</span>
                </p>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Shrestha Integrated Systems is a boutique firm by design. We don't want to be the biggest company in Canada; we want to be the most reliable one for our clients. When you call us, you aren't getting a ticket number—you're getting a solution from someone who personally knows your system.
                </p>
                
                <div className="flex gap-4">
                  <div className="bg-yellow-400/10 border border-yellow-400/30 p-4 rounded-sm flex items-center gap-3">
                    <Users className="text-yellow-400" />
                    <div>
                      <p className="font-bold text-white text-sm uppercase">Personalized</p>
                      <p className="text-[10px] text-yellow-400 font-mono">Service First</p>
                    </div>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 p-4 rounded-sm flex items-center gap-3">
                    <Wrench className="text-gray-300" />
                    <div>
                      <p className="font-bold text-white text-sm uppercase">Hands-On</p>
                      <p className="text-[10px] text-gray-400 font-mono">Expert Install</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* --- WHY SMALLER IS BETTER --- */}
          <section className="bg-white/5 border-y border-white/10 py-24 mb-32 relative overflow-hidden">
             <div className="max-w-7xl mx-auto px-6 relative z-10">
               <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">Why Choose a <span className="text-yellow-400">Specialist?</span></h2>
               </div>
               <div className="grid md:grid-cols-3 gap-12">
                 {[
                   { icon: <Cpu size={40}/>, title: "No Bloatware", desc: "Large integrators push systems that maximize their margins. We spec hardware (Mercury, ICT, Ubiquiti) that maximizes your uptime." },
                   { icon: <Server size={40}/>, title: "Agile Networking", desc: "We move fast. Need a VLAN change or a camera moved? You don't need 3 weeks and a committee meeting. We just get it done." },
                   { icon: <Shield size={40}/>, title: "Accountability", desc: "The person selling the job is the person programming the job. There is zero 'lost in translation' between sales and tech." }
                 ].map((item, i) => (
                   <div key={i} className="group p-6 hover:bg-white/5 transition-colors rounded-lg">
                     <div className="mb-6 text-gray-500 group-hover:text-yellow-400 transition-colors duration-300">{item.icon}</div>
                     <h3 className="text-2xl font-black text-white uppercase italic mb-4">{item.title}</h3>
                     <p className="text-gray-400 leading-relaxed font-medium">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </div>
          </section>

          {/* --- FINAL CTA --- */}
          <section className="text-center max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter">
              Enterprise Tech. <br/> <span className="text-gray-500">Personal Service.</span>
            </h2>
            <p className="text-xl text-yellow-400 font-bold uppercase tracking-widest mb-12">
              Direct Access to Lead Engineering.
            </p>
            <a href="/Quote" className="inline-flex items-center gap-3 bg-white text-black font-black uppercase tracking-[0.2em] px-12 py-5 hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Talk to a Technician <ChevronRight />
            </a>
          </section>

        </main>
        
        <Footer />
      </div>

      {/* --- BURNING TEXT ANIMATION --- */}
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
      `}</style>
    </>
  );
}