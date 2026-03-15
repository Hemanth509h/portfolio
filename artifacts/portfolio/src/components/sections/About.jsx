import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Code2, Database, Layout, Terminal } from "lucide-react";
const stats = [
  {
    label: "Years Experience",
    value: "5+",
    icon: Terminal,
  },
  {
    label: "Projects Completed",
    value: "40+",
    icon: Layout,
  },
  {
    label: "Technologies",
    value: "15+",
    icon: Code2,
  },
  {
    label: "Data Pipelines",
    value: "20+",
    icon: Database,
  },
];
export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Passionate developer dedicated to building impactful digital solutions and deriving deep insights from data."
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative rounded-3xl overflow-hidden glass-panel p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 z-10 rounded-2xl mix-blend-overlay" />
              <img
                src={`${import.meta.env.BASE_URL}images/avatar.png`}
                alt="Alex Johnson Profile"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl -z-10" />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <h3 className="text-2xl font-display font-semibold mb-4">
              Bridging the gap between engineering and analytics.
            </h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm Alex, a Full Stack Developer & Data Analyst with over 5
                years of experience building scalable web applications and
                complex data pipelines. My dual background allows me to
                architect robust backend systems while surfacing actionable
                insights.
              </p>
              <p>
                Whether it's designing a high-performance REST API, crafting a
                beautiful interactive UI, or training machine learning models to
                predict market trends, I bring a detail-oriented and holistic
                approach to every project I touch.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
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
                    }}
                    transition={{
                      delay: 0.4 + i * 0.1,
                    }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-2"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="text-3xl font-display font-bold text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
