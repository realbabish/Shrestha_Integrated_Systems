import React from 'react';
import { Helmet } from "react-helmet-async";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#050608] text-white flex flex-col">
      <Helmet>
        <title>Contact Us | Shrestha Integrated Systems</title>
        <meta name="description" content="Request a free site audit or immediate dispatch for IT infrastructure and security system upgrades. Serving Niagara, Hamilton, and the GTA." />
        <link rel="canonical" href="https://integratedsystems.ca/contact" />
      </Helmet>

      <NavBar />
      
      {/* Placeholder content ensuring Footer pushes to bottom */}
      <main className="flex-grow pt-32 pb-24 px-6 flex items-center justify-center">
          <h1 className="text-4xl font-black uppercase tracking-tighter italic text-gray-500">
             Contact Terminal <span className="text-yellow-400 animate-pulse">_</span>
          </h1>
      </main>

      <Footer/>
    </div>
  )
}

export default Contact;