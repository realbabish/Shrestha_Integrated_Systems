import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// Safely imported icons
import { 
  Network, ChevronRight, Terminal, Globe, 
  Activity, Server, Zap, Layers, Laptop, 
  Building2, Router, Volume2, Phone, Monitor, 
  Camera, ShieldCheck, Check
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
// MASTER HERO VISUAL
// ==========================================
const HeroVisualSequence = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setStage((prev) => (prev + 1) % 3), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-square md:aspect-video rounded-xl border border-zinc-800 shadow-2xl overflow-hidden bg-[#050608] group hover:border-blue-500/50 transition-colors">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${stage === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
        <CliTerminal />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-1000 ${stage === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
        {stage === 1 && <APCoverage />} 
      </div>
      <div className={`absolute inset-0 transition-opacity duration-1000 ${stage === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
        {stage === 2 && <PTPBridge />}
      </div>

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
  const [ports] = useState(() => Array.from({ length: 24 }).map((_, i) => ({
    id: i, active: Math.random() > 0.3, blinking: Math.random() > 0.5
  })));

  return (
    <div className="relative w-full aspect-square md:aspect-video bg-[#050505] rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl flex items-center justify-center p-2 md:p-4 group hover:border-zinc-700 transition-colors">
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
             {ports.map((port) => (
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
             {ports.map((port) => (
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
// NEW: PRECISION V-GROOVE FIBER SPLICING
// ==========================================
const FiberSplicingAnimation = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-video bg-black rounded-2xl border-4 border-zinc-900 overflow-hidden shadow-2xl flex items-center justify-center group font-mono">
      {/* LCD Crosshairs overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-blue-400" />
         <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-blue-400" />
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-blue-400 rounded-full" />
      </div>

      <div className="absolute top-4 left-4 flex flex-col gap-1 z-20">
         <span className="text-zinc-500 text-[8px] md:text-[10px] uppercase tracking-widest">Alignment Mode: Core</span>
         <span className="text-blue-500 text-[8px] md:text-[10px] uppercase tracking-widest animate-pulse">X/Y Motors Active</span>
      </div>

      {/* The Splicing Action */}
      <div className="relative w-full max-w-[280px] h-10 flex items-center justify-center z-10">
         {/* Electrodes */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[24px] w-2 h-6 bg-zinc-600 rounded-t-sm" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[4px] w-2 h-6 bg-zinc-600 rounded-b-sm" />
         
         {/* Fiber Cores - Precisely Meeting at 0 */}
         <div className="absolute left-0 right-1/2 h-[4px] flex justify-end">
            <div className="w-[100px] h-full bg-blue-300/90 rounded-r-[1px] animate-fiber-meet-left shadow-[0_0_15px_#60a5fa]" />
         </div>
         <div className="absolute right-0 left-1/2 h-[4px] flex justify-start">
            <div className="w-[100px] h-full bg-blue-300/90 rounded-l-[1px] animate-fiber-meet-right shadow-[0_0_15px_#60a5fa]" />
         </div>

         {/* Arc Ignition */}
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full blur-[6px] animate-plasma-arc" />
      </div>

      <div className="absolute bottom-4 right-4 text-green-500 font-black text-xs md:text-sm animate-splice-result">
         EST. LOSS: 0.01dB
      </div>
    </div>
  );
};

// ==========================================
// NEW: T568B CAT6A WIREMAP TESTER
// ==========================================
const WiremapTester = () => {
  // Accurate T568B Pinout Colors
  const t568b = [
    { pin: 1, color: "bg-orange-300", name: "W/O" },
    { pin: 2, color: "bg-orange-500", name: "O" },
    { pin: 3, color: "bg-green-300", name: "W/G" },
    { pin: 4, color: "bg-blue-600", name: "B" },
    { pin: 5, color: "bg-blue-300", name: "W/B" },
    { pin: 6, color: "bg-green-600", name: "G" },
    { pin: 7, color: "bg-stone-300", name: "W/BR" },
    { pin: 8, color: "bg-amber-900", name: "BR" },
  ];

  return (
    <div className="relative w-full aspect-square md:aspect-video bg-[#050608] rounded-2xl border border-zinc-800 shadow-2xl flex items-center justify-center p-4 md:p-6 group font-mono overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_100%)] pointer-events-none" />

      {/* Main Fluke-style Tester Unit */}
      <div className="w-full max-w-[340px] bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-2xl flex flex-col">
         {/* Tester Screen / LCD */}
         <div className="bg-zinc-950 p-4 border-b-4 border-blue-600 flex flex-col relative h-28 justify-center items-center overflow-hidden">
            <div className="text-blue-500 text-[10px] uppercase tracking-widest absolute top-2 left-3 font-bold animate-test-blink">
               Testing...
            </div>
            
            {/* The Pass Result Overlay */}
            <div className="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center animate-cert-pass opacity-0 z-20">
               <div className="text-green-500 font-black text-3xl tracking-tighter flex items-center gap-2">
                 PASS <Check size={28} className="text-green-500" />
               </div>
               <span className="text-zinc-500 text-[9px] uppercase tracking-widest mt-1">Cat6A Channel</span>
            </div>

            <div className="w-full flex justify-between px-4 opacity-50">
               <div className="text-zinc-600 text-[8px]">Length: 45m</div>
               <div className="text-zinc-600 text-[8px]">Delay: 220ns</div>
            </div>
         </div>
         
         {/* Physical Cable Area */}
         <div className="bg-zinc-800 p-4 flex items-center justify-between relative h-36">
            {/* Stripped Cable Jacket (Left) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-12 bg-blue-600 rounded-r-sm border-r-2 border-blue-800 shadow-lg z-10 flex items-center justify-end pr-1">
              <div className="h-8 w-1 bg-zinc-900/20 rounded-full" />
            </div>

            {/* Individual Colored Wires Connecting Left to Right */}
            <div className="flex-1 ml-6 mr-2 h-full flex flex-col justify-between py-1 relative">
               {t568b.map((wire, i) => (
                  <div key={wire.pin} className="w-full h-[3px] bg-zinc-950 rounded-full relative flex items-center">
                     {/* The solid colored wire */}
                     <div className={`absolute left-0 h-[2px] ${wire.color} w-full opacity-80`} />
                     {/* The Scanning/Testing Pulse running through the wire */}
                     <div 
                        className={`absolute left-0 h-[3px] bg-white w-0 shadow-[0_0_8px_#ffffff] animate-wiremap-sweep`}
                        style={{ animationDelay: `${i * 0.2}s` }}
                     />
                  </div>
               ))}
            </div>

            {/* Remote Termination Block (Right) */}
            <div className="w-10 h-28 bg-zinc-950 border border-zinc-700 rounded flex flex-col justify-between p-1 z-10 shadow-lg">
               {t568b.map((wire) => (
                  <div key={`R${wire.pin}`} className="w-full flex-1 border-b border-zinc-800 last:border-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-sm bg-zinc-800 text-[5px] text-zinc-500 flex items-center justify-center">
                      {wire.pin}
                    </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

// ==========================================
// NEW: LOW VOLTAGE / IP ENDPOINTS ANIMATION
// ==========================================
const IPEndpointsTopology = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-video bg-[#0a0b0d] rounded-2xl border border-zinc-800 shadow-2xl flex items-center justify-center p-6 group hover:border-zinc-700 transition-colors overflow-hidden">
      
      {/* Central Network Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
         <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center border-2 border-blue-400">
            <Server className="text-white w-8 h-8 md:w-10 md:h-10" />
         </div>
         <span className="mt-3 bg-zinc-900 border border-zinc-700 px-2 py-1 rounded text-[8px] md:text-[9px] font-mono text-zinc-300 uppercase tracking-widest">Core Switch</span>
      </div>

      {/* SVG Lines defining the physical connections */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Top Left Line to VoIP */}
        <path d="M 50% 50% L 25% 25%" stroke="#3f3f46" strokeWidth="2" fill="none" />
        <path d="M 50% 50% L 25% 25%" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="8 8" className="animate-line-flow" />
        
        {/* Top Right Line to Monitor */}
        <path d="M 50% 50% L 75% 25%" stroke="#3f3f46" strokeWidth="2" fill="none" />
        <path d="M 50% 50% L 75% 25%" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="8 8" className="animate-line-flow" style={{ animationDelay: '0.5s' }}/>

        {/* Bottom Left Line to Speaker */}
        <path d="M 50% 50% L 25% 75%" stroke="#3f3f46" strokeWidth="2" fill="none" />
        <path d="M 50% 50% L 25% 75%" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="8 8" className="animate-line-flow" style={{ animationDelay: '1s' }}/>

        {/* Bottom Right Line to Camera */}
        <path d="M 50% 50% L 75% 75%" stroke="#3f3f46" strokeWidth="2" fill="none" />
        <path d="M 50% 50% L 75% 75%" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="8 8" className="animate-line-flow" style={{ animationDelay: '1.5s' }}/>
      </svg>

      {/* Endpoint 1: VoIP Phone */}
      <div className="absolute top-[25%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
         <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center shadow-lg">
            <Phone className="text-zinc-300 w-5 h-5 md:w-6 md:h-6" />
         </div>
         <span className="mt-2 text-[7px] md:text-[8px] font-mono text-zinc-500 uppercase tracking-widest bg-black/50 px-1 rounded">VoIP</span>
      </div>

      {/* Endpoint 2: IP Display */}
      <div className="absolute top-[25%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
         <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center shadow-lg">
            <Monitor className="text-zinc-300 w-5 h-5 md:w-6 md:h-6" />
         </div>
         <span className="mt-2 text-[7px] md:text-[8px] font-mono text-zinc-500 uppercase tracking-widest bg-black/50 px-1 rounded">Display</span>
      </div>

      {/* Endpoint 3: SIP Audio */}
      <div className="absolute top-[75%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
         <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center shadow-lg">
            <Volume2 className="text-zinc-300 w-5 h-5 md:w-6 md:h-6" />
         </div>
         <span className="mt-2 text-[7px] md:text-[8px] font-mono text-zinc-500 uppercase tracking-widest bg-black/50 px-1 rounded">SIP Audio</span>
      </div>

      {/* Endpoint 4: Surveillance */}
      <div className="absolute top-[75%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
         <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center shadow-lg">
            <Camera className="text-zinc-300 w-5 h-5 md:w-6 md:h-6" />
         </div>
         <span className="mt-2 text-[7px] md:text-[8px] font-mono text-zinc-500 uppercase tracking-widest bg-black/50 px-1 rounded">CCTV</span>
      </div>
    </div>
  );
};

// ==========================================
// WIRELESS DASHBOARD
// ==========================================
const WirelessDashboard = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-video bg-[#0a0b0d] rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl p-6 md:p-8 font-mono flex flex-col justify-center group hover:border-zinc-700 transition-colors">
      <div className="flex justify-between items-start border-b border-zinc-800 pb-4 mb-6 md:mb-6">
         <div>
           <div className="text-zinc-500 text-[9px] md:text-[10px] uppercase font-black tracking-widest">P2P Bridge Status</div>
           <div className="text-white font-bold tracking-tight text-sm md:text-base mt-1 md:mt-0">LINK_MASTER_01</div>
         </div>
         <div className="bg-green-500/10 border border-green-500/50 text-green-500 text-[8px] md:text-[10px] px-2 py-1 uppercase font-black rounded-sm">Link Active</div>
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
           <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
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
      <Helmet>
        <title>Commercial Networking & Cabling | Shrestha Integrated Systems</title>
        <meta name="description" content="Commercial fiber splicing, structured cabling, and network hardware installation across Niagara and Southern Ontario." />
      </Helmet>

      <Navbar />

      <div className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-[#050608]/95 backdrop-blur-sm px-4 py-3 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-blue-400">
        Installed and tested by Certified Field Technicians
      </div>

      {/* --- HERO SECTION --- */}
      <section className="bg-[#050608] text-white pt-32 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.1)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:py-1 mb-6 md:mb-8 text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] text-blue-400 border border-blue-400/20 rounded-full uppercase bg-blue-400/5">
              <Network size={12} className="md:w-3.5 md:h-3.5" /> Division 02 / Network Infrastructure
            </div>
            
            <h1 className="text-[11vw] sm:text-[10vw] md:text-[6rem] lg:text-[7rem] font-black uppercase tracking-tighter leading-[1] md:leading-[0.85] mb-6 md:mb-8 w-full">
              Physical <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 italic">Connectivity</span>
            </h1>
            
            <p className="text-zinc-400 text-sm sm:text-base md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed mb-8 md:mb-10 px-2 md:px-0">
              Field-first telecommunications deployment for commercial sites. We run certified structured cabling, fusion-splice fiber backbones, and install the network hardware your facility relies on.
            </p>

            <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start mb-8 md:mb-10">
              {[
                "Precision Fiber Splicing",
                "Cat6a / Copper Cabling",
                "Switching & Wi-Fi"
              ].map((item) => (
                <span key={item} className="rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                  {item}
                </span>
              ))}
            </div>
            
            <Link to="/Quote" className="inline-flex items-center justify-center gap-3 md:gap-4 w-full sm:w-auto bg-blue-600 text-white px-8 md:px-10 py-4 font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] rounded-sm">
              Initialize Project <ChevronRight size={16}/>
            </Link>
          </div>
          
          <HeroVisualSequence />
        </div>
      </section>

      <main className="py-20 md:py-32 space-y-24 md:space-y-40 w-full">
        
        {/* --- SECTION 1: CORE SWITCHING --- */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 md:p-4 bg-zinc-900 text-white rounded-xl shadow-xl"><Terminal size={28} className="md:w-8 md:h-8" /></div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-none">Core Switching <br/>& Routing</h2>
            </div>
            <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-medium border-l-4 border-zinc-900 pl-4 md:pl-6">
              We mount, patch, and configure commercial networking hardware. From setting up secure VLANs for access control doors to deploying high-capacity PoE switches to power IP cameras and wireless access points.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { title: "VLAN Configuration", desc: "Segment facility traffic" },
                { title: "PoE Hardware", desc: "Power IP cameras & APs" },
                { title: "Core Routing", desc: "Reliable data transfer" },
                { title: "MDF Design", desc: "Clean rack layouts" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 md:p-5 border border-zinc-200 rounded-lg shadow-sm hover:border-blue-400 transition-colors">
                  <div className="text-zinc-900 font-black uppercase text-[9px] md:text-[10px] tracking-widest mb-1 md:mb-2">{item.title}</div>
                  <div className="text-zinc-500 text-[11px] md:text-xs font-bold leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <ServerRack />
          </div>
        </section>

        {/* --- SECTION 2: FIBER SPLICING --- */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <FiberSplicingAnimation />
          
          <div>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 md:p-4 bg-blue-600 text-white rounded-xl shadow-xl"><Zap size={28} className="md:w-8 md:h-8" /></div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-none">Precision Fiber <br/>Optic Splicing</h2>
            </div>
            <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-medium border-l-4 border-blue-600 pl-4 md:pl-6">
              We execute precise single-mode and multi-mode core alignment fusion splicing. Whether it is terminating a new multi-building backbone or performing an emergency repair on a cut line, we test and verify every connection.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {["Core Alignment Splicing", "OTDR Trace Testing", "Emergency Cut Repairs", "Fiber Enclosure Management"].map((text, i) => (
                <li key={i} className="flex items-center gap-4 font-bold text-[10px] md:text-xs uppercase tracking-widest text-zinc-800 bg-zinc-50 p-4 border border-zinc-200 rounded-lg shadow-sm">
                  <div className="p-1.5 bg-white border border-zinc-200 rounded-md shadow-sm">
                    <Activity size={14} className="text-blue-500" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- SECTION 3: STRUCTURED CABLING --- */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 md:p-4 bg-zinc-100 text-zinc-900 border border-zinc-300 rounded-xl shadow-xl"><Layers size={28} className="md:w-8 md:h-8" /></div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-none">Structured Cabling <br/>& Testing</h2>
            </div>
            <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-medium border-l-4 border-zinc-300 pl-4 md:pl-6">
              We pull, terminate, and test commercial copper drops. From running Cat6a lines across a new warehouse to unspooling and re-labeling disastrous legacy server racks, we ensure the physical layer is clean and documented.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { title: "Cat6 / Cat6a", desc: "Commercial data runs" },
                { title: "Wiremap Testing", desc: "Performance verification" },
                { title: "Rack Cleanups", desc: "Tracing and re-labeling" },
                { title: "IDF Migrations", desc: "Patch panel transitions" }
              ].map((item, i) => (
                <div key={i} className="bg-zinc-50 p-4 md:p-5 border border-zinc-200 rounded-lg shadow-sm">
                  <div className="text-zinc-900 font-black uppercase text-[9px] md:text-[10px] tracking-widest mb-1 md:mb-2">{item.title}</div>
                  <div className="text-zinc-600 text-[11px] md:text-xs font-bold leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <WiremapTester />
          </div>
        </section>

        {/* --- SECTION 4: LOW VOLTAGE / IP ENDPOINTS --- */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <IPEndpointsTopology />
          
          <div>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 md:p-4 bg-zinc-900 text-white rounded-xl shadow-xl"><Volume2 size={28} className="md:w-8 md:h-8" /></div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-none">Low-Voltage <br/>IP Endpoints</h2>
            </div>
            <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-medium border-l-4 border-zinc-900 pl-4 md:pl-6">
              We deploy PoE-driven endpoints across your facility. From SIP paging speakers and IP displays to VoIP telephony, we connect and power your communications over a single, certified cable plant.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {["SIP Paging & Audio", "VoIP Telephony", "IP TV & Digital Signage", "PoE Lighting & Clocks"].map((text, i) => (
                <li key={i} className="flex items-center gap-4 font-bold text-[10px] md:text-xs uppercase tracking-widest text-zinc-800 bg-zinc-50 p-4 border border-zinc-200 rounded-lg shadow-sm">
                  <div className="p-1.5 bg-white border border-zinc-200 rounded-md shadow-sm">
                    <Check size={14} className="text-blue-500" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- SECTION 5: WIRELESS BRIDGE --- */}
        <section className="py-20 md:py-32 px-4 sm:px-6 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 lg:order-1">
               <WirelessDashboard />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="p-3 md:p-4 bg-black text-yellow-400 rounded-xl shadow-xl"><Globe size={28} className="md:w-8 md:h-8" /></div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-none">Industrial Wireless <br/>Infrastructure</h2>
              </div>
              <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-medium border-l-4 border-black pl-4 md:pl-6">
                We install long-range Point-to-Point (P2P) wireless bridges and high-density warehouse Wi-Fi for campuses and logistics facilities where standard cable runs are impossible.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {["P2P Building Bridges", "Warehouse Wi-Fi Arrays", "Outdoor AP Mounting", "RF Signal Alignment"].map((brand, i) => (
                  <span key={i} className="px-4 py-3 bg-white border border-zinc-200 text-[10px] md:text-xs font-black text-zinc-800 uppercase tracking-widest rounded-lg shadow-sm">
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
          Build The <br/>Network
        </h2>
        <Link to="/Quote" className="inline-flex items-center justify-center gap-4 w-full sm:w-auto bg-black text-white px-10 md:px-16 py-5 md:py-6 font-black uppercase tracking-[0.2em] text-[10px] md:text-sm hover:bg-white hover:text-black transition-all shadow-2xl rounded-sm">
          Initialize Request <ChevronRight size={18} className="md:w-5 md:h-5"/>
        </Link>
      </section>

      <Footer />

      {/* --- PURE CSS ANIMATION ENGINE --- */}
      <style>{`
        /* AP Coverage & PTP Bridge Animations */
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

        /* --- PRECISE FIBER SPLICING ANIMATIONS --- */
        @keyframes fiberMeetLeft { 
          0%, 10% { transform: translateX(-40px); } 
          30%, 100% { transform: translateX(0); } 
        }
        .animate-fiber-meet-left { animation: fiberMeetLeft 6s infinite ease-out; }
        
        @keyframes fiberMeetRight { 
          0%, 10% { transform: translateX(40px); } 
          30%, 100% { transform: translateX(0); } 
        }
        .animate-fiber-meet-right { animation: fiberMeetRight 6s infinite ease-out; }

        @keyframes plasmaArc { 
          0%, 30% { opacity: 0; transform: translate(-50%, -50%) scale(0.1); } 
          32%, 40% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); } 
          42%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.1); } 
        }
        .animate-plasma-arc { animation: plasmaArc 6s infinite ease-in-out; }

        @keyframes spliceResult {
          0%, 45% { opacity: 0; }
          50%, 90% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-splice-result { animation: spliceResult 6s infinite; }

        /* --- WIREMAP TESTER ANIMATIONS --- */
        @keyframes testBlink {
          0%, 40% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-test-blink { animation: testBlink 6s infinite; }

        @keyframes wiremapSweep {
          0%, 10% { width: 0%; opacity: 1; }
          40% { width: 100%; opacity: 1; }
          50%, 100% { width: 100%; opacity: 0; }
        }
        .animate-wiremap-sweep { animation: wiremapSweep 6s infinite linear; }

        @keyframes certPass {
          0%, 45% { opacity: 0; transform: scale(0.9); }
          50%, 90% { opacity: 1; transform: scale(1); }
          95%, 100% { opacity: 0; transform: scale(0.9); }
        }
        .animate-cert-pass { animation: certPass 6s infinite cubic-bezier(0.175, 0.885, 0.32, 1.275); }

        /* --- LOW VOLTAGE TOPOLOGY ANIMATIONS --- */
        @keyframes lineFlow {
          0% { stroke-dashoffset: 16; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-line-flow { animation: lineFlow 1s linear infinite; }
      `}</style>
    </div>
  );
}