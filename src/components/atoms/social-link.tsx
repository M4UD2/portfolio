import { ArrowSquareOutIcon } from '@phosphor-icons/react';

interface SocialLinkProps {
  href: string;
  label: string;
  isExternal?: boolean;
}

export default function SocialLink({ href, label, isExternal = true }: SocialLinkProps) {
  const safeHref = href || '#';
  const externalLabel = isExternal ? ' (opens in new tab)' : '';
  const iconProps = { size: 14, weight: "bold" as const };
  
  return (
    <a
      href={safeHref}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={`${label}${externalLabel}`}
      className="
        text-[14px] leading-[1.7] text-muted-foreground
        hover:text-foreground hover:underline
        flex items-center group transition-colors
        w-fit focus-ring rounded-sm
      "
    >
      {label}
      <span
        className="
          ml-1 opacity-100 translate-x-0
          md:opacity-0 md:-translate-x-0.5
          md:group-hover:opacity-100 md:group-hover:translate-x-0
          transition-all duration-300
        "
        aria-hidden="true"
      >
        <ArrowSquareOutIcon {...iconProps} />
      </span>
    </a>
  );
}
