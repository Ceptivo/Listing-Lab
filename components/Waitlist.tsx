import { waitlist } from "@/content";
import { WaitlistForm } from "./WaitlistForm";

export function Waitlist() {
  return (
    <section id="waitlist" className="border-t border-hairline">
      <div className="page-container flex flex-col items-center py-20 text-center md:py-[120px]">
        <h2 className="mb-6 text-[clamp(56px,8vw,120px)] leading-[0.92] font-extrabold tracking-[-0.055em]">
          {waitlist.headline}
        </h2>
        <p className="mb-12 max-w-[560px] text-[20px] leading-[1.5] text-slate">{waitlist.body}</p>
        <WaitlistForm />
      </div>
    </section>
  );
}
