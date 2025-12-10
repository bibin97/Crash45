import { motion } from "framer-motion";
import Cta from "../components/Cta";
export default function Pricing() {
  const plans = [
    {
      title: "Crash 45 (HS)",
      price: "₹25,999",
      features: [
        "45 hours",
        "1:1 mentor",
        "Concepts + PYQs",
        "Model Questions",
        "Tests",
      ],
    },
    {
      title: "Crash 45 (HSS)",
      price: "₹31,999",
      features: [
        "45 hours",
        "1:1 mentor",
        "Concepts + PYQs",
        "Model Questions",
        "Tests",
      ],
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* HEADER */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold 
          text-[#008080] dark:text-[#38dada]">
          Crash 45 <span className="text-[#f8ba2b]">Pricing</span>
        </h2>

        {/* TWO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`
                relative p-8 rounded-3xl border transition-all duration-300
                ${plan.highlight ? 
                  "border-[#f8ba2b] dark:border-[#f8ba2b]" : ""
                }
              `}
            >

              {/* Recommended Tag */}
              {plan.highlight && (
                <div className="absolute -top-3 left-4 
                  bg-[#f8ba2b] text-black text-xs font-semibold 
                  px-3 py-1 rounded-full shadow-md">
                  ⭐ Recommended
                </div>
              )}

              {/* TITLE */}
              <h3 className="text-2xl font-bold 
                text-[#008080] dark:text-[#38dada]">
                {plan.title}
              </h3>

              {/* PRICE */}
              <p className="text-4xl font-extrabold mt-2 
                text-[#111] dark:text-white">
                {plan.price}
              </p>

              {/* Divider */}
              <div className="w-20 h-1 my-5 rounded-full 
                bg-[#f8ba2b]"></div>

              {/* FEATURES */}
              <ul className="space-y-3">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#f8ba2b] text-lg dark:text-[#f8ba2b]">✔</span>
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{f}</span>
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-7 w-full py-3 rounded-full font-bold 
                  bg-[#f8ba2b] text-black shadow-md"
              >
                Enroll Now
              </motion.button>

            </motion.div>
          ))}
        </div>
      </div>
      <Cta />
    </section>
    
  );
}
