import { motion } from "framer-motion";
import { GraduationCap, BookOpen, FileText, Trophy, Target } from "lucide-react";

export default function Who() {
  const points = [
    { text: "Grade 8–12 school students", icon: GraduationCap },
    { text: "CBSE & Kerala syllabus learners", icon: BookOpen },
    { text: "Students preparing for board exams", icon: FileText },
    { text: "Students aiming for 90%+ scores", icon: Trophy },
    { text: "Students needing complete syllabus coverage", icon: Target },
  ];

  return (
    <section
      id="who"
      className="px-6 py-16 max-w-6xl mx-auto"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold font-[Poppins] mb-4"
      >
        Who Is{" "}
        <span className="text-black dark:text-white">
          Crash 45 Perfect For?
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
      >
        Designed for students who want clarity, confidence, and high exam scores.
      </motion.p>

      {/* Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="about-card rounded-3xl p-8 md:p-12 mx-auto max-w-4xl border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden bg-white dark:bg-[#18181b]"
      >
        <ul className="grid md:grid-cols-2 gap-6 mb-10">
          {points.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 text-lg"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full  flex items-center justify-center">
                <item.icon className="text-gray-600 dark:text-gray-400" size={28} />
              </div>
              <span className="text-gray-800 dark:text-gray-200 font-medium">{item.text}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button Inside Card */}
        <div className="flex flex-col items-center">
          <button className="px-8 py-3.5 bg-gradient-to-r from-yellow-600 to-yellow-300 text-white rounded-full font-bold text-lg shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all mb-4">
            Talk to a Mentor
          </button>
          <p className="text-sm text-gray-500 italic opacity-80">
            *Not suitable for students looking for group classes or shortcuts.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
