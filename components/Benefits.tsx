import { benefits } from "@/content";

export function Benefits() {
  return (
    <section className="border-t border-hairline">
      <div className="page-container py-20 md:py-[120px]">
        <h2 className="mb-12 max-w-[900px] text-[clamp(40px,5vw,72px)] leading-none font-extrabold tracking-[-0.045em] md:mb-[72px]">
          {benefits.headline}
          <br />
          <span className="text-slate">{benefits.headlineMuted}</span>
        </h2>
        <div className="flex flex-col border-b border-silver">
          {benefits.items.map((item) => (
            <div
              key={item.number}
              className="flex flex-wrap gap-x-16 gap-y-6 border-t border-silver py-10"
            >
              <span className="flex-[0_0_64px] text-[18px] font-semibold text-slate">
                {item.number}
              </span>
              <h3 className="flex-[1_1_360px] text-[32px] leading-[1.05] font-bold tracking-[-0.035em] md:text-[40px]">
                {item.title}
              </h3>
              <p className="flex-[1_1_360px] text-[19px] leading-[1.55] text-slate">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
