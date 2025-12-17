import React from "react";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 relative overflow-hidden shadow-xl border border-gray-200 dark:border-white/10 dark:bg-[#18181b]"
        style={{
        }}
      >
        {/* Left Section */}
        <div className="text-gray-900 dark:text-white">
          <h2 className="text-3xl font-extrabold">
            Ready to boost your exam scores?
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-900 dark:text-white">
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
