// WhyUs.jsx
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function WhyUs() {
  const points = [
    "100% personalized classes",
    "Expert subject mentors",
    "Flexible scheduling",
    "Study materials included",
    "Perfect for fast-track exam prep",
  ];

  return (
    <section
      id="whyus"
      className="px-6 py-20 max-w-6xl mx-auto"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold font-[Poppins] mb-10"
      >
        Why Students & Parents{" "}
        <span className="bg-gradient-to-r from-[#008080] to-[#f8ba2b] bg-clip-text text-transparent">
          Love Crash 45
        </span>
      </motion.h2>

      {/* Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="about-card rounded-3xl p-10 mx-auto max-w-3xl"
      >
        <ul className="space-y-4">
          {points.map((p, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-lg"
            >
              <CheckCircle className="text-teal-500 dark:text-teal-300" size={22} />
              <span className="text-black dark:text-white">{p}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
