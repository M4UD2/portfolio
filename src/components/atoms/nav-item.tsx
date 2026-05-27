import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  to: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function NavItem({ to, label, isActive = false, onClick, children }: NavItemProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={`relative flex w-fit items-center text-[14px] leading-[1.7] tracking-normal font-normal transition-colors duration-500 focus-ring rounded-sm ${
        isActive ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      {label}
      {children && (
        <span className="ml-0.5" aria-hidden="true">
          {children}
        </span>
      )}
    </Link>
  );
}
