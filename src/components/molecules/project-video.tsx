import { useRef, useState, useEffect, memo } from 'react';
import { CornersOut, Play, Pause, CornersIn } from '@phosphor-icons/react';

interface ProjectVideoProps {
  src: string;
  caption?: string;
  poster?: string;
}

const formatTime = (timeInSeconds: number) => {
  if (isNaN(timeInSeconds)) return "00:00";
  const m = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
  const s = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

const ProjectVideo = memo(function ProjectVideo({ src, caption, poster }: ProjectVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const timeTextRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number>();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [duration, setDuration] = useState(0);

  const updateProgress = () => {
    if (videoRef.current && progressBarRef.current && timeTextRef.current) {
      const current = videoRef.current.currentTime;
      const dur = videoRef.current.duration || 0;
      
      if (dur > 0) {
        progressBarRef.current.style.transform = `scaleX(${current / dur})`;
        timeTextRef.current.textContent = `${formatTime(current)} / ${formatTime(dur)}`;
      }
    }
    animationRef.current = requestAnimationFrame(updateProgress);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(() => {});
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      if (timeTextRef.current) {
        timeTextRef.current.textContent = `00:00 / ${formatTime(videoRef.current.duration)}`;
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && progressBarRef.current && timeTextRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - bounds.left) / bounds.width;
      videoRef.current.currentTime = percent * videoRef.current.duration;
      
      progressBarRef.current.style.transform = `scaleX(${percent})`;
      timeTextRef.current.textContent = `${formatTime(videoRef.current.currentTime)} / ${formatTime(videoRef.current.duration)}`;
    }
  };

  const toggleFullscreen = () => {
    const next = !isFullscreen;
    setIsFullscreen(next);
    window.dispatchEvent(new CustomEvent('video-expanded', { detail: next }));
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFullscreen && e.target === e.currentTarget) {
      toggleFullscreen();
    }
  };

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? 'hidden' : 'unset';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        e.preventDefault();
        setIsFullscreen(false);
        window.dispatchEvent(new CustomEvent('video-expanded', { detail: false }));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={isFullscreen ? "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 p-4 sm:p-8 w-full" : "flex flex-col gap-2 w-full"}
      onClick={handleBackdropClick}
      role="region"
      aria-label="Player de vídeo"
    >
      <div className="relative overflow-hidden rounded-sm border border-border w-full bg-transparent group flex flex-col">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          loop
          muted
          playsInline
          preload="metadata"
          onClick={togglePlay}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => {
            setIsPlaying(true);
            animationRef.current = requestAnimationFrame(updateProgress);
          }}
          onPause={() => {
            setIsPlaying(false);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
          }}
          className={`block max-w-full h-auto cursor-pointer object-contain ${isFullscreen ? 'max-h-[85vh]' : 'max-h-[85vh]'}`}
        />
        
        <div role="group" aria-label="Controles do vídeo" className="flex items-center gap-4 p-3 px-4 w-full bg-background border-t border-border md:absolute md:bottom-4 md:left-4 md:right-4 md:w-auto md:border md:bg-background/95 md:rounded-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10 text-foreground">
          
          <button 
            type="button"
            onClick={togglePlay} 
            className="flex-shrink-0 hover:text-muted-foreground transition-colors"
            aria-label={isPlaying ? "Pausar" : "Tocar"}
          >
            {isPlaying ? <Pause size={20} weight="fill" /> : <Play size={20} weight="fill" />}
          </button>

          <div 
            className="flex-grow h-1.5 bg-border rounded-full cursor-pointer overflow-hidden relative"
            onClick={handleSeek}
          >
            <div 
              ref={progressBarRef}
              className="absolute top-0 left-0 h-full w-full bg-foreground pointer-events-none origin-left will-change-transform"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>

          <span ref={timeTextRef} className="text-xs font-medium tabular-nums flex-shrink-0">
            00:00 / {formatTime(duration)}
          </span>

          <button 
            type="button"
            onClick={toggleFullscreen} 
            className="flex-shrink-0 hover:text-muted-foreground transition-colors"
            aria-label={isFullscreen ? "Sair do modo expandido" : "Modo expandido"}
          >
            {isFullscreen ? <CornersIn size={20} weight="bold" /> : <CornersOut size={20} weight="bold" />}
          </button>

        </div>
      </div>

      {caption && (
        <span className={`text-center text-[0.875rem] text-pretty ${isFullscreen ? 'text-white/80 max-w-2xl' : 'text-muted-foreground'}`}>
          {caption}
        </span>
      )}
    </div>
  );
});

export default ProjectVideo;