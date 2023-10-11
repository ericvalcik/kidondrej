"use client";

import React, { useState } from "react";
import { P } from "@/components/typography";

export default function Page() {
  const [playing, setPlaying] = useState("");

  return (
    <>
      <P>Here are some of my projects:</P>
      <div className="flex"></div>
    </>
  );
}
