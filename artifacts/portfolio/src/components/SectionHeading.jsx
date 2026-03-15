import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export function SectionHeading({
  title,
  subtitle,
  className
}) {
  return <div className={cn("mb-12 md:mb-20 text-center", className)}><motion.h2 initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true,
      margin: "-100px"
    }} transition={{
      duration: 0.5
    }} className="text-3xl md:text-5xl font-bold mb-4 font-display"><span className="bg-gradient-to-r from-primary via-cyan-300 to-accent bg-clip-text text-transparent">{title}</span></motion.h2>{subtitle && <motion.p initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true,
      margin: "-100px"
    }} transition={{
      duration: 0.5,
      delay: 0.1
    }} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">{subtitle}</motion.p>}</div>;
}