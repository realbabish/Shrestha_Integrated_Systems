import { useRef, useEffect, useState } from "react";
import { 
  ShieldCheck, Server, Camera, Network, 
  Cpu, Zap, CheckCircle, AlertCircle, ChevronRight 
} from "lucide-react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Quote() {
  const formRef = useRef();
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  // "System Boot" Effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate data transmission time
    setTimeout(() => navigate("/"), 3000);
  };

  // --- LOADING SCREEN (TERMINAL STYLE) ---
  if (loading) {
    return (
      <div className="min-h-screen bg-[#050608] flex flex-col items-center justify-center font-mono text-yellow-400">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="animate-pulse" />
          <span className="text-xl font-bold tracking-widest uppercase">Establishing Secure Connection</span>
        </div>
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-yellow-400 animate-progress"></div>
        </div>
        <div className="mt-2 text-xs text-gray-500">ENCRYPTING PROTOCOLS...</div>
        <style>{`
          @keyframes progress { 0% { width: 0%; } 100% { width: 100%; } }
          .animate-progress { animation: progress 1.5s ease-out forwards; }
        `}</style>
      </div>
    );
  }

  // --- SUCCESS SCREEN ---
  if (submitted) {
    return (
      <div className="min-h-screen bg-[#050608] flex flex-col items-center justify-center text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
         <div className="border border-green-500/30 bg-green-500/5 p-12 text-center max-w-lg relative z-10">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl font-black uppercase italic mb-4">Transmission Received</h2>
            <p className="text-gray-400 font-mono text-sm mb-8">
              Your project data has been encrypted and queued for technical review. 
              A Lead Engineer will deploy a response shortly.
            </p>
            <div className="text-xs text-green-500 font-mono tracking-widest animate-pulse">
              REDIRECTING TO MAIN TERMINAL...
            </div>
         </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#050608] text-white font-sans selection:bg-yellow-400 selection:text-black">
      <NavBar />

      {/* GLOBAL TECH GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0"></div>

      <div className="relative z-10 pt-32 pb-24 px-6 flex items-center justify-center">
        
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-4xl w-full bg-[#0a0c10] border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden group"
        >
          {/* Decorative Top Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-red-600 to-yellow-400"></div>

          {/* Header Section */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-black tracking-[0.3em] text-gray-500 uppercase border border-gray-800 rounded-sm">
              <Server size={12} className="text-yellow-400"/> New Project Protocol
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 text-white">
              Initialize <span className="text-yellow-400">Assessment</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Complete the technical requirements below. Direct line to Lead Engineering. No sales filters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* LEFT COL: Contact Info */}
            <div className="space-y-6">
               <h3 className="text-sm font-black uppercase tracking-widest text-gray-500 border-b border-gray-800 pb-2 mb-6">
                 01 // Site Point of Contact
               </h3>
               <div className="grid grid-cols-2 gap-4">
                 <Input label="First Name" name="firstName" required />
                 <Input label="Last Name" name="lastName" required />
               </div>
               <Input label="Business Email" type="email" name="email" required />
               <Input label="Site Phone" type="tel" name="phone" required />
               <Input label="Organization / Facility Name" name="company" />
            </div>

            {/* RIGHT COL: Technical Scope */}
            <div className="space-y-6">
               <h3 className="text-sm font-black uppercase tracking-widest text-gray-500 border-b border-gray-800 pb-2 mb-6">
                 02 // System Requirements
               </h3>
               
               {/* Custom Service Selector Grid */}
               <div className="grid grid-cols-2 gap-3 mb-6">
                 {[
                   { id: 'vms', label: 'CCTV / VMS', icon: <Camera size={18} /> },
                   { id: 'access', label: 'Access Control', icon: <ShieldCheck size={18} /> },
                   { id: 'network', label: 'Networking', icon: <Network size={18} /> },
                   { id: 'life', label: 'Life Safety', icon: <Cpu size={18} /> }
                 ].map((s) => (
                   <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedService(s.id)}
                    className={`p-4 border text-left flex items-center gap-3 transition-all duration-300 ${
                      selectedService === s.id 
                        ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400' 
                        : 'border-white/10 bg-[#050608] text-gray-500 hover:border-white/30 hover:text-white'
                    }`}
                   >
                     {s.icon}
                     <span className="font-bold text-xs uppercase tracking-wider">{s.label}</span>
                   </button>
                 ))}
               </div>

               <Textarea 
                 label="Technical Scope / Project Details" 
                 name="message" 
                 placeholder="Describe infrastructure requirements, estimated camera counts, or specific hardware needs (e.g., Mercury, Avigilon)..."
                 required 
               />
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-3 text-xs text-gray-500 font-mono">
               <AlertCircle size={14} className="text-yellow-400" />
               <span>SECURE TRANSMISSION ENCRYPTED</span>
             </div>
             
             <button
              type="submit"
              className="w-full md:w-auto bg-yellow-400 hover:bg-white text-black font-black uppercase tracking-[0.2em] px-10 py-4 transition-all hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Deploy Request <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </form>
      </div>
      <Footer/>
    </div>
  );
}

// --- REUSABLE INDUSTRIAL INPUT COMPONENTS ---

function Input({ label, name, type = "text", required }) {
  return (
    <div className="relative group">
      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-yellow-400 transition-colors">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-[#050608] border border-white/10 text-white p-3 text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all placeholder-gray-700"
      />
      {/* Corner Accent */}
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-focus-within:border-yellow-400 transition-colors pointer-events-none"></div>
    </div>
  );
}

function Textarea({ label, name, required, placeholder }) {
  return (
    <div className="relative group">
      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-yellow-400 transition-colors">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        rows={4}
        required={required}
        placeholder={placeholder}
        className="w-full bg-[#050608] border border-white/10 text-white p-3 text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all resize-none placeholder-gray-700"
      />
       {/* Corner Accent */}
       <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-focus-within:border-yellow-400 transition-colors pointer-events-none"></div>
    </div>
  );
}