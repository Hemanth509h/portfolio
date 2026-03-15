import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ProjectsSection } from "@/components/sections/Projects";
import { ExperienceSection } from "@/components/sections/Experience";
import { ReviewsSection } from "@/components/sections/Reviews";
import { ContactSection } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
