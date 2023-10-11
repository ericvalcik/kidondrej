"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { H1, P } from "@/components/typography";

export default function Page() {
  return (
    <>
      <H1>Projects</H1>
      <P>Here are some of the projects I worked on:</P>
      <div className="flex flex-col pt-8">
        <ProjectItem
          title="Iann Dior"
          description="NFT Collection, 3D visualizer"
          link="iann-dior"
        />
        <ProjectItem title="SIMILIVINLIFE" description="visualiser" link="#" />
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
