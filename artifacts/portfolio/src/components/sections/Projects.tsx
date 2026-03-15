import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Activity, Server } from "lucide-react";

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    type: "Full Stack",
    icon: Server,
    description: "A comprehensive scalable e-commerce solution featuring real-time inventory management, secure payments, and an intuitive admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Sales Data Dashboard",
    type: "Data Analysis",
    icon: Activity,
    description: "Interactive analytics dashboard processing millions of sales records to uncover actionable insights and regional performance metrics.",
    tags: ["Python", "Tableau", "SQL", "Pandas"],
    gradient: "from-cyan-500/20 to-emerald-500/20",
  },
  {
    title: "Real-Time Chat App",
    type: "Full Stack",
    icon: Server,
    description: "High-performance messaging application with end-to-end encryption, typing indicators, and media sharing capabilities.",
    tags: ["React", "WebSockets", "MongoDB", "Express"],
    gradient: "from-indigo-500/20 to-pink-500/20",
  },
  {
    title: "Customer Churn Prediction",
    type: "Machine Learning",
    icon: Activity,
    description: "Predictive ML model that identifies at-risk customers with 94% accuracy, helping retention teams proactively engage clients.",
    tags: ["Scikit-Learn", "Python", "Jupyter"],
    gradient: "from-rose-500/20 to-orange-500/20",
  },
  {
    title: "Task Management API",
    type: "Full Stack",
    icon: Server,
    description: "Robust RESTful API for team productivity. Includes advanced RBAC, rate limiting, and comprehensive OpenAPI documentation.",
    tags: ["Node.js", "Docker", "Redis", "Jest"],
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    title: "Market Trend Analyzer",
    type: "Data Analysis",
    icon: Activity,
    description: "Automated scraping and sentiment analysis tool for social media and news outlets to track emerging tech market trends.",
    tags: ["Python", "BeautifulSoup", "NLTK", "Matplotlib"],
    gradient: "from-teal-500/20 to-green-500/20",
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Work" 
          subtitle="A selection of my recent full stack applications and data analysis projects." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full flex flex-col group overflow-hidden border-white/10 hover:border-primary/50 relative">
                  {/* Decorative background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                        {project.type}
                      </span>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-foreground/80 bg-white/5 px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="relative z-10 pt-4 border-t border-white/5 gap-4">
                    <Button variant="ghost" size="sm" className="w-full text-muted-foreground hover:text-foreground" asChild>
                      <a href="#" target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4 mr-2" /> Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary" asChild>
                      <a href="#" target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" /> Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
