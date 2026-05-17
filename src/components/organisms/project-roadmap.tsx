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
  done:         { icon: CheckCircle,     label: 'Concluído' },
  'in-progress': { icon: HourglassMedium, label: 'Em andamento' },
  planned:       { icon: CalendarBlank,   label: 'Planejado' },
};

export default function ProjectRoadmap({
  items,
  delay = 0,
}: ProjectRoadmapProps) {
  return (
    <section aria-label="Roadmap do projeto" className="max-w-[1040px] mx-auto px-6 md:px-10 pb-8 md:pb-12 w-full">
    <div role="list" className="flex flex-col gap-3 w-full">
      {items.map((item, index) => {
        const { icon: Icon } = statusConfig[item.status];

        return (
          <motion.div
            key={index}
            role="listitem"
            className="flex flex-row items-center gap-5 border border-border rounded-sm p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay + index * 0.1, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-sm border border-border bg-muted/30 text-foreground shrink-0">
              <Icon size={16} weight="bold" />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[1rem] leading-[1.7] font-medium text-foreground">{item.title}</p>
              <p className="text-[1rem] leading-[1.7] text-muted-foreground text-pretty">{item.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
    </section>
  );
}