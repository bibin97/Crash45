import { motion } from "framer-motion";
import {
  UserCheck,
  BookOpenCheck,
  NotebookPen,
  FileCheck,
  ClipboardList,
  FolderOpen,
  LineChart,
  Users,
} from "lucide-react";

export default function Features() {
  const items = [
    {
      title: "1:1 Personal Mentor",
      desc: "Learn directly with a mentor who understands your strengths and weaknesses.",
      icon: <UserCheck size={32} className="text-teal-500" />,
    },
    {
      title: "Full Syllabus Completion",
      desc: "Complete structured coverage of every chapter with expert support.",
      icon: <BookOpenCheck size={32} className="text-teal-500" />,
    },
    {
      title: "Concept Notes & Summaries",
      desc: "Beautifully simplified notes and revision-ready summaries.",
      icon: <NotebookPen size={32} className="text-teal-500" />,
    },
    {
      title: "Chapter Tests + Full Tests",
      desc: "Weekly chapter-level tests and mock full-syllabus tests.",
      icon: <FileCheck size={32} className="text-teal-500" />,
    },
    {
      title: "Previous Year Questions Solved",
      desc: "Complete step-by-step solutions for past 5–10 years’ questions.",
      icon: <ClipboardList size={32} className="text-teal-500" />,
    },
    {
      title: "Model Question Bank",
      desc: "Practice with exam-pattern high-quality model question sets.",
      icon: <FolderOpen size={32} className="text-teal-500" />,
    },
    {
      title: "Daily Progress Tracking",
      desc: "Monitor improvement every day with easy-to-read reports.",
      icon: <LineChart size={32} className="text-teal-500" />,
    },
    {
      title: "Parent Feedback Reports",
      desc: "Weekly updates sent to parents for complete transparency.",
      icon: <Users size={32} className="text-teal-500" />,
    },
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold font-[Poppins] mb-14"
        >
          What You Get Inside {" "}
          <span className="text-black dark:text-white">Crash 45</span>
        </motion.h2>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="about-card rounded-2xl p-6 shadow-md 
                         border border-gray-200 dark:border-white/10
                         hover:shadow-xl transition-all cursor-pointer bg-white dark:bg-[#18181b]"
            >
              <div className="mb-4">{item.icon}</div>

              <h3 className="font-semibold text-lg text-[#008080] dark:text-teal-400 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-black dark:text-gray-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
