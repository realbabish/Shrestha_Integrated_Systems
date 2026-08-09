import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Network, ChevronRight, Terminal, Globe, 
  Activity, ShieldCheck, Server, Wifi, Zap, 
  Layers, Share2, Laptop, Building2, RadioTower, Router
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ==========================================
// STAGE 1: LIVE CLI TERMINAL
// ==========================================
const CliTerminal = () => {
  const [lines, setLines] = useState(1);

  useEffect(() => {
    const sequence = [1000, 1500, 2000, 2200, 2800, 3100, 3500, 4000, 5000];
    let timeouts = sequence.map((time, index) => 
      setTimeout(() => setLines(index + 2), time)
    );
    const reset = setInterval(() => setLines(1), 7000);
    return () => { timeouts.forEach(clearTimeout); clearInterval(reset); };
  }, []);

  return (
    <div className="w-full h-full bg-[#0a0a0c] flex flex-col font-mono text-[8px] sm:text-[10px] md:text-xs">
      <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 justify-between shrink-0">
        <div className="flex gap-2">
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        <span className="text-zinc-500">root@core-switch-01:~</span>
      </div>
      <div className="p-4 text-green-500/90 leading-relaxed overflow-hidden">
        <div className="whitespace-nowrap"><span className="text-zinc-400">root@core-switch-01#</span> show interfaces status</div>
        {lines > 1 && <div className="mt-2 text-zinc-300 whitespace-nowrap">Port      Name               Status       Vlan       Duplex  Speed Type</div>}
        {lines > 2 && <div className="whitespace-nowrap">Gi1/0/1   UPLINK_ISP_PRI     connected    trunk      a-full a-1000 1000BaseTX</div>}
        {lines > 3 && <div className="whitespace-nowrap">Gi1/0/2   UPLINK_FW_01       connected    trunk      a-full a-1000 1000BaseTX</div>}
        {lines > 4 && <div className="whitespace-nowrap">Gi1/0/3   SRV_CLUSTER_A      connected    10         a-full a-1000 1000BaseTX</div>}
        {lines > 5 && <div className="whitespace-nowrap">Gi1/0/4   SRV_CLUSTER_B      connected    10         a-full a-1000 1000BaseTX</div>}
        {lines > 6 && <div className="text-yellow-400 whitespace-nowrap">Gi1/0/5   AP_WEST_WING       disabled     20         auto   auto   1000BaseTX</div>}
        {lines > 7 && <div className="mt-2 whitespace-nowrap"><span className="text-zinc-400">root@core-switch-01#</span> conf t</div>}
        {lines > 8 && <div className="whitespace-nowrap"><span className="text-zinc-400">root@core-switch-01(config)#</span> interface Gi1/0/5</div>}
        {lines > 9 && <div className="whitespace-nowrap"><span className="text-zinc-400">root@core-switch-01(config-if)#</span> no shutdown</div>}
        <div className="mt-1 w-1.5 md:w-2 h-3 md:h-4 bg-green-500 animate-pulse" />
      </div>
    </div>
  );
};

// ==========================================
// STAGE 2: AP OFFICE COVERAGE
// ==========================================
const APCoverage = () => (
  <div className="w-full h-full bg-[#050608] relative overflow-hidden flex flex-col justify-between p-4 md:p-8">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:30px_30px]" />
    
    <div className="flex justify-between items-start z-10">
      <div className="flex flex-col items-center gap-1 md:gap-2">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-zinc-900 border border-zinc-700 flex items-center justify-center rounded-lg shadow-xl relative">
          <Server className="text-blue-500 w-6 h-6 md:w-7 md:h-7" />
          <div className="absolute -right-1 top-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
        </div>
        <span className="text-[7px] md:text-[9px] font-black uppercase text-zinc-500 tracking-widest">PoE_Switch</span>
      </div>

      <div className="absolute top-10 md:top-16 left-16 md:left-24 right-1/2 h-1 bg-zinc-800">
        <div className="h-full bg-blue-500 animate-cable-flow w-full origin-left" />
      </div>
      <div className="absolute top-10 md:top-16 right-1/2 bottom-[80px] md:bottom-[120px] w-1 bg-zinc-800">
        <div className="w-full bg-blue-500 animate-cable-drop h-full origin-top" />
      </div>

      <div className="absolute top-10 md:top-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-16 md:w-20 h-5 md:h-6 bg-zinc-100 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] z-20 border-b-4 border-zinc-300">
          <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]" />
        </div>
        <div className="absolute top-3 md:top-4 border-[2px] md:border-[3px] border-blue-500/40 rounded-full w-16 md:w-20 h-16 md:h-20 animate-wifi-ring-1" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }} />
        <div className="absolute top-3 md:top-4 border-[2px] md:border-[3px] border-blue-500/20 rounded-full w-32 md:w-40 h-32 md:h-40 animate-wifi-ring-2" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }} />
        <div className="absolute top-3 md:top-4 border-[2px] md:border-[3px] border-blue-500/10 rounded-full w-48 md:w-64 h-48 md:h-64 animate-wifi-ring-3" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }} />
      </div>
    </div>

    <div className="flex justify-around items-end w-full mt-auto z-10 border-b-2 border-zinc-800 pb-2">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-2 md:gap-3">
          <Laptop className="text-zinc-600 animate-device-connect w-6 h-6 md:w-8 md:h-8" style={{ animationDelay: `${2.5 + i * 0.2}s` }} />
          <div className="w-10 md:w-16 h-1 bg-blue-500/20 rounded-full blur-sm" />
        </div>
      ))}
    </div>
    
    <div className="absolute bottom-2 md:bottom-4 left-4 md:left-6 text-[8px] md:text-[10px] font-mono text-blue-400 uppercase tracking-widest animate-fade-in-delayed">High-Density Coverage Active</div>
  </div>
);

