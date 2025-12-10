import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Users } from "lucide-react";

export default function Cta() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-white text-white p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-extrabold">
            Ready to start your journey?
          </h2>
          <p className="mt-2 opacity-90 text-sm md:text-base">
            Choose a plan that fits your goals. You can upgrade or cancel
            anytime — no risk.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-[#f8ba2b] text-teal-700 font-semibold rounded-xl shadow hover:scale-[1.03] transition-all">
            Get Started
          </button>

         
        </div>
      </motion.div>
    </section>
  );
}
