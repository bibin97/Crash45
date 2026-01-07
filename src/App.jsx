import React, { useRef, useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Whyus from "./pages/Whyus";
import Who from "./pages/Who";
import Faq from "./pages/Faq";
import Testimonials from "./pages/Testimonials";
import BookingModal from "./components/BookingModal";

export default function App() {

  // ALL scroll refs declared here (notice 'faq' lowercase)
  const scrollRefs = {
    home: useRef(null),
    about: useRef(null),
    features: useRef(null),
    whyus: useRef(null),
    who: useRef(null),
    faq: useRef(null),    // <-- IMPORTANT: lowercase 'faq'
    testimonials: useRef(null),
    pricing: useRef(null),
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="font-['Inter'] min-h-screen bg-[#f7f7f8] text-[#071525] dark:bg-[#05070d] dark:text-[#f3f4f6] transition-colors duration-300">
      <Navbar
        scrollRefs={scrollRefs}
        onOpenModal={openModal}
      />

      <main className="pt-28">
        <section ref={scrollRefs.home}>
          <Home onOpenModal={openModal} />
        </section>

        <section ref={scrollRefs.about}>
          <About />
        </section>

        <section ref={scrollRefs.features}>
          <Features />
        </section>

        <section ref={scrollRefs.whyus}>
          <Whyus onOpenModal={openModal} />
        </section>

        <section ref={scrollRefs.who}>
          <Who onOpenModal={openModal} />
        </section>

        {/* FAQ section */}
        <section ref={scrollRefs.faq}>
          <Faq onOpenModal={openModal} />
        </section>

        <section ref={scrollRefs.testimonials}>
          <Testimonials onOpenModal={openModal} />
        </section>

        <section ref={scrollRefs.pricing}>
          <Pricing onOpenModal={openModal} />
        </section>
        <Footer />
      </main>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}