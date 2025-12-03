import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: "👨‍🏫",
      title: "Personal 1-to-1 Mentor",
      desc: "Learn directly with a mentor who understands your strengths and weaknesses.",
    },
    {
      icon: "⚡",
      title: "45-Hour Smart Revision",
      desc: "A structured high-speed plan designed to maximise score improvement.",
    },
    {
      icon: "📝",
      title: "Mock Tests + PYQs",
      desc: "Timed practice sessions, previous year questions and performance evaluation.",
    },
    {
      icon: "📚",
      title: "Concept Clarity Boost",
      desc: "Understand every topic deeply using simplified explanations.",
    },
    {
      icon: "📊",
      title: "Weekly Progress Tracking",
      desc: "Track improvements every week with clear reports.",
    },
    {
      icon: "🎯",
      title: "Exam Strategy Training",
      desc: "Master time management and high-scoring answer-writing techniques.",
    },
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-4xl md:text-6xl font-bold mb-14">
          What You Get with the{" "}
          <span className="bg-gradient-to-r from-[#008080] to-[#f8ba2b] bg-clip-text text-transparent">
            C45 Program
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card p-8 rounded-3xl shadow-xl backdrop-blur-xl"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
