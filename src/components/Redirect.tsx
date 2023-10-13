import { ReactElement } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Redirect({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <a
      href={href}
      target={"_blank"}
      className="inline-flex items-center gap-1 underline underline-offset-1"
    >
      {children}
    </a>
  );
}
