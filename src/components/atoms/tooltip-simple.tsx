import { useState, useRef, useCallback } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  className?: string;
  align?: 'start' | 'center' | 'end';
}

const tooltipAlignClass = {
  start: 'left-0',
  center: 'left-1/2 -translate-x-1/2',
  end: 'right-0',
};

export default function Tooltip({ content, children, className = 'relative', align = 'center' }: TooltipProps) {
  const [show, setShow] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    
    const rect = triggerRef.current.getBoundingClientRect();
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    
    setIsTop(spaceAbove > spaceBelow);
  }, []);

  const handleMouseEnter = useCallback(() => {
    updatePosition();
    setShow(true);
  }, [updatePosition]);

  return (
    <div 
      ref={triggerRef}
      className={`inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div
          role="tooltip"
          className={`
          absolute ${isTop ? 'bottom-full mb-1' : 'top-full mt-1'} ${tooltipAlignClass[align]}
          px-3 py-2 bg-foreground text-background rounded-sm
          whitespace-nowrap text-[0.875rem] leading-[1.2] font-normal
          z-50
        `}>
          {content}
        </div>
      )}
    </div>
  );
}
