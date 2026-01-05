import React from 'react';
import { motion } from 'framer-motion';
import MetricCard from '../atoms/metric-card';

interface Metric {
  value: string;
  label: string;
  icon?: 'trending' | 'users' | 'zap';
}

interface MetricsGridProps {
  metrics?: Metric[];
  results?: string[];
  delay?: number;
}

export default function MetricsGrid({ metrics, results, delay = 0 }: MetricsGridProps) {
  return (
    <motion.div
      id="resultados"
      className="flex flex-col gap-8 scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] -tracking-[0.02em] text-balance">Resultados</h2>
      
      {/* Metrics Cards */}
      {metrics && metrics.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              value={metric.value}
              label={metric.label}
              icon={metric.icon}
              index={index}
            />
          ))}
        </div>
      )}

      {/* Results List (fallback if no metrics) */}
      {(!metrics || metrics.length === 0) && results && results.length > 0 && (
        <ul className="flex flex-col gap-4">
          {results.map((result, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3 text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: delay + index * 0.1 }}
            >
              <span className="text-foreground mt-0.5">→</span>
              <span className="text-[1rem] leading-[1.7] max-w-[70ch]">{result}</span>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}