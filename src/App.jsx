import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Quote from './pages/Quote';
import Contact from './pages/Contact';
import LoadingAnimation from './components/LoadingAnimation';
import ScrollToTop from './components/ScrollToTop';



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
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>

      {/* 2. Drop the widget here so it floats on all pages */}
      <ChatWidget /> 
    </>
  );
}

export default App;