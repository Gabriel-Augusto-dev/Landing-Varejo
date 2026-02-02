import { ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: string;
  title: string | ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
  };

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 lg:mb-20 ${alignClasses[align]} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-theme-secondary text-sm font-medium mb-4 sm:mb-6">
          {badgeIcon && <span>{badgeIcon}</span>}
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-linear-to-r from-white via-slate-200 to-white bg-clip-text text-transparent leading-tight">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
