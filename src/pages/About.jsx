import { motion } from "framer-motion";
import { Book, FileText, Target, TestTube, Star, GraduationCap } from "lucide-react";

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
    {
      id: "05",
      title: "Why Choose Us?",
      hours: "",
      bullets: ["100% personalized sessions", "Expert mentors", "Flexible scheduling", "Study materials included"],
      colorStart: "#00a79d",
      colorEnd: "#6ee7b7",
      icon: "⭐",
    },
    {
      id: "06",
      title: "Who Is It For?",
      hours: "",
      bullets: ["Grades 8–12", "CBSE & Kerala Syllabus", "Board Exams", "90+ score targets"],
      colorStart: "#3b82f6",
      colorEnd: "#60a5fa",
      icon: "🎓",
    },
  ];

  // up/down offsets as shown in screenshot layout
  const offsets = [0, 40, 0, 40, 0, 40];

  return (
    <section id="about" className="px-4 sm:px-6 pt-16 pb-24">
      <div className="max-w-7xl mx-auto">

        {/* ---------- Section Heading ---------- */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center font-[Poppins] text-4xl md:text-5xl font-extrabold mb-3"
        >
          How Crash45{" "}
          <span className="bg-gradient-to-r from-[#008080] to-[#f8ba2b] bg-clip-text text-transparent">
            Works
          </span>
        </motion.h2>

        {/* ----------- Main Single Curve Line (Same as screenshot) ------------ */}
        <div className="relative mt-10 mb-20">
          <svg
            viewBox="0 0 1200 300"
            className="w-full h-[220px]"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="8" stdDeviation="18" floodColor="#000" floodOpacity="0.1" />
              </filter>
            </defs>

            <path
              id="mainCurve"
              d="M 40 200 C 220 20, 380 20, 520 120 C 660 220, 820 220, 1160 60"
              fill="none"
              stroke="#00a79d"
              strokeWidth="10"
              strokeOpacity="0.25"
              strokeLinecap="round"
              filter="url(#shadow)"
              style={{
                transition: "stroke 0.4s ease, stroke-opacity 0.4s ease",
                strokeDasharray: 1800,
              }}
            />
          </svg>
        </div>

        {/* ----------- Cards (3 on top row, 3 on bottom row) ------------ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
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
                  curve.style.stroke = `url(#grad-${index})`;
                  curve.style.strokeOpacity = "0.6";
                  curve.classList.add("flow");
                }
              }}
              onMouseLeave={() => {
                const curve = document.getElementById("mainCurve");
                if (curve) {
                  curve.style.stroke = "#00a79d";
                  curve.style.strokeOpacity = "0.25";
                  curve.classList.remove("flow");
                }
              }}
            >
              {/* gradient definition for hover stroke */}
              <svg width="0" height="0">
                <defs>
                  <linearGradient id={`grad-${index}`} x1="0" x2="1">
                    <stop offset="0%" stopColor={step.colorStart} />
                    <stop offset="100%" stopColor={step.colorEnd} />
                  </linearGradient>
                </defs>
              </svg>

              {/* Circle Node */}
              <div
                className="w-20 h-20 rounded-full shadow-xl flex items-center justify-center mb-5"
                style={{
                  background: `linear-gradient(135deg, ${step.colorStart}, ${step.colorEnd})`,
                }}
              >
                <span className="text-white font-extrabold text-lg">{step.id}</span>
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 w-full border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  {step.hours && (
                    <span className="text-sm text-neutral-500">{step.hours}</span>
                  )}
                </div>

                <h3 className="text-lg font-[Poppins] font-semibold mb-3 text-[#008080]">
                  {step.title}
                </h3>

                <ul className="text-neutral-700 space-y-2 text-sm">
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

      {/* wave animation css */}
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
