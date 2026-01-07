import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import c45logo from "../assets/c45logo.png";

export default function Navbar({ scrollRefs, onOpenModal }) {
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
        bg-transparent
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          className="cursor-pointer flex items-center"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection(scrollRefs.home)}
        >

          <div className="relative h-10 w-32 md:h-14 md:w-48 flex items-center">
            <img
              src={c45logo}
              alt="Crash 45"
              className="absolute top-1/2 left-0 -translate-y-1/2 h-20 md:h-32 w-auto max-w-none object-contain"
            />
          </div>
        </motion.div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.ref)}
              className="
                nav-item group
                text-base font-semibold 
                text-gray-800 dark:text-white
                transition-all 
                relative 
                cursor-pointer
                hover:text-[#008080] dark:hover:text-yellow-400
                hover:-translate-y-0.5
              "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}

              <span
                className="
                  absolute left-1/2 bottom-0
                  w-0 h-[2px] 
                  bg-[#008080] dark:bg-yellow-400
                  -translate-x-1/2
                  rounded-full
                  transition-all duration-300 ease-out 
                  group-hover:w-full
                  shadow-[0_0_8px_rgba(0,128,128,0.4)] dark:shadow-[0_0_8px_rgba(250,204,21,0.4)]
                "
              ></span>
            </motion.button>
          ))}

          <ThemeToggle />

          {/* ENROLL BUTTON */}
          <motion.button
            onClick={onOpenModal}
            className="px-6 py-2 rounded-full font-bold bg-[#f8ba2b] text-black"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 dark:text-gray-200"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 space-y-4 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-gray-100 dark:border-zinc-800">

          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.ref)}
              className="block w-full text-left nav-item text-lg font-semibold text-gray-800 dark:text-gray-200"
              whileHover={{ scale: 1.03 }}
            >
              {item.name}
            </motion.button>
          ))}

          {/* MOBILE ENROLL BUTTON */}
          <button
            onClick={() => {
              setMenuOpen(false);
              onOpenModal();
            }}
            className="w-full mt-4 py-3 rounded-full font-bold bg-[#f8ba2b] text-black"
          >
            Enroll Now
          </button>

        </div>
      )}
    </nav>
  );
}
