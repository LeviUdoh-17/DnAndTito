import { cn } from "../../utils/cn";

interface FloralAccentProps {
  className?: string;
}

export const FloralAccent = ({ className }: FloralAccentProps) => (
  <svg
    viewBox="0 0 100 60"
    className={cn("w-32 h-20 text-purple-300/40", className)}
    fill="currentColor"
  >
    <ellipse cx="20" cy="30" rx="8" ry="12" />
    <ellipse cx="35" cy="20" rx="6" ry="10" />
    <ellipse cx="35" cy="40" rx="6" ry="10" />
    <ellipse cx="50" cy="30" rx="10" ry="14" />
    <ellipse cx="65" cy="20" rx="6" ry="10" />
    <ellipse cx="65" cy="40" rx="6" ry="10" />
    <ellipse cx="80" cy="30" rx="8" ry="12" />
    <circle cx="20" cy="30" r="3" className="text-amber-300/60" fill="currentColor" />
    <circle cx="50" cy="30" r="4" className="text-amber-300/60" fill="currentColor" />
    <circle cx="80" cy="30" r="3" className="text-amber-300/60" fill="currentColor" />
  </svg>
);
