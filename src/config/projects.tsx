import { FC } from "react";
import dynamic from "next/dynamic";
import { H1 } from "@/components/typography";
import Redirect from "@/components/Redirect";

const Video = dynamic(() => import("@/components/Video"), { ssr: false });

type Projects = {
  title: string;
  artist: string;
  slug: string;
  content: FC;
};

export const projects: Projects[] = [
  {
    title: "The 1212 NFT Collection",
    artist: "Iann Dior",
    content: () => <>Designed by me</>,
    slug: "1212-nft-collection",
  },
  {
    title: "Saddest Soundtrack Animation",
    artist: "Iann Dior",
    content: () => {
      return (
        <>
          <H1>Iann Dior&apos;s saddest soundtrack</H1>
          <Video
            videoUrl={"/iann/visual.mp4"}
            width={624}
            height={624}
            className="mb-10 hidden sm:block"
          />
          <div className="sm:hidden flex justify-center">
            <Video
              videoUrl={"/iann/visual.mp4"}
              width={304}
              height={304}
              className="mb-10"
            />
          </div>
          In collaboration with{" "}
          <Redirect href="https://www.instagram.com/ianndior/">
            @ianndior
          </Redirect>{" "}
          I created this 3D Figure Animation that was used as a visualizer for
          his song{" "}
          <Redirect href="https://youtu.be/Qo4Nx2uN1dU?si=dgaBrOXBPY5IbXQD">
            saddest soundtrack
          </Redirect>
          .
        </>
      );
    },
    slug: "saddest-soundtrack-animation",
  },
  {
    title: "Recap 3D Animation",
    artist: "Marshmello",
    content: () => {
      return (
        <>
          3D Animation for{" "}
          <a href="https://www.instagram.com/wynnlasvegas/" target="_blank">
            @wynnlasvegas
          </a>
          &apos;s Recap video, art direction by{" "}
          <a href="https://www.instagram.com/maxgilberg/" target="_blank">
            @maxgilberg
          </a>
          .
        </>
      );
    },
    slug: "marshmello",
  },
];
