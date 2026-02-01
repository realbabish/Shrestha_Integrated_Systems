import { useEffect, useState } from "react";

export default function LoadingAnimation({ onFinish }) {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const plugTimeout = setTimeout(() => setConnected(true), 1800);
    const endTimeout = setTimeout(() => onFinish(), 3000);

    return () => {
      clearTimeout(plugTimeout);
      clearTimeout(endTimeout);
    };
  }, [onFinish]);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <div className="relative w-[320px] h-[150px]">
        {/* SWITCH PORT */}
        <div className="absolute top-1/2 left-1/2 w-[160px] h-[40px] -translate-x-1/2 -translate-y-1/2 bg-zinc-800 border-4 border-zinc-600 rounded-lg shadow-inner flex justify-around items-center px-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors duration-500 ${
                connected ? "bg-green-400" : "bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* CABLE */}
        <div
          className={`absolute bottom-0 left-1/2 w-3 h-[90px] bg-blue-500 rounded-md transition-all duration-1000 ease-in-out ${
            connected ? "translate-y-0" : "translate-y-[100%]"
          }`}
          style={{ transform: "translateX(-50%)" }}
        />
      </div>
    </div>
  );
}
