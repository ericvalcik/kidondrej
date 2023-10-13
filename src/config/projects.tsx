import { FC } from "react";
import dynamic from "next/dynamic";
import { H1, P } from "@/components/typography";
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
    content: () => {
      return (
        <>
          <H1>Iann Dior&apos;s 1212 NFT Collection</H1>
          <Video
            videoUrl={"/iann/nft-promo.mp4"}
            width={624}
            height={624}
            className="mb-10 hidden sm:block"
          />
          <div className="sm:hidden flex justify-center">
            <Video
              videoUrl={"/iann/nft-promo.mp4"}
              width={304}
              height={304}
              className="mb-10"
            />
          </div>
          Together with{" "}
          <Redirect href="https://www.instagram.com/ianndior/">
            @ianndior
          </Redirect>{" "}
          I designed and generated 1212 unique 3D Figures that were all released
          in a{" "}
          <Redirect href="https://www.oneof.com/app/drops/bd96480a-6ac3-45f4-9119-02656ee8a60b/details">
            NFT Collection
          </Redirect>{" "}
          in the summer of 2022.
        </>
      );
    },
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
          <H1>3D Animation for Wynn&apos;s recap video</H1>
          <div className="flex justify-center">
            <Video
              videoUrl={"/marshmello/marshmellow.mp4"}
              width={304}
              height={540}
              className="mb-10"
            />
          </div>
          <P>
            3D Animation for{" "}
            <Redirect href="https://www.instagram.com/wynnlasvegas/">
              @wynnlasvegas
            </Redirect>
            &apos;s Recap video.
          </P>
          <P>
            Art direction by{" "}
            <Redirect href="https://www.instagram.com/maxgilberg/">
              @maxgilberg
            </Redirect>
            .
          </P>
        </>
      );
    },
    slug: "marshmello",
  },
];
