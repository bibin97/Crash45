import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Single Subject",
      price: "₹4,999",
      duration: "15 hours",
      features: [
        "One subject full coverage",
        "1-to-1 mentorship",
        "PYQs & practice tests",
        "Short notes + study guide",
      ],
    },
    {
      name: "Triple Power",
      price: "₹12,999",
      duration: "45 hours",
      features: [
        "Three subjects accelerated revision",
        "Full PYQ + mock test suite",
        "Priority scheduling",
        "Daily accountability nudges",
      ],
      popular: true,
    },
    {
      name: "Full Board Prep",
      price: "₹24,999",
      duration: "90 hours",
      features: [
        "All subjects covered",
        "Dedicated elite mentor",
        "Unlimited mock tests",
        "24/7 WhatsApp support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-14">

        {/* ================= HEADER ================= */}
        <h2 className="text-center text-4xl font-[poppins] md:text-6xl text-[#008080] font-bold">
          Choose Your{" "}
          <span className="text-[#f8ba2b]">
            Plan
          </span>
        </h2>

        <p className="text-center max-w-2xl mx-auto text-lg opacity-80">
          Invest in your future. Limited one-to-one slots available.
        </p>

        {/* ================ PRICING GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
              className={`card p-8 rounded-3xl shadow-xl backdrop-blur-xl relative ${
                plan.popular ? "border-2 border-[#f8ba2b]" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 
                  bg-[#008080]  text-black text-xs 
                  font-bold px-4 py-1 rounded-full shadow-lg">
                  🔥 MOST POPULAR
                </div>
              )}

              {/* TITLE */}
              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>

              <p className="text-sm opacity-80 mb-6">{plan.duration}</p>

              {/* PRICE */}
              <div className="text-5xl font-black bg-[#008080]  bg-clip-text text-transparent mb-8">
                {plan.price}
              </div>

              {/* FEATURES */}
              <ul className="space-y-4 mb-6">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-xl text-[#f8ba2b]">✓</span>
                    <span className="opacity-80">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="w-full py-3 rounded-full font-bold text-black shadow-lg shadow-[#f8ba2b]/40"
                style={{ backgroundColor: "#f8ba2b" }}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* FINAL CTA BANNER */}
        <div className="card rounded-3xl p-10 text-center shadow-xl backdrop-blur-xl">
          <h3 className="text-3xl font-bold mb-4">⏳ Seats Are Filling Fast!</h3>
          <p className="mb-6 text-lg opacity-80">
            One-to-one slots are limited — secure yours before they run out.
          </p>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full font-bold text-black shadow-lg shadow-[#f8ba2b]/40"
            style={{ backgroundColor: "#f8ba2b" }}
          >
            🔥 Book My Crash-45 Seat Now
          </motion.button>
        </div>

      </div>
    </section>
  );
}
