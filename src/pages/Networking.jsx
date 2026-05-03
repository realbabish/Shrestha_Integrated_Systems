import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Wifi, Server, Network, Globe, ShieldCheck, 
  ChevronRight, Cpu, Radio, Activity, Zap, 
  Terminal, Share2, Layers
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// --- 1. NETWORK TOPOLOGY SIMULATOR (Hero Visual) ---
const TopologyMap = () => (
  <div className="relative w-full h-[400px] bg-[#050608] rounded-xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
    
    {/* Animated Connections */}
    <div className="absolute inset-0 overflow-hidden opacity-20">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/30 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-400/20 rounded-full animate-ping" style={{ animationDuration: '6s' }} />
    </div>

    {/* Central Node */}
    <div className="relative z-10 flex flex-col items-center">
      <div className="p-6 bg-blue-600 text-white rounded-full shadow-[0_0_40px_rgba(37,99,235,0.6)] animate-pulse">
        <Server size={48} />
      </div>
      <span className="mt-4 text-[10px] font-black text-blue-400 tracking-[0.4em] uppercase">Core_Switch_VLAN_10</span>
    </div>

    {/* Peripheral Nodes */}
    <div className="absolute inset-0 pointer-events-none">
       {[
         { pos: "top-10 left-20", label: "AP_WEST", icon: <Wifi size={14}/> },
         { pos: "bottom-20 right-20", label: "VOIP_GATEWAY", icon: <Activity size={14}/> },
         { pos: "top-40 right-10", label: "UPLINK_01", icon: <Zap size={14}/> },
         { pos: "bottom-10 left-10", label: "FIREWALL_UTM", icon: <ShieldCheck size={14}/> }
       ].map((node, i) => (
         <div key={i} className={`absolute ${node.pos} flex flex-col items-center gap-2 opacity-60 animate-float`} style={{ animationDelay: `${i * 0.5}s` }}>
           <div className="p-3 bg-zinc-900 border border-zinc-700 rounded-lg text-blue-400">
             {node.icon}
           </div>
           <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">{node.label}</span>
         </div>
       ))}
    </div>
  </div>
);

// --- 2. PACKET FLOW SIMULATION (Switch Logic) ---
const PacketFlow = () => (
  <div className="relative w-full aspect-video bg-zinc-900 rounded-xl border border-white/5 overflow-hidden flex flex-col p-6">
    <div className="flex justify-between items-center mb-8">
      <div className="flex gap-1">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-zinc-800 rounded-sm border border-zinc-700 flex items-center justify-center">
            <div className={`w-1 h-1 rounded-full ${i < 3 ? 'bg-green-500' : 'bg-zinc-600'} animate-pulse`} />
          </div>
        ))}
      </div>
      <span className="text-[10px] font-mono text-zinc-500">THROUGHPUT: 1.2 GBPS</span>
    </div>

    <div className="flex-1 flex items-center justify-around relative">
      {/* Moving "Packets" */}
      {[...Array(4)].map((_, i) => (
        <div 
          key={i} 
          className="absolute w-2 h-2 bg-blue-500 rounded-full blur-[2px] animate-packet-flow" 
          style={{ animationDelay: `${i * 0.7}s`, top: '50%' }} 
        />
      ))}
      <Layers className="text-zinc-700" size={60} />
      <Share2 className="text-blue-500 animate-pulse" size={40} />
      <Layers className="text-zinc-700" size={60} />
    </div>
  </div>
);

export default function Networking() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* --- HERO --- */}
      <section className="bg-[#050608] text-white pt-48 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-black tracking-[0.4em] text-blue-400 border border-blue-400/20 rounded-full uppercase bg-blue-400/5">
              <Network size={14} /> Division 02 / Network Engineering
            </div>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Reliable <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 italic">Connectivity</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl font-medium leading-relaxed">
              Engineering high-availability enterprise networks. From multi-site VLAN segmentation to Ubiquiti long-range wireless bridges, we ensure your data moves at the speed of business.
            </p>
          </div>
          <TopologyMap />
        </div>
      </section>

      <main className="py-32 space-y-40">
        
        {/* --- CORE SERVICES --- */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-blue-600 text-white rounded-sm shadow-xl"><Terminal size={32} /></div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900">Infrastructure <br/>Engineering</h2>
              </div>
              <p className="text-zinc-600 text-lg leading-relaxed mb-10 font-medium border-l-4 border-blue-600 pl-6">
                Specializing in **Cisco CCNA-certified** architectures. We design and deploy enterprise-grade routing and switching environments with a focus on low-latency performance and robust VLAN security.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Layer 2/3 Switching", desc: "VLANs & Spanning Tree" },
                  { title: "Wireless PTP Bridges", desc: "Long-Range Ubiquiti AirMax" },
                  { title: "SD-WAN / VPN", desc: "Secure Remote Pipelines" },
                  { title: "Network Audits", desc: "Bottleneck Identification" }
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-50 p-5 border border-zinc-100 rounded-sm">
                    <div className="text-blue-600 font-black uppercase text-[10px] tracking-widest mb-1">{item.title}</div>
                    <div className="text-zinc-500 text-xs font-bold">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <PacketFlow />
            </div>
          </div>
        </section>

        {/* --- WIRELESS & RF --- */}
        <section className="py-32 px-6 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-video bg-white rounded-xl border border-zinc-200 shadow-2xl flex items-center justify-center overflow-hidden">
               <Radio size={120} className="text-zinc-100 absolute -bottom-10 -right-10" />
               <div className="flex flex-col items-center">
                  <Wifi size={64} className="text-blue-600 animate-pulse mb-4" />
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-3 h-12 rounded-full ${i < 4 ? 'bg-blue-600' : 'bg-zinc-200'}`} />
                    ))}
                  </div>
                  <span className="mt-6 text-[10px] font-black uppercase tracking-widest text-zinc-400">High-Density Mesh Deployment</span>
               </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-black text-blue-400 rounded-sm shadow-xl"><Globe size={32} /></div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900">Enterprise <br/>Wireless</h2>
              </div>
              <p className="text-zinc-600 text-lg leading-relaxed mb-10 font-medium">
                From senior living facilities to industrial terminals, we deploy high-density Wi-Fi 6 solutions and Point-to-Point bridges. We ensure zero dead zones and seamless roaming across large-scale physical footprints.
              </p>
              <div className="flex flex-wrap gap-10">
                {["Ubiquiti", "Aruba", "Cisco Meraki", "TP-Link Omada"].map((brand, i) => (
                  <span key={i} className="text-xl font-black text-zinc-300 uppercase tracking-tighter hover:text-blue-600 transition-colors cursor-default">{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* --- FINAL CTA --- */}
      <section className="py-40 bg-blue-600 border-t-[14px] border-black text-center px-6">
        <h2 className="text-5xl md:text-9xl font-black text-white uppercase tracking-tighter mb-10 leading-none">Optimize <br/>The Network</h2>
        <Link to="/Quote" className="inline-flex items-center gap-6 bg-black text-white px-20 py-7 font-black uppercase tracking-[0.3em] text-sm hover:bg-white hover:text-black transition-all shadow-2xl">
          Initialize Audit <ChevronRight size={22}/>
        </Link>
      </section>

      <Footer />

      {/* --- CSS ENGINE --- */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 6s infinite ease-in-out; }

        @keyframes packetFlow {
          0% { left: 0%; opacity: 0; transform: translateY(-50%) scale(0.5); }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 100%; opacity: 0; transform: translateY(-50%) scale(1.5); }
        }
        .animate-packet-flow { animation: packetFlow 3s infinite linear; }
      `}</style>
    </div>
  );
}