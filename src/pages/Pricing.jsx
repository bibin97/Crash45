import { motion } from "framer-motion";
import Cta from "../components/Cta";
export default function Pricing({ onOpenModal }) {
  const plans = [
    {
      title: "Crash 45 (HSS)",
      sub: "For Plus One & Plus Two",
      price: "₹31,999",
      features: [
        "45 hours intensive coaching",
        "Dedicated 1:1 personal mentor",
        "Deep Concepts + Previous Year Qs",
        "Chapter tests + full-length tests",
        "24/7 Doubt Clearance",
      ],
      highlight: true,
      cta: "Book Your Slot",
    },
    {
      title: "Crash 45 (HS)",
      sub: "For Classes 8–10",
      price: "₹25,999",
      features: [
        "45 hours intensive coaching",
        "Dedicated 1:1 personal mentor",
        "Deep Concepts + Previous Year Qs",
        "Chapter tests + full-length tests",
        "24/7 Doubt Clearance",
      ],
      cta: "Start Learning",
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-[Poppins] text-black">
            Crash 45 <span className="text-black dark:text-white">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Simple, transparent pricing with complete academic support.
          </p>
        </div>

        {/* TWO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`
                relative p-8 md:p-10 rounded-3xl border transition-all duration-300
                ${plan.highlight ?
                  "border-[#f8ba2b] shadow-xl scale-105 z-10" :
                  "border-[#008080] dark:border-[#008080]"
                }
                bg-transparent
                card
                
              `}

            >

              {/* Recommended Tag */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2
                  bg-gradient-to-r from-[#f8ba2b] to-orange-400 text-black text-sm font-bold
                  px-6 py-2 rounded-full shadow-lg ring-4 ring-[#fff5d6] dark:ring-zinc-800
                  whitespace-nowrap">
                  ⭐ Most Chosen by Students
                </div>
              )}

              {/* TITLE */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#008080] dark:text-teal-400">
                  {plan.title}
                </h3>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mt-1 uppercase tracking-wide">
                  {plan.sub}
                </p>
              </div>

              {/* PRICE */}
              <div className="text-center mt-6">
                <p className="text-5xl font-extrabold text-gray-900 dark:text-white">
                  {plan.price}
                </p>
                <p className="text-sm text-gray-900 dark:text-white mt-2">
                  Complete program fee · No hidden charges
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 my-8"></div>

              {/* FEATURES */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    <span className="text-gray-900 dark:text-white text-lg font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <motion.button
                onClick={onOpenModal}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all
                  bg-[#f8ba2b] text-black hover:bg-[#e6ac22] hover:scale-105 active:scale-95
                `}
              >
                {plan.cta}
              </motion.button>

              {/* Risk Reduction */}
              <p className="text-center text-xs text-gray-500 mt-4">
                🔒 100% syllabus completion guaranteed
              </p>

            </motion.div>
          ))}
        </div>

        {/* Bottom Comparison Line */}
        <p className="text-center text-sm text-gray-900 dark:text-white mt-8">
          ✨ Both plans include study materials, tests, and full 1:1 mentor support.
        </p>
      </div>
      <Cta onOpenModal={onOpenModal} />
    </section >

  );
}
