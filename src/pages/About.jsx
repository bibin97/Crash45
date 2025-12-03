import { motion } from "framer-motion";

export default function About() {
  const cards = [
    {
      title: "Why Choose Us?",
      points: [
        "100% personalized sessions",
        "Expert mentors",
        "Flexible scheduling",
        "Study materials included",
      ],
    },
    {
      title: "Who Is It For?",
      points: ["Grades 8–12", "CBSE & Kerala Syllabus", "Board Exams", "90+ score targets"],
    },
  ];

  const howSteps = [
    { step: "01", title: "Assessment & Plan", desc: "Personalised roadmap." },
    { step: "02", title: "Revision + Practice", desc: "PYQs, MCQs, model papers." },
    { step: "03", title: "Strategy & Mocks", desc: "Time management + full tests." },
  ];

  const testimonials = [
    { name: "Riya M.", quote: "Crash 45 boosted my score!", tags: ["Science", "Dubai"] },
    { name: "Zayed H.", quote: "Mentors helped me understand weak zones!", tags: ["CBSE"] },
    { name: "Parent of Aditi", quote: "Amazing support!", tags: ["Kerala"] },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center text-4xl md:text-6xl font-bold"
        >
          About{" "}
          <span className="bg-gradient-to-r from-[#008080] to-[#f8ba2b] bg-clip-text text-transparent">
            CRASH 45
          </span>
        </motion.h2>

        {/* Mission */}
        <div className="card rounded-3xl p-10 shadow-xl backdrop-blur-xl">
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg opacity-80">
            Crash 45 gives every student a dedicated mentor with a precision-built system.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {cards.map((card, i) => (
            <div key={i} className="card p-8 rounded-3xl shadow-xl backdrop-blur-xl">
              <h3 className="text-2xl font-bold mb-6">{card.title}</h3>
              <ul className="space-y-3">
                {card.points.map((p, i2) => (
                  <li key={i2} className="flex items-start gap-3">
                    <span className="text-xl text-[#f8ba2b]">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <h2 className="text-center text-4xl font-bold mb-14">How It Works</h2>
        <div className="space-y-10">
          {howSteps.map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#008080] to-[#f8ba2b] rounded-full flex items-center justify-center text-xl font-black text-black">
                {step.step}
              </div>
              <div className="card p-6 rounded-2xl shadow-xl backdrop-blur-xl flex-1">
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
