import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Zap, Bot, ShieldCheck, Network } from "lucide-react"; // Added ShieldCheck & Network

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setNav(false);
  }, [location]);

  // Helper function to handle custom routing
  const getPath = (item) => {
    if (item === "Home") return "/";
    if (item === "Our AI") return "/agent";
    return `/${item.toLowerCase()}`;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full h-24 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#050608]/95 shadow-2xl border-b border-white/10 backdrop-blur-lg py-2" : "bg-transparent py-6"
      }`}
    >
      {/* 🔴 High-Tech Top Border */}
      <div className="absolute top-0 left-0 w-full h-[3px] overflow-hidden z-50">
        <div className="w-full h-full bg-[linear-gradient(90deg,#facc15,#dc2626,#000000,#dc2626,#facc15)] animate-gradient-x bg-[length:200%_100%]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        
        {/* --- THE NEW "TRUE-S" LOGO --- */}
        <Link to="/" className="flex items-center group relative z-10 gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            className={`transition-all duration-500 ${scrolled ? "h-10 w-10" : "h-14 w-14"}`}
            aria-label="Shrestha Logo Icon"
          >
            <path 
              d="M 45 10 L 10 10 L 10 35 L 35 35 L 35 45 L 10 45 L 10 55 L 50 55 L 50 25 L 25 25 L 25 20 L 45 20 Z" 
              fill="white" 
              className="group-hover:fill-yellow-400 transition-colors duration-300"
            />
            <rect x="48" y="10" width="8" height="8" fill="#facc15" className="animate-pulse" />
            <rect x="4" y="47" width="8" height="8" fill="#facc15" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
          </svg>
            
          <div className={`flex flex-col justify-center transition-all duration-500 ${scrolled ? "gap-0" : "gap-1"}`}>
            <span className={`font-black text-white uppercase italic tracking-tighter leading-none transition-all duration-500 ${scrolled ? "text-2xl" : "text-3xl"}`}>
              Shrestha
            </span>
            <span className="text-[10px] text-yellow-400 font-bold tracking-[0.3em] uppercase leading-none">
              Integrated Systems
            </span>
          </div>
        </Link>

        {/* --- DESKTOP LINKS --- */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex space-x-8 text-sm font-black tracking-[0.15em] uppercase relative z-10">
            {/* Added Security and Networking to the list */}
            {["Home", "Security", "Networking", "Our AI", "About"].map((item) => (
              <li key={item}>
                <NavLink
                  to={getPath(item)}
                  className={({ isActive }) =>
                    `relative py-2 transition-colors duration-300 hover:text-yellow-400 group flex items-center gap-2 ${
                      isActive ? "text-yellow-400" : "text-gray-300"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && <Zap size={12} className="text-yellow-400 animate-pulse" />}
                      
                      {/* Specific Icons for the 3 main pillars */}
                      {item === "Security" && <ShieldCheck size={14} className={isActive ? "text-yellow-400" : "text-gray-500 group-hover:text-yellow-400"} />}
                      {item === "Networking" && <Network size={14} className={isActive ? "text-yellow-400" : "text-gray-500 group-hover:text-yellow-400"} />}
                      {item === "Our AI" && <Bot size={14} className={isActive ? "text-yellow-400" : "text-gray-500 group-hover:text-yellow-400"} />}
                      
                      {item}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link 
            to="/Quote" 
            className="relative group overflow-hidden bg-yellow-400 hover:bg-white text-black text-xs font-black uppercase tracking-[0.2em] px-8 py-4 rounded-sm transition-all flex items-center gap-3"
          >
             <span className="relative z-10 flex items-center gap-2">
               Connect Now <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
             </span>
             <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></div>
          </Link>
        </div>

        {/* --- HAMBURGER ICON --- */}
        <div className="lg:hidden z-50 text-white cursor-pointer hover:text-yellow-400 transition-colors p-2" onClick={() => setNav(!nav)}>
          {nav ? <X size={36} /> : <Menu size={36} />}
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 bg-[#050608] flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] z-40 ${
          nav ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Added Security and Networking to mobile menu */}
        {["Home", "Security", "Networking", "Our AI", "About", "Quote"].map((item, index) => (
          <NavLink
            key={item}
            to={getPath(item)}
            onClick={() => setNav(false)}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={({ isActive }) => 
              `text-5xl font-black uppercase italic tracking-tighter transition-all transform ${
                nav ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } ${
                isActive ? "text-yellow-400 scale-110 -rotate-2" : "text-white hover:text-gray-500"
              }`
            }
          >
            {item}
          </NavLink>
        ))}
        
        <div className="absolute bottom-12 text-gray-600 text-xs font-mono uppercase tracking-[0.3em]">
          <span className="text-yellow-400 animate-pulse">●</span> Systems Online v3.0
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-[-1]"></div>
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
    </nav>
  );
}