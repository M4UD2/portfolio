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
      className={`relative text-[14px] leading-[1.7] tracking-normal font-normal transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 ${
        isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      {label}
      {children}
    </Link>
  );
}