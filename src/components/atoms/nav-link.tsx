import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@phosphor-icons/react';

interface NavLinkProps {
  to: string;
  label: string;
}

export default function NavLink({ to, label }: NavLinkProps) {
  return (
    <Link
      to={to}
      className="text-[14px] leading-[1.7] text-muted-foreground hover:text-foreground hover:underline flex items-center gap-2 group transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
    >
      {label}
      <span
        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
        aria-hidden="true"
      >
        <ArrowRightIcon size={20} weight="bold" />
      </span>
    </Link>
  );
}