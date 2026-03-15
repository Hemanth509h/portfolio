import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useSubmitContact, contactSchema } from "@/hooks/use-contact";
export function ContactSection() {
  const mutation = useSubmitContact();
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(data) {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  }
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Looking for a developer to join your team or build your next project? Let's talk."
        />
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-panel p-8 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a href="mailto:alex@example.com" className="text-base">
                        alex@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-base">San Francisco, CA (Remote)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm font-medium text-muted-foreground mb-4">
                  Follow Me
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 bg-white/5 rounded-xl border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all group"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white/5 rounded-xl border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white/5 rounded-xl border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all group"
                  >
                    <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="lg:col-span-3"
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can I help you?"
                            className="min-h-[160px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl"
                    isLoading={mutation.isPending}
                  >
                    {!mutation.isPending && <Send className="w-4 h-4 mr-2" />}
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
