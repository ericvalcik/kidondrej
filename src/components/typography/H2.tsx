import { cn } from "@/lib/utils";

export function H2({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight mt-8 mb-4",
        className,
      )}
    >
      {children}
    </h2>
  );
}
