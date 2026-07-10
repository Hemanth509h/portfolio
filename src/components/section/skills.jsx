import "./css/skills.css";
import { motion as Motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Full Stack Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Next.js", "MongoDB", "Supabase", "Python"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform", "CI/CD"],
  },
  {
    title: "Data Analysis & ML",
    skills: ["Python", "SQL", "Power BI", "Statistical Analysis"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  },
};

export function Skills() {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section className="skillssection" id="skills">
      <Motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeCurve }}
        className="Technical-Arsenal"
        viewport={{
          once: true,
          amount: 0.2
        }}
      >
        Technical Arsenal
      </Motion.h1>
      <Motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: easeCurve }}
        viewport={{
          once: true,
          amount: 0.2
        }}
        className="skills-description"
      >
        The tools and technologies I use to bring ideas to life.
      </Motion.p>

      <div className="skills-grid">
        {SKILL_CATEGORIES.map((category, idx) => (
          <Motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2
            }}
            className="skillscard"
          >
            <h3>
              <hr />
              {category.title}
              <hr />
            </h3>
            <div className="skillslist">
              {category.skills.map((skill, sIdx) => (
                <Motion.div
                  key={sIdx}
                  variants={chipVariants}
                  whileHover={{
                    y: -4,
                    scale: 1.04,
                    boxShadow: "0 5px 15px rgba(13, 162, 231, 0.25)",
                    borderColor: "rgba(13, 162, 231, 0.4)",
                  }}
                  className="skillitem"
                >
                  {skill}
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
