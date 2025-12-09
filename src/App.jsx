import { useRef, useState, useEffect } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Whyus from "./pages/Whyus";
import Who from "./pages/Who";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply theme class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // ✅ Section references (ONLY ONE DECLARATION)
  const scrollRefs = {
    home: useRef(null),
    about: useRef(null),
    features: useRef(null),
    whyus: useRef(null),
    who: useRef(null),
    pricing: useRef(null),
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar
        scrollRefs={scrollRefs}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Sections */}
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

        <section ref={scrollRefs.pricing}>
          <Pricing />
        </section>

      </main>
    </div>
  );
}
