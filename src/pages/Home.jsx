import { motion } from "framer-motion";
import AnimatedButton from "../components/AnimatedButton";
import homeimg from "../assets/homeimg.png"; // ← replace with your image path

export default function Home() {
  const stats = [
    { number: "45", label: "Hours" },
    { number: "1:1", label: "Mentor" },
    { number: "90+", label: "Goal" },
  ];

  return (
    <section className="min-h-screen px-6 py-24 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Transform Your Exam Prep with  
            <span className="bg-gradient-to-r from-[#008080] via-[#f8ba2b] to-[#008080] bg-clip-text text-transparent">
              {" "}CRASH 45
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-lg opacity-90 mb-10"
          >
            A personalized 45-hour exam acceleration system built for students aiming at high-score breakthroughs.
          </motion.p>

          {/* CTA + Stats Row (horizontal alignment) */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-10">

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-8 md:mb-0"
            >
              <AnimatedButton>Book Your Seat Now 🔥</AnimatedButton>
            </motion.div>

            {/* Stats (3 cards inline) */}
            <div className="flex gap-4">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="card p-4 rounded-2xl shadow-xl text-center min-w-[90px]"
                >
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-[#008080] to-[#f8ba2b] bg-clip-text text-transparent">
                    {item.number}
                  </div>
                  <p className="text-sm mt-1 opacity-80">{item.label}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={homeimg}
            alt="Crash 45 Study Illustration"
            className="w-[90%] max-w-md drop-shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
