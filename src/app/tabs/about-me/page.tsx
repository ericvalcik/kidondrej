import { H1, H2, P } from "@/components/typography";
import { Instagram } from "lucide-react";
import { TikTok } from "@/components/icons/TikTok";

export default function Page() {
  return (
    <div>
      <H1>About kidOndrej</H1>
      <P>
        Based in Prague, kidOndrej is a 3D artist known for merging 3D design
        with his passion for rap music. He collaborates with figures from both
        the United States and the CZ/SK music scenes to create visuals that
        capture the essence their of music.
      </P>
      <hr className="mt-6" />
      <div className="flex items-center gap-2 mt-6 text-stone-800 decoration-stone-300 underline-offset-4 flex-wrap">
        <a
          href="https://www.instagram.com/kidondrej/"
          className="flex items-center gap-1 underline"
        >
          <Instagram size={21.5} />
          kidondrej
        </a>
        <span className="mb-2 leading-[2px]">.</span>
        <a
          href="https://www.tiktok.com/@kidondrej"
          className="flex items-center gap-1 underline"
        >
          <TikTok />
          kidondrej
        </a>
        <span className="mb-2 leading-[2px]">.</span>
        <a href="mailto:kidondrej@gmail.com" className="underline">
          kidondrej@gmail.com
        </a>
      </div>
    </div>
  );
}
