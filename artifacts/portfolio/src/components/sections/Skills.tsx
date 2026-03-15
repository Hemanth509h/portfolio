import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const SKILL_CATEGORIES = [
  {
    title: "Full Stack Development",
    skills: ["React", "TypeScript", "Node.js", "Next.js", "PostgreSQL", "MongoDB", "GraphQL", "Tailwind CSS", "Docker", "AWS"]
  },
  {
    title: "Data Analysis & ML",
    skills: ["Python", "Pandas", "NumPy", "SQL", "Tableau", "Power BI", "Scikit-Learn", "Matplotlib", "Jupyter", "Statistical Analysis"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Arsenal" subtitle="The tools and technologies I use to bring ideas to life." />

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-panel rounded-3xl p-8"
            >
              <h3 className="text-2xl font-display font-semibold mb-8 text-center flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-primary/50" />
                {category.title}
                <div className="h-px w-8 bg-primary/50" />
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (idx * 0.2) + (sIdx * 0.05) }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
