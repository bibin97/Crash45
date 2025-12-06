import { motion } from "framer-motion";
import { Book, FileText, Target, TestTube } from "lucide-react";

export default function About() {
  const steps = [
    {
      id: "01",
      title: "Concept Learning",
      hours: "10–12 hours",
      bullets: [
        "Full chapter explanations",
        "Doubt clearing",
        "Key formulas + summaries",
      ],
      emoji: "📘",
      icon: <Book size={20} />,
      start: "#00a79d",
      end: "#f8ba2b",
    },
    {
      id: "02",
      title: "PYQs Practice",
      hours: "8–10 hours",
      bullets: [
        "Past 5–10 year board questions solved",
        "Pattern understanding",
        "Weightage awareness",
      ],
      emoji: "📝",
      icon: <FileText size={20} />,
      start: "#2b9bd7",
      end: "#78d3b8",
    },
    {
      id: "03",
      title: "Model Question Practice",
      hours: "12–14 hours",
      bullets: [
        "Exam-pattern model questions",
        "Mixed difficulty",
        "Time-bound drills",
      ],
      emoji: "🎯",
      icon: <Target size={20} />,
      start: "#8b5cf6",
      end: "#f97316",
    },
    {
      id: "04",
      title: "Chapter Tests + Full-Length Tests",
      hours: "8–10 hours",
      bullets: [
        "Chapter-wise tests",
        "Final mock tests",
        "Performance analysis",
      ],
      emoji: "🧪",
      icon: <TestTube size={20} />,
      start: "#f59e0b",
      end: "#ef4444",
    },
  ];

  return (
    <section id="about" className="px-4 sm:px-6 pt-10 pb-20">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Heading */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center font-[Poppins] text-3xl md:text-5xl font-extrabold"
        >
          How Crash45{" "}
          <span className="bg-gradient-to-r from-[#008080] to-[#f8ba2b] bg-clip-text text-transparent">
            Works
          </span>
        </motion.h2>

        {/* Short mission */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-3xl mx-auto text-neutral-600"
        >
          Structured 45-hour plan — concept-first learning, guided practice,
          model tests and final mocks to boost scores fast.
        </motion.p>

        {/* Curved line + cards */}
        <div className="relative mt-8 px-2 md:px-6">
          <svg
            viewBox="0 0 1200 300"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[220px]"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="8"
                  stdDeviation="18"
                  floodColor="#000"
                  floodOpacity="0.08"
                />
              </filter>
            </defs>

            {/* Main curve (dynamic color on hover) */}
            <path
              id="mainCurve"
              d="M 40 200 C 220 20, 380 20, 520 120 C 660 220, 820 220, 1160 60"
              fill="none"
              stroke="#00a79d"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.20"
              filter="url(#shadow)"
              style={{ transition: "stroke 0.4s ease, stroke-opacity 0.4s ease" }}
            />
          </svg>

          {/* Nodes + Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start relative">
            {steps.map((s, idx) => {
              const topOffsets = [0, 24, -4, 38];

              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.12 * idx }}
                  className="flex flex-col items-center md:items-start"
                  style={{ marginTop: `${topOffsets[idx]}px` }}
                  onMouseEnter={() => {
                    const curve = document.getElementById("mainCurve");
                    curve.style.stroke = `url(#grad-${idx})`;
                    curve.style.strokeOpacity = "0.55";
                  }}
                  onMouseLeave={() => {
                    const curve = document.getElementById("mainCurve");
                    curve.style.stroke = "#00a79d";
                    curve.style.strokeOpacity = "0.20";
                  }}
                >
                  {/* Gradient defs for hover */}
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id={`grad-${idx}`} x1="0" x2="1">
                        <stop offset="0%" stopColor={s.start} />
                        <stop offset="100%" stopColor={s.end} />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Node circle */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-xl"
                    style={{
                      background: `linear-gradient(135deg, ${s.start}, ${s.end})`,
                    }}
                  >
                    <div className="text-white font-extrabold text-lg">
                      {s.id}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="w-full md:w-[260px] bg-white rounded-2xl shadow-lg p-5 border border-transparent hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-2xl">{s.emoji}</div>
                      <div className="text-sm text-neutral-500 font-medium">
                        {s.hours}
                      </div>
                    </div>

                    <h3 className="text-lg font-[Poppins] font-semibold mb-2">
                      {s.title}
                    </h3>

                    <ul className="text-sm text-neutral-600 space-y-2">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#f8ba2b] mt-1">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom cards */}
        <div className="grid md:grid-cols-2 gap-10 pt-8">
          <div className="card p-8 rounded-3xl shadow-xl backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-4 font-[Inter]">
              Why Choose Us?
            </h3>
            <ul className="space-y-3 text-neutral-700">
              <li>✔ 100% personalized sessions</li>
              <li>✔ Expert mentors</li>
              <li>✔ Flexible scheduling</li>
              <li>✔ Study materials included</li>
            </ul>
          </div>

          <div className="card p-8 rounded-3xl shadow-xl backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-4 font-[Inter]">
              Who Is It For?
            </h3>
            <ul className="space-y-3 text-neutral-700">
              <li>✔ Grades 8–12</li>
              <li>✔ CBSE & Kerala Syllabus</li>
              <li>✔ Board Exams</li>
              <li>✔ 90+ score targets</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
