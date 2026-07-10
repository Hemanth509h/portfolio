import React, { useState, useEffect } from 'react';
import { Navbar } from '../section/navbar';
import { HeroSection } from '../section/Hero';
import { Aboutme } from '../section/Aboutme';
import { Skills } from '../section/skills';
import { Projects } from '../section/Projects';
import { Experience } from '../section/Experience';
import { ContactSection } from '../section/contact';
import { Footer } from '../section/Footer';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home">
      <Navbar />
      <div>
        <HeroSection />
        <Aboutme />
        <Skills />
        <Projects />
        <Experience />
        <ContactSection />
        <Footer />
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <Motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="scroll-to-top"
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              backgroundColor: "var(--primary)",
              color: "var(--bg)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              boxShadow: "var(--shadow)",
            }}
          >
            <ArrowUp size={22} style={{ strokeWidth: 2.5 }} />
          </Motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;