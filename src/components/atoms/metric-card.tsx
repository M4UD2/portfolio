import React from 'react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  value: string;
  label: string;
  icon?: 'trending' | 'users' | 'zap';
  index?: number;
}

export default function MetricCard({ value, label, index = 0 }: MetricCardProps) {
  return (
    <motion.div
      className="flex flex-col gap-4 p-8 border border-border rounded-sm hover:border-foreground transition-colors duration-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-2">
        <p className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] -tracking-[0.03em]">{value}</p>
        <p className="text-[1rem] leading-[1.7] text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  );
}