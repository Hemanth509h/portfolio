import "./css/projects.css";
import { useState, useRef } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Activity, Code, ChevronLeft, ChevronRight } from "lucide-react";

import netflix1 from "../../assets/netflix/netflix_page-0001.jpg";
import netflix2 from "../../assets/netflix/netflix_page-0002.jpg";
import netflix3 from "../../assets/netflix/netflix_page-0003.jpg";
import netflix4 from "../../assets/netflix/netflix_page-0004.jpg";
import netflix5 from "../../assets/netflix/netflix_page-0005.jpg";
import netflix6 from "../../assets/netflix/netflix_page-0006.jpg";
import netflix7 from "../../assets/netflix/netflix_page-0007.jpg";
import netflix8 from "../../assets/netflix/netflix_page-0008.jpg";

import walmart1 from "../../assets/walmart/walmart sales analysis_page-0001.jpg";
import walmart2 from "../../assets/walmart/walmart sales analysis_page-0002.jpg";
import walmart3 from "../../assets/walmart/walmart sales analysis_page-0003.jpg";
import walmart4 from "../../assets/walmart/walmart sales analysis_page-0004.jpg";
import walmart5 from "../../assets/walmart/walmart sales analysis_page-0005.jpg";

/* ================= PROJECT DATA ================= */
const PROJECTS = [
  {
    title: "The Billing Software",
    type: "Python with GUI",
    icon: Code,
    description:
      "Billing Software using Python with GUI. Generates PDF bills and stores history in Excel.",
    tags: ["Python", "GUI", "PDF", "Excel"],
    code: "https://github.com/Hemanth509h/The_Billing_Software.git",
    demo: "",
    category: "Full Stack & Web Apps",
  },
  {
    title: "Login & Register (MongoDB)",
    type: "Python + MongoDB",
    icon: Code,
    description:
      "Secure login/register system using Flask and MongoDB with authentication.",
    tags: ["Python", "MongoDB", "HTML", "JavaScript"],
    code: "https://github.com/Hemanth509h/login_an_register.git",
    demo: "https://loginregisterpages.vercel.app/",
    category: "Full Stack & Web Apps",
  },
  {
    title: "Grocery Management System",
    type: "Full Stack",
    icon: Code,
    description:
      "Full stack grocery system with billing, database storage and UI.",
    tags: ["Python", "Flask", "MySQL", "JavaScript"],
    code: "https://github.com/Hemanth509h/Grocerly-Management-System.git",
    demo: "https://elitegrocers.vercel.app/",
    category: "Full Stack & Web Apps",
  },
  {
    title: "Trendcast",
    type: "React + Python",
    icon: Code,
    description:
      "Twitter trend analysis app with real-time data visualization.",
    tags: ["React", "Python", "Data Analysis"],
    code: "https://github.com/Hemanth509h/Trendcast.git",
    demo: "https://trendcasts.vercel.app/",
    category: "Full Stack & Web Apps",
  },
  {
    title: "Netflix Data Analysis",
    type: "Power BI",
    icon: Activity,
    images: [netflix1, netflix2, netflix3, netflix4, netflix5, netflix6, netflix7, netflix8],
    description: "EDA and visualization on Netflix dataset.",
    tags: ["Power BI", "Data Analysis"],
    code: "https://github.com/Hemanth509h/Data-analysis/tree/main/netflix%20analysis",
    demo: "",
    category: "Data Analysis",
  },
  {
    title: "Walmart Data Analysis",
    type: "Power BI",
    icon: Activity,
    images: [walmart1, walmart2, walmart3, walmart4, walmart5],
    description: "EDA and visualization on Walmart dataset.",
    tags: ["Power BI", "Data Analysis"],
    code: "https://github.com/Hemanth509h/Data-analysis/tree/main/walmart%20analysis",
    demo: "",
    category: "Data Analysis",
  },
  {
    title: "24-hour National Level Design-A-Thon at VNR VJIET.",
    type: "24hr National Hackathon",
    icon: Code,
    description:
      "Participated in 24-hour National Level Design-A-Thon at VNR VJIET, a 24-hour national-level hackathon focused on Gender Diversity at VNR VJIET, Hyderabad. Collaborated in a team to design and prototype solutions under strict time constraints.",
    tags: ["Hackathon", "Innovation", "Teamwork"],
    highlights: [
      "24-hour rapid development",
      "Focused on Gender Diversity",
      "Team-based collaboration",
      "Real-time problem solving"
    ],
    tech: ["React", "Python", "Flask"],
    role: "Team Member",
    date: "March 24-25, 2026",
    location: "Hyderabad",
    code: "https://github.com/Hemanth509h/Code-Presentation-Hub.git",
    demo: "",
    category: "🏆 Hackathon Projects",
  },
];

