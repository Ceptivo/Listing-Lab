import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Benefits } from "@/components/Benefits";
import { BuiltForSA } from "@/components/BuiltForSA";
import { Curriculum } from "@/components/Curriculum";
import { DashboardPreview } from "@/components/DashboardPreview";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Offers } from "@/components/Offers";
import { Pricing } from "@/components/Pricing";
import { SocialProof } from "@/components/SocialProof";
import { Waitlist } from "@/components/Waitlist";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-bold"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Nav />
      <main id="main">
        <Hero />
        <Waitlist />
        <Benefits />
        <SocialProof />
        <BuiltForSA />
        <DashboardPreview />
        <Curriculum />
        <Offers />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
