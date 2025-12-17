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
        <span className="text-black">
          Trust Crash 45
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-lg  mb-10 max-w-2xl mx-auto"
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
          <div className="card backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
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
                  <span className="text-black font-medium">{p}</span>
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
            <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-300 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group">
              Book Your Seat Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>

          {/* Trust Signal - Mobile/Tablet placement (optional, keeping it near content) */}
          <div className="md:hidden text-center">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full card shadow-lg text-sm font-bold text-black">
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
            <div className=" rounded-3xl p-8 shadow-xl border border-gray-100 transform hover:scale-[1.02] transition-transform flex flex-col justify-center text-center card">
              <h3 className="text-6xl font-extrabold text-teal-600 mb-2">45</h3>
              <p className="text-black text-lg font-medium">Hours of Intensive Learning</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className=" rounded-3xl p-4 shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center transform hover:-translate-y-1 transition-transform h-32 card">
                <Handshake className="text-teal-600 mb-2" size={28} />
                <h4 className="font-bold text-black text-xs md:text-sm leading-tight">1:1 Mentor</h4>
              </div>

              {/* Card 2 */}
              <div className=" rounded-3xl p-4 shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center transform hover:-translate-y-1 transition-transform h-32 card">
                <BookOpen className="text-teal-600 mb-2" size={28} />
                <h4 className="font-bold text-black text-xs md:text-sm leading-tight">100% Syllabus</h4>
              </div>

              {/* Card 3 */}
              <div className=" rounded-3xl p-4 shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center transform hover:-translate-y-1 transition-transform h-32 card">
                <Clock className="text-teal-600 mb-2" size={28} />
                <h4 className="font-bold text-black text-xs md:text-sm leading-tight">Flexible Time</h4>
              </div>
            </div>

            <div className="hidden md:block text-center mt-4">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full card shadow-md text-sm font-bold text-black transform hover:scale-105 transition-transform">
                ⭐ Trusted by 100+ students
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
