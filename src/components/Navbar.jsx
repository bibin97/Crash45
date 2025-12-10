import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react"; // ✅ proper icon

export default function Navbar({ scrollRefs, darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", ref: scrollRefs.home },
    { name: "About", ref: scrollRefs.about },
    { name: "Features", ref: scrollRefs.features },
    { name: "Why Us", ref: scrollRefs.whyus },
    { name: "Who Is It For", ref: scrollRefs.who },
    { name: "FAQ", ref: scrollRefs.faq },
    { name: "Testimonials", ref: scrollRefs.testimonials },
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
          <h1 className="text-teal-500">CRASH <span>45</span></h1>
        </motion.div>

        {/* THEME TOGGLE (ALWAYS IN NAVBAR) */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full transition mr-4"
          style={{
            backgroundColor: darkMode ? "#f8ba2b" : "#008080",
            color: darkMode ? "black" : "white",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? "☀️" : "🌙"}
        </motion.button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.ref)}
              className="
                nav-item group
                text-base font-semibold 
                transition-all 
                relative 
                cursor-pointer
              "
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}

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

          {/* DESKTOP THEME TOGGLE */}
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
          className="md:hidden"
        >
          <Menu 
            size={28} 
            className={`${darkMode ? "text-white" : "text-black"}`} 
          />
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
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

          {/* MOBILE ENROLL BUTTON */}
          <button className="w-full mt-4 py-3 rounded-full font-bold bg-[#f8ba2b] text-black">
            Enroll Now
          </button>

        </div>
      )}
    </nav>
  );
}
