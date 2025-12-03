import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ scrollRefs, darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", ref: scrollRefs.home },
    { name: "About", ref: scrollRefs.about },
    { name: "Features", ref: scrollRefs.features },
    { name: "Pricing", ref: scrollRefs.pricing },
  ];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50 
        backdrop-blur-xl 
        border-b
        bg-transparent border-transparent
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          className="text-2xl font-black cursor-pointer flex items-center gap-1"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection(scrollRefs.home)}
        >
          <span className="text-[#008080]">CRASH</span>
          <span className="text-[#f8ba2b]">45</span>
        </motion.div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.ref)}
              className="
                nav-item 
                text-base font-semibold 
                transition-all 
                relative 
                cursor-pointer
              "
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}

              {/* Underline hover animation */}
              <span
                className="
                  absolute left-0 -bottom-1 
                  w-0 h-[2px] 
                  bg-[#008080] 
                  transition-all duration-300 
                  group-hover:w-full
                "
              ></span>
            </motion.button>
          ))}

          {/* THEME TOGGLE */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-full transition"
            style={{
              backgroundColor: darkMode ? "#f8ba2b" : "#008080",
              color: darkMode ? "black" : "white",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? "☀️" : "🌙"}
          </motion.button>

          {/* ENROLL BUTTON */}
          <motion.button
            className="px-6 py-2 rounded-full font-bold bg-[#f8ba2b] text-black"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 space-y-4 bg-transparent">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.ref)}
              className="block w-full text-left nav-item text-lg font-semibold"
              whileHover={{ scale: 1.03 }}
            >
              {item.name}
            </motion.button>
          ))}

          {/* MOBILE THEME TOGGLE */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-full mt-4"
            style={{
              backgroundColor: darkMode ? "#f8ba2b" : "#008080",
              color: darkMode ? "black" : "white",
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </motion.button>

          <button className="w-full mt-4 py-3 rounded-full font-bold bg-[#f8ba2b] text-black">
            Enroll Now
          </button>
        </div>
      )}
    </nav>
  );
}
