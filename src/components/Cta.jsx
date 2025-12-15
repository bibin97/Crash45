import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Users } from "lucide-react";

export default function Cta({ darkMode }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 relative overflow-hidden shadow-2xl
          ${darkMode
            ? "border border-white/10 shadow-[0_0_40px_-5px_rgba(255,255,255,0.1)]"
            : "border border-gray-200 shadow-xl"
          }
        `}
        style={{
          background: darkMode
            ? "#000000" // Solid Black
            : "#ffffff", // Pure White
        }}
      >
        {/* Left Section */}
        <div className={darkMode ? "text-white" : "text-gray-900"}>
          <h2 className="text-3xl font-extrabold">
            Ready to boost your exam scores?
          </h2>
          <p className={`mt-2 text-sm md:text-base ${darkMode ? "text-gray-400 opacity-90" : "text-gray-600"}`}>
            Complete syllabus coverage with personal mentor guidance.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-[#f8ba2b] text-black font-bold rounded-full shadow-lg hover:bg-[#e6ac22] hover:scale-105 transition-all">
            Enroll Now
          </button>


        </div>
      </motion.div>
    </section>
  );
}
