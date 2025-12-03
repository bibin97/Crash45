import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MagneticCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hideCursor, setHideCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // CHECK ONLY NAVBAR HEIGHT, NOT FULL WIDTH
      const navbar = document.querySelector("nav");
      if (navbar) {
        const rect = navbar.getBoundingClientRect();

        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          setHideCursor(true);  // hide inside navbar
        } else {
          setHideCursor(false); // show everywhere else
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* INNER YELLOW DOT */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePos.x - 8,
          y: mousePos.y - 8,
          scale: hideCursor ? 0.5 : 1.4,
          opacity: hideCursor ? 0 : 1,   // hide in navbar
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div
          className="w-4 h-4 rounded-full opacity-90"
          style={{ backgroundColor: "#f8ba2b" }}
        />
      </motion.div>

      {/* TEAL RING (never hidden) */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: hideCursor ? 1 : 1.3,
          opacity: 0.6,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div
          className="w-8 h-8 rounded-full border-2"
          style={{ borderColor: "#008080" }}
        />
      </motion.div>
    </>
  );
};

export default MagneticCursor;
