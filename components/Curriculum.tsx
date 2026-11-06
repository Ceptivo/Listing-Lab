import { curriculum } from "@/content";

export function Curriculum() {
  return (
    <section id="learn">
      <div className="page-container flex flex-wrap gap-x-20 gap-y-12 py-20 md:py-[120px]">
        <div className="flex-[1_1_340px]">
          <p className="mb-5 text-[14px] font-semibold tracking-[0.14em] text-slate uppercase">
            {curriculum.eyebrow}
          </p>
          <h2 className="text-[clamp(40px,4.4vw,64px)] leading-none font-extrabold tracking-[-0.045em]">
            {curriculum.headline}
            <br />
            <span className="text-slate">{curriculum.headlineMuted}</span>
          </h2>
        </div>
        <ol className="flex flex-[1.6_1_520px] flex-col border-b border-silver">
          {curriculum.modules.map((module, index) => (
            <li
              key={module}
              className="flex items-baseline gap-5 border-t border-silver py-6 md:gap-7"
            >
              <span className="min-w-7 text-[15px] font-semibold text-slate">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[22px] font-bold tracking-[-0.025em] md:text-[26px]">
                {module}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
