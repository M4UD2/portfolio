import { motion } from 'framer-motion';
import { CheckCircle, HourglassMedium, CalendarBlank } from '@phosphor-icons/react';

export interface RoadmapItem {
  title: string;
  description: string;
  status: 'done' | 'in-progress' | 'planned';
}

interface ProjectRoadmapProps {
  items: RoadmapItem[];
  delay?: number;
}

const statusConfig = {
  done:          { icon: CheckCircle,     label: 'Concluído',   color: 'text-foreground' },
  'in-progress': { icon: HourglassMedium, label: 'Em andamento', color: 'text-foreground' },
  planned:       { icon: CalendarBlank,   label: 'Planejado',   color: 'text-muted-foreground' },
};

export default function ProjectRoadmap({ items, delay = 0 }: ProjectRoadmapProps) {
  return (
    <section aria-label="Roadmap do projeto" className="w-full">
      <div className="flex flex-col gap-3">
        {items.map((item, index) => {
          const { icon: Icon, label, color } = statusConfig[item.status];

          return (
            <motion.div
              key={index}
              className="border border-border rounded-sm p-6 flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: delay + index * 0.1, ease: 'easeOut' }}
            >
              <div className={`flex items-center gap-2 ${color}`}>
                <Icon size={14} weight="bold" />
                <span className="text-[12px] uppercase tracking-widest">{label}</span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-base leading-none font-semibold text-foreground">{item.title}</p>
                <p className="text-[1rem] leading-[1.7] text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}