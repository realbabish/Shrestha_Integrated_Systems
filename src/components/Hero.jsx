import { Link } from "react-router-dom";
import { LockIcon, KeyIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center h-screen px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      
      {/* 🔐 Floating background icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Repeat bubbles to cover the screen */}
        {[...Array(15)].map((_, i) => {
          const Icon = i % 2 === 0 ? LockIcon : KeyIcon;
          const size = 30 + (i % 5) * 10;
          const left = `${Math.floor(Math.random() * 100)}%`;
          const delay = Math.random() * 0;
          const duration = 20 + Math.random() * 100;
          const anim = i % 3 === 0 ? "float1" : i % 3 === 1 ? "float2" : "float3";

          return (
            <div
              key={i}
              className="absolute bottom-[-100px] opacity-10"
              style={{
                left,
                animation: `${anim} ${duration}s linear ${delay}s infinite`,
              }}
            >
              <Icon size={size} />
            </div>
          );
        })}
      </div>

      {/* 💬 Foreground content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInDown">
          Secure Your World with <span className="text-yellow-400">Shrestha Integrated Systems</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fadeInUp">
          Professional Security & Networking Solutions — CCTV, Access Control, Alarms, Networking, Structured Cabling & IT
        </p>
        <div className="space-x-6">
          <Link
            to="/Quote"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            Get a Quote
          </Link>
          <Link
            to="/services"
            className="border border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-semibold px-6 py-3 rounded-lg transition"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* 💨 Keyframes */}
      <style>
        {`
          @keyframes float1 {
            0% { transform: translateY(0); opacity: 0.1; }
            100% { transform: translateY(-120vh); opacity: 0.1; }
          }
          @keyframes float2 {
            0% { transform: translateY(0) scale(1); opacity: 0.1; }
            100% { transform: translateY(-120vh) scale(1.05); opacity: 0.1; }
          }
          @keyframes float3 {
            0% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
            100% { transform: translateY(-120vh) rotate(360deg); opacity: 0.1; }
          }

          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeInDown {
            animation: fadeInDown 1s ease-out both;
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out both;
          }
        `}
      </style>
    </section>
  );
}