// ==========================================
// STAGE 3: WIRELESS BRIDGE
// ==========================================
const PTPBridge = () => (
  <div className="w-full h-full bg-[#050608] relative overflow-hidden flex items-center justify-between p-4 md:p-8">
    
    <div className="flex flex-col items-center z-10 relative transform scale-75 md:scale-100 origin-bottom">
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-1 h-16 bg-zinc-800">
         <div className="w-full h-full bg-blue-500 animate-cable-rise origin-bottom" />
      </div>
      <div className="w-14 h-20 bg-zinc-900 border border-zinc-700 flex items-center justify-center relative">
        <Server size={24} className="text-blue-500" />
      </div>
      <Building2 size={64} className="text-zinc-800 -mt-2" />
      
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex items-center">
        <div className="w-4 h-12 bg-zinc-300 rounded-l-full shadow-lg" />
        <div className="w-8 h-4 bg-zinc-400 rounded-r-full flex items-center justify-end pr-1 border-l-2 border-zinc-500">
           <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6] animate-pulse" />
        </div>
      </div>
    </div>

    <div className="flex-1 h-32 relative mx-2 md:mx-4 flex items-center overflow-hidden">
       <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(59,130,246,0.05)_10px,rgba(59,130,246,0.05)_20px)]" />
       <div className="w-full h-[2px] bg-blue-500/30 relative">
          <div className="absolute top-1/2 -translate-y-1/2 h-[4px] w-1/3 bg-blue-400 shadow-[0_0_20px_#60a5fa] rounded-full animate-rf-beam" />
       </div>
       <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-800 text-blue-400 text-[7px] md:text-[9px] font-mono px-2 md:px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
         Link: 5.2 GHz
       </div>
    </div>

    <div className="flex flex-col items-center z-10 relative transform scale-75 md:scale-100 origin-bottom">
      <div className="w-14 h-20 bg-zinc-900 border border-zinc-700 flex items-center justify-center relative">
        <Router size={24} className="text-zinc-700 animate-remote-router" />
      </div>
      <Building2 size={64} className="text-zinc-800 -mt-2" />
      
      <div className="absolute -top-16 right-1/2 translate-x-1/2 flex items-center rotate-180">
        <div className="w-4 h-12 bg-zinc-300 rounded-l-full shadow-lg" />
        <div className="w-8 h-4 bg-zinc-400 rounded-r-full flex items-center justify-end pr-1 border-l-2 border-zinc-500">
           <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6] animate-pulse" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </div>

  </div>
);

