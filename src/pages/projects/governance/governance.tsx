import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CaretLeftIcon } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function Governance() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center gap-4 max-w-[560px]"
      >
        <span className="text-[12px] uppercase tracking-widest text-muted-foreground">Em breve</span>
        <h1 className="leading-[1.1] -tracking-[0.03em] text-balance">
          O Cérebro da IA: Fluxo de Governança de Fontes
        </h1>
        <p className="text-[1rem] leading-[1.7] text-muted-foreground">
          Como estruturei a interface de gerenciamento que alimenta um modelo de IA, garantindo respostas seguras e baseadas estritamente em dados corporativos.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <CaretLeftIcon size={12} weight="bold" />
          Voltar ao início
        </Link>
      </motion.div>
    </main>
  );
}
