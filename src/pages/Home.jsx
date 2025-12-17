import { motion } from "framer-motion";
import homeimg from "../assets/homeimg.png";

// Icons
import { Book, FileText, HelpCircle, FlaskRound } from "lucide-react";

export default function Home() {
  const stats = [
    { number: "45 Hours", label: "Total Learning Time" },
    { number: "1:1 ", label: "Unlimited Support" },
    { number: "90+ ", label: "Aiming High Marks" },
  ];

  return (
    <section className="min-h-screen px-4 sm:px-6 pt-6 md:pt-10 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center h-full">

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl text-[#008080] font-extrabold leading-tight mb-6 font-[Poppins]"
          >
            Full Subject <br />
            Full Revision <br />
            Full Mastery
            <br />
            <span className="text-black dark:text-white block">In Just 45 Hours.</span>
          </motion.h1>

          {/* FEATURES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-base sm:text-lg opacity-90 mb-8 font-[Poppins]"
          >
            <div className="flex items-center gap-4 flex-wrap">

              <div className="flex items-center gap-1">
                <Book size={20} className="text-[#008080]" />
                <span>Concepts</span>
              </div>

              <div className="flex items-center gap-1">
                <FileText size={20} className="text-[#008080]" />
                <span>PYQs</span>
              </div>

              <div className="flex items-center gap-1">
                <HelpCircle size={20} className="text-[#008080]" />
                <span>Model Qs</span>
              </div>

              <div className="flex items-center gap-1">
                <FlaskRound size={20} className="text-[#008080]" />
                <span>Tests</span>
              </div>

            </div>
          </motion.div>

          {/* CTA + TRUST DETAILS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <button
              className="group bg-[#f6b410] hover:bg-[#ffbf00]
                        text-black font-semibold px-7 py-3 rounded-full
                        shadow-md transition-all duration-300 w-fit
                        flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
            >
              Book Your Seat Now
            </button>

            <p className="text-md mt-2 opacity-70 font-[Poppins]">
              Limited seats. First come first serve.
            </p>

            <div className="mt-3 flex flex-col gap-2 font-[Poppins] text-[15px]">

              <div className="flex items-start gap-2">
                <span className="w-3 h-3 rounded-full bg-[#008080]  mt-1 shadow-md"></span>
                <p className="opacity-80">Trusted by 3700+ Parents</p>
              </div>

              <div className="flex items-start gap-2">
                <span className="w-3 h-3 rounded-full bg-[#008080]  mt-1 shadow-md"></span>
                <p className="opacity-80">Designed by Top Educators</p>
              </div>

              <div className="flex items-start gap-2">
                <span className="w-3 h-3 rounded-full bg-[#008080] mt-1 shadow-md"></span>
                <p className="opacity-80">Avg Improvement: +47 Marks in 45 Hours</p>
              </div>

            </div>
          </motion.div>

          {/* STATS */}
          <div className="flex gap-5 mt-6">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="
                  group px-6 py-5 rounded-2xl text-center min-w-[110px]
                  bg-white/30 backdrop-blur-xl border border-white/40
                  shadow-[0_4px_18px_rgba(0,0,0,0.08)]
                  transition-all duration-300 hover:-translate-y-1
                  hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]
                "
              >
                <div
                  className="
                    text-3xl font-extrabold
                    bg-[#008080] bg-clip-text text-transparent
                    group-hover:brightness-110
                    transition-all duration-300
                  "
                >
                  {item.number}
                </div>

                <p className="text-sm mt-2 opacity-80 font-[Poppins] leading-tight">
                  {item.label}
                </p>

                <div
                  className="
                    w-6 h-1 bg-[#008080]
                    mx-auto mt-2 rounded-full opacity-60
                    group-hover:w-8 group-hover:opacity-90
                    transition-all duration-300
                  "
                ></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — STUDENT IMAGE MOVED UP */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
    relative flex justify-center md:justify-end items-start 
    h-full 
    md:-translate-y-24   /* ⬆️ Move image up on medium+ screens */
    -translate-y-10      /* Slight lift on mobile */
  "
        >
          <img
            src={homeimg}
            alt="Crash 45 Study Illustration"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg drop-shadow-xl relative z-10"
          />
        </motion.div>


      </div>
    </section>
  );
}
