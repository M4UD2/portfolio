import { motion } from 'framer-motion';
import MetricCard from '../atoms/metric-card';

interface Metric {
  value: string;
  label: React.ReactNode;
  icon?: 'trending' | 'users' | 'zap';
}

interface MetricsGridProps {
  metrics?: Metric[];
  results?: string[];
  delay?: number;
  id?: string;
  title?: string;
}

export default function MetricsGrid({ metrics, results, delay = 0, id, title }: MetricsGridProps) {
  return (
    <motion.div
      {...(id ? { id } : {})}
      role="region"
      aria-label="Resultados do projeto"
      className="flex flex-col gap-8 scroll-mt-32 md:scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {title && <h2>{title}</h2>}
      
      {/* Metrics Cards */}
      {metrics && metrics.length > 0 && (
        <div className={`grid grid-cols-1 gap-6 md:grid-cols-${Math.min(metrics.length, 3)}`}>
          {metrics.map((metric, index) => (
            <MetricCard
              key={`metric-${metric.value}-${metric.label}`}
              value={metric.value}
              label={metric.label}
              index={index}
            />
          ))}
        </div>
      )}

      {/* Results List (fallback if no metrics) */}
      {(!metrics || metrics.length === 0) && results && results.length > 0 && (
        <ul role="list" className="flex flex-col gap-4">
          {results.map((result, index) => (
            <motion.li
              key={`result-${index}-${result.slice(0, 20)}`}
              role="listitem"
              className="flex items-start gap-3 text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: delay + index * 0.1 }}
            >
              <span className="text-foreground mt-0.5">→</span>
              <span>{result}</span>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
