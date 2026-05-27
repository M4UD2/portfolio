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
      className="
        text-[14px] leading-[1.7] text-muted-foreground 
        hover:text-foreground hover:underline 
        flex items-center group transition-colors 
        w-fit focus-ring rounded-sm
      "
    >
      {label}
      <span
        className="ml-1 opacity-100 translate-x-0 md:opacity-0 md:-translate-x-0.5 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300"
        aria-hidden="true"
      >
        <ArrowRightIcon size={14} weight="bold" />
      </span>
    </Link>
  );
}
