import { motion } from 'framer-motion';
import { TargetIcon, TrendUpIcon } from '@phosphor-icons/react';

interface GoalResultCardProps {
  goal: React.ReactNode;
  result: React.ReactNode;
  delay?: number;
}

export default function GoalResultCard({ goal, result, delay = 0 }: GoalResultCardProps) {
  const items = [
    {
      icon: TargetIcon,
      label: 'Objetivo',
      text: goal,
    },
    {
      icon: TrendUpIcon,
      label: 'Resultado esperado',
      text: result,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map(({ icon: Icon, label, text }, i) => (
        <motion.div
          key={label}
          className="group border border-border rounded-sm p-6 flex flex-col gap-4 hover:border-foreground transition-colors duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + i * 0.1, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-2">
            <Icon
              size={16}
              weight="bold"
              className="text-muted-foreground/40 group-hover:text-foreground transition-colors duration-500"
            />
            <span className="text-[12px] uppercase tracking-widest text-muted-foreground">{label}</span>
          </div>
          <p className="text-[1rem] leading-[1.7] text-muted-foreground">{text}</p>
        </motion.div>
      ))}
    </div>
  );
}
