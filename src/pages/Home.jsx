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
    <section className="min-h-screen px-4 sm:px-6 pt-6 md:pt-10 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center h-full">

          {/* BIG BOLD HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Full Subject <br/> Full Revision <br /> Full Mastery{" "}
            <span className="bg-gradient-to-r from-[#008080] via-[#f8ba2b] to-[#008080] bg-clip-text text-transparent">
             <br /> In Just 45 Hours.
            </span>
          </motion.h1>

          {/* SUPPORTING TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-base sm:text-lg opacity-90 mb-8"
          >
            Cover all chapters with concepts, previous year questions, model questions,
            and chapter tests — all inside a structured 45-hour plan.
          </motion.p>

          {/* CTA + TRUST POINTS + STATS */}
          <div className="flex flex-col gap-6">

            {/* CTA BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <button
                className="group bg-[#f6b410] hover:bg-[#ffbf00] text-black font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 w-fit flex items-center gap-2 transform hover:scale-[1.05]"
              >
                Book Your Seat Now 🔥
              </button>

              {/* UNDER CTA SMALL TEXT */}
              <p className="text-xs mt-2 opacity-70">
                Limited seats. First come first serve.
              </p>

              <div className="text-xs mt-2 opacity-70 flex flex-col gap-1">
                <p>✔ Trusted by 3700+ parents</p>
                <p>✔ Designed by top educators</p>
                <p>✔ Avg improvement: +47 marks in 45 hours</p>
              </div>
            </motion.div>

            {/* STATS */}
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
  className="flex justify-center md:justify-end items-center h-full -translate-y-10 md:-translate-y-12"
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