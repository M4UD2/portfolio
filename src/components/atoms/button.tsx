import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ElementType;
  isExternal?: boolean;
}

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ href, children, icon: Icon, isExternal }, ref) => {
    // rounded-sm (2px) para ser "levemente arredondado"
    const baseClass = "inline-flex items-center gap-3 border border-border px-5 py-2.5 mt-2 rounded-sm hover:bg-foreground hover:text-background transition-all duration-300 font-sans text-[14px] leading-[1.7]";

    const content = (
      <>
        {children}
        {Icon && <Icon size={14} weight="bold" aria-hidden="true" />}
      </>
    );

    const motionProps = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      transition: { duration: 0.2 }
    };

    if (isExternal) {
      return (
        <motion.a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
          {...motionProps}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <Link to={href} className="no-underline">
        <motion.div
          className={baseClass}
          {...motionProps}
        >
          {content}
        </motion.div>
      </Link>
    );
  }
);

Button.displayName = 'Button';
export default Button;