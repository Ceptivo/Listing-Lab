import { socialProof } from "@/content";

function PlaceholderTag({ label }: { label: string }) {
  return (
    <span className="self-start rounded-full border border-dashed border-mist px-[10px] py-1 text-[11px] font-bold tracking-[0.08em] whitespace-nowrap text-slate uppercase">
      {label}
    </span>
  );
}

export function SocialProof() {
  return (
    <section className="bg-surface">
      <div className="page-container py-20 md:py-[120px]">
        <div className="mb-12 flex flex-wrap gap-8 border-b border-silver pb-12 md:mb-[72px] md:pb-[72px]">
          {socialProof.stats.map((stat) => (
            <div key={stat.label} className="flex flex-[1_1_240px] flex-col gap-[10px] py-2">
              {stat.tag && <PlaceholderTag label={stat.tag} />}
              <p className="text-[clamp(64px,7vw,104px)] leading-[0.95] font-extrabold tracking-[-0.055em]">
                {stat.value}
              </p>
              <p className="text-[18px] leading-[1.45] text-slate">{stat.label}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-12 text-[clamp(40px,5vw,72px)] leading-none font-extrabold tracking-[-0.045em]">
          {socialProof.headline}
        </h2>
        <div className="flex flex-wrap gap-4">
          {socialProof.reviews.map((review) => (
            <figure
              key={review.quote}
              className="flex flex-[1_1_300px] flex-col gap-5 rounded-3xl border border-hairline bg-white p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  role="img"
                  aria-label={`${review.stars} out of 5 stars`}
                  className="text-[18px] tracking-[2px]"
                >
                  {"★".repeat(review.stars)}
                </span>
                {review.tag && <PlaceholderTag label={review.tag} />}
              </div>
              <blockquote className="grow text-[21px] leading-[1.45] font-semibold tracking-[-0.015em]">
                “{review.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span aria-hidden="true" className="size-11 flex-none rounded-full bg-silver" />
                <div>
                  <p className="text-[15px] font-bold">{review.name}</p>
                  <p className="text-[14px] text-slate">{review.detail}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
