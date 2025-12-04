import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MagneticCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hideCursor, setHideCursor] = useState(false);
  const [enableCursor, setEnableCursor] = useState(false);

  // Enable cursor only on DESKTOP (>= 1024px)
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setEnableCursor(true);
    }
  }, []);

  // Mouse tracking only when enabled
  useEffect(() => {
    if (!enableCursor) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const navbar = document.querySelector("nav");
      if (navbar) {
        const rect = navbar.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          setHideCursor(true);
        } else {
          setHideCursor(false);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enableCursor]);

  // If cursor is disabled → render nothing
  if (!enableCursor) return <></>;

  return (
    <>
      {/* INNER DOT */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePos.x - 8,
          y: mousePos.y - 8,
          scale: hideCursor ? 0.5 : 1.4,
          opacity: hideCursor ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div
          className="w-4 h-4 rounded-full opacity-90"
          style={{ backgroundColor: "#f8ba2b" }}
        />
      </motion.div>

      {/* OUTER RING */}
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
