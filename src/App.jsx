import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Security from './pages/Security';
import Quote from './pages/Quote';
import Contact from './pages/Contact';
import LoadingAnimation from './components/LoadingAnimation';
import ScrollToTop from './components/ScrollToTop';
import Agent from './pages/Agent'
import Networking from './pages/Networking'
import ChatWidget from "./components/SIS-chatAgent/Chatwidget.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <LoadingAnimation />;

  return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Security" element={<Security />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Quote" element={<Quote />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/Networking" element={<Networking />} />
      </Routes>

      {/* This works now because the import above exists */}
      <ChatWidget /> 
    </>
  );
}

export default App;