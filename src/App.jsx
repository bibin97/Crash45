// src/App.jsx
import React, { useRef, useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Whyus from "./pages/Whyus";
import Who from "./pages/Who";
import Faq from "./pages/Faq";
import Testimonials from "./pages/Testimonials";

export default function App() {

  // ALL scroll refs declared here (notice 'faq' lowercase)
  const scrollRefs = {
    home: useRef(null),
    about: useRef(null),
    features: useRef(null),
    whyus: useRef(null),
    who: useRef(null),
    faq: useRef(null),    // <-- IMPORTANT: lowercase 'faq'
    testimonials: useRef(null),
    pricing: useRef(null),
  };

  return (
    <div className="font-['Inter'] min-h-screen bg-[#f7f7f8] text-[#071525] dark:bg-[#05070d] dark:text-[#f3f4f6] transition-colors duration-300">
      <Navbar
        scrollRefs={scrollRefs}
      />

      <main className="pt-28">
        <section ref={scrollRefs.home}>
          <Home />
        </section>

        <section ref={scrollRefs.about}>
          <About />
        </section>

        <section ref={scrollRefs.features}>
          <Features />
        </section>

        <section ref={scrollRefs.whyus}>
          <Whyus />
        </section>

        <section ref={scrollRefs.who}>
          <Who />
        </section>

        {/* FAQ section */}
        <section ref={scrollRefs.faq}>
          <Faq />
        </section>

        <section ref={scrollRefs.testimonials}>
          <Testimonials />
        </section>

        <section ref={scrollRefs.pricing}>
          <Pricing />
        </section>
        <Footer />
      </main>
    </div>
  );
}