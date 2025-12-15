// WhyUs.jsx
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function WhyUs() {
  const points = [
    "100% personalized 1-to-1 classes",
    "Experienced, result-oriented mentors",
    "Flexible scheduling for busy students",
    "Complete study materials & notes included",
    "Ideal for fast-track exam preparation",
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
        className="text-center text-4xl md:text-5xl font-extrabold font-[Poppins] mb-4"
      >
        Why Students & Parents {" "}
        <span className="bg-gradient-to-r from-[#008080] to-[#f8ba2b] bg-clip-text text-transparent">
          Trust Crash 45
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
      >
        A focused 45-hour crash program designed for maximum marks, clarity, and confidence.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Column: Bullets */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <ul className="space-y-6">
              {points.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 text-lg"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center">
                    <CheckCircle className="text-black dark:text-teal-400" size={20} />
                  </div>
                  <span className="text-gray-800 dark:text-gray-100 font-medium">{p}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-2"
          >
            <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group">
              Book Your Seat Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>

          {/* Trust Signal - Mobile/Tablet placement (optional, keeping it near content) */}
          <div className="md:hidden text-center">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 backdrop-blur-sm text-sm font-semibold text-gray-700 dark:text-gray-200 shadow-sm">
              ⭐ Trusted by 100+ students
            </span>
          </div>
        </motion.div>

        {/* Right Column: Stats / Visuals */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="grid gap-6">
            <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl p-8 text-white shadow-xl transform hover:scale-[1.02] transition-transform">
              <h3 className="text-5xl font-bold mb-2">45</h3>
              <p className="text-teal-100 text-lg font-medium">Hours of Intensive Learning</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-white/10 flex flex-col justify-center text-center transform hover:-translate-y-1 transition-transform">
                <span className="text-3xl mb-2">🤝</span>
                <h4 className="font-bold text-gray-800 dark:text-white text-lg">1:1 Mentorship</h4>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-white/10 flex flex-col justify-center text-center transform hover:-translate-y-1 transition-transform">
                <span className="text-3xl mb-2">📚</span>
                <h4 className="font-bold text-gray-800 dark:text-white text-lg">100% Syllabus</h4>
              </div>
            </div>

            <div className="hidden md:block text-center mt-2">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 backdrop-blur-sm text-sm font-semibold text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow">
                ⭐ Trusted by 100+ students
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
