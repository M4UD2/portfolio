import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@phosphor-icons/react';

interface BackButtonProps {
  to?: string;
  label?: string;
}

export default function BackButton({ to = "/", label = "Voltar para projetos" }: BackButtonProps) {
  return (
    <Link to={to} className="focus-ring rounded-sm">
      <motion.div
        className="inline-flex items-center gap-2 text-[1rem] leading-[1.7] text-muted-foreground hover:text-foreground transition-colors duration-500"
        whileHover={{ x: -4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <ArrowLeftIcon size={16} weight="bold" />
        {label}
      </motion.div>
    </Link>
  );
}