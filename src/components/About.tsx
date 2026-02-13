import { Lightbulb, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const strengths = [
  { icon: Lightbulb, title: "Problem Solver", desc: "Breaking down complex challenges into clean, maintainable solutions." },
  { icon: Users, title: "Team Player", desc: "Thriving in collaborative environments with clear communication." },
  { icon: Zap, title: "Fast Learner", desc: "Quickly adopting new technologies and best practices." },
];

const About = () => (
  <section className="py-20">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 className="mb-6 text-3xl font-bold tracking-tight">About Me</h2>
      <p className="mb-12 max-w-3xl text-muted-foreground">
        I'm a full stack developer with a passion for creating intuitive and performant web applications.
        With experience across the entire development lifecycle, I specialize in React, Node.js, and cloud-native
        architectures. I believe great software is built at the intersection of technical excellence and user empathy.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((s) => (
          <Card key={s.title} className="hover-lift border-none bg-card">
            <CardContent className="flex flex-col items-start gap-3 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default About;
