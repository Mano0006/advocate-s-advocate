import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  number: string;
  label: string;
  delay?: number;
}

export function StatCard({ icon: Icon, number, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-lg transition-all duration-300 border border-border/50 text-center group"
    >
      <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-gold" />
      </div>
      <p className="font-display text-4xl font-bold text-foreground mb-2">{number}</p>
      <p className="text-muted-foreground text-sm">{label}</p>
    </motion.div>
  );
}
