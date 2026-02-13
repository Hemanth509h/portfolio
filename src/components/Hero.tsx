import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="profile" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/10 ring-4 ring-primary/20">
            <User className="h-14 w-14 text-primary" />
          </div>

          <div className="space-y-4" style={{ animation: "fade-in-up 0.6s ease-out forwards" }}>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Peddaboina Hemanth Kumar
            </h1>
            <p className="text-xl font-medium text-primary sm:text-2xl">
              Full Stack Developer
            </p>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Passionate about building elegant, performant web applications.
              I turn complex problems into simple, beautiful solutions with modern technologies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => scrollTo("#projects")}>
              View Projects
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("#contact")}>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
