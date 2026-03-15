import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Briefcase } from "lucide-react";
const EXPERIENCES = [
  {
    role: "Senior Full Stack Developer",
    company: "TechCorp",
    period: "2022 - Present",
    description: [
      "Architected and deployed microservices-based web applications scaling to 1M+ daily active users.",
      "Mentored junior developers and established CI/CD best practices reducing deployment time by 40%.",
      "Integrated complex third-party payment and CRM APIs ensuring 99.99% uptime.",
    ],
  },
  {
    role: "Data Analyst",
    company: "DataInsights Inc",
    period: "2020 - 2022",
    description: [
      "Built automated Python ETL pipelines to aggregate disparate marketing data into central warehouses.",
      "Created interactive Tableau dashboards utilized by C-suite for quarterly strategic planning.",
      "Developed regression models to forecast seasonal demand, improving inventory efficiency by 15%.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "StartupHub",
    period: "2019 - 2020",
    description: [
      "Developed responsive landing pages and internal admin tools using React and Express.",
      "Optimized legacy database queries, reducing average load times on core views by 2 seconds.",
      "Collaborated tightly with UX designers to implement pixel-perfect, accessible interfaces.",
    ],
  },
];
export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-white/[0.02]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" />
        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                  <div
                    className={`w-full md:w-1/2 ${isEven ? "md:pl-16" : "md:pr-16"} pl-12 md:pl-0`}
                  >
                    <div className="glass-panel p-8 rounded-3xl hover:border-primary/30 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <h4 className="text-xl font-display font-bold text-foreground">
                          {exp.role}
                        </h4>
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <h5 className="text-lg font-medium text-muted-foreground mb-4">
                        {exp.company}
                      </h5>
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li className="flex items-start">
                            <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-muted-foreground text-sm leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
