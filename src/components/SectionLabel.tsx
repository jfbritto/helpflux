import { FlowDots } from "./Logo";

export default function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-sm font-semibold text-foreground uppercase tracking-wider ${className}`}
    >
      <FlowDots className="text-[0.8rem]" />
      {children}
    </span>
  );
}
