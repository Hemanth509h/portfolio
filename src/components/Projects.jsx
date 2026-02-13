import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-featured online store with cart, checkout, and payment integration.",
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop",
  },
  {
    title: "Task Management App",
    desc: "Kanban-style project management tool with real-time collaboration.",
    tech: ["TypeScript", "Next.js", "Prisma", "WebSocket"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=340&fit=crop",
  },
  {
    title: "AI Chat Dashboard",
    desc: "Admin dashboard for monitoring and managing AI-powered chatbots.",
    tech: ["React", "Python", "FastAPI", "Docker"],
    image: "https://images.unsplash.com/photo-1677442135136-760c813028c4?w=600&h=340&fit=crop",
  },
  {
    title: "Fitness Tracker",
    desc: "Mobile-first fitness app with workout logging and progress visualization.",
    tech: ["React Native", "Firebase", "Chart.js"],
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=340&fit=crop",
  },
  {
    title: "Developer Blog",
    desc: "Markdown-powered blog with syntax highlighting and SEO optimization.",
    tech: ["Astro", "MDX", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=340&fit=crop",
  },
  {
    title: "Weather Dashboard",
    desc: "Real-time weather data with interactive maps and 7-day forecasts.",
    tech: ["Vue.js", "D3.js", "OpenWeather API"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=340&fit=crop",
  },
];

const Projects = () => (
  <section id="projects" className="py-20">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 className="mb-12 text-3xl font-bold tracking-tight">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} className="hover-lift overflow-hidden border-none bg-card">
            <img src={p.image} alt={p.title} className="h-44 w-full object-cover" loading="lazy" />
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{p.title}</CardTitle>
              {p.desc}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-1.5 pb-2">
              {p.tech.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs font-normal">
                  {t}
                </Badge>
              ))}
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
