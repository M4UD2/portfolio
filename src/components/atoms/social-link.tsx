import React from 'react';
import { ArrowSquareOutIcon } from '@phosphor-icons/react';

interface SocialLinkProps {
  href: string;
  label: string;
  isExternal?: boolean;
}

export default function SocialLink({ href, label, isExternal = true }: SocialLinkProps) {
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={`${label}${isExternal ? " (abre em nova aba)" : ""}`}
      className="text-[14px] leading-[1.7] text-muted-foreground hover:text-foreground hover:underline flex items-center gap-3 group transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
    >
      {label}
      <span
        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
        aria-hidden="true"
      >
        <ArrowSquareOutIcon size={20} weight="bold" />
      </span>
    </a>
  );
}