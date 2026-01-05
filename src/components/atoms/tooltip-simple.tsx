import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  const [show, setShow] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (!triggerRef.current) return;
    
    const rect = triggerRef.current.getBoundingClientRect();
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    
    setIsTop(spaceAbove > spaceBelow);
  };

  useEffect(() => {
    if (show) updatePosition();
  }, [show]);

  return (
    <div 
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className={`absolute ${isTop ? 'bottom-full mb-2' : 'top-full mt-2'} left-1/2 transform -translate-x-1/2 px-3 py-2 bg-foreground text-background rounded-sm whitespace-nowrap text-[0.875rem] leading-[1.2] font-normal z-50`}>
          {content}
        </div>
      )}
    </div>
  );
}