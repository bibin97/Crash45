import { motion } from "framer-motion";
import AnimatedButton from "../components/AnimatedButton";
import homeimg from "../assets/homeimg.png";

export default function Home() {
  const stats = [
    { number: "45", label: "Hours" },
    { number: "1:1", label: "Mentor" },
    { number: "90+", label: "Goal" },
  ];

  return (
   <section className="min-h-screen px-4 sm:px-6 pt-10 pb-20 flex items-center">

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT */}
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
      >
        Prep with{" "}
        <span className="bg-gradient-to-r from-[#008080] via-[#f8ba2b] to-[#008080] bg-clip-text text-transparent">
          CRASH 45
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-xl text-base sm:text-lg opacity-90 mb-10"
      >
        A personalized 45-hour exam acceleration system built for students aiming at high-score breakthroughs.
      </motion.p>

      {/* CTA + STATS */}
      <div className="flex flex-wrap items-center gap-6 md:gap-10">
        
        {/* Button */}
        <div className="w-fit">
          <AnimatedButton>Book Your Seat Now 🔥</AnimatedButton>
        </div>

        {/* Stats */}
        <div className="flex gap-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="p-4 rounded-2xl shadow-xl text-center min-w-[80px] bg-white/10 backdrop-blur-md border border-white/20"
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#008080] to-[#f8ba2b] bg-clip-text text-transparent">
                {item.number}
              </div>
              <p className="text-xs sm:text-sm mt-1 opacity-80">{item.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="flex justify-center md:justify-end"
    >
      <img
        src={homeimg}
        alt="Crash 45 Study Illustration"
        className="w-full max-w-sm md:max-w-md lg:max-w-lg drop-shadow-xl"
      />
    </motion.div>

  </div>
</section>
  );
}