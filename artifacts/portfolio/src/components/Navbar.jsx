import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const NAV_LINKS = [
{ name: "About", href: "#about" },
{ name: "Skills", href: "#skills" },
{ name: "Projects", href: "#projects" },
{ name: "GitHub", href: "#github" },
{ name: "Experience", href: "#experience" },
{ name: "Contact", href: "#contact" }];


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (/*#__PURE__*/
    _jsxs("header", {
      className: cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
      ), children: [/*#__PURE__*/

      _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /*#__PURE__*/
        _jsxs("div", { className: "flex items-center justify-between", children: [/*#__PURE__*/
          _jsxs("a", { href: "#", className: "flex items-center gap-2 group", children: [/*#__PURE__*/
            _jsx("div", { className: "p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors", children: /*#__PURE__*/
              _jsx(Terminal, { className: "w-6 h-6 text-primary" }) }
            ), /*#__PURE__*/
            _jsxs("span", { className: "font-display font-bold text-xl tracking-tight", children: ["Alex", /*#__PURE__*/
              _jsx("span", { className: "text-primary", children: ".dev" })] }
            )] }
          ), /*#__PURE__*/


          _jsxs("nav", { className: "hidden md:flex items-center gap-8", children: [
            NAV_LINKS.map((link) => /*#__PURE__*/
            _jsx("a", {

              href: link.href,
              className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children:

              link.name }, link.name
            )
            ), /*#__PURE__*/
            _jsx("a", {
              href: "#contact",
              className: "px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300", children:
              "Hire Me" }

            )] }
          ), /*#__PURE__*/


          _jsx("button", {
            className: "md:hidden p-2 text-muted-foreground hover:text-foreground",
            onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), children:

            isMobileMenuOpen ? /*#__PURE__*/_jsx(X, { className: "w-6 h-6" }) : /*#__PURE__*/_jsx(Menu, { className: "w-6 h-6" }) }
          )] }
        ) }
      ), /*#__PURE__*/


      _jsx(AnimatePresence, { children:
        isMobileMenuOpen && /*#__PURE__*/
        _jsx(motion.div, {
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: "auto" },
          exit: { opacity: 0, height: 0 },
          className: "md:hidden glass-panel border-t border-white/5 overflow-hidden", children: /*#__PURE__*/

          _jsx("div", { className: "px-4 pt-2 pb-6 space-y-1", children:
            NAV_LINKS.map((link) => /*#__PURE__*/
            _jsx("a", {

              href: link.href,
              onClick: () => setIsMobileMenuOpen(false),
              className: "block px-3 py-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-colors", children:

              link.name }, link.name
            )
            ) }
          ) }
        ) }

      )] }
    ));

}