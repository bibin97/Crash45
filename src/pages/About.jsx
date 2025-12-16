import { motion } from "framer-motion";

export default function About() {
  const steps = [
    {
      id: "01",
      title: "Concept Learning",
      hours: "10–12 hours",
      bullets: ["Full chapter explanations", "Doubt clearing", "Key formulas + summaries"],
      colorStart: "#00a79d",
      colorEnd: "#f8ba2b",
      icon: "📘",
    },
    {
      id: "02",
      title: "PYQs Practice",
      hours: "8–10 hours",
      bullets: ["Past 5–10 year board questions solved", "Pattern understanding", "Weightage awareness"],
      colorStart: "#2b9bd7",
      colorEnd: "#78d3b8",
      icon: "📝",
    },
    {
      id: "03",
      title: "Model Question Practice",
      hours: "12–14 hours",
      bullets: ["Exam-pattern model questions", "Mixed difficulty", "Time-bound drills"],
      colorStart: "#8b5cf6",
      colorEnd: "#f97316",
      icon: "🎯",
    },
    {
      id: "04",
      title: "Chapter Tests + Full-Length Tests",
      hours: "8–10 hours",
      bullets: ["Chapter-wise tests", "Final mock tests", "Performance analysis"],
      colorStart: "#f59e0b",
      colorEnd: "#ef4444",
      icon: "🧪",
    },
  ];

  const offsets = [0, 40, 0, 40];

  return (
    <section id="about" className="px-4 sm:px-6 pt-16 pb-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center font-[Poppins] text-4xl md:text-5xl font-extrabold mb-8"
        >
          How Crash45{" "}
          <span className="text-[#008080]">Works</span>
        </motion.h2>

        {/* Gradient DEFINITIONS */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="defaultLine" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#baf2e9" />
              <stop offset="100%" stopColor="#a0e4db" />
            </linearGradient>

            {steps.map((step, index) => (
              <linearGradient
                key={index}
                id={`hoverGrad-${index}`}
                x1="0"
                y1="0"
                x2="1200"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor={step.colorStart} />
                <stop offset="100%" stopColor={step.colorEnd} />
              </linearGradient>
            ))}
          </defs>
        </svg>

        {/* Curve Line */}
        <div className="relative mt-10 mb-20">
          <svg viewBox="0 0 1200 300" className="w-full h-[220px]" preserveAspectRatio="none">
            <path
              id="mainCurve"
              d="M 40 200 C 220 20, 380 20, 520 120 C 660 220, 820 220, 1160 60"
              fill="none"
              stroke="url(#defaultLine)"
              strokeWidth="10"
              strokeOpacity="0.85"
              strokeLinecap="round"
              style={{
                strokeDasharray: 1800,
                transition: "stroke 0.35s ease, filter 0.25s ease",
              }}
            />
          </svg>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center"
              style={{ marginTop: offsets[index] }}
              onMouseEnter={() => {
                const curve = document.getElementById("mainCurve");
                if (curve) {
                  curve.style.stroke = `url(#hoverGrad-${index})`;
                  curve.style.strokeOpacity = "1";
                  curve.style.filter = "brightness(1.8)";
                  curve.classList.add("flow");
                }
              }}
              onMouseLeave={() => {
                const curve = document.getElementById("mainCurve");
                if (curve) {
                  curve.style.stroke = "url(#defaultLine)";
                  curve.style.strokeOpacity = "0.85";
                  curve.style.filter = "brightness(1)";
                  curve.classList.remove("flow");
                }
              }}
            >
              {/* Number Circle */}
              <div
                className="w-20 h-20 rounded-full shadow-xl flex items-center justify-center mb-5"
                style={{
                  background: `linear-gradient(135deg, ${step.colorStart}, ${step.colorEnd})`,
                }}
              >
                <span className="text-black dark:text-white font-extrabold text-lg">
                  {step.id}
                </span>
              </div>

              {/* Card */}
              <div className=" rounded-2xl shadow-lg p-6 w-full border border-gray-200 dark:border-white/10 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  {step.hours && (
                    <span className="text-sm text-neutral-700 dark:text-white">{step.hours}</span>
                  )}
                </div>

                <h3 className="text-lg font-[Poppins] font-semibold mb-3 text-[#008080] dark:text-teal-300">
                  {step.title}
                </h3>

                <ul className="text-black dark:text-white space-y-2 text-sm">
                  {step.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="font-bold">•</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave animation */}
      <style>{`
        .flow {
          animation: waveMove 1.6s linear infinite;
        }
        @keyframes waveMove {
          0% { stroke-dashoffset: 1800; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}
