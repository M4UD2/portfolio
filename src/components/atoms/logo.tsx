import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <Link 
      to="/" 
      className="group focus-ring rounded-sm"
      aria-label="Lívia Miranda - Voltar para a página inicial"
    >
      <motion.span
        className="text-base leading-[1.7] font-bold tracking-tight text-foreground hover:opacity-60 transition-opacity duration-500"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        Lívia Miranda
      </motion.span>
    </Link>
  );
}