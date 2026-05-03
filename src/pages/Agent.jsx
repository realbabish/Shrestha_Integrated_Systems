import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MousePointer2, Bell, CalendarCheck, CheckCircle2, 
  MessageSquare, Mail, Clock, CalendarDays, RefreshCw, 
  ShieldCheck, Zap, ArrowRight, UserCheck, Activity
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- 1. THE REDESIGNED, CLEAN HERO ---
const CleanHero = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let isActive = true;
    const runSequence = async () => {
      await new Promise(r => setTimeout(r, 2000));
      while (isActive) {
        if (isActive) setStep(1);
        await new Promise(r => setTimeout(r, 2500));
        if (isActive) setStep(2);
        await new Promise(r => setTimeout(r, 3000));
        if (isActive) setStep(3);
        await new Promise(r => setTimeout(r, 3000));
      }
    };
    runSequence();
    return () => { isActive = false; };
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-[#050505] flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-16">
      {/* Subtle Grid Background instead of flying pieces */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: Clean, authoritative text */}
        <div className="flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-yellow-400 border border-yellow-400/20 rounded-sm uppercase bg-yellow-400/5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            System Online
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.1]"
          >
            Meet your new <br/>
            <span className="font-black text-yellow-400">24/7 AI Receptionist.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed"
          >
            Stop losing leads after hours. A custom-trained AI agent that talks like a human, gathers client data, and books your site surveys automatically.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4"
          >
            <a href="/Quote" className="bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors flex items-center gap-2 rounded-sm">
              Deploy Agent <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The Interactive Storyboard (Perfectly Sized) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[280px] h-[460px] bg-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            <div className="h-8 bg-zinc-900 border-b border-white/5 flex items-center px-4">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>

            <div className="flex-1 relative bg-zinc-950">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-5 h-full flex flex-col relative">
                    <div className="space-y-3 mt-4">
                      <div className="w-full h-8 bg-zinc-900 rounded-sm" />
                      <div className="w-full h-8 bg-zinc-900 rounded-sm" />
                      <div className="w-full h-24 bg-zinc-900 rounded-sm" />
                    </div>
                    <div className="relative mt-4">
                      <motion.div 
                        animate={{ scale: [1, 1, 0.92, 1, 1], backgroundColor: ["#facc15", "#facc15", "#eab308", "#facc15", "#facc15"] }}
                        transition={{ duration: 2.5, times: [0, 0.5, 0.55, 0.6, 1] }} 
                        className="w-full py-3 bg-yellow-400 rounded-sm text-black font-black uppercase text-center text-[10px] tracking-widest"
                      >
                        Request Service
                      </motion.div>
                      <motion.div 
                        animate={{ x: [100, 0, 0, 0, 0], y: [120, -10, -10, -10, -10], scale: [1, 1, 0.8, 1, 1] }}
                        transition={{ duration: 2.5, times: [0, 0.4, 0.55, 0.6, 1], ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -mt-2 z-50 pointer-events-none"
                      >
                        <MousePointer2 size={24} className="fill-white text-black drop-shadow-md" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="sms" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-4 h-full relative">
                    <div className="grid grid-cols-4 gap-2 opacity-10 blur-[2px]">
                      {[...Array(20)].map((_, i) => <div key={i} className="aspect-square bg-zinc-500 rounded-lg" />)}
                    </div>
                    <motion.div 
                      initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute top-6 left-3 right-3 bg-zinc-900 border border-zinc-700 p-3 rounded-lg shadow-xl z-50"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
                          <Bell size={8} className="text-black" />
                        </div>
                        <span className="text-[10px] font-bold text-white uppercase">New Lead</span>
                      </div>
                      <p className="text-white font-medium text-[11px] leading-tight mb-1">Hamilton Federal</p>
                      <p className="text-gray-400 text-[10px] leading-snug">Client qualified. Details emailed.</p>
                    </motion.div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="schedule" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="p-4 h-full flex flex-col items-center justify-center text-center">
                    <CalendarCheck size={48} className="text-yellow-400 mb-4" strokeWidth={1.5} />
                    <h3 className="text-sm font-bold text-white uppercase tracking-tight mb-1">Calendar Synced</h3>
                    <p className="text-gray-500 text-[10px] px-2">Survey appointment scheduled and confirmed.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- 2. THE FEATURES GRID (Human-like, Email, Reminders) ---
const FeatureGrid = () => {
  const features = [
    {
      icon: <MessageSquare size={24} className="text-yellow-400" />,
      title: "Human-Like Dialogue",
      desc: "No frustrating 'Press 1 for Sales' bots. The AI uses advanced NLP to answer technical questions naturally and guide the user toward booking."
    },
    {
      icon: <Mail size={24} className="text-yellow-400" />,
      title: "Complete Email Integration",
      desc: "The moment a conversation ends, a full transcript and the client's contact information are instantly routed to your business inbox."
    },
    {
      icon: <Clock size={24} className="text-yellow-400" />,
      title: "Automated Prompts & Reminders",
      desc: "The agent proactively engages idle visitors and sends automated email reminders to clients so they never miss an upcoming site survey."
    },
    {
      icon: <UserCheck size={24} className="text-yellow-400" />,
      title: "Customer Data Capture",
      desc: "Flawlessly extracts names, phone numbers, and project scopes mid-conversation without forcing users to fill out boring web forms."
    }
  ];

  return (
    <section className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">More than just a widget.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A fully integrated communication suite designed to handle the heavy lifting of client intake.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-zinc-900/50 border border-white/5 rounded-sm hover:border-yellow-400/30 transition-colors"
            >
              <div className="mb-4 bg-black w-12 h-12 flex items-center justify-center rounded-sm border border-white/10">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 3. DEEP CALENDAR INTEGRATION SECTION ---
const CalendarSection = () => {
  return (
    <section className="py-24 px-6 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: The Visual UI representation */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full aspect-video bg-zinc-900 border border-white/10 rounded-lg p-6 shadow-2xl"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <CalendarDays className="text-yellow-400" />
              <span className="text-white font-medium">Schedule Matrix</span>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-2 bg-zinc-800 rounded-full" />
              <div className="w-8 h-2 bg-yellow-400 rounded-full" />
            </div>
          </div>
          {/* Fake Calendar Rows */}
          <div className="space-y-4">
            {[1, 2, 3].map((row) => (
              <div key={row} className="flex gap-4">
                <div className="w-16 h-12 bg-zinc-950 rounded flex items-center justify-center text-xs text-gray-500 font-mono">1{row}:00</div>
                <div className={`flex-1 h-12 rounded flex items-center px-4 ${row === 2 ? 'bg-yellow-400 text-black font-bold' : 'bg-zinc-800 text-gray-400'}`}>
                  {row === 2 ? 'Site Survey: Alexander Muir' : 'Available'}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-white border border-white/20 rounded-sm uppercase bg-white/5">
            <RefreshCw size={12} className="text-yellow-400" /> Auto-Sync
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
            Seamless Calendar <br/>Integration.
          </h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            The AI doesn't just promise to pass along a message. It actively checks your availability in real-time, blocks off the appropriate time slot, and schedules the site survey directly into your system.
          </p>
          <ul className="space-y-3">
            {[
              "Notifies you instantly when a booking occurs.",
              "Prevents double-booking by reading your live schedule.",
              "Sends calendar invites to both you and the client."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

// --- 4. AND MUCH MORE (Data security, deployment) ---
const MoreFeatures = () => {
  return (
    <section className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-12 uppercase tracking-widest">And Much More</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "AWS Hosted", icon: <Zap size={20} /> },
            { label: "End-to-End Encryption", icon: <ShieldCheck size={20} /> },
            { label: "Zero-Latency API", icon: <Activity size={20} /> },
            { label: "Custom Brand Training", icon: <BrainCircuit size={20} /> }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-zinc-900/30 border border-white/5 flex flex-col items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors">
              {item.icon}
              <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Quick helper icon for the grid above
const BrainCircuit = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
    <path d="M16 8V5c0-1.1.9-2 2-2" />
    <path d="M12 13h4" />
    <path d="M12 18h6a2 2 0 0 1 2 2v1" />
    <path d="M19 13v-1h2" />
    <path d="M20 16h2" />
  </svg>
);


// --- MAIN WRAPPER ---
const Agent = () => {
  return (
    <>
      <Helmet>
        <title>24/7 AI Receptionist | Shrestha Integrated Systems</title>
        <meta name="description" content="Deploy a custom AI receptionist that talks like a human, integrates with your calendar, and emails you qualified leads." />
      </Helmet>

      <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-yellow-400 selection:text-black">
        <Navbar />
        
        <CleanHero />
        <FeatureGrid />
        <CalendarSection />
        <MoreFeatures />

        {/* Final CTA */}
        <section className="py-24 bg-yellow-400 text-black text-center">
          <div className="max-w-2xl mx-auto px-6">
             <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">Ready to Automate?</h2>
             <p className="font-medium text-black/80 mb-8">Stop managing your inbox manually. Let the AI qualify, schedule, and notify you instantly.</p>
             <a href="/Quote" className="inline-block bg-black text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors rounded-sm shadow-xl">
               Request a Demo
             </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Agent;