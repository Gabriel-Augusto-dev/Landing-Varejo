import { ReactNode } from "react";

interface MediaContainerProps {
  type: "image" | "video" | "youtube";
  src: string;
  alt?: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export function MediaContainer({
  type,
  src,
  alt = "Media",
  title,
  className = "",
  width,
  height,
  controls = true,
  autoplay = false,
  loop = false,
  muted = true,
}: MediaContainerProps) {
  const containerClasses = `relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 ${className}`;

  if (type === "image") {
    return (
      <div className={containerClasses}>
        <img
          src={src}
          alt={alt}
          title={title}
          width={width}
          height={height}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    );
  }

  if (type === "youtube") {
    const videoId = extractYoutubeId(src);
    return (
      <div className={`${containerClasses} aspect-video`}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  if (type === "video") {
    return (
      <div className={`${containerClasses} aspect-video`}>
        <video
          width={width}
          height={height}
          controls={controls}
          autoPlay={autoplay}
          loop={loop}
          muted={muted}
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5
        </video>
      </div>
    );
  }

  return null;
}

function extractYoutubeId(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
  );
  return match ? match[1] : "";
}

// Hook para validar e processar URLs de mídia
export function useMediaUrl(url: string): { type: "image" | "video" | "youtube"; src: string } {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return { type: "youtube", src: url };
  }
  
  if (url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".mov")) {
    return { type: "video", src: url };
  }
  
  return { type: "image", src: url };
}
