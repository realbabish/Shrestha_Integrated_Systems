import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Wifi } from "lucide-react";

const MotionDiv = motion.div;

export default function LoadingAnimation({ onFinish }) {
  // States: 'idle' -> 'tapping' -> 'granted'
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    // 1. Fob moves up to tap
    const tapTimeout = setTimeout(() => setStatus("tapping"), 600);
    // 2. Tap registers, light turns green
    const grantTimeout = setTimeout(() => setStatus("granted"), 1200);
    // 3. Fob pulls away slightly, page loads
    const finishTimeout = setTimeout(() => onFinish(), 2200);

    return () => {
      clearTimeout(tapTimeout);
      clearTimeout(grantTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#050608] flex items-center justify-center z-[9999] overflow-hidden">
      <div className="relative w-64 h-[400px] flex flex-col items-center justify-center">

        {/* --- 1. THE WALL READER --- */}
        <div className="absolute top-24 z-10 w-24 h-36 bg-gradient-to-b from-zinc-800 to-black rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-zinc-700 flex flex-col items-center pt-4">
          
          {/* LED Indicator Strip */}
          <MotionDiv
            animate={{
              backgroundColor: status === "granted" ? "#22c55e" : "#3b82f6",
              boxShadow: status === "granted" ? "0 0 20px #22c55e" : "0 0 10px #3b82f6"
            }}
            transition={{ duration: 0.15 }} // Very fast snap for realistic LED
            className="w-14 h-1.5 rounded-full mb-6"
          />
          
          {/* RFID Target Zone */}
          <div className="w-12 h-12 rounded-full border-[1.5px] border-zinc-600/50 flex items-center justify-center">
            <MotionDiv
              animate={{ opacity: status === "granted" ? 1 : [0.3, 0.7, 0.3] }}
              transition={{ repeat: status === "granted" ? 0 : Infinity, duration: 1.5 }}
            >
              <Wifi size={24} className={status === "granted" ? "text-green-500" : "text-zinc-500"} />
            </MotionDiv>
          </div>
        </div>

        {/* --- 2. THE RIPPLE/HAPTIC VISUAL ON TAP --- */}
        {status === "granted" && (
          <MotionDiv
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-[160px] z-15 w-24 h-24 border-2 border-green-500 rounded-full pointer-events-none"
          />
        )}

        {/* --- 3. THE KEY FOB --- */}
        <MotionDiv
          initial={{ y: 400, scale: 0.8, rotateZ: -15, rotateX: 30 }}
          animate={{
            y: status === "idle" ? 400 : (status === "tapping" ? 140 : 180),
            scale: status === "idle" ? 0.8 : (status === "tapping" ? 1 : 0.95),
            rotateZ: status === "idle" ? -15 : 0,
            rotateX: status === "idle" ? 30 : 0
          }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
          className="absolute z-20 w-16 h-24 bg-zinc-900 rounded-[2rem] border-2 border-zinc-700 shadow-2xl flex flex-col items-center pt-2"
        >
          {/* Keychain Loop at the top of fob */}
          <div className="w-6 h-5 border-[3px] border-zinc-500 rounded-t-full -mt-7 -mb-1" />
          
          {/* Fob Indentation/Detail */}
          <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 mt-2 flex items-center justify-center shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]">
            <div className="w-3 h-3 rounded-full bg-zinc-900" />
          </div>
        </MotionDiv>

      </div>
    </div>
  );
}