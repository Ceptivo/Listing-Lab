import { offers, preorderBadge, products } from "@/content";
import { Price } from "./Price";

const toolkits = [products.whatsapp, products.showDay, products.newAgent];

export function Offers() {
  const { membership } = offers;

  return (
    <section id="offers" className="border-t border-hairline">
      <div className="page-container py-20 md:py-[120px]">
        <h2 className="mb-7 text-[clamp(40px,5vw,72px)] leading-none font-extrabold tracking-[-0.045em]">
          {offers.headline} <span className="text-slate">{offers.headlineMuted}</span>
        </h2>
        <p className="mb-14 text-[19px] text-slate">
          {offers.intro.before}
          <strong className="font-bold text-ink">{offers.intro.strong}</strong>
          {offers.intro.after}
        </p>

        {/* Main offers */}
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-[1_1_300px] flex-col gap-5 rounded-3xl border border-silver bg-surface p-7 md:p-9">
            <span className="self-start rounded-full border border-mist px-3 py-[6px] text-[13px] font-bold text-slate">
              {preorderBadge}
            </span>
            <h3 className="text-[32px] font-extrabold tracking-[-0.035em]">
              {products.promptPack.name}
            </h3>
            <p className="grow text-[17px] leading-[1.55] text-slate">
              {products.promptPack.description}
            </p>
            <Price product={products.promptPack} className="text-[40px] tracking-[-0.04em]" />
          </div>

          <div className="flex flex-[1_1_300px] flex-col gap-5 rounded-3xl bg-ink p-7 text-white md:p-9">
            <span className="self-start rounded-full bg-white px-3 py-[6px] text-[13px] font-bold text-ink">
              {preorderBadge}
            </span>
            <h3 className="text-[32px] font-extrabold tracking-[-0.035em]">
              {products.course.name}
            </h3>
            <p className="grow text-[17px] leading-[1.55] text-mist">
              {products.course.description}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Price
                product={products.course}
                className="text-[40px] tracking-[-0.04em]"
                mutedClassName="text-mist"
              />
              <a
                href={offers.featuredCta.href}
                className="rounded-full bg-white px-[22px] py-[14px] text-[16px] font-bold text-ink hover:bg-surface"
              >
                {offers.featuredCta.label}
              </a>
            </div>
          </div>

          <div className="flex flex-[1_1_300px] flex-col gap-5 rounded-3xl border border-silver bg-surface p-7 md:p-9">
            <span className="self-start rounded-full border border-mist px-3 py-[6px] text-[13px] font-bold text-slate">
              {preorderBadge}
            </span>
            <h3 className="text-[32px] font-extrabold tracking-[-0.035em]">
              {products.dashboard.name}
            </h3>
            <p className="grow text-[17px] leading-[1.55] text-slate">
              {products.dashboard.description}
            </p>
            <Price
              product={products.dashboard}
              className="text-[40px] tracking-[-0.04em]"
              unitClassName="text-[18px]"
            />
          </div>
        </div>

        {/* Toolkits */}
        <div className="mt-16 mb-7 flex flex-wrap items-baseline justify-between gap-3 md:mt-24">
          <h3 className="text-[clamp(32px,3.4vw,48px)] font-extrabold tracking-[-0.04em]">
            {offers.toolkitsTitle}
          </h3>
          <p className="text-[17px] text-slate">{offers.toolkitsNote}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {toolkits.map((product) => (
            <div
              key={product.name}
              className="flex flex-[1_1_260px] flex-col gap-[14px] rounded-[20px] border border-silver bg-white p-7"
            >
              <span className="self-start rounded-full border border-mist px-[11px] py-[5px] text-[12px] font-bold text-slate">
                {preorderBadge}
              </span>
              <h4 className="text-[24px] font-extrabold tracking-[-0.03em]">{product.name}</h4>
              <p className="grow text-[16px] leading-[1.55] text-slate">{product.description}</p>
              <Price product={product} className="text-[28px] tracking-[-0.035em]" />
            </div>
          ))}
        </div>

        {/* Membership */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-10 rounded-[28px] bg-ink p-7 text-white md:p-14">
          <div className="flex-[1_1_520px]">
            <span className="mb-6 inline-block rounded-full bg-white px-3 py-[6px] text-[13px] font-bold text-ink">
              {membership.badge}
            </span>
            <h3 className="mb-[18px] text-[clamp(40px,4.6vw,64px)] leading-[0.98] font-extrabold tracking-[-0.045em]">
              {membership.headline}
              <br />
              <span className="text-mist">{membership.headlineMuted}</span>
            </h3>
            <ul className="mt-7 flex flex-wrap gap-[10px]">
              {membership.perks.map((perk) => (
                <li
                  key={perk}
                  className="rounded-full border border-slate px-4 py-[10px] text-[15px] font-semibold"
                >
                  {perk}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-[0_1_300px] flex-col gap-[18px]">
            <Price
              product={products.membership}
              className="text-[56px] tracking-[-0.05em]"
              mutedClassName="text-mist"
              unitClassName="text-[20px]"
            />
            <a
              href={membership.cta.href}
              className="self-start rounded-full bg-white px-[26px] py-4 text-[17px] font-bold text-ink hover:bg-surface"
            >
              {membership.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
