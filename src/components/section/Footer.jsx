import { Terminal } from "lucide-react";
import { motion as Motion } from "framer-motion";

export function Footer() {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <>
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

      {/* ================= CSS ================= */}
      <style>{`
        .footer {
          padding: 40px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: #020617;
          color: white;
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .footer-icon {
          width: 20px;
          height: 20px;
          color: #38bdf8;
        }

        .footer-logo {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .highlight {
          color: #38bdf8;
        }

        .footer-text {
          font-size: 14px;
          color: #94a3b8;
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}