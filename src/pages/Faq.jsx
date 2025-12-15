import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
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

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">

      {/* MAIN HEADING */}
      {/* MAIN HEADING */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center font-[Poppins]">
        Common Questions <span className="text-[#008080]">About Crash 45</span>
      </h2>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Clear answers to the most common questions from students and parents.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="about-card group cursor-pointer relative !p-6 !rounded-2xl"
            onClick={() => toggleFAQ(i)}
          >
            <div className="flex justify-between items-center">

              {/* QUESTION */}
              {/* QUESTION */}
              <h2 className="text-lg font-bold text-[#008080] dark:text-teal-400 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                {faq.q}
              </h2>

              {/* ICON */}
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown style={{ color: "#008080" }} />
              </motion.div>
            </div>

            {/* ANSWER */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 border-t border-gray-100 dark:border-white/10 text-sm md:text-[15px] text-gray-600 dark:text-gray-400 whitespace-pre-line leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-16 text-center bg-teal-50 dark:bg-teal-900/20 rounded-3xl p-8 md:p-12 border border-teal-100 dark:border-teal-800/30"
      >
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          We understand that choosing the right program is important. Talk to our academic counselor to get clear answers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 bg-[#008080] text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg">
            Enroll Now
          </button>
          <button className="px-8 py-3.5 bg-white dark:bg-transparent border-2 border-[#008080] text-[#008080] rounded-full font-bold hover:bg-[#008080]/5 transition-all text-lg">
            Talk to a Mentor
          </button>
        </div>
      </motion.div>
    </div>
  );
}
