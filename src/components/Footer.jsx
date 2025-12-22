import React from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id) => {
    // Basic implementation if no refs provided, or just use anchors
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="mt-20 border-t py-16 px-6 transition-colors duration-500 bg-gray-100 dark:bg-zinc-950 border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-300"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

        {/* Column 1: Brand */}
        <div>
          <div className="text-3xl font-black mb-4 flex items-center gap-1">
            <span className="text-[#008080] dark:text-yellow-400">CRASH</span>
            <span className="text-black dark:text-white">45</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            A personalised one-to-one online exam revision program by Mash Magic
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-900">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Pricing", "Faq"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#f8ba2b] transition-colors cursor-pointer block"
                >
                  {item === "Faq" ? "FAQ" : item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact / Trust */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-900">Contact Mentors</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#25D366] transition">
                <MessageCircle size={18} />
                <span>WhatsApp Support</span>
              </a>
            </li>
            <li>
              <a href="tel:+919999999999" className="flex items-center gap-3 hover:text-[#f8ba2b] transition">
                <Phone size={18} />
                <span>+91 907 444 8660</span>
              </a>
            </li>
            <li>
              <a href="mailto:contact@crash45.com" className="flex items-center gap-3 hover:text-[#f8ba2b] transition">
                <Mail size={18} />
                <span>contact@crash45.com</span>
              </a>
            </li>
            <li className="pt-2 text-xs font-semibold text-teal-700">
              ✨ Online 1:1 Mentorship
            </li>
          </ul>
        </div>
      </div>

      {/* Legal / Micro Text */}
      <div className="mt-16 pt-8 border-t text-center text-xs border-gray-200 text-gray-500">
        <p>Crash 45 is a program by Mash Magic Edu Tech.</p>
        <p className="mt-2 text-[10px] opacity-70">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
