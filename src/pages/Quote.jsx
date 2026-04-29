import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircle, ArrowRight, Mail, Phone, 
  Briefcase, User, Camera, ShieldCheck, 
  Bell, Network, Zap, Activity, Clock, ShieldAlert
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Quote() {
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [handshakeStep, setHandshakeStep] = useState(0);

  const diagnosticMessages = [
    "Initializing...",
    "Securing Link...",
    "Ready."
  ];

  // --- ULTRA-FAST HANDSHAKE (< 1s) ---
  useEffect(() => {
    const timer = setInterval(() => {
      setHandshakeStep(prev => {
        if (prev < diagnosticMessages.length - 1) return prev + 1;
        clearInterval(timer);
        setTimeout(() => setLoading(false), 150);
        return prev;
      });
    }, 200);
    return () => clearInterval(timer);
  }, []);

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
    
    // INTEGRATED ACCESS KEY
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
        alert("Transmission Error. Please verify your connection and try again.");
      }
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- LOADER VIEW ---
  if (loading) {
    return (
      <div className="min-h-screen bg-[#050608] flex flex-col items-center justify-center">
        <motion.div animate={{ opacity: [0, 1] }} className="flex flex-col items-center">
          <Zap className="text-yellow-400 animate-pulse mb-4" size={40} />
          <div className="h-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p 
                key={handshakeStep}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-yellow-400 font-black uppercase tracking-[0.4em] text-[10px]"
              >
                {diagnosticMessages[handshakeStep]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    );
  }

  // --- SUCCESS VIEW ---
  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 font-sans">
        <Navbar />
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-12 text-center max-w-xl border border-gray-100 shadow-2xl rounded-sm">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4">Transmission Successful</h2>
          <p className="text-gray-600 font-medium mb-8">Your request has been delivered to <strong>info@integratedsystems.ca</strong>. We will respond within 24 hours.</p>
          <button onClick={() => window.location.href = '/'} className="bg-gray-900 text-white px-10 py-4 font-black uppercase tracking-widest text-xs hover:bg-yellow-400 hover:text-gray-900 transition-all rounded-sm">Close Session</button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Helmet><title>Request Assessment | Shrestha Integrated Systems</title></Helmet>
      <div className="min-h-screen bg-gray-50 font-sans selection:bg-yellow-400 selection:text-black">
        
        {/* Dark Header Layer */}
        <div className="bg-[#050608] pb-40">
          <Navbar />
          <div className="pt-24 px-6 max-w-4xl mx-auto text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-black tracking-[0.3em] text-yellow-400 uppercase border border-yellow-400/30 rounded-full">
              <Activity size={12} className="animate-pulse" /> Live Technical Intake
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase text-white tracking-tight">System <span className="text-yellow-400">Assessment</span></h1>
            <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">Direct intake for commercial security and IT infrastructure. No sales middlemen.</p>
          </div>
        </div>

        <main className="relative z-20 -mt-24 pb-24 px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto bg-white shadow-2xl border border-gray-200 rounded-sm">
            <form onSubmit={handleSubmit} className="p-8 md:p-16">
              
              {/* 1. CONTACT */}
              <div className="mb-12">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 border-b-2 border-yellow-400 inline-block pb-1 mb-10">1. Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <FormInput label="Full Name" name="name" icon={<User size={18}/>} required placeholder="John Doe" />
                  <FormInput label="Position (Optional)" name="position" icon={<Briefcase size={18}/>} placeholder="Facility Manager" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <FormInput label="Work Email" type="email" name="email" icon={<Mail size={18}/>} required placeholder="name@company.com" />
                  <FormInput label="Site Phone" type="tel" name="phone" icon={<Phone size={18}/>} required placeholder="(555) 000-0000" />
                </div>
              </div>

              {/* 2. SERVICES */}
              <div className="mb-12">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 border-b-2 border-yellow-400 inline-block pb-1 mb-10">2. Systems of Interest</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'cctv', label: 'CCTV / Video Surveillance', icon: <Camera size={20} /> },
                    { id: 'access', label: 'Access Control Matrix', icon: <ShieldCheck size={20} /> },
                    { id: 'alarm', label: 'Intrusion Alarms', icon: <Bell size={20} /> },
                    { id: 'network', label: 'IT Networking / Fiber', icon: <Network size={20} /> }
                  ].map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    return (
                      <button
                        key={service.id} type="button"
                        onClick={() => toggleService(service.id)}
                        className={`flex items-center gap-4 p-5 border-2 transition-all rounded-sm ${
                          isSelected ? 'border-yellow-400 bg-yellow-50 text-gray-900' : 'border-gray-100 text-gray-500 hover:border-gray-300'
                        }`}
                      >
                        {service.icon}
                        <span className="font-bold uppercase text-[11px] tracking-widest">{service.label}</span>
                        {isSelected && <CheckCircle className="ml-auto text-yellow-600" size={18} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. SCOPE */}
              <div className="mb-12">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 border-b-2 border-yellow-400 inline-block pb-1 mb-10">3. Project Scope</h3>
                <textarea name="message" required rows={5} placeholder="Describe your site challenges or hardware requirements..." className="w-full bg-gray-50 border-2 border-gray-100 p-5 text-gray-900 focus:outline-none focus:border-yellow-400 transition-all resize-none font-medium" />
              </div>

              {/* SUBMIT */}
              <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <ShieldAlert className="inline mr-2 text-green-600" size={14} /> 
                  Direct Technician Queue | info@integratedsystems.ca
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-gray-900 text-white px-12 py-5 font-black uppercase tracking-[0.2em] hover:bg-yellow-400 hover:text-gray-900 transition-all flex items-center justify-center gap-3 rounded-sm shadow-lg">
                  {isSubmitting ? 'Transmitting...' : 'Submit Request'} <ArrowRight size={18} />
                </button>
              </div>
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            </form>
          </motion.div>
        </main>
        <Footer />
      </div>
    </>
  );
}

function FormInput({ label, name, type = "text", required, icon, placeholder }) {
  return (
    <div className="space-y-3 group">
      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest group-focus-within:text-yellow-600 transition-colors">{label} {required && "*"}</label>
      <div className="relative flex items-center">
        <div className="absolute left-5 text-gray-300 group-focus-within:text-yellow-600 transition-colors">{icon}</div>
        <input name={name} type={type} required={required} placeholder={placeholder} className="w-full bg-gray-50 border-2 border-gray-100 p-4 text-gray-900 focus:outline-none focus:border-yellow-400 transition-all pl-12 text-sm rounded-sm" />
      </div>
    </div>
  );
}