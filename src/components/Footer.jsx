import React from "react";
import { Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-zinc-950 pt-20 pb-10 transition-colors duration-300 font-[Inter]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">

          {/* Column 1: Brand */}
          <div className="flex flex-col items-start gap-4">
            <div className="text-3xl font-black tracking-tight flex items-center gap-1">
              <span className="text-[#008080]">CRASH</span>
              <span className="text-gray-900 dark:text-white">45</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-sm">
              A personalized one-to-one online exam revision program by Mash Magic. We help students master their syllabus in just 45 hours with expert mentorship, proven strategies, and structured learning for maximum marks.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col md:pl-16">
            <h3 className="font-bold text-sm text-[#008080] mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400 font-medium">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Features", href: "#features" },
                { name: "Why Us", href: "#whyus" },
                { name: "Who Is It For", href: "#who" },
                { name: "FAQ", href: "#faq" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Pricing", href: "#pricing" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#008080] dark:hover:text-yellow-400 transition-colors duration-200 block w-fit"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Office */}
          <div>
            <h3 className="font-bold text-sm text-[#008080] mb-6 uppercase tracking-wider">Corporate Office</h3>
            <div className="space-y-6 text-sm text-gray-600 dark:text-gray-400">
              <div>
                <p className="font-bold text-gray-900 dark:text-white mb-2 text-base">MASH MAGIC</p>
                <p className="leading-relaxed opacity-90">
                  10/1744, 1st Floor, Suite #1012<br />
                  Sowbhagya Building, Athani,<br />
                  Kakkanad, Kusumagiri P.O,<br />
                  Kochi – 682030
                </p>
              </div>

              <div className="space-y-3">
                <a href="mailto:hellomashmagic@gmail.com" className="flex items-center gap-3 hover:text-[#008080] transition-colors group w-fit">
                  <div className="flex-shrink-0 p-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:border-[#008080]/30 transition-colors">
                    <Mail size={14} className="text-gray-500 dark:text-gray-400 group-hover:text-[#008080]" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">hellomashmagic@gmail.com</span>
                </a>
                <a href="tel:+917012128756" className="flex items-center gap-3 hover:text-[#008080] transition-colors group w-fit">
                  <div className="flex-shrink-0 p-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:border-[#008080]/30 transition-colors">
                    <Phone size={14} className="text-gray-500 dark:text-gray-400 group-hover:text-[#008080]" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">+91 7012 128 756</span>
                </a>
                <a href="https://www.mashmagicedu.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#008080] transition-colors group w-fit">
                  <div className="flex-shrink-0 p-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:border-[#008080]/30 transition-colors">
                    <Globe size={14} className="text-gray-500 dark:text-gray-400 group-hover:text-[#008080]" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">www.mashmagicedu.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-white/10 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500 font-medium tracking-wide">
            © 2026 Crash 45. A program by Mash Magic Edu Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
