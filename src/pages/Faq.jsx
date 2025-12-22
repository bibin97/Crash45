import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "How are the 45 hours divided?",
      a: `Crash 45 follows a structured syllabus-completion model:

10–12 hours → Concept Learning
8–10 hours → Previous Year Question (PYQ) Practice
12–14 hours → Model Question Practice
8–10 hours → Chapter Tests + Full-Length Tests

The exact split adjusts based on the student’s pace and chapter difficulty, but every chapter is completed within the 45-hour plan.`
    },
    {
      q: "What if a chapter is not completed?",
      a: `We ensure complete syllabus coverage.

If a chapter requires more time, the faculty extends the academic sessions to complete the chapter thoroughly — including concept clarity, PYQs, model questions, and tests.

Crash 45 guarantees 100% chapter completion, not just 45 hours of teaching.`
    },
    {
      q: "Are the faculty qualified?",
      a: `Yes — all Crash 45 faculty are:

• Experienced subject specialists
• Trained in concept-based teaching
• Skilled in board-exam pattern preparation
• Selected through Mash Magic’s multi-step faculty screening process

They are additionally trained in the Crash 45 structured teaching methodology before handling students.`
    },
    {
      q: "Is the timing flexible?",
      a: `Yes. Crash 45 offers fully flexible scheduling based on the student’s availability.

Sessions can be arranged:
• After school hours
• Weekends
• Early mornings or late evenings
• Adjusted weekly as per the student’s timetable

Families can choose their preferred learning slot.`
    },
    {
      q: "Is this online or offline?",
      a: `Crash 45 is conducted 100% online through one-to-one interactive live classes by our faculty.

No group batches, no recordings — every session is personalized.`
    },
    {
      q: "How many tests are included?",
      a: `Crash 45 includes:
• Chapter-wise tests
• Model question tests
• Full-length mock exams

Students typically complete 6–10 tests depending on subject and chapters.

Each test includes faculty evaluation + performance insight + improvement pointers.`
    }
  ];

  return (
    <div className="w-full py-16 px-4 bg-white dark:bg-black min-h-screen">
      <div className="max-w-5xl mx-auto">

        {/* Section Heading */}
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#008080] dark:text-white">
          Understand Crash45 Better
        </h2>

        {/* FAQ Container */}
        <div className="bg-white dark:bg-[#18181b] rounded-2xl shadow-sm border border-gray-200 dark:border-white/10 overflow-hidden">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                onClick={() => toggleFAQ(i)}
                className={`
                  cursor-pointer transition-all duration-300 border-b border-gray-100 dark:border-white/10 last:border-0
                  border-l-4
                  ${isOpen
                    ? "bg-[#008080]/10 border-l-[#008080]"
                    : "bg-white dark:bg-[#18181b] border-l-transparent hover:bg-[#008080]/5 hover:border-l-[#008080]"
                  }
                `}
              >
                <div className="p-6 md:p-8 flex justify-between items-center gap-4">

                  {/* Question */}
                  {/* Question */}
                  <h4 className="text-lg md:text-xl font-semibold text-[#008080] dark:text-white">
                    {faq.q}
                  </h4>

                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-[#008080] dark:text-white"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </div>

                {/* Answer Accordion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8">
                        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed text-[15px] md:text-base">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA Section (Preserved) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center rounded-3xl p-8 md:p-12 border border-white dark:border-white/10 bg-white dark:bg-[#18181b] shadow-sm"
        >
          <h4 className="text-2xl font-semibold text-[#008080] dark:text-white mb-2">
            Still have questions?
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
            We understand that choosing the right program is important. Talk to our academic counselor to get clear answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-yellow-400 text-black border-2 border-yellow-400 hover:bg-[#008080] hover:text-white hover:border-[#008080] rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg">
              Enroll Now
            </button>
            <button className="px-8 py-3.5 bg-white text-black border-2 border-[#008080] hover:bg-[#008080] hover:text-white rounded-full font-bold transition-all text-lg shadow-sm hover:shadow-md">
              Talk to a Mentor
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
