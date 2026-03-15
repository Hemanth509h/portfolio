import { Terminal } from "lucide-react";
export function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="font-display font-bold text-lg">
            Alex<span className="text-primary">.dev</span>
          </span>
        </div>
        <p className="text-muted-foreground text-sm text-center md:text-left">
          © {new Date().getFullYear()} Alex Johnson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
