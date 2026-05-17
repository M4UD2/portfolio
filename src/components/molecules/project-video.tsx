import { useRef, useState, useEffect } from 'react';
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

export default function ProjectVideo({ src, caption, poster }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const dur = videoRef.current.duration;
      setCurrentTime(current);
      setProgress((current / dur) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const percent = x / bounds.width;
      videoRef.current.currentTime = percent * videoRef.current.duration;
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
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

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

  return (
    <div 
      className={isFullscreen ? "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 w-full" : "flex flex-col gap-3 w-full"}
      onClick={handleBackdropClick}
      role="region"
      aria-label="Player de vídeo"
    >
      <div className="relative overflow-hidden rounded-sm border border-border w-fit mx-auto bg-transparent group">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          onClick={togglePlay}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          className={`block max-w-full h-auto cursor-pointer object-contain ${isFullscreen ? 'max-h-[85vh]' : 'max-h-[85vh]'}`}
        />
        
        <div role="group" aria-label="Controles do vídeo" className="absolute bottom-4 left-4 right-4 flex items-center gap-4 p-2 px-4 bg-background/80 text-foreground rounded-sm transition-opacity duration-300 backdrop-blur-sm border border-border z-10 md:opacity-0 md:group-hover:opacity-100">
          
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
              className="absolute top-0 left-0 h-full bg-foreground transition-all duration-75 ease-linear pointer-events-none"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="text-xs font-medium tabular-nums flex-shrink-0">
            {formatTime(currentTime)} / {formatTime(duration)}
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
        <span className={`text-center text-[0.875rem] text-pretty mt-3 ${isFullscreen ? 'text-white/80 max-w-2xl' : 'text-muted-foreground'}`}>
          {caption}
        </span>
      )}
    </div>
  );
}