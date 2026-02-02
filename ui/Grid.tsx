import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  cols?: {
    default?: 1 | 2 | 3 | 4;
    sm?: 1 | 2 | 3 | 4;
    md?: 1 | 2 | 3 | 4;
    lg?: 1 | 2 | 3 | 4;
    xl?: 1 | 2 | 3 | 4;
  };
  gap?: "sm" | "md" | "lg";
  className?: string;
}

export function Grid({
  children,
  cols = { default: 1, sm: 2, lg: 3 },
  gap = "md",
  className = "",
}: GridProps) {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  const gapClasses = {
    sm: "gap-4 sm:gap-6",
    md: "gap-6 sm:gap-8",
    lg: "gap-8 sm:gap-10 lg:gap-12",
  };

  const gridClasses = [
    "grid",
    cols.default && colClasses[cols.default],
    cols.sm && `sm:${colClasses[cols.sm]}`,
    cols.md && `md:${colClasses[cols.md]}`,
    cols.lg && `lg:${colClasses[cols.lg]}`,
    cols.xl && `xl:${colClasses[cols.xl]}`,
    gapClasses[gap],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={gridClasses}>{children}</div>;
}
