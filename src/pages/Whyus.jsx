// WhyUs.jsx
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Handshake, BookOpen, Clock, GraduationCap } from "lucide-react";

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
        <span className="text-black dark:text-white">
          Trust Crash 45
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-lg dark:text-gray-300 mb-10 max-w-2xl mx-auto"
      >
        A focused 45-hour crash program designed for maximum marks, clarity, and confidence.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
        {/* Left Column: Bullets */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 h-full"
        >
          <div className="card backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-[#18181b] h-full flex flex-col justify-center">
            <ul className="space-y-6">
              {points.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 text-lg"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center shadow-md">
                    <CheckCircle className="text-white" size={20} />
                  </div>
                  <span className="text-black dark:text-white font-medium">{p}</span>
                </motion.li>
              ))}
            </ul>
          </div>



          {/* Trust Signal - Mobile/Tablet placement (optional, keeping it near content) */}
          <div className="md:hidden text-center">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full card shadow-lg text-sm font-bold text-black">
              ⭐ Trusted by 100+ students
            </span>
          </div>
        </motion.div>

        {/* Right Column: Stats / Visuals */}
        {/* Right Column: Stats / Visuals */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 h-full"
        >
          {/* 1. Large Card */}
          <div className="rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-white/10 flex flex-col items-center justify-center text-center bg-white dark:bg-[#18181b] hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-6xl font-extrabold text-teal-600 dark:text-teal-400 mb-2">45</h3>
            <p className="text-black dark:text-white text-lg font-medium">Hours of Intensive Learning</p>
          </div>

          {/* 2. Three small cards in ONE ROW */}
          <div className="grid grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="rounded-3xl p-4 shadow-lg border border-gray-100 dark:border-white/10 flex flex-col items-center justify-center text-center bg-white dark:bg-[#18181b] hover:-translate-y-1 transition-transform h-32">
              <Handshake className="text-teal-600 mb-2" size={28} />
              <h4 className="font-bold text-black dark:text-white text-xs md:text-sm leading-tight">1:1 Mentor</h4>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl p-4 shadow-lg border border-gray-100 dark:border-white/10 flex flex-col items-center justify-center text-center bg-white dark:bg-[#18181b] hover:-translate-y-1 transition-transform h-32">
              <BookOpen className="text-teal-600 mb-2" size={28} />
              <h4 className="font-bold text-black dark:text-white text-xs md:text-sm leading-tight">100% Syllabus</h4>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl p-4 shadow-lg border border-gray-100 dark:border-white/10 flex flex-col items-center justify-center text-center bg-white dark:bg-[#18181b] hover:-translate-y-1 transition-transform h-32">
              <Clock className="text-teal-600 mb-2" size={28} />
              <h4 className="font-bold text-black dark:text-white text-xs md:text-sm leading-tight">Flexible Time</h4>
            </div>
          </div>

          {/* 3. Trusted Badge - Full Width */}
          <div className="w-full">
            <div className="w-full px-6 py-3 rounded-2xl shadow-md text-sm font-bold text-black dark:text-white bg-white dark:bg-[#18181b] border border-gray-100 dark:border-white/10 hover:scale-[1.02] transition-transform text-center flex items-center justify-center gap-2">
              ⭐ Trusted by 100+ students
            </div>
          </div>

        </motion.div>
      </div>

      {/* CTA Button - Centered below both columns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <button className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-yellow-600 to-yellow-300 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto group">
          Book Your Seat Now
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </motion.div>
    </section>
  );
}
