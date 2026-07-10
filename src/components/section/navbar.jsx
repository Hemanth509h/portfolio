import { useState, useEffect, useContext } from "react";
import { Menu, X, Terminal, Sun, Moon } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../../App";
import "./css/navbar.css";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Track active section via IntersectionObserver
    const sections = ["about", "skills", "projects", "experience", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <header
      className={`header ${isScrolled ? "header-scrolled" : "header-top"}`}
    >
      <div className="container">
        <div className="inner-row">
          
          {/* Logo */}
          <a href="#" className="logo-link">
            <Motion.div
              className="logo-icon"
              whileHover={{ rotate: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Terminal className="logo-svg" />
            </Motion.div>
            <span className="logo-text">
              Hemanth<span className="logo-accent">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="nav">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "active-tab" : ""}`}
                >
                  {link.name}
                  {isActive && (
                    <Motion.span
                      layoutId="activeUnderline"
                      className="active-underline"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            <Motion.a
              href="#contact"
              className="hire-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </Motion.a>

            <Motion.button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "dark" ? <Sun className="theme-icon" /> : <Moon className="theme-icon" />}
            </Motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div
            className="mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Motion.div
              key={isMenuOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <X className="menu-icon" />
              ) : (
                <Menu className="menu-icon" />
              )}
            </Motion.div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <Motion.div
              className="mobile-nav"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {NAV_LINKS.map((link) => (
                <Motion.a
                  key={link.href}
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.href.slice(1) ? "mobile-active" : ""}`}
                  variants={itemVariants}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Motion.a>
              ))}

              <Motion.a
                href="#contact"
                className="mobile-hire-btn"
                variants={itemVariants}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </Motion.a>

              <Motion.button
                type="button"
                className="mobile-theme-toggle-btn"
                variants={itemVariants}
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === "dark" ? <Sun className="theme-icon" /> : <Moon className="theme-icon" />}
              </Motion.button>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}