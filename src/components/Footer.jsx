import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t py-8">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a href="mailto:john@example.com" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Email">
          <Mail className="h-5 w-5" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="GitHub">
          <Github className="h-5 w-5" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
