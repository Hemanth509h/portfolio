import { Terminal } from "lucide-react";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export function Footer() {
  return (/*#__PURE__*/
    _jsx("footer", { className: "py-10 border-t border-white/10 bg-background", children: /*#__PURE__*/
      _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4", children: [/*#__PURE__*/
        _jsxs("div", { className: "flex items-center gap-2", children: [/*#__PURE__*/
          _jsx(Terminal, { className: "w-5 h-5 text-primary" }), /*#__PURE__*/
          _jsxs("span", { className: "font-display font-bold text-lg", children: ["Alex", /*#__PURE__*/
            _jsx("span", { className: "text-primary", children: ".dev" })] }
          )] }
        ), /*#__PURE__*/
        _jsxs("p", { className: "text-muted-foreground text-sm text-center md:text-left", children: ["\xA9 ",
          new Date().getFullYear(), " Alex Johnson. All rights reserved."] }
        )] }
      ) }
    ));

}