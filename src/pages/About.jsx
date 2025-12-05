import { motion } from "framer-motion";
import { Book, FileText, Target, TestTube } from "lucide-react";

/**
 * About.jsx - Premium curved infographic for "How Crash45 Works"
 *
 * - 4 steps (Concept Learning, PYQs, Model Qs, Chapter+Full Tests)
 * - SVG curved path with gradient
 * - gradient numbered nodes, icon (emoji + lucide fallback), bullets, hours
 * - framer-motion micro-animations and hover effects
 *
 * Tailwind required (your project already uses Tailwind in other files).
 */

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
      // emoji first; lucide icons also included as backup
      emoji: "📘",
      icon: <Book size={20} />,
      accent: "from-[#00a79d] to-[#f8ba2b]",
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
      accent: "from-[#2b9bd7] to-[#78d3b8]",
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
      accent: "from-[#8b5cf6] to-[#f97316]",
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
      accent: "from-[#f59e0b] to-[#ef4444]",
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
          How Crash45 <span className="bg-gradient-to-r from-[#008080] to-[#f8ba2b] bg-clip-text text-transparent">Works</span>
        </motion.h2>

        {/* Short mission */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-3xl mx-auto text-neutral-600"
        >
          Structured 45-hour plan — concept-first learning, guided practice, model tests and final mocks to boost scores fast.
        </motion.p>

        {/* Premium curved infographic */}
        <div className="relative mt-8 px-2 md:px-6">
          {/* SVG curved path (centered). The nodes will sit visually on the curve */}
          <div className="pointer-events-none">
            <svg
              viewBox="0 0 1200 300"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-[220px]"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="#00a79d" stopOpacity="1" />
                  <stop offset="1" stopColor="#f8ba2b" stopOpacity="1" />
                </linearGradient>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="8" stdDeviation="18" floodColor="#000" floodOpacity="0.08"/>
                </filter>
              </defs>

              {/* Smooth curved path */}
              <path
                d="M 40 200 C 220 20, 380 20, 520 120 C 660 220, 820 220, 1160 60"
                fill="none"
                stroke="url(#g1)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.18"
                filter="url(#shadow)"
              />
            </svg>
          </div>

          {/* Nodes positioned along the curve */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start relative">
            {steps.map((s, idx) => {
              // top offset to visually match curve; tweak per index
              const topOffsets = [0, 24, -4, 38]; // small adjustments
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.12 * idx }}
                  className="flex flex-col items-center md:items-start"
                  style={{ marginTop: `${topOffsets[idx]}px` }}
                >
                  {/* Node circle with gradient and number */}
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-xl`}
                    style={{
                      background: `linear-gradient(135deg, var(--start-${idx}) 0%, var(--end-${idx}) 100%)`,
                      // fallback color:
                      backgroundColor: "#00a79d",
                      color: "#002d2a",
                    }}
                  >
                    <div className="text-white font-extrabold text-lg">{s.id}</div>
                  </div>

                  {/* Card */}
                  <div className="w-full md:w-[260px] bg-white rounded-2xl shadow-lg p-5 border border-transparent hover:shadow-2xl transition-all duration-300">
                    {/* small header with emoji + lucide icon */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-2xl">{s.emoji}</div>
                      <div className="text-sm text-neutral-500 font-medium">{s.hours}</div>
                    </div>

                    <h3 className="text-lg font-[Poppins] font-semibold mb-2">{s.title}</h3>

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

        {/* Additional content (testimonials / mission cards left as-is) */}
        <div className="grid md:grid-cols-2 gap-10 pt-8">
          <div className="card p-8 rounded-3xl shadow-xl backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-4 font-[Inter]">Why Choose Us?</h3>
            <ul className="space-y-3 text-neutral-700">
              <li>✔ 100% personalized sessions</li>
              <li>✔ Expert mentors</li>
              <li>✔ Flexible scheduling</li>
              <li>✔ Study materials included</li>
            </ul>
          </div>

          <div className="card p-8 rounded-3xl shadow-xl backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-4 font-[Inter]">Who Is It For?</h3>
            <ul className="space-y-3 text-neutral-700">
              <li>✔ Grades 8–12</li>
              <li>✔ CBSE & Kerala Syllabus</li>
              <li>✔ Board Exams</li>
              <li>✔ 90+ score targets</li>
            </ul>
          </div>
        </div>
      </div>

      {/* small CSS variables injected so gradients can be different per node (tailwind inline style alternative) */}
      <style jsx>{`
        :root {
          --start-0: #00a79d;
          --end-0: #f8ba2b;
          --start-1: #2b9bd7;
          --end-1: #78d3b8;
          --start-2: #8b5cf6;
          --end-2: #f97316;
          --start-3: #f59e0b;
          --end-3: #ef4444;
        }
      `}</style>
    </section>
  );
}