/* ================= GROUP ================= */
const groupedProjects = PROJECTS.reduce((acc, project) => {
  if (!acc[project.category]) acc[project.category] = [];
  acc[project.category].push(project);
  return acc;
}, {});

Object.keys(groupedProjects).forEach((key) => {
  groupedProjects[key].reverse();
});

/* ================= IMAGE SLIDER ================= */
function ImageSlider({ images, title }) {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection, e) => {
    e.stopPropagation();
    let nextPage = page + newDirection;
    if (nextPage < 0) nextPage = images.length - 1;
    if (nextPage >= images.length) nextPage = 0;
    setPage([nextPage, newDirection]);
  };

  const current = page;

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <div className="slider" style={{ position: "relative", overflow: "hidden" }}>
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <Motion.img
          key={page}
          src={images[current]}
          alt={title}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="slider-img"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AnimatePresence>

      <button className="slider-btn slider-btn-left" onClick={(e) => paginate(-1, e)}>
        <ChevronLeft size={18} />
      </button>

      <button className="slider-btn slider-btn-right" onClick={(e) => paginate(1, e)}>
        <ChevronRight size={18} />
      </button>

      <div className="slider-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`slider-dot ${i === current ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              const dir = i > current ? 1 : -1;
              setPage([i, dir]);
            }}
          />
        ))}
      </div>

      <span className="slider-counter">
        {current + 1} / {images.length}
      </span>
    </div>
  );
}

/* ================= ANIMATION VARIANTS ================= */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ================= COMPONENT ================= */
export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const easeCurve = [0.16, 1, 0.3, 1];
  const containerRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const categories = ["All", ...Object.keys(groupedProjects)];

  const displayProjects = selectedCategory === "All"
    ? Object.values(groupedProjects).flat()
    : groupedProjects[selectedCategory] || [];

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      const pct = scrollLeft / maxScroll;
      const index = Math.round(pct * (displayProjects.length - 1));
      setScrollIndex(index);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setScrollIndex(0);
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="projectssection" id="projects">
      {/* LEFT SIDE: INFO */}
      <div className="projects-info">
        <Motion.h1
          className="projects-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeCurve }}
        >
          Featured Work
        </Motion.h1>

        <Motion.p
          className="projects-description2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeCurve }}
        >
          My full stack & data analysis projects
        </Motion.p>
      </div>

      {/* RIGHT SIDE: WRAPPER */}
      <div className="projects-wrapper">
        {/* CATEGORY TABS */}
        <Motion.div
          className="category-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeCurve }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`category-tab ${selectedCategory === category ? "active" : ""}`}
              onClick={() => handleCategoryChange(category)}
              style={{ position: "relative" }}
            >
              {selectedCategory === category && (
                <Motion.div
                  layoutId="activeTab"
                  className="active-tab-bg"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="tab-text">{category}</span>
            </button>
          ))}
        </Motion.div>

        {/* PROJECT CARDS */}
        <Motion.div
          ref={containerRef}
          onScroll={handleScroll}
          className="projects-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          layout
        >
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project) => (
              <Motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: easeCurve }}
                className="project-card"
                whileHover={{
                  y: -6,
                  boxShadow: "0 15px 30px rgba(56, 189, 248, 0.18)",
                  borderColor: "rgba(56, 189, 248, 0.4)",
                }}
                style={{ transition: "box-shadow 0.3s ease, border-color 0.3s ease" }}
              >
                {/* IMAGE SLIDER */}
                {project.images && (
                  <ImageSlider
                    images={project.images}
                    title={project.title}
                  />
                )}

                {/* HEADER */}
                <div className="project-header">
                  <project.icon size={22} />
                  <span className="project-type">
                    {project.type}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="project-title">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="project-description">
                  {project.description}
                </p>

                {/* HACKATHON HIGHLIGHTS (if available) */}
                {project.highlights && (
                  <ul className="project-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                )}

                {/* TAGS */}
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <hr />

                {/* FOOTER */}
                <div className="project-footer">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={16} /> Code
                  </a>

                  <a
                    href={project.demo || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-link ${!project.demo ? "disabled" : ""
                      }`}
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </Motion.div>
            ))}
          </AnimatePresence>
        </Motion.div>

        {/* DOTS PAGINATION */}
        {displayProjects.length > 1 && (
          <div className="container-dots">
            {displayProjects.map((_, idx) => (
              <button
                key={idx}
                className={`container-dot ${scrollIndex === idx ? "active" : ""}`}
                onClick={() => {
                  if (containerRef.current) {
                    const { scrollWidth, clientWidth } = containerRef.current;
                    const maxScroll = scrollWidth - clientWidth;
                    const targetScroll = (idx / (displayProjects.length - 1)) * maxScroll;
                    containerRef.current.scrollTo({
                      left: targetScroll,
                      behavior: "smooth"
                    });
                  }
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
