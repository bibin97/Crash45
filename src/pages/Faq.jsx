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
    <div className="max-w-4xl mx-auto py-16 px-4">
      
      {/* MAIN HEADING */}
      <h1 className="text-4xl font-bold mb-10 text-center" style={{ color: "#008080" }}>
        Understand <span style={{ color: "#008080" }}>Crash45 Better</span>
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-300 dark:border-gray-700 rounded-xl p-5 cursor-pointer bg-white/5 dark:bg-black/20 backdrop-blur"
            onClick={() => toggleFAQ(i)}
          >
            <div className="flex justify-between items-center">

              {/* QUESTION */}
              <h2 className="text-lg font-semibold" style={{ color: "#008080" }}>
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
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-3 dark:text-gray-300 whitespace-pre-line"
                  style={{ color: "#008080" }}
                >
                  {faq.a}
                </motion.p>
              )}
            </AnimatePresence>

          </div>
        ))}
      </div>
    </div>
  );
}
