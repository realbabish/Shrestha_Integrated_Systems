import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// --- GLOBAL COMPONENTS (Load Immediately) ---
import LoadingAnimation from './components/LoadingAnimation';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from "./components/SIS-chatAgent/Chatwidget.jsx";

// --- PAGE COMPONENTS (Lazy Load for Speed) ---
// This prevents the browser from downloading the whole site at once
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Security = lazy(() => import('./pages/Security'));
const Quote = lazy(() => import('./pages/Quote'));
const Contact = lazy(() => import('./pages/Contact'));
const Agent = lazy(() => import('./pages/Agent'));
const Networking = lazy(() => import('./pages/Networking'));

function App() {
  const [loading, setLoading] = useState(true);

  // Your original loading animation logic
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <LoadingAnimation />;

  return (
    <>
      <ScrollToTop />
      
      {/* Suspense handles the split-second delay when clicking a new page */}
      {/* fallback is a seamless dark background that matches your theme */}
      <Suspense fallback={<div className="min-h-screen bg-[#050608]" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Security" element={<Security />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Quote" element={<Quote />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/Networking" element={<Networking />} />
        </Routes>
      </Suspense>

      {/* This works now because the import above exists */}
      <ChatWidget /> 
    </>
  );
}

export default App;