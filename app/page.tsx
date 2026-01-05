import LightPillar from "@/components/LightPillar";
import { Button } from "@/components/ui/button";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05030f] text-slate-100">
      <div className="absolute inset-0">
        <LightPillar
          topColor="#b3c2ff"
          bottomColor="#ff9ffc"
          intensity={0.9}
          rotationSpeed={0.28}
          interactive={false}
          glowAmount={0.0025}
          pillarWidth={2.6}
          pillarHeight={0.48}
          noiseIntensity={0.08}
          pillarRotation={18}
          className="h-full w-full"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-[#0a0620]/70 via-[#05030f]/35 to-[#05030f]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 mix-blend-screen bg-[radial-gradient(circle_at_20%_25%,#ff9ffc33,transparent_45%),radial-gradient(circle_at_80%_35%,#5227ff33,transparent_50%),radial-gradient(circle_at_50%_80%,#7cf1ff22,transparent_40%)]"
          aria-hidden="true"
        />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-10 px-6 py-16 text-center md:px-12">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Paul Ashioya
          </h1>
          <p className="max-w-2xl text-lg text-slate-200/80 md:text-xl">
          Backend Developer
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              className="group rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
              href="https://www.linkedin.com/in/paul-ashioya/"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="h-5 w-5 opacity-80 transition group-hover:opacity-100" aria-hidden="true" />
            </a>
            <a
              className="group rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
              href="https://github.com/pashioya"
              aria-label="GitHub"
            >
              <SiGithub className="h-5 w-5 opacity-80 transition group-hover:opacity-100" aria-hidden="true" />
            </a>
            <a
              className="group rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
              href="https://www.instagram.com/paul.ashioya/"
              aria-label="Instagram"
            >
              <SiInstagram className="h-5 w-5 opacity-80 transition group-hover:opacity-100" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
          <Button
            asChild
            variant="ghost"
            className="min-w-40 bg-white/15 text-white hover:bg-white/95"
          >
            <a href="https://ap.paul.ashioya.com">Academic Pages</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="min-w-40 border-white/30 bg-white/5 text-white hover:border-white/60 hover:bg-white"
          >
            <a href="mailto:john.ashiya@gmail.com">Contact</a>
          </Button>
        </div>
      </main>
    </div>
  );
}
