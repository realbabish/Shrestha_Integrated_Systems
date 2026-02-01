import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050608] text-white relative pt-16 pb-8 border-t border-white/5 font-sans">
      
      {/* 🔴 High-Tech Top Border (Matches Navbar) */}
      <div className="absolute top-0 left-0 w-full h-[3px] overflow-hidden z-20">
        <div className="w-full h-full bg-[linear-gradient(90deg,#facc15,#dc2626,#000000,#dc2626,#facc15)] animate-gradient-x bg-[length:200%_100%]" />
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* COL 1: BRAND IDENTITY (Span 5) */}
        <div className="md:col-span-5 flex flex-col items-start">
          
          {/* THE LOGO (Matched to your Navbar Code) */}
          <Link to="/" className="flex items-center gap-4 mb-6 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 60"
              className="h-12 w-12 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
              aria-label="Shrestha Logo Icon"
            >
              {/* The 'Constructed S' from your Navbar */}
              <path 
                d="M 45 10 L 10 10 L 10 35 L 35 35 L 35 45 L 10 45 L 10 55 L 50 55 L 50 25 L 25 25 L 25 20 L 45 20 Z" 
                fill="white" 
                className="group-hover:fill-yellow-400 transition-colors duration-300"
              />
              
              {/* Circuit Nodes */}
              <rect x="48" y="10" width="8" height="8" fill="#facc15" className="animate-pulse" />
              <rect x="4" y="47" width="8" height="8" fill="#facc15" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
            </svg>
            
            <div className="flex flex-col leading-none">
              <span className="font-black text-white text-2xl uppercase italic tracking-tighter group-hover:text-yellow-400 transition-colors">Shrestha</span>
              <span className="text-[10px] text-gray-400 font-bold tracking-[0.3em] uppercase group-hover:text-white transition-colors">Integrated Systems</span>
            </div>
          </Link>

          <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm font-medium">
            Specialized technical integration for Canada's most demanding environments. 
            Level-1 Trauma Centers, Municipal Infrastructure, and High-Security Enterprise.
          </p>

          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 hover:bg-yellow-400 hover:text-black transition-all rounded-sm group">
              <Linkedin size={20} />
            </a>
            <a href="mailto:info@shresthasystems.com" className="p-2 bg-white/5 hover:bg-yellow-400 hover:text-black transition-all rounded-sm">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* COL 2: SITEMAP (Span 3) */}
        <div className="md:col-span-3">
          <h4 className="text-yellow-400 font-black uppercase tracking-widest text-xs mb-8">System Links</h4>
          <ul className="space-y-4">
            {["Home", "Services", "About", "Quote"].map((item) => (
              <li key={item}>
                <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-yellow-400" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COL 3: TECHNICAL DISPATCH (Span 4) */}
        <div className="md:col-span-4">
          <h4 className="text-yellow-400 font-black uppercase tracking-widest text-xs mb-8">Technical Dispatch</h4>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-gray-600 mt-1 shrink-0" size={18} />
              <div>
                <p className="text-white font-bold text-sm uppercase">Based in</p>
                <p className="text-gray-500 text-sm w-56 leading-tight">5985 Bentley Common,<br/>Niagara Falls, Ontario</p>
                <p className="text-gray-600 text-xs mt-1 uppercase tracking-wider">Serving Canada Coast-to-Coast</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-gray-600 mt-1 shrink-0" size={18} />
              <div>
                <p className="text-white font-bold text-sm uppercase">24/7 Support Line</p>
                <a href="tel:6475494528" className="text-gray-500 text-sm hover:text-yellow-400 transition-colors cursor-pointer font-mono tracking-widest">
                 +1-647-549-4528
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-white/5 pt-8 mt-8 px-6 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">
            &copy; {currentYear} Shrestha Integrated Systems. All Protocols Secured.
          </p>
          <div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <span className="text-[10px] uppercase font-bold text-gray-500">Engineered In</span>
             <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" alt="Canada" className="h-3 w-auto" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </footer>
  );
}