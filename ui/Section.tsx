import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "dark" | "darker" | "gradient" | "transparent";
  padding?: "sm" | "md" | "lg" | "xl";
}

export function Section({
  children,
  className = "",
  id,
  background = "dark",
  padding = "lg",
}: SectionProps) {
  const backgroundClasses = {
    dark: "bg-slate-950",
    darker: "bg-slate-900",
    gradient: "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950",
    transparent: "bg-transparent",
  };

  const paddingClasses = {
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-20 lg:py-24",
    lg: "py-20 sm:py-24 lg:py-32",
    xl: "py-24 sm:py-32 lg:py-40",
  };

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </section>
  );
}
