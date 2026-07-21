import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./css/NotFound.css";

function NotFound() {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
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
  );
}

export default NotFound;