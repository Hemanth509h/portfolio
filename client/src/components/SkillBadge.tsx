import { motion } from "framer-motion";
import type { Skill } from "@shared/schema";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 15, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative px-5 py-3 rounded-xl border border-white/5 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors flex items-center justify-between gap-4">
        <span className="font-medium text-foreground">{skill.name}</span>
        <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 + (index * 0.05) }}
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
