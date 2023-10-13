"use client";

import ReactPlayer from "react-player/lazy";
import React, { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { Volume2, VolumeX } from "lucide-react";

interface VideoProps {
  videoUrl: string;
  width?: number;
  height?: number;
  className?: string;
}

const Video: FC<VideoProps> = ({ videoUrl, width, height, className }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={cn("rounded-xl overflow-clip", className)}>
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
      <div className="relative">
        <div
          className="absolute right-4 bottom-4 rounded-full w-[24px] h-[24px] bg-stone-700/80 cursor-pointer"
          onClick={() => {
            setPlaying(!playing);
          }}
        >
          {!playing ? (
            <VolumeX size={24} className="p-1" color="white" />
          ) : (
            <Volume2 size={24} className="p-1" color="white" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
