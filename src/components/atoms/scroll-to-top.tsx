import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpIcon } from '@phosphor-icons/react';
import Tooltip from './tooltip-simple';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [videoExpanded, setVideoExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    const handleVideoExpand = (e: Event) => setVideoExpanded((e as CustomEvent<boolean>).detail);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('video-expanded', handleVideoExpand);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('video-expanded', handleVideoExpand);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {isVisible && !videoExpanded && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          style={{ zIndex: 9999 }}
        >
          <Tooltip content="Voltar ao topo" align="end">
            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center border border-border p-3 rounded-sm hover:bg-foreground hover:text-background transition-all duration-300 focus-ring bg-background text-foreground"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              aria-label="Voltar ao topo"
            >
              <ArrowUpIcon size={14} weight="bold" />
            </motion.button>
          </Tooltip>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
