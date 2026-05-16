import { useRef, useState } from 'react';
import { CornersOut, Play, Pause } from '@phosphor-icons/react';

interface ProjectVideoProps {
  src: string;
  caption?: string;
  poster?: string;
}

export default function ProjectVideo({ src, caption, poster }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

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
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
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
    // Se não estiver em tela cheia, entra em tela cheia na DIV container
    if (!document.fullscreenElement) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if ((containerRef.current as any)?.webkitRequestFullscreen) {
        /* Safari */
        (containerRef.current as any).webkitRequestFullscreen();
      }
    } else {
      // Se já estiver, sai da tela cheia
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  };

  return (
    <div className="flex flex-col gap-3 group">
      {/* Container que vai para o Fullscreen junto com os controles */}
      <div 
        ref={containerRef} 
        className="relative flex flex-col items-center justify-center overflow-hidden rounded-sm bg-muted/30 border border-border"
      >
        {/* Vídeo */}
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
          className="w-full max-h-[100vh] object-contain cursor-pointer"
        />
        
        {/* Barra de Controles Customizada */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 p-2 px-4 bg-background/80 text-foreground rounded-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-border z-10">
          
          {/* Play / Pause */}
          <button 
            onClick={togglePlay} 
            className="flex-shrink-0 hover:text-muted-foreground transition-colors"
            aria-label={isPlaying ? "Pausar" : "Tocar"}
          >
            {isPlaying ? <Pause size={20} weight="fill" /> : <Play size={20} weight="fill" />}
          </button>

          {/* Barra de Progresso */}
          <div 
            className="flex-grow h-1.5 bg-border rounded-full cursor-pointer overflow-hidden relative"
            onClick={handleSeek}
          >
            <div 
              className="absolute top-0 left-0 h-full bg-foreground transition-all duration-75 ease-linear pointer-events-none"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Fullscreen */}
          <button 
            onClick={toggleFullscreen} 
            className="flex-shrink-0 hover:text-muted-foreground transition-colors"
            aria-label="Tela cheia"
          >
            <CornersOut size={20} weight="bold" />
          </button>

        </div>
      </div>

      {caption && (
        <span className="text-center text-[0.875rem] text-muted-foreground text-pretty">
          {caption}
        </span>
      )}
    </div>
  );
}