import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ProjectsSection } from "@/components/sections/Projects";
import { GitHubProjectsSection } from "@/components/sections/GitHubProjects";
import { ExperienceSection } from "@/components/sections/Experience";
import { ContactSection } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export default function Home() {
  return (/*#__PURE__*/
    _jsxs("div", { className: "min-h-screen bg-background text-foreground flex flex-col", children: [/*#__PURE__*/
      _jsx(Navbar, {}), /*#__PURE__*/
      _jsxs("main", { className: "flex-grow", children: [/*#__PURE__*/
        _jsx(HeroSection, {}), /*#__PURE__*/
        _jsx(AboutSection, {}), /*#__PURE__*/
        _jsx(SkillsSection, {}), /*#__PURE__*/
        _jsx(ProjectsSection, {}), /*#__PURE__*/
        _jsx(GitHubProjectsSection, {}), /*#__PURE__*/
        _jsx(ExperienceSection, {}), /*#__PURE__*/
        _jsx(ContactSection, {})] }
      ), /*#__PURE__*/
      _jsx(Footer, {})] }
    ));

}