import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroimage from "../../assets/hero-bg.png";
import "./css/hero.css";

const ROLES = ["Full Stack Developer", "Data Analyst", "Problem Solver"];

const PARTICLES_CONFIG = Array.from({ length: 15 }).map((_, i) => ({
  x: `${(i * 7 + 13) % 100}%`,
  scale: 0.5 + ((i * 3 + 7) % 10) * 0.05,
  opacityMax: 0.1 + ((i * 2 + 5) % 10) * 0.04,
  duration: 15 + ((i * 4 + 11) % 15),
  delay: ((i * 3 + 4) % 10),
  size: 4 + ((i * 2 + 3) % 8),
}));

export function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const easeCurve = [0.16, 1, 0.3, 1]; // Smooth premium deceleration curve

  return (
    <section className="hero-section">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroimage})` }}
      />

      {/* Floating Background Particles */}
      <div className="hero-particles" style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        {PARTICLES_CONFIG.map((p, i) => (
          <Motion.div
            key={i}
            initial={{
              x: p.x,
              y: "110%",
              scale: p.scale,
              opacity: 0
            }}
            animate={{
              y: "-10%",
              opacity: [0, p.opacityMax, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
            style={{
              position: "absolute",
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(80,230,252,0.6) 0%, rgba(16,164,232,0) 70%)",
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <Motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeCurve }}
          className="availability-badge"
        >
          <span className="badge-dot"></span>
          Available for new opportunities
        </Motion.div>

        <Motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: easeCurve }}
          className="hero-heading"
        >
          Hi, <br />
          I'm <span className="name-highlight">P Hemanth Kumar</span>
          <br />
          <div className="role-slider-container">
            <AnimatePresence mode="wait">
              <Motion.span
                key={roleIdx}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="role-text"
              >
                {ROLES[roleIdx]}
              </Motion.span>
            </AnimatePresence>
          </div>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: easeCurve }}
          className="hero-description"
        >
          I build scalable web applications and uncover actionable insights from
          complex datasets. Bridging the gap between engineering and analytics.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: easeCurve }}
          className="hero-buttons"
        >
          <div className="buttons">
            <Motion.a
              className="btn btn1"
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
              <ArrowRight className="buttonarrowright" />
            </Motion.a>
            <Motion.a
              className="btn btn-outline"
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </Motion.a>
          </div>
        </Motion.div>
      </div>

      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="scroll-indicator"
      >
        <ChevronDown size={32} />
      </Motion.div>
    </section>
  );
}
