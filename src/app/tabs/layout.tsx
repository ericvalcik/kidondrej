import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { KidOndrejAvatar } from "@/components/avatar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <nav className="w-full h-16 mb-5 sm:mb-20 backdrop-blur sticky top-0 shadow-sm">
        <div className="max-w-5xl px-4 h-full mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-bold tracking-tighter no-underline flex items-center gap-4"
          >
            <KidOndrejAvatar small />
            <span className="text-xl inline">k1d</span>
          </Link>
          <Navbar />
        </div>
      </nav>
      <div className="max-w-2xl w-full mx-auto px-6">{children}</div>
    </div>
  );
}
