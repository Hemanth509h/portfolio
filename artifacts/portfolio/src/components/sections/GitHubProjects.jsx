import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Star, GitFork, ExternalLink, Code2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

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
  Kotlin: "#A97BFF"
};

function LanguageDot({ language }) {
  const color = LANGUAGE_COLORS[language] ?? "#8b949e";
  return (/*#__PURE__*/
    _jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [/*#__PURE__*/
      _jsx("span", {
        className: "w-3 h-3 rounded-full flex-shrink-0",
        style: { backgroundColor: color } }
      ),
      language] }
    ));

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
        headers: { Accept: "application/vnd.github+json" }
      }
    ).
    then((res) => {
      if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
      return res.json();
    }).
    then((data) => {
      const filtered = data.
      filter((r) => !r.fork).
      sort((a, b) => b.stargazers_count - a.stargazers_count).
      slice(0, 6);
      setRepos(filtered);
    }).
    catch((err) => {
      if (err.name !== "AbortError") setError(err.message);
    }).
    finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return (/*#__PURE__*/
    _jsx("section", { id: "github", className: "py-24 md:py-32 bg-white/[0.02]", children: /*#__PURE__*/
      _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [/*#__PURE__*/
        _jsx(SectionHeading, {
          title: "GitHub Projects",
          subtitle: `Open source work and public repositories from @${GITHUB_USERNAME}` }
        ), /*#__PURE__*/

        _jsx("div", { className: "flex justify-center mb-10", children: /*#__PURE__*/
          _jsxs("a", {
            href: `https://github.com/${GITHUB_USERNAME}`,
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/10 transition-all duration-300", children: [/*#__PURE__*/

            _jsx(Github, { className: "w-4 h-4" }), "View full profile on GitHub", /*#__PURE__*/

            _jsx(ExternalLink, { className: "w-3.5 h-3.5" })] }
          ) }
        ),

        loading && /*#__PURE__*/
        _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children:
          Array.from({ length: 6 }).map((_, i) => /*#__PURE__*/
          _jsx("div", {

            className: "rounded-xl border border-white/10 bg-white/5 p-6 animate-pulse h-48" }, i
          )
          ) }
        ),


        error && !loading && /*#__PURE__*/
        _jsxs("div", { className: "flex flex-col items-center justify-center py-16 gap-4 text-muted-foreground", children: [/*#__PURE__*/
          _jsx(AlertCircle, { className: "w-10 h-10 text-destructive/60" }), /*#__PURE__*/
          _jsxs("p", { className: "text-sm", children: ["Could not load GitHub repositories. ", error] })] }
        ),


        !loading && !error && repos.length === 0 && /*#__PURE__*/
        _jsxs("div", { className: "flex flex-col items-center justify-center py-16 gap-4 text-muted-foreground", children: [/*#__PURE__*/
          _jsx(Code2, { className: "w-10 h-10" }), /*#__PURE__*/
          _jsxs("p", { className: "text-sm", children: ["No public repositories found for @", GITHUB_USERNAME, "."] })] }
        ),


        !loading && !error && repos.length > 0 && /*#__PURE__*/
        _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children:
          repos.map((repo, idx) => /*#__PURE__*/
          _jsx(motion.div, {

            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: idx * 0.08 },
            className: "h-full", children: /*#__PURE__*/

            _jsxs(Card, { className: "h-full flex flex-col group border-white/10 hover:border-primary/40 transition-colors duration-300 bg-white/[0.02]", children: [/*#__PURE__*/
              _jsxs(CardHeader, { className: "pb-3", children: [/*#__PURE__*/
                _jsx("div", { className: "flex items-start gap-3 mb-2", children: /*#__PURE__*/
                  _jsx("div", { className: "p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors", children: /*#__PURE__*/
                    _jsx(Github, { className: "w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" }) }
                  ) }
                ), /*#__PURE__*/
                _jsx(CardTitle, { className: "text-base font-semibold group-hover:text-primary transition-colors truncate", children:
                  repo.name }
                )] }
              ), /*#__PURE__*/

              _jsxs(CardContent, { className: "flex-grow pb-4", children: [/*#__PURE__*/
                _jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4", children:
                  repo.description ?? "No description provided." }
                ),

                repo.topics.length > 0 && /*#__PURE__*/
                _jsx("div", { className: "flex flex-wrap gap-1.5 mb-4", children:
                  repo.topics.slice(0, 4).map((topic) => /*#__PURE__*/
                  _jsx("span", {

                    className: "text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20", children:

                    topic }, topic
                  )
                  ) }
                ), /*#__PURE__*/


                _jsxs("div", { className: "flex items-center gap-4 text-muted-foreground", children: [
                  repo.language && /*#__PURE__*/_jsx(LanguageDot, { language: repo.language }), /*#__PURE__*/
                  _jsxs("span", { className: "flex items-center gap-1 text-xs", children: [/*#__PURE__*/
                    _jsx(Star, { className: "w-3.5 h-3.5" }),
                    repo.stargazers_count.toLocaleString()] }
                  ), /*#__PURE__*/
                  _jsxs("span", { className: "flex items-center gap-1 text-xs", children: [/*#__PURE__*/
                    _jsx(GitFork, { className: "w-3.5 h-3.5" }),
                    repo.forks_count.toLocaleString()] }
                  )] }
                )] }
              ), /*#__PURE__*/

              _jsxs(CardFooter, { className: "pt-3 border-t border-white/5 gap-3", children: [/*#__PURE__*/
                _jsx(Button, { variant: "ghost", size: "sm", className: "w-full text-muted-foreground hover:text-foreground", asChild: true, children: /*#__PURE__*/
                  _jsxs("a", { href: repo.html_url, target: "_blank", rel: "noreferrer", children: [/*#__PURE__*/
                    _jsx(Github, { className: "w-4 h-4 mr-2" }), "View Code"] }

                  ) }
                ),
                repo.homepage && /*#__PURE__*/
                _jsx(Button, { variant: "ghost", size: "sm", className: "w-full text-primary hover:text-primary", asChild: true, children: /*#__PURE__*/
                  _jsxs("a", { href: repo.homepage, target: "_blank", rel: "noreferrer", children: [/*#__PURE__*/
                    _jsx(ExternalLink, { className: "w-4 h-4 mr-2" }), "Live"] }

                  ) }
                )] }

              )] }
            ) }, repo.id
          )
          ) }
        )] }

      ) }
    ));

}