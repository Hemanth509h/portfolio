import { motion } from "framer-motion";
import { cn } from "@/lib/utils";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";







export function SectionHeading({ title, subtitle, className }) {
  return (/*#__PURE__*/
    _jsxs("div", { className: cn("mb-12 md:mb-20 text-center", className), children: [/*#__PURE__*/
      _jsx(motion.h2, {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5 },
        className: "text-3xl md:text-5xl font-bold mb-4 font-display", children: /*#__PURE__*/

        _jsx("span", { className: "bg-gradient-to-r from-primary via-cyan-300 to-accent bg-clip-text text-transparent", children:
          title }
        ) }
      ),
      subtitle && /*#__PURE__*/
      _jsx(motion.p, {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, delay: 0.1 },
        className: "text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto", children:

        subtitle }
      )] }

    ));

}