import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function NotFound() {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <>
      <div className="not-found">
        <Motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="not-found-card"
        >
          <Motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeCurve }}
          >
            404
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeCurve }}
          >
            Oops! The page you are looking for does not exist.
          </Motion.p>
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeCurve }}
          >
            <Link to="/" className="back-home-btn">
              <Motion.span
                whileHover={{ x: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <ArrowLeft size={16} /> Back to Homepage
              </Motion.span>
            </Link>
          </Motion.div>
        </Motion.div>
      </div>

      <style>{`
        .not-found {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #020617;
          color: white;
          padding: 20px;
          text-align: center;
        }

        .not-found-card {
          max-width: 500px;
          padding: 40px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .not-found-card h1 {
          font-size: 96px;
          font-weight: 800;
          background: linear-gradient(90deg, #10a4e8, #50e6fc);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }

        .not-found-card p {
          color: #94a3b8;
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .back-home-btn {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          background: linear-gradient(90deg, #10a4e8, #50e6fc);
          color: #020617;
          font-weight: 600;
          font-size: 15px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 10px 20px rgba(56, 189, 248, 0.2);
          transition: all 0.3s ease;
        }

        .back-home-btn:hover {
          box-shadow: 0 12px 25px rgba(56, 189, 248, 0.35);
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}

export default NotFound;