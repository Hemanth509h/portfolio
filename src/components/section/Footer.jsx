import { Terminal } from "lucide-react";
import { motion as Motion } from "framer-motion";
import "./css/Footer.css";

export function Footer() {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <footer className="footer">
      <Motion.div 
        className="footer-container"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeCurve }}
      >
        <Motion.div 
          className="footer-left"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
        >
          <Motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Terminal className="footer-icon" />
          </Motion.div>
          <span className="footer-logo">
            P hemanth kumar<span className="highlight">.dev</span>
          </span>
        </Motion.div>

        <p className="footer-text">
          © {new Date().getFullYear()} Peddaboina hemanth kumar. All rights reserved.
        </p>

      </Motion.div>
    </footer>
  );
}