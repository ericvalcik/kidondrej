import { FC } from "react";
import dynamic from "next/dynamic";
import { H1, P } from "@/components/typography";
import Redirect from "@/components/Redirect";
import Image from "next/image";

const Video = dynamic(() => import("@/components/Video"), { ssr: false });

type Projects = {
  title: string;
  artist: string;
  slug: string;
  content: FC;
};

export const globalProjects: Projects[] = [
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
          I designed and generated 1212 unique 3D figures that were all released
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
            <br />
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
            <br />
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
            </Redirect>
            ,{" "}
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
    title: "makeuruzi.com - Uzi Character Generator",
    artist: "oneonlyeric",
    content: () => {
      return (
        <>
          <H1>makeuruzi.com - Uzi Character Generator</H1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="w-auto sm:w-[304px] h-auto">
              <Image
                src="/makeuruzi/1.jpg"
                alt="Cover Art"
                width={1080}
                height={1350}
                quality={100}
                className="rounded-xl overflow-clip"
              />
            </div>
            <div className="w-auto sm:w-[304px] h-auto">
              <Image
                src="/makeuruzi/2.jpg"
                alt="Merch Design"
                width={1080}
                height={1350}
                quality={100}
                className="rounded-xl overflow-clip"
              />
            </div>
          </div>
          <P>
            Fan made Uzi Character Generator App by{" "}
            <Redirect href="https://www.instagram.com/oneonlyeric/">
              @oneonlyeric
            </Redirect>{" "}
            designed by me.
            <br />
            Try the app out at{" "}
            <Redirect href="https://makeuruzi.com">makeuruzi.com</Redirect>.
          </P>
        </>
      );
    },
    slug: "makeuruzi",
  },
];

