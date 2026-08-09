import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircle, ArrowRight, Mail, Phone, Briefcase, 
  User, Camera, ShieldCheck, Bell, Network, Zap, 
  Bot, Clock, Building2, Check
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketNum] = useState(() => `SIS-${Math.floor(100000 + Math.random() * 900000)}`);

  const toggleService = (id) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    formData.append("Selected_Services", selectedServices.join(", "));
    formData.append("access_key", "6fe8392d-7f1b-454e-8bf5-ca9c9916d9b7"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert("Submission failed. Please check your connection.");
      }
    } catch (error) {
      console.error("Transmission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- PREMIUM SUCCESS VIEW ---
  if (submitted) {
    return (
      <>
        <Helmet><title>Request Received | SIS</title></Helmet>
        <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center px-6">
          <Navbar />
          <div className="bg-white p-12 text-center max-w-xl border border-zinc-200 shadow-2xl rounded-2xl animate-fade-in-up relative overflow-hidden">
             <div className="relative z-10">
                <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                   <CheckCircle size={48} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-zinc-900 mb-4">Request Received</h2>
                <div className="inline-block px-4 py-2 bg-zinc-100 text-zinc-600 font-bold text-xs uppercase tracking-widest rounded-full mb-8">
                  Ticket Reference: <span className="text-zinc-900">{ticketNum}</span>
                </div>
                <p className="text-zinc-500 font-medium text-base mb-10 max-w-sm mx-auto leading-relaxed">
                  Your project scope has been securely transmitted. A lead engineer will review your requirements and reach out within 24 hours.
                </p>
                <button onClick={() => window.location.href = '/'} className="bg-zinc-900 text-white px-10 py-4 font-black uppercase tracking-widest text-xs hover:bg-yellow-400 hover:text-black transition-all rounded-lg flex items-center gap-3 mx-auto shadow-lg hover:shadow-yellow-400/20">
                   Return to Homepage
                </button>
             </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet><title>System Assessment | Shrestha Integrated Systems</title></Helmet>
      <div className="min-h-screen bg-zinc-50 font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
        <Navbar />

        {/* --- PREMIUM HERO SECTION --- */}
        <section className="bg-[#050608] pt-48 pb-40 px-6 relative flex flex-col items-center text-center">
          {/* Subtle elegant gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08)_0%,transparent_50%)]" />
          
          <div className="max-w-4xl mx-auto relative z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.2em] text-yellow-400 border border-yellow-400/20 rounded-full uppercase bg-yellow-400/5 shadow-sm">
              <Zap size={14} className="text-yellow-400" /> Enterprise Intake Portal
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6 text-white">
              System <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Assessment</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Direct connection to our engineering team. Select your required infrastructure below to initiate a comprehensive site review.
            </p>
          </div>
        </section>

        {/* --- FORM SECTION (Overlapping the Hero) --- */}
        <main className="max-w-4xl mx-auto px-6 -mt-20 relative z-20 pb-32">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden animate-slide-up-delayed">
            
            {/* 1. IDENTITY DETAILS */}
            <div className="p-8 md:p-12 border-b border-zinc-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black text-xs">1</div>
                <h2 className="text-xl font-black uppercase text-zinc-900 tracking-tight">Contact Information</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput label="Full Name" name="name" icon={<User size={18}/>} required placeholder="e.g. Jane Doe" />
                <FormInput label="Company / Organization" name="company" icon={<Building2 size={18}/>} placeholder="e.g. Acme Corp" />
                <FormInput label="Work Email" type="email" name="email" icon={<Mail size={18}/>} required placeholder="name@company.com" />
                <FormInput label="Direct Phone" type="tel" name="phone" icon={<Phone size={18}/>} required placeholder="(555) 000-0000" />
              </div>
            </div>

            {/* 2. SERVICES GRID */}
            <div className="p-8 md:p-12 border-b border-zinc-100 bg-zinc-50/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black text-xs">2</div>
                <h2 className="text-xl font-black uppercase text-zinc-900 tracking-tight">Systems of Interest</h2>
              </div>
              
              {/* Responsive Grid that handles the 5th item elegantly */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { id: 'cctv', label: 'Video Surveillance', icon: <Camera size={24} /> },
                  { id: 'access', label: 'Access Control', icon: <ShieldCheck size={24} /> },
                  { id: 'alarm', label: 'Intrusion Alarms', icon: <Bell size={24} /> },
                  { id: 'network', label: 'IT Networking', icon: <Network size={24} /> },
                  { id: 'ai', label: 'Custom AI Solutions', icon: <Bot size={24} /> }
                ].map((service) => {
                  const isSelected = selectedServices.includes(service.id);
                  return (
                    <button
                      key={service.id} type="button"
                      onClick={() => toggleService(service.id)}
                      className={`relative flex flex-col items-start gap-4 p-6 border-2 transition-all duration-200 rounded-xl text-left overflow-hidden group ${
                        isSelected 
                          ? 'border-yellow-400 bg-yellow-400/5 shadow-md transform -translate-y-1' 
                          : 'border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm'
                      }`}
                    >
                      <div className={`transition-colors ${isSelected ? 'text-yellow-600' : 'text-zinc-400 group-hover:text-zinc-600'}`}>
                        {service.icon}
                      </div>
                      <span className={`font-black uppercase tracking-wider text-[11px] ${isSelected ? 'text-zinc-900' : 'text-zinc-600'}`}>
                        {service.label}
                      </span>
                      
                      {/* Checkmark indicator */}
                      <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected ? 'border-yellow-400 bg-yellow-400 text-black scale-100' : 'border-zinc-200 scale-0'
                      }`}>
                        <Check size={12} strokeWidth={4} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. SCOPE TEXTAREA */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black text-xs">3</div>
                <h2 className="text-xl font-black uppercase text-zinc-900 tracking-tight">Project Scope</h2>
              </div>
              <div className="relative group">
                <textarea 
                  name="message" 
                  required 
                  rows={6} 
                  placeholder="Describe your facility requirements, current challenges, or deployment timeline..." 
                  className="w-full bg-white border-2 border-zinc-200 p-6 text-zinc-900 focus:outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition-all text-sm resize-none rounded-xl font-medium placeholder:text-zinc-400" 
                />
              </div>
            </div>

            {/* SUBMIT FOOTER */}
            <div className="p-8 md:p-12 bg-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 rounded-b-2xl">
              <div className="flex items-center gap-3 text-zinc-400">
                <Clock size={18} className="text-yellow-400" />
                <span className="text-xs font-bold uppercase tracking-widest">Average Response: &lt; 24 Hours</span>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full md:w-auto bg-yellow-400 text-black px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 rounded-lg shadow-[0_0_20px_rgba(250,204,21,0.3)] disabled:opacity-50 disabled:hover:scale-100 group"
              >
                {isSubmitting ? 'Processing...' : 'Submit Request'} 
                {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>}
              </button>
            </div>

            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          </form>
        </main>

        <Footer />

        {/* --- PURE CSS ANIMATIONS --- */}
        <style>{`
          @keyframes fadeInUp { 
            from { opacity: 0; transform: translateY(20px); } 
            to { opacity: 1; transform: translateY(0); } 
          }
          .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
          
          @keyframes slideUpDelayed { 
            from { opacity: 0; transform: translateY(40px); } 
            to { opacity: 1; transform: translateY(0); } 
          }
          .animate-slide-up-delayed { animation: slideUpDelayed 0.8s ease-out 0.2s forwards; opacity: 0; }
        `}</style>
      </div>
    </>
  );
}

// PREMIUM INPUT COMPONENT
function FormInput({ label, name, type = "text", required, icon, placeholder }) {
  return (
    <div className="space-y-2 group">
      <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest group-focus-within:text-zinc-900 transition-colors pl-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative flex items-center">
        <div className="absolute left-4 text-zinc-400 group-focus-within:text-yellow-500 transition-colors">
          {icon}
        </div>
        <input 
          name={name} 
          type={type} 
          required={required} 
          placeholder={placeholder} 
          className="w-full bg-white border-2 border-zinc-200 p-4 text-zinc-900 focus:outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 transition-all pl-12 text-sm font-medium rounded-xl placeholder:text-zinc-300" 
        />
      </div>
    </div>
  );
}