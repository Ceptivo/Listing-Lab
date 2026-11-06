import Link from "next/link";
import { legalNotice } from "@/content";
import { Footer } from "./Footer";
import { Logo } from "./Logo";

export function LegalPage({
  title,
  sections,
}: {
  title: string;
  sections: { heading: string; text: string }[];
}) {
  return (
    <>
      <header className="border-b border-hairline">
        <div className="page-container py-5">
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
        </div>
      </header>
      <main className="page-container py-20">
        <div className="max-w-[720px]">
          <span className="inline-block rounded-full border border-dashed border-mist px-3 py-[6px] text-[13px] font-semibold text-slate">
            {legalNotice}
          </span>
          <h1 className="mt-6 mb-12 text-[clamp(44px,5.6vw,84px)] leading-[0.95] font-extrabold tracking-[-0.05em]">
            {title}
          </h1>
          {sections.map((section) => (
            <section key={section.heading} className="border-t border-silver py-7">
              <h2 className="mb-3 text-[22px] font-bold tracking-[-0.02em]">{section.heading}</h2>
              <p className="text-[17px] leading-[1.6] text-slate">{section.text}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
