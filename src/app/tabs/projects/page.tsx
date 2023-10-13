"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { H1, P } from "@/components/typography";
import { projects } from "@/config/projects";

export default function Page() {
  return (
    <>
      <H1>Projects</H1>
      <P>Here are some of the projects I worked on:</P>
      <div className="flex flex-col pt-8">
        {projects.map((project) => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            description={project.artist}
            link={project.slug}
          />
        ))}
      </div>
    </>
  );
}

type ProjectItemProps = {
  title: string;
  description: string;
  link: string;
};

const ProjectItem: FC<ProjectItemProps> = ({ title, description, link }) => {
  const router = useRouter();

  return (
    <div
      className="group border-b last:border-none hover:text-primary/70 cursor-pointer w-full h-10 flex justify-between items-center"
      onClick={() => router.push(`projects/${link}`)}
    >
      <div>{title}</div>
      <div className="text-muted-foreground group-hover:text-muted-foreground/70">
        {description}
      </div>
    </div>
  );
};
