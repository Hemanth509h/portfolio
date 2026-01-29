import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Github, Linkedin, Twitter, Mail, Phone, MapPin, MessageCircle, Instagram, Code, Palette, Smartphone, Globe } from "lucide-react";
import { useSkills, useProjects } from "@/hooks/use-portfolio";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { type Profile } from "@shared/schema";

export default function Home() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: profile, isLoading: profileLoading } = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  const groupedSkills = skills?.reduce((acc, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  if (profileLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Skeleton className="h-20 w-20 rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-foreground font-medium mb-6">
              Full Stack Developer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-4">
              Building <span className="text-primary">Digital</span> <br />
              Experiences.
            </h1>
            <h2 className="text-2xl font-bold mb-4">{profile?.name}</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
              {profile?.aboutMe}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-base shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              {profile?.resumeUrl && profile.resumeUrl !== "#" && (
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 rounded-full px-8 h-14 text-base transition-all hover:border-white/40" asChild>
                  <a href={profile.resumeUrl} download target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
              )}
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 rounded-full px-8 h-14 text-base transition-all hover:border-white/40" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex gap-8 mt-16 text-muted-foreground">
              {profile?.githubUrl && (
                <a href={profile.githubUrl} className="hover:text-primary transition-all hover:scale-110" title="GitHub">
                  <Github size={22} />
                </a>
              )}
              {profile?.linkedinUrl && (
                <a href={profile.linkedinUrl} className="hover:text-primary transition-all hover:scale-110" title="LinkedIn">
                  <Linkedin size={22} />
                </a>
              )}
              <a href={`mailto:${profile?.email}`} className="hover:text-primary transition-all hover:scale-110" title="Email">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] p-3 aspect-square max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-all duration-700 ease-out group">
               <div className="w-full h-full rounded-2xl border border-white/5 overflow-hidden relative shadow-inner">
                 <img 
                   src={profile?.photoUrl || undefined} 
                   alt={profile?.name} 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               </div>
            </div>
            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10 group-hover:bg-primary/30 transition-colors duration-700" />
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                <img 
                  src={profile?.photoUrl || undefined} 
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-display mb-6">About Me</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-10" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {profile?.aboutMe}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Location</h4>
                  <p className="text-muted-foreground">{profile?.location}</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Experience</h4>
                  <p className="text-muted-foreground">5+ Years</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="services" className="py-32 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">My Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I offer a wide range of services to help you build and scale your digital products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: "Web Development", desc: "Building responsive and performant web applications using modern technologies." },
              { icon: Palette, title: "UI/UX Design", desc: "Creating intuitive and visually appealing user interfaces with a focus on user experience." },
              { icon: Smartphone, title: "Mobile Apps", desc: "Developing cross-platform mobile applications for iOS and Android." },
              { icon: Globe, title: "SEO Optimization", desc: "Improving your website's visibility and ranking on search engine results pages." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">Technical Arsenal</h2>
            <p className="text-muted-foreground text-lg">Tools and technologies I use to bring ideas to life.</p>
          </div>

          {skillsLoading ? (
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[1,2,3,4,5,6,7,8].map(i => <Skeleton key={i} className="h-16 w-full rounded-xl" />)}
             </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(groupedSkills || {}).map(([category, categorySkills]) => (
                <div key={category}>
                  <h3 className="text-2xl font-semibold mb-6 capitalize text-primary-foreground/80">{category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categorySkills.map((skill, index) => (
                      <SkillBadge key={skill.id} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold font-display mb-4">Featured Projects</h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                A selection of projects that showcase my skills and passion for development.
              </p>
            </div>
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {projectsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1,2,3].map(i => <Skeleton key={i} className="h-[400px] w-full rounded-2xl" />)}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background/90 z-0 pointer-events-none" />
        <div className="absolute -right-40 bottom-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-display mb-6">Let's Work Together</h2>
              <p className="text-xl text-muted-foreground">
                Have a project in mind or just want to say hi? I'd love to hear from you.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-lg border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl grid md:grid-cols-5 gap-12">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <p className="text-muted-foreground mb-8">
                    Feel free to reach out through any of these channels. I'm always open to discussing new projects or opportunities.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href={`mailto:${profile?.email}`} className="font-medium hover:text-primary transition-colors">
                        {profile?.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href={`tel:${profile?.phone}`} className="font-medium hover:text-primary transition-colors">
                        {profile?.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{profile?.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <a 
                        href={`https://wa.me/${profile?.phone?.replace(/\D/g, '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        Message me on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex gap-4">
                  {profile?.githubUrl && (
                    <a 
                      href={profile.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {profile?.linkedinUrl && (
                    <a 
                      href={profile.linkedinUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                      data-testid="link-social-linkedin"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {profile?.instagramUrl && (
                    <a 
                      href={profile.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                      data-testid="link-social-instagram"
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                  {profile?.phone && (
                    <a 
                      href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <MessageCircle size={18} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="md:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <a 
        href={`https://wa.me/${profile?.phone?.replace(/\D/g, '')}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group"
        title="Chat with me on WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 px-4 py-2 bg-card border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-medium">
          Chat with me!
        </span>
      </a>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} DevPortfolio. Built with React & Tailwind.
          </p>
          <div className="flex gap-6 text-muted-foreground">
            {profile?.githubUrl && <a href={profile.githubUrl} className="hover:text-primary transition-colors" data-testid="link-github">GitHub</a>}
            {profile?.linkedinUrl && <a href={profile.linkedinUrl} className="hover:text-primary transition-colors" data-testid="link-linkedin">LinkedIn</a>}
            {profile?.instagramUrl && <a href={profile.instagramUrl} className="hover:text-primary transition-colors" data-testid="link-instagram">Instagram</a>}
            <a href={`mailto:${profile?.email}`} className="hover:text-primary transition-colors" data-testid="link-email">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
