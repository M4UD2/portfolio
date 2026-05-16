import { motion } from 'framer-motion';
import { CheckCircle, HourglassMedium, CalendarBlank } from '@phosphor-icons/react';

export interface RoadmapItem {
  title: string;
  description: string;
  status: 'done' | 'in-progress' | 'planned';
}

interface ProjectRoadmapProps {
  title?: string;
  items: RoadmapItem[];
  delay?: number;
}

const statusConfig = {
  done:          { icon: CheckCircle,     label: 'Concluído' },
  'in-progress': { icon: HourglassMedium, label: 'Em andamento' },
  planned:       { icon: CalendarBlank,   label: 'Planejado' },
};

export default function ProjectRoadmap({
  title = 'Próximos passos',
  items,
  delay = 0,
}: ProjectRoadmapProps) {
  return (
    <div className="max-w-[1040px] mx-auto px-6 md:px-10 py-8 md:py-12">
      <motion.div
        id="roadmap"
        className="flex flex-col gap-8 scroll-mt-32 md:scroll-mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      >
        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] -tracking-[0.02em] text-balance">
          {title}
        </h2>

        <div className="flex flex-col gap-3">
          {items.map((item, index) => {
            const { icon: Icon } = statusConfig[item.status];

            return (
              <motion.div
                key={index}
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

      </motion.div>
    </div>
  );
}