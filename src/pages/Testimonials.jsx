import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav M.",
      img: "https://i.pravatar.cc/150?img=12",
      text: "Crash 45 completely changed my learning speed. Concepts became super clear and my confidence increased every single week!",
      score: "Improved from 48 → 82%",
      parent:
        "As a parent, I'm happy to see Aarav finally enjoying studies. Crash 45 mentoring was the best decision!"
    },
    {
      name: "Diya S.",
      img: "https://i.pravatar.cc/150?img=32",
      text: "The 1:1 mentorship and tests helped me understand my weak areas quickly. The guidance was structured and motivating!",
      score: "Improved from 52 → 89%",
      parent:
        "Very impressed with the discipline and progress. Diya gained real confidence thanks to Crash 45 teachers."
    },
    {
      name: "Lena p.",
      img: "https://i.pravatar.cc/150?img=45",
      text: "Crash 45 helped me focus on important chapters and PYQs. The weekly model tests boosted my accuracy a lot.",
      score: "Improved from 36 → 78%",
      parent:
        "Rahul used to struggle, but now he studies independently. Thank you Crash 45 for the improvement!"
    }
  ];

  return (
    <section className="py-20  transition-colors">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black font-[Poppins]">
          Real Results from{" "}
          <span className="text-black dark:text-white">Crash 45 Students & Parents</span>
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          See how students improved marks, confidence, and discipline in just 45 hours.
        </p>

        {/* Cards */}
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-6 md:gap-10 snap-x snap-mandatory pb-8 md:pb-0 px-4 md:px-0 scrollbar-hide">
          {testimonials.map((item, index) => {
            const isMiddle = index === 1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`
                  about-card relative rounded-3xl transition-all duration-300 hover:-translate-y-3 overflow-hidden
                  min-w-[85vw] md:min-w-0 snap-center
                  ${isMiddle
                    ? "shadow-2xl border !border-teal-500/50 md:scale-105 z-10 p-6 md:p-8 bg-[#f0fdfa] dark:bg-[#18181b]"
                    : "border-gray-200 dark:border-zinc-800 p-6 bg-white dark:bg-[#09090b]"}
                `}
                style={{

                }}
              >

                <div className="relative z-10 p-8 text-center">

                  {/* Profile Image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className={`w-24 h-24 rounded-full mx-auto mb-5 object-cover border-4 border-white shadow-md ${isMiddle ? "ring-4 ring-teal-200" : ""
                      }`}
                  />

                  {/* Name */}
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                    {item.name}
                  </h3>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Score */}
                  <p className="text-lg font-extrabold text-[#008080] dark:text-yellow-400 mb-4 bg-teal-50 dark:bg-teal-900/30 py-2 rounded-lg">
                    {item.score}
                  </p>

                  {/* Text */}
                  <p className="text-sm mb-4 text-black dark:text-white leading-relaxed font-medium">
                    "{item.text}"
                  </p>

                  {/* Parent Comment */}
                  <p className="text-xs italic text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/10 pt-3 mt-3">
                    Parent: <span className="text-gray-600 dark:text-white">"{item.parent}"</span>
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badge Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div
            className="about-card inline-flex items-center gap-2 !px-6 !py-3 !rounded-full shadow-md transition-colors duration-300"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-800 dark:text-white">
              ⭐ Rated 4.9/5 by students & parents
            </span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <button className="px-10 py-4 bg-yellow-400 !text-black dark:text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all ">
            Book a Free Consultation
          </button>
        </motion.div>
      </div>
    </section >
  );
}
