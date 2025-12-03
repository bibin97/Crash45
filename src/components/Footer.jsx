import React from "react";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`border-t py-10 px-6 transition-colors duration-500 ${
        darkMode
          ? "bg-slate-900 border-white/10 text-gray-300"
          : "bg-gray-300 border-gray-500 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Logo */}
        <div className="text-3xl font-black mb-4 flex items-center justify-center gap-1">
          <span style={{ color: "#008080" }}>CRASH</span>
          <span style={{ color: "#f8ba2b" }}>45</span>
        </div>

        {/* About line */}
        <p
          className={`mb-4 text-sm ${
            darkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          A personalised one-to-one online exam revision program by Mash Magic
        </p>

        {/* Social icons (Optional) */}
        <div className="flex justify-center gap-6 text-xl mb-6">
          <a
            href="https://wa.me/919876543210"
            className="magnetic hover:text-[#f8ba2b] transition"
            target="_blank"
          >
            🟢
          </a>
          <a
            href="#"
            className="magnetic hover:text-[#f8ba2b] transition"
          >
            📘
          </a>
          <a
            href="#"
            className="magnetic hover:text-[#f8ba2b] transition"
          >
            📸
          </a>
        </div>

        {/* Copyright */}
        <p
          className={`text-xs ${
            darkMode ? "text-gray-500" : "text-gray-600"
          }`}
        >
          © {new Date().getFullYear()} CRASH 45. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
