import { ReactNode, HTMLAttributes } from "react";

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
}

export function Card({
  children,
  className = "",
  hover = true,
  glow = false,
  gradient = false,
  ...rest
}: CardProps) {
  return (
    <div className="group relative" {...rest}>
      {glow && (
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-secondary/20 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      )}
      
      <div
        className={`relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
          hover ? "hover:border-primary/50 hover:scale-[1.02] hover:-translate-y-1" : ""
        } ${gradient ? "bg-linear-to-br from-slate-800/50 to-slate-900/50" : ""} ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
