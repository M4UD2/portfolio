import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import Tooltip from './tooltip-simple';

interface BackButtonProps {
  to?: string;
  label?: string;
  fromProject?: string;
}

export default function BackButton({ to = "/", label = "Voltar", fromProject }: BackButtonProps) {
  const finalTo = fromProject ? `${to}?from=${fromProject}` : to;

  return (
    <Tooltip content={label}>
      <Link to={finalTo} className="focus-ring rounded-sm">
        <motion.div
          className="inline-flex items-center p-2 text-muted-foreground hover:text-foreground transition-colors duration-500"
          whileHover={{ x: -4 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ArrowLeftIcon size={20} weight="bold" />
        </motion.div>
      </Link>
    </Tooltip>
  );
}