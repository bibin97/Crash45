// src/App.jsx
import React, { useRef, useState, useEffect } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Whyus from "./pages/Whyus";
import Who from "./pages/Who";
import Faq from "./pages/Faq";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply theme class to <html> for dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // ALL scroll refs declared here (notice 'faq' lowercase)
  const scrollRefs = {
    home: useRef(null),
    about: useRef(null),
    features: useRef(null),
    whyus: useRef(null),
    who: useRef(null),
    faq: useRef(null),    // <-- IMPORTANT: lowercase 'faq'
    pricing: useRef(null),
  };

  return (
    <div>
      <Navbar
        scrollRefs={scrollRefs}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
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

        <section ref={scrollRefs.pricing}>
          <Pricing />
        </section>
      </main>
    </div>
  );
}