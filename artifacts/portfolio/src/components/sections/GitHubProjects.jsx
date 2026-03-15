import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Star,
  GitFork,
  ExternalLink,
  Code2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
const GITHUB_USERNAME = "octocat";
const LANGUAGE_COLORS = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Shell: "#89e051",
  "C#": "#178600",
  "C++": "#f34b7d",
  Ruby: "#701516",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
};
function LanguageDot({ language }) {
  const color = LANGUAGE_COLORS[language] ?? "#8b949e";
  return (
    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <span
        className="w-3 h-3 rounded-full flex-shrink-0"
        style={{
          backgroundColor: color,
        }}
      />
      {language}
    </span>
  );
}
export function GitHubProjectsSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50&type=public`,
      {
        signal: controller.signal,
        headers: {
          Accept: "application/vnd.github+json",
        },
      },
    )
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const filtered = data
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        setRepos(filtered);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);
  return (
    <section id="github" className="py-24 md:py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="GitHub Projects"
          subtitle={`Open source work and public repositories from @${GITHUB_USERNAME}`}
        />
        <div className="flex justify-center mb-10">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            View full profile on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({
              length: 6,
            }).map((_, i) => (
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 animate-pulse h-48" />
            ))}
          </div>
        )}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-16 gap-4 text-muted-foreground">
            <AlertCircle className="w-10 h-10 text-destructive/60" />
            <p className="text-sm">
              Could not load GitHub repositories. {error}
            </p>
          </div>
        )}
        {!loading && !error && repos.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 gap-4 text-muted-foreground">
            <Code2 className="w-10 h-10" />
            <p className="text-sm">
              No public repositories found for @{GITHUB_USERNAME}.
            </p>
          </div>
        )}
        {!loading && !error && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, idx) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.08,
                }}
                className="h-full"
              >
                <Card className="h-full flex flex-col group border-white/10 hover:border-primary/40 transition-colors duration-300 bg-white/[0.02]">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                        <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                    <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors truncate">
                      {repo.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pb-4">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                      {repo.description ?? "No description provided."}
                    </p>
                    {repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {repo.topics.slice(0, 4).map((topic) => (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-4 text-muted-foreground">
                      {repo.language && (
                        <LanguageDot language={repo.language} />
                      )}
                      <span className="flex items-center gap-1 text-xs">
                        <Star className="w-3.5 h-3.5" />
                        {repo.stargazers_count.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1 text-xs">
                        <GitFork className="w-3.5 h-3.5" />
                        {repo.forks_count.toLocaleString()}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-3 border-t border-white/5 gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-muted-foreground hover:text-foreground"
                      asChild
                    >
                      <a href={repo.html_url} target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    {repo.homepage && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-primary hover:text-primary"
                        asChild
                      >
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