// ==========================================
// MASTER HERO VISUAL (Cycles the 3 Stages)
// ==========================================
const HeroVisualSequence = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // 7 seconds per stage to allow animations to complete
    const timer = setInterval(() => setStage((prev) => (prev + 1) % 3), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-square md:aspect-video rounded-xl border border-zinc-800 shadow-2xl overflow-hidden bg-[#050608]">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${stage === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
        <CliTerminal />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-1000 ${stage === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
        {stage === 1 && <APCoverage />} {/* Conditional rendering restarts the CSS animations */}
      </div>
      <div className={`absolute inset-0 transition-opacity duration-1000 ${stage === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
        {stage === 2 && <PTPBridge />}
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 z-20 flex gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all duration-500 ${stage === i ? 'bg-blue-500 scale-125 shadow-[0_0_10px_#3b82f6]' : 'bg-zinc-700'}`} />
        ))}
      </div>
    </div>
  );
};

// ==========================================
// SERVER RACK SIMULATOR
// ==========================================
const ServerRack = () => {
  const generatePorts = () => Array.from({ length: 24 }).map((_, i) => ({
    id: i, active: Math.random() > 0.3, blinking: Math.random() > 0.5
  }));

  return (
    <div className="relative w-full aspect-square md:aspect-video bg-[#050505] rounded-xl border-4 border-zinc-800 overflow-hidden shadow-2xl flex items-center justify-center p-2 md:p-4">
      <div className="absolute left-1 md:left-2 top-0 bottom-0 w-1.5 md:w-2 bg-zinc-900 border-x border-zinc-700 flex flex-col justify-between py-2">
         {[...Array(12)].map((_, i) => <div key={i} className="w-full h-1 bg-black" />)}
      </div>
      <div className="absolute right-1 md:right-2 top-0 bottom-0 w-1.5 md:w-2 bg-zinc-900 border-x border-zinc-700 flex flex-col justify-between py-2">
         {[...Array(12)].map((_, i) => <div key={i} className="w-full h-1 bg-black" />)}
      </div>
      <div className="w-full max-w-sm flex flex-col gap-2 z-10 px-4 md:px-0">
        <div className="w-full h-14 md:h-16 bg-zinc-900 border border-zinc-700 rounded-sm flex items-center px-3 md:px-4 justify-between">
           <div className="flex flex-col">
             <span className="text-[7px] md:text-[8px] font-black uppercase text-zinc-500">Core Gateway</span>
             <div className="flex gap-1 mt-1">
               <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-blue-500 shadow-[0_0_5px_blue]" />
               <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-green-500 animate-pulse" />
             </div>
           </div>
           <div className="flex gap-1.5 md:gap-2">
             {[...Array(4)].map((_, i) => <div key={i} className="w-3 md:w-4 h-2.5 md:h-3 bg-zinc-950 border border-zinc-800 rounded-sm" />)}
             <div className="w-4 md:w-5 h-3 md:h-4 bg-black border border-blue-900 ml-1 md:ml-2 relative">
                <div className="absolute inset-x-0 top-0 h-1/2 bg-green-500/20" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-green-500 animate-pulse" />
             </div>
           </div>
        </div>
        <div className="w-full h-14 md:h-16 bg-zinc-900 border border-zinc-700 rounded-sm flex items-center px-3 md:px-4 justify-between">
           <span className="text-[7px] md:text-[8px] font-black uppercase text-zinc-500 w-10 md:w-12">SW_01</span>
           <div className="grid grid-cols-12 gap-0.5 md:gap-1 w-full justify-items-end">
             {generatePorts().map((port) => (
               <div key={port.id} className="w-2.5 h-2.5 md:w-3 md:h-3 bg-black border border-zinc-800 rounded-[1px] flex justify-center pt-[1px]">
                  {port.active && <div className={`w-1 h-1 md:w-1.5 md:h-1.5 bg-green-500 rounded-full shadow-[0_0_3px_#22c55e] ${port.blinking ? 'animate-blink-random' : ''}`} />}
               </div>
             ))}
           </div>
        </div>
        <div className="w-full h-14 md:h-16 bg-zinc-900 border border-zinc-700 rounded-sm flex items-center px-3 md:px-4 justify-between relative overflow-hidden">
           <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500/20" />
           <span className="text-[7px] md:text-[8px] font-black uppercase text-yellow-500 w-10 md:w-12">PoE_02</span>
           <div className="grid grid-cols-12 gap-0.5 md:gap-1 w-full justify-items-end">
             {generatePorts().map((port) => (
               <div key={port.id} className="w-2.5 h-2.5 md:w-3 md:h-3 bg-black border border-zinc-800 rounded-[1px] flex justify-center pt-[1px]">
                  {port.active && <div className={`w-1 h-1 md:w-1.5 md:h-1.5 ${port.id % 3 === 0 ? 'bg-yellow-400 shadow-[0_0_3px_#facc15]' : 'bg-green-500 shadow-[0_0_3px_#22c55e]'} rounded-full ${port.blinking ? 'animate-blink-random' : ''}`} />}
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// WIRELESS DASHBOARD
// ==========================================
const WirelessDashboard = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-video bg-[#0a0b0d] rounded-xl border border-zinc-800 overflow-hidden shadow-2xl p-6 md:p-6 font-mono flex flex-col justify-center">
      <div className="flex justify-between items-start border-b border-zinc-800 pb-4 mb-6 md:mb-4">
         <div>
           <div className="text-zinc-500 text-[9px] md:text-[10px] uppercase font-black tracking-widest">Ubiquiti airOS 8</div>
           <div className="text-white font-bold tracking-tight text-sm md:text-base mt-1 md:mt-0">PTP_LINK_MASTER</div>
         </div>
         <div className="bg-green-500/10 border border-green-500/50 text-green-500 text-[8px] md:text-[10px] px-2 py-1 uppercase font-black">Link Established</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
           <div className="text-zinc-500 text-[10px] uppercase mb-2">Signal Strength</div>
           <div className="flex items-end gap-2">
             <div className="text-3xl md:text-4xl font-black text-white leading-none">-48</div>
             <div className="text-zinc-400 text-xs font-bold mb-0.5 md:mb-1">dBm</div>
           </div>
           <div className="flex gap-1 mt-4 h-6 md:h-8 items-end">
             {[30, 45, 60, 75, 85, 95, 92, 88, 96, 94].map((h, i) => (
               <div key={i} className="w-full bg-blue-500/80 rounded-t-sm" style={{ height: `${h}%` }} />
             ))}
           </div>
        </div>
        <div className="space-y-4">
           <div>
             <div className="text-zinc-500 text-[10px] uppercase mb-1">Capacity (Tx / Rx)</div>
             <div className="flex justify-between text-white font-bold text-sm md:text-base">
               <span className="text-blue-400">450 Mbps</span>
               <span className="text-blue-600">450 Mbps</span>
             </div>
             <div className="w-full h-1.5 bg-zinc-800 rounded-full mt-2 overflow-hidden flex">
               <div className="h-full bg-blue-400 w-1/2" />
               <div className="h-full bg-blue-600 w-1/2" />
             </div>
           </div>
           <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-800">
             <div><div className="text-zinc-500 text-[8px] md:text-[9px] uppercase">Distance</div><div className="text-white text-xs md:text-sm font-bold mt-1">2.4 km</div></div>
             <div><div className="text-zinc-500 text-[8px] md:text-[9px] uppercase">Frequency</div><div className="text-white text-xs md:text-sm font-bold mt-1">5800 MHz</div></div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default function Networking() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden w-full">
      <Navbar />

      <div className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-[#050608]/95 backdrop-blur-sm px-4 py-3 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-blue-400">
        Executed by CCNA-Certified Network Technicians & Experienced Fiber Splicers
      </div>

      {/* --- HERO SECTION --- */}
      <section className="bg-[#050608] text-white pt-32 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.1)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:py-1 mb-6 md:mb-8 text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] text-blue-400 border border-blue-400/20 rounded-full uppercase bg-blue-400/5">
              <Network size={12} className="md:w-3.5 md:h-3.5" /> Division 02 / Network Engineering
            </div>
            
            <h1 className="text-[11vw] sm:text-[10vw] md:text-[6rem] lg:text-[7rem] font-black uppercase tracking-tighter leading-[1] md:leading-[0.85] mb-6 md:mb-8 w-full">
              Authorized <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 italic">Connectivity</span>
            </h1>
            
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1.5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6 md:mb-8">
              <Network size={12} className="md:w-3.5 md:h-3.5" /> OTDR testing • Fluke-certified cabling • CCNA-level engineering
            </div>
            <p className="text-zinc-400 text-sm sm:text-base md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed mb-8 md:mb-10 px-2 md:px-0">
              Field-first telecommunications deployment for commercial and industrial sites. We lead with fiber optic fusion splicing and structured Cat6/Cat6a cabling, then layer in switching, routing, wireless, and network hardening services for reliable business operations.
            </p>
            <Link to="/Quote" className="inline-flex items-center justify-center gap-3 md:gap-4 w-full sm:w-auto bg-blue-600 text-white px-8 md:px-10 py-4 font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] rounded-sm">
              Initialize Audit <ChevronRight size={16}/>
            </Link>
          </div>
          
          <HeroVisualSequence />
        </div>
      </section>

      <main className="py-20 md:py-32 space-y-24 md:space-y-40 w-full">
        <section className="px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 md:p-4 bg-blue-600 text-white rounded-sm shadow-xl"><Network size={28} className="md:w-8 md:h-8" /></div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-none">Precision Fiber <br/>Optic Fusion Splicing</h2>
            </div>
            <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-medium border-l-4 border-blue-600 pl-4 md:pl-6">
              We execute single-mode and multi-mode core alignment splicing for backbone upgrades, emergency cut-cable repairs, and long-haul distribution runs with optical loss budget analysis and field verification at every endpoint.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { title: "Single-Mode & Multi-Mode", desc: "Core alignment splicing" },
                { title: "OTDR Testing", desc: "Trace and loss validation" },
                { title: "Optical Budget Analysis", desc: "Link performance planning" },
                { title: "Emergency Repairs", desc: "Rapid restoration support" }
              ].map((item, i) => (
                <div key={i} className="bg-zinc-50 p-4 md:p-5 border border-zinc-200 rounded-sm shadow-sm">
                  <div className="text-blue-600 font-black uppercase text-[9px] md:text-[10px] tracking-widest mb-1 md:mb-2">{item.title}</div>
                  <div className="text-zinc-600 text-[11px] md:text-xs font-bold leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <ServerRack />
          </div>
        </section>

        <section className="px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 md:p-4 bg-blue-600 text-white rounded-sm shadow-xl"><Server size={28} className="md:w-8 md:h-8" /></div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-none">Structured Cabling <br/>& Rack Overhaul</h2>
            </div>
            <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-medium border-l-4 border-blue-600 pl-4 md:pl-6">
              We install Cat6, Cat6a, and Cat7 certified runs with Fluke line certification, then perform server rack cable tracing, re-labeling, and MDF/IDF patch panel migrations for clean, documented infrastructure moves.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { title: "Cat6 / Cat6a / Cat7", desc: "Certified commercial runs" },
                { title: "Fluke Certification", desc: "Performance verification" },
                { title: "Rack Rebuilds", desc: "Tracing and re-labeling" },
                { title: "MDF / IDF Migrations", desc: "Patch panel transitions" }
              ].map((item, i) => (
                <div key={i} className="bg-zinc-50 p-4 md:p-5 border border-zinc-200 rounded-sm shadow-sm">
                  <div className="text-blue-600 font-black uppercase text-[9px] md:text-[10px] tracking-widest mb-1 md:mb-2">{item.title}</div>
                  <div className="text-zinc-600 text-[11px] md:text-xs font-bold leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <HeroVisualSequence />
          </div>
        </section>

        <section className="py-20 md:py-32 px-4 sm:px-6 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 lg:order-1">
               <WirelessDashboard />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="p-3 md:p-4 bg-black text-blue-400 rounded-sm shadow-xl"><Globe size={28} className="md:w-8 md:h-8" /></div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-none">Industrial Wireless <br/>Infrastructure</h2>
              </div>
              <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-medium border-l-4 border-black pl-4 md:pl-6">
                We deploy long-range Point-to-Point (P2P) wireless bridges and high-density warehouse Wi-Fi for campuses, logistics facilities, and multi-building sites where cable runs are impractical and uptime is critical.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-6">
                {["P2P Bridges", "Warehouse Wi-Fi", "Long-Range Links", "Mission-Critical Uptime"].map((brand, i) => (
                  <span key={i} className="px-3 md:px-4 py-2 bg-white border border-zinc-200 text-[10px] md:text-xs font-black text-zinc-800 uppercase tracking-widest rounded-sm shadow-sm">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* --- FINAL CTA --- */}
      <section className="py-24 md:py-40 bg-blue-600 border-t-[12px] md:border-t-[16px] border-black text-center px-4 sm:px-6 w-full">
        <h2 className="text-[11vw] sm:text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 md:mb-10 leading-[1] md:leading-none w-full">
          Optimize <br/>The Network
        </h2>
        <Link to="/Quote" className="inline-flex items-center justify-center gap-4 w-full sm:w-auto bg-black text-white px-10 md:px-16 py-5 md:py-6 font-black uppercase tracking-[0.2em] text-[10px] md:text-sm hover:bg-white hover:text-black transition-all shadow-2xl rounded-sm">
          Initialize Request <ChevronRight size={18} className="md:w-5 md:h-5"/>
        </Link>
      </section>

      <Footer />

      {/* --- PURE CSS ANIMATION ENGINE --- */}
      <style>{`
        @keyframes cableFlow { 0% { transform: scaleX(0); } 20%, 100% { transform: scaleX(1); } }
        .animate-cable-flow { animation: cableFlow 7s ease-in-out infinite; }
        @keyframes cableDrop { 0%, 20% { transform: scaleY(0); } 40%, 100% { transform: scaleY(1); } }
        .animate-cable-drop { animation: cableDrop 7s ease-in-out infinite; }
        
        @keyframes wifiRing {
          0%, 40% { transform: scale(0.5); opacity: 0; }
          60% { opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        .animate-wifi-ring-1 { animation: wifiRing 2s infinite ease-out; animation-delay: 2.8s; }
        .animate-wifi-ring-2 { animation: wifiRing 2s infinite ease-out; animation-delay: 3s; }
        .animate-wifi-ring-3 { animation: wifiRing 2s infinite ease-out; animation-delay: 3.2s; }

        @keyframes deviceConnect { 0% { color: #52525b; } 100% { color: #3b82f6; filter: drop-shadow(0 0 5px #3b82f6); } }
        .animate-device-connect { animation: deviceConnect 7s infinite forwards; }
        @keyframes fadeInDelayed { 0%, 50% { opacity: 0; } 60%, 100% { opacity: 1; } }
        .animate-fade-in-delayed { animation: fadeInDelayed 7s infinite; }

        @keyframes cableRise { 0% { transform: scaleY(0); } 20%, 100% { transform: scaleY(1); } }
        .animate-cable-rise { animation: cableRise 7s ease-in-out infinite; }
        @keyframes rfBeam { 
          0%, 30% { transform: translateX(-200%); opacity: 0; }
          40% { opacity: 1; }
          70%, 100% { transform: translateX(300%); opacity: 0; }
        }
        .animate-rf-beam { animation: rfBeam 3s infinite linear; animation-delay: 1.5s; }
        @keyframes remoteRouter { 0%, 50% { color: #3f3f46; } 60%, 100% { color: #3b82f6; } }
        .animate-remote-router { animation: remoteRouter 7s infinite; }

        @keyframes blinkRandom { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }
        .animate-blink-random { animation: blinkRandom 0.5s infinite; }
      `}</style>
    </div>
  );
}