export const domesticProjects: Projects[] = [
  {
    title: "Co Ty Oči - Starting and Ending Music Video Animations",
    artist: "Yzomandias, Nik Tendo",
    content: () => {
      return (
        <>
          <H1>Co Ty Oči - Starting and Ending Music Video Animations</H1>
          <Video
            videoUrl={"/yzo/cotyoci.mp4"}
            width={624}
            height={624}
            className="mb-10 hidden sm:block"
          />
          <div className="sm:hidden flex justify-center">
            <Video
              videoUrl={"/yzo/cotyoci.mp4"}
              width={304}
              height={304}
              className="mb-10"
            />
          </div>
          <P>
            Graphic design and 3D animations.
            <br />
            Music video was done by{" "}
            <Redirect href="https://www.youtube.com/@MOSTWANTEDRAP">
              @MOSTWANTEDRAP
            </Redirect>{" "}
            , go check it out on{" "}
            <Redirect href="https://www.youtube.com/watch?v=1ufQan5qCKI">
              YouTube
            </Redirect>
            .
          </P>
        </>
      );
    },
    slug: "cotyoci",
  },
  {
    title: "Collectibe Toys",
    artist: "Yzomandias, Nik Tendo",
    content: () => {
      return (
        <>
          <H1>Collectibe Toys - 3D Modelling</H1>
          <Video
            videoUrl={"/yzo/nikspin.MOV"}
            width={624}
            height={624}
            className="mb-10 hidden sm:block"
            noSound
          />
          <div className="sm:hidden flex justify-center">
            <Video
              videoUrl={"/yzo/nikspin.MOV"}
              width={304}
              height={304}
              className="mb-10"
              noSound
            />
          </div>
          <P>
            3D Modelling of collectible toys for{" "}
            <Redirect href="https://www.instagram.com/yzomandias/">
              @yzomandias
            </Redirect>{" "}
            and{" "}
            <Redirect href="https://www.instagram.com/goldcigo/">
              @goldcigo
            </Redirect>
            <br />
            Print was done by{" "}
            <Redirect href="https://www.instagram.com/adambaca/">
              @adambaca
            </Redirect>{" "}
            and{" "}
            <Redirect href="https://www.instagram.com/kopecak/">
              @kopecak
            </Redirect>
            .
          </P>
        </>
      );
    },
    slug: "collectible-toys",
  },
  {
    title: "Pod Drn - Cover Art and Merch Design",
    artist: "Nik Tendo, Calin, Hasan",
    content: () => {
      return (
        <>
          <H1>Pod Drn Music Video - Cover + Merch Design</H1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Image
              src="/poddrn/cover.jpg"
              alt="Cover Art"
              width={304}
              height={304}
              className="rounded-xl overflow-clip"
            />
            <Image
              src="/poddrn/merch.jpg"
              alt="Merch Design"
              width={304}
              height={304}
              className="rounded-xl overflow-clip"
            />
          </div>
          <P>
            Graphic design for the Cover Art and Merch.
            <br />
            Music video was done by{" "}
            <Redirect href="https://www.youtube.com/@MOSTWANTEDRAP">
              @MOSTWANTEDRAP
            </Redirect>{" "}
            , go check it out on{" "}
            <Redirect href="https://youtu.be/NWQDLZTKX-U?si=9XpUGeikqVMRiLZE">
              YouTube
            </Redirect>
            .
          </P>
        </>
      );
    },
    slug: "pod-drn",
  },
  {
    title: "Skate Deck Design",
    artist: "David Luu",
    content: () => {
      return (
        <>
          <H1>Skateboard Deck Design for David Luu</H1>
          <div className="hidden sm:flex justify-center gap-4 flex-row">
            <Video
              videoUrl={"/davidluu/vid.MOV"}
              width={260}
              height={463}
              className="mb-10"
            />
            <div className="w-[348px] h-[463px] rounded-xl overflow-clip">
              <Image
                src="/davidluu/decks.jpg"
                alt="Decks"
                width={3024}
                height={4032}
              />
            </div>
          </div>
          <div className="flex sm:hidden flex-col justify-center gap-4 items-center">
            <Video videoUrl={"/davidluu/vid.MOV"} width={292} height={519} />
            <div className="w-[292px] h-auto rounded-xl overflow-clip">
              <Image
                src="/davidluu/decks.jpg"
                alt="Decks"
                width={3024}
                height={4032}
              />
            </div>
          </div>
          <P>
            Skateboard deck design and promo animation for{" "}
            <Redirect href="https://www.instagram.com/realdavidluu/">
              @realdavidluu
            </Redirect>
            .
          </P>
        </>
      );
    },
    slug: "davidluu",
  },
  {
    title: "Music Visualiser - Honeymoon",
    artist: "SIMILIVINLIFE",
    content: () => {
      return (
        <>
          <H1>Music Video Visualiser for SIMILIVINLIFE</H1>
          <Video
            videoUrl={"/similivinlife/klip.mp4"}
            width={624}
            height={624}
            className="mb-10 hidden sm:block"
          />
          <div className="sm:hidden flex justify-center">
            <Video
              videoUrl={"/similivinlife/klip.mp4"}
              width={304}
              height={304}
              className="mb-10"
            />
          </div>
          <P>
            Music Video Visualiser for Honeymoon by{" "}
            <Redirect href="https://www.instagram.com/similivinlife/">
              @similivinlife
            </Redirect>
            .
          </P>
        </>
      );
    },
    slug: "similivinlife",
  },
  {
    title: "SNY II - Cover Art and Animations Pack",
    artist: "Nicholas Naison",
    content: () => {
      return (
        <>
          <H1>Cover Art and Animations for a Music Video</H1>
          <div className="hidden sm:flex justify-center gap-4 flex-row">
            <Video
              videoUrl={"/nicholas/visual.mp4"}
              width={304}
              height={304}
              className="mb-10"
            />
            <div className="w-[304px] h-[304px] rounded-xl overflow-clip">
              <Image
                src="/nicholas/cover.jpg"
                alt="Decks"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="flex sm:hidden flex-col justify-center gap-4 items-center">
            <Video videoUrl={"/nicholas/visual.mp4"} width={292} height={292} />
            <div className="w-[292px] h-[292px] rounded-xl overflow-clip">
              <Image
                src="/nicholas/cover.jpg"
                alt="Decks"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <P>
            Cover Art and Animations for{" "}
            <Redirect href="https://www.instagram.com/nicholasnaisson/">
              @nicholasnaisson
            </Redirect>
            &apos;s album SNY II.
            <br />
            Go watch the Music Video on{" "}
            <Redirect href="https://youtu.be/oG48LPXQTAw?si=YLBDXBm2aAyaOUx0">
              YouTube
            </Redirect>
            .
          </P>
        </>
      );
    },
    slug: "nicholas",
  },
  {
    title: "FROM HELL WITH LOVE - Cover Art and Motion",
    artist: "Skinny Barber, Darewin",
    content: () => {
      return (
        <>
          <H1>FROM HELL WITH LOVE - Cover Art and Motion</H1>
          <div className="hidden sm:flex justify-center gap-4 flex-row">
            <Video
              videoUrl={"/skinny/motion.mov"}
              width={219}
              height={389}
              className="mb-10"
              noSound
            />
            <div className="w-[389px] h-[389px] rounded-xl overflow-clip">
              <Image
                src="/skinny/cover.png"
                alt="Decks"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="flex sm:hidden flex-col justify-center gap-4 items-center">
            <Video
              videoUrl={"/skinny/motion.mov"}
              width={292}
              height={519}
              noSound
            />
            <div className="w-[292px] h-[292px] rounded-xl overflow-clip">
              <Image
                src="/skinny/cover.png"
                alt="Decks"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <P>
            Cover Art and Motion for{" "}
            <Redirect href="https://www.instagram.com/skinnybarber/">
              @skinnybarber
            </Redirect>{" "}
            and{" "}
            <Redirect href="https://www.instagram.com/lildarewin/">
              @lildarewin
            </Redirect>
            .
          </P>
        </>
      );
    },
    slug: "skinny-barber",
  },
];

export const projects: Projects[] = [...globalProjects, ...domesticProjects];
