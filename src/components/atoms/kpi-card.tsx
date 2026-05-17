import { motion } from 'framer-motion';
import type { Icon } from '@phosphor-icons/react';

interface KpiCardProps {
  metric: string;
  label: string;
  description: string;
  icon?: Icon;
  index?: number;
}

export default function KpiCard({ metric, label, description, icon: IconComponent, index = 0 }: KpiCardProps) {
  return (
    <motion.div
      className="border border-border rounded-sm p-6 flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-2">
        {IconComponent && <IconComponent size={16} weight="bold" className="text-foreground" />}
        <span className="text-[12px] uppercase tracking-widest text-muted-foreground">{label}</span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[1rem] font-bold leading-[1.4] -tracking-[0.02em] text-foreground">{metric}</p>
        <p className="text-[1rem] leading-[1.7] text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
