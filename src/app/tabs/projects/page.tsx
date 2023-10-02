"use client";

import React, { useState } from "react";
import { Video } from "@/components/Video";

export default function Page() {
  const [playing, setPlaying] = useState("");

  return (
    <div className="columns-1 gap-4 sm:columns-2">
      <Video
        videoUrl="/similivinlife/klip.mp4"
        name="simi-klip"
        setPlaying={setPlaying}
        playing={playing}
      />
      <Video
        videoUrl="/iann/nft-promo.mp4"
        name="nft-promo"
        setPlaying={setPlaying}
        playing={playing}
      />
      <Video
        videoUrl="/iann/visual.mp4"
        name="iann-visual"
        setPlaying={setPlaying}
        playing={playing}
      />
    </div>
  );
}
