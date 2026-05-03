import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { 
  Menu, X, ChevronRight, Zap, Bot, 
  ShieldCheck, Network, Home, Info, 
  Phone, Mail 
} from "lucide-react"; 

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close nav on route change
  useEffect(() => {
    setNav(false);
  }, [location]);

  // Lock body scroll when mobile menu is open (Critical for mobile stability)
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [nav]);

  const getPath = (item) => {
    if (item.name === "Home") return "/";
    if (item.name === "Our AI") return "/agent";
    if (item.name === "Quote") return "/Quote";
    return `/${item.name.toLowerCase()}`;
  };

  const navItems = [
    { name: "Home", icon: <Home size={20} /> },
    { name: "Security", icon: <ShieldCheck size={20} /> },
    { name: "Networking", icon: <Network size={20} /> },
    { name: "Our AI", icon: <Bot size={20} /> },
    { name: "About", icon: <Info size={20} /> }
  ];

  return (
    <>
      {/* --- MAIN DESKTOP / MOBILE NAVBAR --- */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#050608]/95 shadow-2xl border-b border-white/10 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        {/* High-Tech Top Border */}
        <div className="absolute top-0 left-0 w-full h-[3px] overflow-hidden z-50">
          <div className="w-full h-full bg-[linear-gradient(90deg,#facc15,#dc2626,#000000,#dc2626,#facc15)] animate-gradient-x bg-[length:200%_100%]" />
        </div>

        <div className={`max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center transition-all duration-300 ${scrolled ? "h-[70px]" : "h-[90px]"}`}>
          
          {/* --- LOGO --- */}
          <Link to="/" className="flex items-center group relative z-50 gap-3 md:gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 60"
              className={`transition-all duration-300 ${scrolled ? "h-9 w-9" : "h-11 w-11"}`}
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
              
            <div className="flex flex-col justify-center gap-0.5">
              <span className={`font-black text-white uppercase italic tracking-tighter leading-none transition-all duration-300 ${scrolled ? "text-xl" : "text-2xl"}`}>
                Shrestha
              </span>
              <span className="text-[7px] md:text-[9px] text-yellow-400 font-bold tracking-[0.25em] uppercase leading-none">
                Integrated Systems
              </span>
            </div>
          </Link>

          {/* --- DESKTOP LINKS --- */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex space-x-8 text-sm font-black tracking-[0.15em] uppercase relative z-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={getPath(item)}
                    className={({ isActive }) =>
                      `relative py-2 transition-colors duration-300 hover:text-yellow-400 group flex items-center gap-2 ${
                        isActive ? "text-yellow-400" : "text-zinc-300"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive ? <Zap size={14} className="text-yellow-400 animate-pulse" /> : 
                          <span className="text-zinc-500 group-hover:text-yellow-400 transition-colors">{item.icon}</span>
                        }
                        {item.name}
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

          {/* --- HAMBURGER ICON (Mobile Only) --- */}
          <button 
            className="lg:hidden relative z-50 text-white p-2 hover:text-yellow-400 transition-colors" 
            onClick={() => setNav(true)}
            aria-label="Open Menu"
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* ========================================== */}
      {/* --- BULLETPROOF MOBILE TAKEOVER MENU --- */}
      {/* ========================================== */}
      <div 
        className={`lg:hidden fixed inset-0 z-[100] bg-[#050608] flex flex-col transition-all duration-300 ease-in-out ${
          nav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ height: "100dvh" }} // Forces menu to fit exact mobile screen height, ignoring address bars
      >
        {/* High-Tech Top Border */}
        <div className="absolute top-0 left-0 w-full h-[3px] overflow-hidden z-50">
          <div className="w-full h-full bg-[linear-gradient(90deg,#facc15,#dc2626,#000000,#dc2626,#facc15)] animate-gradient-x bg-[length:200%_100%]" />
        </div>

        {/* Mobile Menu Header (Matches scrolled nav height perfectly) */}
        <div className="h-[70px] px-4 flex justify-between items-center border-b border-white/10 shrink-0">
          
          <Link to="/" onClick={() => setNav(false)} className="flex items-center gap-3">
            <svg viewBox="0 0 60 60" className="h-9 w-9">
              <path d="M 45 10 L 10 10 L 10 35 L 35 35 L 35 45 L 10 45 L 10 55 L 50 55 L 50 25 L 25 25 L 25 20 L 45 20 Z" fill="white" />
              <rect x="48" y="10" width="8" height="8" fill="#facc15" />
            </svg>
            <div className="flex flex-col justify-center gap-0.5">
              <span className="font-black text-white uppercase italic tracking-tighter text-xl leading-none">Shrestha</span>
              <span className="text-[7px] text-yellow-400 font-bold tracking-[0.25em] uppercase leading-none">Integrated Systems</span>
            </div>
          </Link>

          <button onClick={() => setNav(false)} className="p-2 text-white hover:text-yellow-400 transition-colors">
             <X size={32} />
          </button>
        </div>

        {/* Mobile Menu Links (Scrollable Area) */}
        <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-4 relative">
          {/* Faint Background Grid inside the menu */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

          <div className="relative z-10 flex flex-col gap-4">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 border-b border-zinc-800 pb-2">Navigation Matrix</span>
            
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={getPath(item)}
                onClick={() => setNav(false)}
                className={({ isActive }) => 
                  `flex items-center gap-4 p-4 border rounded-sm transition-all ${
                    isActive 
                      ? "border-yellow-400/50 bg-yellow-400/10 text-yellow-400" 
                      : "border-zinc-800 bg-zinc-900 text-white hover:border-yellow-400/50 hover:text-yellow-400"
                  }`
                }
              >
                <div className="text-zinc-400">{item.icon}</div>
                <span className="text-lg font-black uppercase tracking-widest">{item.name}</span>
              </NavLink>
            ))}

            <Link
              to="/Quote"
              onClick={() => setNav(false)}
              className="mt-6 flex items-center justify-center gap-3 bg-yellow-400 text-black py-5 font-black uppercase tracking-widest text-xs rounded-sm shadow-[0_0_20px_rgba(250,204,21,0.2)]"
            >
              Initialize Request <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {/* Support Footer */}
        <div className="bg-zinc-950 border-t border-zinc-800 p-6 flex flex-col gap-4 shrink-0 pb-8">
           <a href="tel:2896683532" className="flex items-center gap-4 text-zinc-400 hover:text-yellow-400 transition-colors">
              <div className="p-2 bg-zinc-900 rounded-sm border border-zinc-800"><Phone size={16} /></div>
              <span className="text-[11px] font-bold uppercase tracking-widest">(289) 668-3532</span>
           </a>
           <a href="mailto:info@integratedsystems.ca" className="flex items-center gap-4 text-zinc-400 hover:text-yellow-400 transition-colors">
              <div className="p-2 bg-zinc-900 rounded-sm border border-zinc-800"><Mail size={16} /></div>
              <span className="text-[10px] font-bold uppercase tracking-widest">info@integratedsystems.ca</span>
           </a>
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
    </>
  );
}