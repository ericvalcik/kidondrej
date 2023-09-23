"use client";

import ReactPlayer from "react-player/lazy";
import React, { useState } from "react";

export const Video = () => {
  const [muted, setMuted] = useState(true);

  return (
    <div onClick={() => setMuted(!muted)} className="rounded-xl overflow-clip">
      <ReactPlayer
        url="/similivinlife/klip.mp4"
        loop={true}
        playing={true}
        muted={muted}
        width="200px"
        height="200px"
        style={{ borderRadius: "inherit" }}
      />
    </div>
  );
};
