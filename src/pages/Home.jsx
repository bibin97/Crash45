import { motion } from "framer-motion";
import homeimg from "../assets/homeimg.png";

// Icons
import { Book, FileText, HelpCircle, FlaskRound } from "lucide-react";


// ⭐ Reusable Quote Bubble Component
const QuoteBubble = ({ text, delay, floatX }) => (
  <motion.div
    animate={{ x: [0, floatX, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
    className="px-5 py-3 w-[220px] rounded-2xl 
               bg-white/60 backdrop-blur-xl shadow-lg
               text-[#008080] text-[15px] font-semibold text-center
               whitespace-normal leading-snug"
  >
    {text}
  </motion.div>
);


export default function Home() {

  const stats = [
    { number: "45", label: "Total Learning Time" },
    { number: "1:1", label: "Unlimited Support" },
    { number: "90+", label: "Aiming High Marks" },
  ];

  return (
    <section className="min-h-screen px-4 sm:px-6 pt-6 md:pt-10 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">


        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center h-full">

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl text-[#008080] 
                       font-extrabold leading-tight mb-6 font-[Poppins]"
          >
            Full Subject <br /> Full Revision <br /> Full Mastery{" "}
            <span className="hero block">In Just 45 Hours.</span>
          </motion.h1>

          {/* FEATURES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-base sm:text-lg opacity-90 mb-8 font-[Poppins] "
          >
            <div className="flex  items-center gap-2">
              <Book size={25} className="text-[#008080]" /> <span>Concepts</span>
            </div>

            <div className="flex items-center gap-2">
              <FileText size={25} className="text-[#008080]" /> <span>PYQs</span>
            </div>

            <div className="flex items-center gap-2">
              <HelpCircle size={25} className="text-[#008080]" /> <span>Model Qs</span>
            </div>

            <div className="flex items-center gap-2">
              <FlaskRound size={25} className="text-[#008080]" /> <span>Tests</span>
            </div>
          </motion.div>

          {/* CTA + TRUST DETAILS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <button className="group bg-[#f6b410] hover:bg-[#ffbf00] 
                               text-black font-semibold px-6 py-3 rounded-xl 
                               shadow-md transition-all duration-300 w-fit 
                               flex items-center gap-2 transform hover:scale-105">
              Book Your Seat Now 🔥
            </button>

            <p className="text-xl mt-2 opacity-70">Limited seats. First come first serve.</p>

            <div className="text-md mt-2 opacity-70 flex flex-col gap-1 font-[Poppins]">
              <p>✔ Trusted by 3700+ parents</p>
              <p>✔ Designed by top educators</p>
              <p>✔ Avg improvement: +47 marks in 45 hours</p>
            </div>
          </motion.div>

          {/* STATS */}
          <div className="flex gap-4 mt-6">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="p-4 rounded-2xl shadow-xl text-center min-w-[80px] 
                           bg-white/20 backdrop-blur-md border border-white/20"
              >
                <div className="text-2xl sm:text-3xl font-extrabold 
                                bg-gradient-to-r from-[#008080] to-[#f8ba2b] 
                                bg-clip-text text-transparent">
                  {item.number}
                </div>
                <p className="text-xs sm:text-sm mt-1 opacity-80">{item.label}</p>
              </motion.div>
            ))}
          </div>

        </div>


    {/* RIGHT IMAGE + QUOTES (1 TOP, 2 LEFT, 2 RIGHT) */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className="relative flex justify-center md:justify-end items-center h-full
             md:-translate-y-12 -translate-y-10 md:-translate-x-10 lg:-translate-x-14"
>

  {/* ⭐ TOP QUOTE */}
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-0 left-1/2 -translate-x-1/2
               px-5 py-3 w-[230px] rounded-2xl bg-white/60 backdrop-blur-xl 
               shadow-lg text-[#008080] text-[15px] font-semibold text-center"
  >
    Learning Today for a Better Tomorrow.
  </motion.div>


  {/* ⭐ LEFT SIDE (2 QUOTES) */}
  <div className="absolute left-0 top-32 flex flex-col gap-10">

    {/* L1 */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="px-5 py-8 w-[220px] rounded-2xl bg-white/60 backdrop-blur-xl 
                 shadow-lg text-[#008080] text-[15px] font-semibold text-center"
    >
      Master Concepts. Master Exams.
    </motion.div>

    {/* L2 */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3.2, repeat: Infinity }}
      className="px-8 py-8 w-[220px] rounded-2xl bg-white/60 backdrop-blur-xl 
                 shadow-lg text-[#008080] text-[15px] font-semibold text-center"
    >
      Progress, Not Perfection.
    </motion.div>

  </div>


  {/* ⭐ RIGHT SIDE (2 QUOTES) */}
<div className="absolute right-[-50px] top-32 flex flex-col gap-10">

  {/* R1 */}
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
    className="px-5 py-8 w-[220px] rounded-2xl bg-white/60 backdrop-blur-xl 
               shadow-lg text-[#008080] text-[15px] font-semibold text-center"
  >
    Small Steps → Big Results.
  </motion.div>

  {/* R2 */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3.2, repeat: Infinity }}
    className="px-5 py-8 w-[220px] rounded-2xl bg-white/60 backdrop-blur-xl 
               shadow-lg text-[#008080] text-[15px] font-semibold text-center"
  >
    Consistency Creates Champions.
  </motion.div>

</div>

  {/* ⭐ MAIN HERO IMAGE */}
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
