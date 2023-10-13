"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { H1, H2, P } from "@/components/typography";
import { globalProjects, domesticProjects } from "@/config/projects";

export default function Page() {
  return (
    <>
      <H1>Projects</H1>
      <P>Here are some of the projects I worked on:</P>
      <div className="flex flex-col pt-8">
        {globalProjects.map((project) => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            description={project.artist}
            link={project.slug}
          />
        ))}
      </div>
      <H2>CZ/SK Projects:</H2>
      <div className="flex flex-col pt-2 pb-20">
        {domesticProjects.map((project) => (
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
      className="group border-b last:border-none hover:text-primary/70 cursor-pointer w-full flex justify-between items-center"
      onClick={() => router.push(`projects/${link}`)}
    >
      <div className="py-2">{title}</div>
      <div className="text-muted-foreground group-hover:text-muted-foreground/70 text-right py-2">
        {description}
      </div>
    </div>
  );
};
