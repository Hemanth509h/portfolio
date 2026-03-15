import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export function HeroSection() {
  return (/*#__PURE__*/
    _jsxs("section", { className: "relative min-h-screen flex items-center justify-center pt-20 overflow-hidden", children: [/*#__PURE__*/

      _jsxs("div", { className: "absolute inset-0 z-0", children: [/*#__PURE__*/
        _jsx("img", {
          src: `${import.meta.env.BASE_URL}images/hero-bg.png`,
          alt: "Abstract tech background",
          className: "w-full h-full object-cover opacity-30" }
        ), /*#__PURE__*/
        _jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" }), /*#__PURE__*/
        _jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-70" })] }
      ), /*#__PURE__*/

      _jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [/*#__PURE__*/
        _jsxs(motion.div, {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.8, ease: "easeOut" },
          className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8", children: [/*#__PURE__*/

          _jsx("span", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }), "Available for new opportunities"] }

        ), /*#__PURE__*/

        _jsxs(motion.h1, {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.2 },
          className: "text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter mb-6", children: [
          "Hi, I'm ", /*#__PURE__*/
          _jsx("span", { className: "text-foreground", children: "Alex Johnson" }), /*#__PURE__*/
          _jsx("br", {}), /*#__PURE__*/
          _jsx("span", { className: "bg-gradient-to-r from-primary via-cyan-300 to-accent bg-clip-text text-transparent", children: "Full Stack & Data" }

          )] }
        ), /*#__PURE__*/

        _jsx(motion.p, {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.4 },
          className: "mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed", children:
          "I build scalable web applications and uncover actionable insights from complex datasets. Bridging the gap between engineering and analytics." }

        ), /*#__PURE__*/

        _jsxs(motion.div, {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.6 },
          className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4", children: [/*#__PURE__*/

          _jsx(Button, { size: "lg", className: "w-full sm:w-auto rounded-full group", asChild: true, children: /*#__PURE__*/
            _jsxs("a", { href: "#projects", children: ["View My Work", /*#__PURE__*/

              _jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" })] }
            ) }
          ), /*#__PURE__*/
          _jsx(Button, { size: "lg", variant: "outline", className: "w-full sm:w-auto rounded-full", asChild: true, children: /*#__PURE__*/
            _jsx("a", { href: "#contact", children: "Contact Me" }) }
          )] }
        )] }
      ), /*#__PURE__*/

      _jsx(motion.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.2, duration: 1 },
        className: "absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground", children: /*#__PURE__*/

        _jsx("a", { href: "#about", "aria-label": "Scroll down", children: /*#__PURE__*/
          _jsx(ChevronDown, { className: "w-8 h-8" }) }
        ) }
      )] }
    ));

}