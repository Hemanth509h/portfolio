import { Monitor, Server, Database, Cloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "Redux"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "FastAPI", "GraphQL", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Firebase"],
  },
  {
    icon: Cloud,
    title: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "GitHub Actions", "Nginx", "Linux"],
  },
];

const Skills = () => (
  <section id="skills" className="py-20">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 className="mb-12 text-3xl font-bold tracking-tight">Skills</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <div key={cat.title} className="space-y-4">
            <div className="flex items-center gap-2">
              <cat.icon className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="font-normal">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
