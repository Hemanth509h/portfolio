import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useSubmitContact, contactSchema } from "@/hooks/use-contact";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export function ContactSection() {
  const mutation = useSubmitContact();

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  function onSubmit(data) {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  }

  return (/*#__PURE__*/
    _jsxs("section", { id: "contact", className: "py-24 md:py-32 relative", children: [/*#__PURE__*/
      _jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 -z-10" }), /*#__PURE__*/
      _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [/*#__PURE__*/
        _jsx(SectionHeading, {
          title: "Get In Touch",
          subtitle: "Looking for a developer to join your team or build your next project? Let's talk." }
        ), /*#__PURE__*/

        _jsxs("div", { className: "grid lg:grid-cols-5 gap-12 lg:gap-8", children: [/*#__PURE__*/

          _jsx(motion.div, {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "lg:col-span-2 space-y-8", children: /*#__PURE__*/

            _jsxs("div", { className: "glass-panel p-8 rounded-3xl h-full flex flex-col justify-between", children: [/*#__PURE__*/
              _jsxs("div", { children: [/*#__PURE__*/
                _jsx("h3", { className: "text-2xl font-display font-semibold mb-6 text-foreground", children: "Contact Information" }), /*#__PURE__*/
                _jsxs("div", { className: "space-y-6", children: [/*#__PURE__*/
                  _jsxs("div", { className: "flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors", children: [/*#__PURE__*/
                    _jsx("div", { className: "p-3 bg-white/5 rounded-xl border border-white/10", children: /*#__PURE__*/
                      _jsx(Mail, { className: "w-5 h-5 text-primary" }) }
                    ), /*#__PURE__*/
                    _jsxs("div", { children: [/*#__PURE__*/
                      _jsx("p", { className: "text-sm font-medium", children: "Email" }), /*#__PURE__*/
                      _jsx("a", { href: "mailto:alex@example.com", className: "text-base", children: "alex@example.com" })] }
                    )] }
                  ), /*#__PURE__*/
                  _jsxs("div", { className: "flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors", children: [/*#__PURE__*/
                    _jsx("div", { className: "p-3 bg-white/5 rounded-xl border border-white/10", children: /*#__PURE__*/
                      _jsx(MapPin, { className: "w-5 h-5 text-primary" }) }
                    ), /*#__PURE__*/
                    _jsxs("div", { children: [/*#__PURE__*/
                      _jsx("p", { className: "text-sm font-medium", children: "Location" }), /*#__PURE__*/
                      _jsx("p", { className: "text-base", children: "San Francisco, CA (Remote)" })] }
                    )] }
                  )] }
                )] }
              ), /*#__PURE__*/

              _jsxs("div", { className: "mt-12 pt-8 border-t border-white/10", children: [/*#__PURE__*/
                _jsx("p", { className: "text-sm font-medium text-muted-foreground mb-4", children: "Follow Me" }), /*#__PURE__*/
                _jsxs("div", { className: "flex gap-4", children: [/*#__PURE__*/
                  _jsx("a", { href: "#", className: "p-3 bg-white/5 rounded-xl border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all group", children: /*#__PURE__*/
                    _jsx(Github, { className: "w-5 h-5 group-hover:scale-110 transition-transform" }) }
                  ), /*#__PURE__*/
                  _jsx("a", { href: "#", className: "p-3 bg-white/5 rounded-xl border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all group", children: /*#__PURE__*/
                    _jsx(Linkedin, { className: "w-5 h-5 group-hover:scale-110 transition-transform" }) }
                  ), /*#__PURE__*/
                  _jsx("a", { href: "#", className: "p-3 bg-white/5 rounded-xl border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all group", children: /*#__PURE__*/
                    _jsx(Twitter, { className: "w-5 h-5 group-hover:scale-110 transition-transform" }) }
                  )] }
                )] }
              )] }
            ) }
          ), /*#__PURE__*/


          _jsx(motion.div, {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: 0.2 },
            className: "lg:col-span-3", children: /*#__PURE__*/

            _jsx("div", { className: "glass-panel p-8 md:p-10 rounded-3xl", children: /*#__PURE__*/
              _jsx(Form, { ...form, children: /*#__PURE__*/
                _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6", children: [/*#__PURE__*/
                  _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [/*#__PURE__*/
                    _jsx(FormField, {
                      control: form.control,
                      name: "name",
                      render: ({ field }) => /*#__PURE__*/
                      _jsxs(FormItem, { children: [/*#__PURE__*/
                        _jsx(FormLabel, { className: "text-muted-foreground", children: "Name" }), /*#__PURE__*/
                        _jsx(FormControl, { children: /*#__PURE__*/
                          _jsx(Input, { placeholder: "John Doe", ...field }) }
                        ), /*#__PURE__*/
                        _jsx(FormMessage, {})] }
                      ) }

                    ), /*#__PURE__*/
                    _jsx(FormField, {
                      control: form.control,
                      name: "email",
                      render: ({ field }) => /*#__PURE__*/
                      _jsxs(FormItem, { children: [/*#__PURE__*/
                        _jsx(FormLabel, { className: "text-muted-foreground", children: "Email" }), /*#__PURE__*/
                        _jsx(FormControl, { children: /*#__PURE__*/
                          _jsx(Input, { type: "email", placeholder: "john@example.com", ...field }) }
                        ), /*#__PURE__*/
                        _jsx(FormMessage, {})] }
                      ) }

                    )] }
                  ), /*#__PURE__*/
                  _jsx(FormField, {
                    control: form.control,
                    name: "message",
                    render: ({ field }) => /*#__PURE__*/
                    _jsxs(FormItem, { children: [/*#__PURE__*/
                      _jsx(FormLabel, { className: "text-muted-foreground", children: "Message" }), /*#__PURE__*/
                      _jsx(FormControl, { children: /*#__PURE__*/
                        _jsx(Textarea, { placeholder: "How can I help you?", className: "min-h-[160px]", ...field }) }
                      ), /*#__PURE__*/
                      _jsx(FormMessage, {})] }
                    ) }

                  ), /*#__PURE__*/
                  _jsxs(Button, {
                    type: "submit",
                    size: "lg",
                    className: "w-full rounded-xl",
                    isLoading: mutation.isPending, children: [

                    !mutation.isPending && /*#__PURE__*/_jsx(Send, { className: "w-4 h-4 mr-2" }), "Send Message"] }

                  )] }
                ) }
              ) }
            ) }
          )] }
        )] }
      )] }
    ));

}