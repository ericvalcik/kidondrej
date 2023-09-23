import { H1, H2, P } from "@/components/typography";
import { Instagram } from "lucide-react";
import { TikTok } from "@/components/icons/TikTok";

export default function Page() {
  return (
    <div>
      <H1>About kidOndrej</H1>
      <P>
        Based in Prague, kidOndrej is a 3D artist known for merging 3D design
        with a passion for rap music. He collaborates with figures from both the
        United States and the CZ/SK music scenes to create visuals that capture
        the essence of music. Explore his work on social media.
      </P>
      <hr className="mt-6" />
      <div className="flex gap-6 mt-6 text-slate-500">
        <a
          href="https://www.instagram.com/kidondrej/"
          className="flex items-center gap-1 underline underline-offset-2"
        >
          <Instagram size={21.5} />
          kidondrej
        </a>
        <a
          href="https://www.tiktok.com/@kidondrej"
          className="flex items-center gap-1 underline underline-offset-2"
        >
          <TikTok />
          kidondrej
        </a>
        <a href="mailto:kidondrej@gmail.com" className="underline">
          kidondrej@gmail.com
        </a>
      </div>
    </div>
  );
}
