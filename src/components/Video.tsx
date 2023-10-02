import ReactPlayer from "react-player/lazy";
import React, { FC, useState } from "react";

interface VideoProps {
  videoUrl: string;
  name: string;
  url?: string;
  setPlaying: React.Dispatch<React.SetStateAction<string>>;
  playing: string;
}

export const Video: FC<VideoProps> = ({
  playing,
  videoUrl,
  name,
  url,
  setPlaying,
}) => {
  return (
    <div
      onClick={() => {
        if (playing === name) {
          setPlaying("");
        } else {
          setPlaying(name);
        }
      }}
      className="rounded-xl overflow-clip [&:not(:first-child)]:mt-4"
    >
      <ReactPlayer
        url={videoUrl}
        loop={true}
        playing={playing === name}
        muted={playing !== name}
        width="328px"
        height="328px"
        controls={false}
        style={{ borderRadius: "inherit" }}
      />
    </div>
  );
};
