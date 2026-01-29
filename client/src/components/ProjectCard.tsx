import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden border-border/50 bg-card/40 hover:bg-card/60 transition-colors group flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60" />
        </div>
        
        <CardHeader className="space-y-2">
          <h3 className="text-xl font-bold font-display tracking-tight text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="bg-primary/10 text-primary-foreground hover:bg-primary/20 border-0"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </CardContent>
        
        <CardFooter className="flex gap-3 pt-6">
          {project.projectUrl && (
            <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90 text-white">
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink size={16} />
                Live Demo
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild variant="outline" size="sm" className="w-full border-border/50 hover:bg-accent/50">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={16} />
                Source Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
