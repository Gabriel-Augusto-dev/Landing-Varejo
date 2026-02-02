import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  icon,
  iconPosition = "left",
  fullWidth = false,
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300";
  
  const variantClasses = {
    primary:
      "gradient-primary text-slate-950 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50",
    secondary:
      "bg-slate-800 text-white border-2 border-slate-700 hover:border-primary hover:bg-slate-700",
    outline:
      "bg-transparent text-white border-2 border-slate-600 hover:border-primary hover:bg-slate-800/50 backdrop-blur-sm",
    ghost:
      "bg-transparent text-theme-secondary hover:bg-primary/10",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2 sm:px-8 sm:py-4 sm:text-lg sm:gap-3",
    lg: "px-8 py-4 text-lg gap-3 sm:px-10 sm:py-5 sm:text-xl sm:gap-4",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      <span>{children}</span>
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={buttonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
}
