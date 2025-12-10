import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials({ darkMode }) {
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
      name: "Rahul P.",
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white">
          Success Stories from{" "}
          <span className="text-[#008080] dark:text-[#008080]">Crash 45 Students</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.15 }}
  viewport={{ once: true }}
  className="
    relative rounded-3xl shadow-lg border
    text-black dark:text-white   /* ✔ Text adjusts */
    border-gray-300 dark:border-zinc-800
    transition-all duration-300
    hover:-translate-y-3 hover:shadow-2xl
    overflow-hidden
  "
>

              {/* Gradient Border Effect */}
              <div
                className="
                  absolute inset-0 rounded-3xl 
                  pointer-events-none
                "
                style={{
                  border: "2px solid transparent",
                  background: darkMode
                    ? "linear-gradient(135deg, #0f766e, #14b8a6)"
                    : "linear-gradient(135deg, #0d9488, #5eead4)",
                  mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                }}
              ></div>

              <div className="relative z-10 p-8 text-center">

                {/* Profile Image */}
                <img
                  src={item.img}
                  className="w-24 h-24 rounded-full mx-auto mb-5 object-cover border-4 border-white shadow-md dark:border-zinc-800"
                />

                {/* Name */}
                <h3 className="text-xl font-bold mb-3 text-black ">
                  {item.name}
                </h3>

                {/* Text */}
                <p className="text-sm mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  "{item.text}"
                </p>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Score */}
                <p className="text-md font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {item.score}
                </p>

                {/* Parent Comment */}
                <p className="text-xs italic text-gray-600 dark:text-gray-400 leading-relaxed">
                  Parent: "{item.parent}"
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
