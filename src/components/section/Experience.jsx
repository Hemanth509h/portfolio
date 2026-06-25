import "./css/Experience.css";
import { motion as Motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Diploma Industrial Training",
    company: "The National Small Industries Corporation (NSIC) Technology service Centre, Hyderabad",
    period: "05/2024 - 10/2024",
    description: [
      "Gained hands-on experience in the field of Computer Science and Engineering through a comprehensive 6-month industrial training program at NSIC Technology Service Centre, Hyderabad.",
      "Collaborated with industry professionals, gaining insights into the latest technologies and industry practices, and enhanced my understanding of the software development lifecycle.",
    ],
  },
  {
    role: "Web Development",
    company: "INFOTACT SOLUTIONS",
    period: "03/2026 - 06/2026",
    description: [
      "Selected as an Associate L1 intern at Infotact Solutions in a fully remote role, working on real-world web development projects.",
      "Collaborating with the development team to design, develop, test, and deploy responsive web applications based on project requirements.",
      "Writing clean, efficient, and maintainable code using technologies such as HTML, CSS, JavaScript, React.js, and Node.js.",
      "Participating in code reviews, debugging issues, and optimizing performance to ensure high-quality user experience.",
      "Gaining hands-on experience with modern development workflows, APIs, and system design while working in a professional environment.",
      "Providing weekly progress updates and continuously improving skills through learning new tools, frameworks, and best practices."
    ],
  },
];

export function Experience() {
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section className="experience-section" id="experience">
      <Motion.div
        className="experience-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeCurve }}
        viewport={{ once: true }}
      >
        <h1 className="experience-heading">Experience</h1>
      </Motion.div>

      <div className="experience-content">
        {/* Animated Vertical Line */}
        <Motion.div
          className="timeline-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />

        {EXPERIENCES.map((exp, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`timeline-item ${isEven ? "reverse" : ""}`}
            >
              {/* Icon Pop-in */}
              <Motion.div
                className="timeline-icon"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
              >
                <Briefcase className="icon" />
              </Motion.div>

              {/* Slide-in Card */}
              <Motion.div
                className="timeline-content"
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: easeCurve }}
              >
                <div className="card">
                  <div className="card-header">
                    <h4>{exp.role}</h4>
                    <span className="period">{exp.period}</span>
                  </div>

                  <h5 className="company">{exp.company}</h5>

                  <ul>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
