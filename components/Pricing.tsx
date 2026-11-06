import { pricing } from "@/content";

const headClass =
  "px-4 pb-4 text-[13px] font-bold tracking-[0.1em] uppercase whitespace-nowrap";
const cellClass = "border-t border-hairline px-4 py-[22px] text-[17px]";

export function Pricing() {
  const { columns } = pricing;

  return (
    <section id="pricing" className="border-t border-hairline">
      <div className="page-container py-20 md:py-[120px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-x-20 gap-y-6 md:mb-14">
          <div className="flex-[1_1_520px]">
            <p className="mb-5 text-[14px] font-semibold tracking-[0.14em] text-slate uppercase">
              {pricing.eyebrow}
            </p>
            <h2 className="text-[clamp(44px,5.6vw,84px)] leading-[0.95] font-extrabold tracking-[-0.05em]">
              {pricing.headline}
              <br />
              <span className="text-slate">{pricing.headlineMuted}</span>
            </h2>
          </div>
          <p className="flex-[1_1_340px] text-[19px] leading-[1.55] text-slate">{pricing.body}</p>
        </div>

        {/* Focusable so keyboard users can scroll the table sideways on small screens. */}
        <div
          role="region"
          aria-label={pricing.tableLabel}
          tabIndex={0}
          className="overflow-x-auto rounded-3xl border border-silver bg-white px-5 pt-7 pb-2"
        >
          <table className="w-full min-w-[720px] border-collapse text-left">
            <caption className="sr-only">{pricing.tableLabel}</caption>
            <thead>
              <tr>
                <th scope="col" className={`${headClass} text-slate`}>
                  {columns.product}
                </th>
                <th scope="col" className={`${headClass} text-slate`}>
                  {columns.type}
                </th>
                <th scope="col" className={`${headClass} text-slate`}>
                  {columns.billing}
                </th>
                <th scope="col" className={`${headClass} text-right text-slate`}>
                  {columns.full}
                </th>
                <th scope="col" className={`${headClass} text-right text-ink`}>
                  {columns.preorder}
                </th>
              </tr>
            </thead>
            <tbody>
              {pricing.rows.map((product) => (
                <tr key={product.name}>
                  <th
                    scope="row"
                    className={`${cellClass} text-[19px]! font-bold tracking-[-0.015em]`}
                  >
                    {product.name}
                  </th>
                  <td className={`${cellClass} text-slate`}>{product.type}</td>
                  <td className={`${cellClass} whitespace-nowrap text-slate`}>{product.billing}</td>
                  <td className={`${cellClass} text-right text-slate line-through`}>
                    {product.fullPrice}
                  </td>
                  <td
                    className={`${cellClass} text-right text-[22px]! font-extrabold tracking-[-0.02em]`}
                  >
                    {product.preorderPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
          <p className="text-[15px] text-slate">{pricing.note}</p>
          <a
            href={pricing.cta.href}
            className="rounded-full bg-ink px-[26px] py-4 text-[17px] font-bold text-white hover:bg-navy"
          >
            {pricing.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
