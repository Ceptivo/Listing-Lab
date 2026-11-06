import { builtForSA } from "@/content";

export function BuiltForSA() {
  return (
    <section className="bg-surface">
      <div className="page-container flex flex-wrap items-end justify-between gap-12 py-20 md:py-28">
        <h2 className="flex-[1_1_520px] text-[clamp(40px,5vw,72px)] leading-none font-extrabold tracking-[-0.045em]">
          {builtForSA.headline}
        </h2>
        <ul className="flex flex-[1_1_420px] flex-wrap gap-[10px]">
          {builtForSA.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-mist px-5 py-3 text-[16px] font-semibold"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
