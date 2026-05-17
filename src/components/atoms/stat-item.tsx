interface StatItemProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

export default function StatItem({ icon: Icon, value, label }: StatItemProps) {
  if (!Icon || typeof value !== 'string' || typeof label !== 'string') {
    return null;
  }

  return (
    <div role="figure" aria-label={`${value}: ${label}`} className="flex flex-col items-center gap-2 text-center">
      <span className="text-foreground" aria-hidden="true">
        {(() => {
          try {
            return <Icon size={24} weight="bold" />;
          } catch {
            return null;
          }
        })()}
      </span>
      <p className="font-bold text-xl leading-[1.7]">{value}</p>
      <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}