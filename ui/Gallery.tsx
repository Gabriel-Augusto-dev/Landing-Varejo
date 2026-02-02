import { ReactNode } from "react";

interface GalleryProps {
  items: {
    type: "image" | "video" | "youtube";
    src: string;
    alt?: string;
    title?: string;
  }[];
  columns?: number;
  className?: string;
}

export function Gallery({ items, columns = 3, className = "" }: GalleryProps) {
  const colsClass = {
    1: "grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns] || "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${colsClass} gap-4 sm:gap-6 lg:gap-8 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 group cursor-pointer"
        >
          {item.type === "image" && (
            <>
              <img
                src={item.src}
                alt={item.alt || `Gallery item ${index + 1}`}
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
            </>
          )}

          {item.type === "youtube" && (
            <>
              <div className="relative w-full aspect-square bg-black">
                <img
                  src={`https://img.youtube.com/vi/${extractYoutubeId(item.src)}/maxresdefault.jpg`}
                  alt={item.alt || `Video ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}

          {item.type === "video" && (
            <div className="relative w-full aspect-square bg-black">
              <video
                src={item.src}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <svg
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}

          {item.title && (
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-semibold text-sm sm:text-base">{item.title}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function extractYoutubeId(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
  );
  return match ? match[1] : "";
}
