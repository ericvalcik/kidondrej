"use client";

import ReactPlayer from "react-player/lazy";
import React, { FC, useState } from "react";
import { cn } from "@/lib/utils";

interface VideoProps {
  videoUrl: string;
  width?: number;
  height?: number;
  className?: string;
}

const Video: FC<VideoProps> = ({ videoUrl, width, height, className }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      onClick={() => {
        setPlaying(!playing);
      }}
      className={cn("rounded-xl overflow-clip", className)}
    >
      <ReactPlayer
        url={videoUrl}
        loop={true}
        playing={true}
        muted={!playing}
        width={`${width}px`}
        height={`${height}px`}
        controls={false}
        style={{ borderRadius: "inherit" }}
      />
    </div>
  );
};

export default Video;
