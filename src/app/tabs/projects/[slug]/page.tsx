import { projects } from "@/config/projects";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug);
  const Component = project?.content;
  return (
    <div className="pb-20">
      <div className="pb-10 mr-auto flex">
        <Link href="." className="flex gap-1 items-center pr-2">
          <ChevronLeft size={16} />
          Projects
        </Link>
        <div className="flex-grow" />
      </div>
      {Component && <Component />}
    </div>
  );
}
