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
    title: "3D Animation",
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
            </Redirect>{" "}
            and{" "}
            <Redirect href="https://www.instagram.com/marshmello/">
              @marshmello
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
  {
    title: "3D Animation",
    artist: "Zackbia",
    content: () => {
      return (
        <>
          <H1>3D Animation for Wynn&apos;s recap video</H1>
          <div className="flex justify-center">
            <Video
              videoUrl={"/zacbia/zac.mp4"}
              width={304}
              height={540}
              className="mb-10"
            />
          </div>
          <P>
            3D Animation for{" "}
            <Redirect href="https://www.instagram.com/wynnlasvegas/">
              @wynnlasvegas
            </Redirect>{" "}
            and{" "}
            <Redirect href="https://www.instagram.com/zackbia/">
              @zackbia
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
    slug: "zacbia",
  },
  {
    title: "D.O.A. Tape Care Package (Official Visualisers)",
    artist: "Kay Flock",
    content: () => {
      return (
        <>
          <H1>3D Scenes for Official Visualisers for Key Flock&apos;s tape</H1>
          <Video
            videoUrl={"/keyflock/vid.mp4"}
            width={624}
            height={352}
            className="mb-10 hidden sm:block"
          />
          <div className="sm:hidden flex justify-center">
            <Video
              videoUrl={"/keyflock/vid.mp4"}
              width={304}
              height={171}
              className="mb-10"
            />
          </div>
          <P>
            Directed + edited by{" "}
            <Redirect href="https://www.instagram.com/tmgfx_/">
              @tmgfx_
            </Redirect>
            <br />
            Character Design by{" "}
            <Redirect href="https://www.instagram.com/kyleparnell/">
              @kyleparnell
            </Redirect>
            <br />
            Additional 3D scenes by{" "}
            <Redirect href="https://www.instagram.com/bloodmoneymedia/">
              @bloodmoneymedia
            </Redirect>{" "}
            <Redirect href="https://www.instagram.com/kyleparnell/">
              @kyleparnell
            </Redirect>{" "}
            and me
          </P>
        </>
      );
    },
    slug: "keyflock",
  },
  {
    title: "OGM Tour Promo Animations",
    artist: "Our Generation Music",
    content: () => {
      return (
        <>
          <H1>3D Animations for Social Media promo</H1>
          <div className="flex justify-center">
            <Video
              videoUrl={"/ogm/f1lthy.mov"}
              width={304}
              height={540}
              className="mb-10"
            />
          </div>
          <P>
            Game menu like 3D Animations for Our Generation Music tour promo.
            Animations were made for artists attending the tour, including{" "}
            <Redirect href="https://www.instagram.com/summrsxo/">
              @summrsxo
            </Redirect>
            ,{" "}
            <Redirect href="https://www.instagram.com/wakeupf1lthy/">
              @wakeupf1lthy
            </Redirect>{" "}
            and more.
          </P>
        </>
      );
    },
    slug: "ogm",
  },
];
