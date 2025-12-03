import { useRef, useState, useEffect } from "react";
import MagneticCursor from "./components/MagneticCursor";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

export default function App() {
  const [darkMode, setDarkMode] = useState(false); // Light mode default

  // Apply theme to <html> (NOT body)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Section references
  const home = useRef(null);
  const about = useRef(null);
  const features = useRef(null);
  const how = useRef(null);
  const pricing = useRef(null);

  const scrollRefs = { home, about, features, how, pricing };

  return (
    <div>
      {/* Cursor */}
      <MagneticCursor />

      {/* Navbar */}
      <Navbar
        scrollRefs={scrollRefs}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Sections */}
      <main className="pt-28">
        <section ref={home}>
          <Home />
        </section>

        <section ref={about}>
          <About />
        </section>

        <section ref={features}>
          <Features />
        </section>

        <section ref={pricing}>
          <Pricing />
        </section>
      </main>
    </div>
  );
}
