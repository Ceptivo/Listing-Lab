import { hero } from "@/content";

export function Hero() {
  return (
    <section id="top" className="page-container pt-[72px] pb-16 md:pt-[120px] md:pb-24">
      <p className="mb-8 text-[14px] font-semibold tracking-[0.14em] text-slate uppercase">
        {hero.eyebrow}
      </p>
      <h1 className="text-[clamp(56px,8.4vw,128px)] leading-[0.92] font-extrabold tracking-[-0.055em] text-ink">
        {hero.headline}
        <br />
        <span className="text-slate">{hero.headlineMuted}</span>
      </h1>

      <div className="mt-14 flex flex-wrap items-end justify-between gap-10">
        <p className="m-0 max-w-[520px] text-[19px] leading-[1.5] text-slate md:text-[21px]">
          {hero.body}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={hero.primaryCta.href}
            className="rounded-full bg-ink px-7 py-[18px] text-[17px] font-bold text-white hover:bg-navy"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="rounded-full border border-mist px-[27px] py-[17px] text-[17px] font-semibold text-ink hover:bg-surface"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      {/* Before and after panel */}
      <div className="mt-16 flex flex-col gap-3 rounded-[28px] border border-silver bg-surface p-3 md:mt-24 lg:flex-row">
        <div className="rounded-[20px] bg-white p-6 md:p-9 lg:flex-[1_1_392px]">
          <p className="mb-5 text-[13px] font-semibold tracking-[0.12em] text-slate uppercase">
            {hero.before.label}
          </p>
          <p className="font-mono text-[17px] leading-[1.6] text-slate md:text-[19px]">
            {hero.before.text}
          </p>
        </div>

        <div className="flex flex-none items-center justify-center lg:px-2">
          <span className="flex size-[52px] items-center justify-center rounded-full bg-ink">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="rotate-90 lg:rotate-0"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        <div className="rounded-[20px] bg-ink p-6 text-white md:p-9 lg:flex-[1.4_1_492px]">
          <p className="mb-5 text-[13px] font-bold tracking-[0.12em] text-mist uppercase">
            {hero.after.label}
          </p>
          <p className="mb-[14px] text-[26px] leading-[1.1] font-extrabold tracking-[-0.03em] md:text-[30px]">
            {hero.after.title}
          </p>
          <p className="text-[17px] leading-[1.6] text-mist">{hero.after.text}</p>
        </div>
      </div>
    </section>
  );
}
