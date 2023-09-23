import { Navbar } from "@/components/navbar";
import { KidOndrejAvatar } from "@/components/avatar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-[35vh] gap-8">
      <div className="flex gap-8 items-center">
        <KidOndrejAvatar />
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          kidOndrej
        </h2>
      </div>
      <Navbar />
    </main>
  );
}
