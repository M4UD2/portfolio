import { motion } from 'framer-motion';

interface QuoteGridProps {
  quotes: string[];
  delay?: number;
}

export default function QuoteGrid({ quotes, delay = 0 }: QuoteGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {quotes.map((quote, i) => (
        <motion.div
          key={i}
          className="group border border-border rounded-sm p-6 flex flex-col gap-3 hover:border-foreground transition-colors duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + i * 0.1, ease: 'easeOut' }}
        >
          <span className="text-[1.25rem] leading-none font-bold text-muted-foreground/40 group-hover:text-foreground transition-colors duration-500">
            "
          </span>
          <p className="text-[1rem] leading-[1.7] text-muted-foreground italic">{quote}</p>
        </motion.div>
      ))}
    </div>
  );
}
