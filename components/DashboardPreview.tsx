import { dashboard } from "@/content";
import { LogoIcon } from "./Logo";

/** Light to dark, matching the order of pipeline stages in content.ts. */
const pipelineStyles = [
  { box: "bg-surface", label: "text-slate" },
  { box: "bg-silver", label: "text-slate-dark" },
  { box: "bg-mist", label: "text-navy" },
  { box: "bg-slate-dark text-white", label: "text-silver" },
  { box: "bg-ink text-white", label: "text-silver" },
];

export function DashboardPreview() {
  const { preview } = dashboard;

  return (
    <section id="dashboard" className="border-t border-hairline">
      <div className="page-container py-20 md:py-[120px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-x-20 gap-y-8 md:mb-16">
          <div className="flex-[1_1_560px]">
            <p className="mb-5 text-[14px] font-semibold tracking-[0.14em] text-slate uppercase">
              {dashboard.eyebrow}
            </p>
            <h2 className="text-[clamp(44px,5.6vw,84px)] leading-[0.95] font-extrabold tracking-[-0.05em]">
              {dashboard.headline}
              <br />
              <span className="text-slate">{dashboard.headlineMuted}</span>
            </h2>
          </div>
          <p className="flex-[1_1_340px] text-[19px] leading-[1.55] text-slate">{dashboard.body}</p>
        </div>

        {/* App window */}
        <div
          role="img"
          aria-label={dashboard.previewLabel}
          className="rounded-[28px] border border-silver bg-surface p-2 shadow-[0_40px_80px_-40px_rgba(6,20,27,0.35)] md:p-[14px]"
        >
          <div className="overflow-hidden rounded-[18px] border border-hairline bg-white">
            <div className="flex items-center gap-2 border-b border-hairline px-[18px] py-[14px]">
              <span className="size-[11px] flex-none rounded-full bg-silver" />
              <span className="size-[11px] flex-none rounded-full bg-silver" />
              <span className="size-[11px] flex-none rounded-full bg-silver" />
              <span className="ml-4 rounded-lg bg-surface px-[14px] py-[6px] text-[13px] text-slate">
                {preview.url}
              </span>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="flex flex-wrap gap-1 border-b border-hairline p-4 text-[15px] font-semibold md:flex-[0_0_233px] md:flex-col md:flex-nowrap md:border-r md:border-b-0 md:px-4 md:py-6">
                <span className="flex w-full items-center gap-[10px] px-3 pb-3 text-[16px] font-extrabold tracking-[-0.02em] md:pb-5">
                  <LogoIcon size={22} />
                  {preview.appName}
                </span>
                {preview.sidebar.map((item, index) => (
                  <span
                    key={item}
                    className={
                      index === 0
                        ? "rounded-[10px] bg-ink px-3 py-[11px] text-white"
                        : "px-3 py-[11px] text-slate"
                    }
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Main */}
              <div className="flex min-w-0 flex-1 flex-col gap-6 bg-wash p-4 md:p-8">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="mb-[6px] text-[14px] text-slate">{preview.date}</p>
                    <p className="text-[34px] font-extrabold tracking-[-0.04em]">
                      {preview.greeting}
                    </p>
                  </div>
                  <span className="rounded-full bg-ink px-[18px] py-3 text-[14px] font-bold text-white">
                    {preview.newListing}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {preview.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex-[1_1_140px] rounded-2xl border border-hairline bg-white p-[18px]"
                    >
                      <p className="mb-2 text-[13px] text-slate">{stat.label}</p>
                      <p className="text-[32px] font-extrabold tracking-[-0.04em]">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="min-w-0 flex-[1_1_260px] rounded-2xl border border-hairline bg-white p-[22px] lg:flex-[1_1_300px]">
                    <p className="mb-4 text-[16px] font-bold">{preview.scheduleTitle}</p>
                    <div className="flex flex-col">
                      {preview.schedule.map((entry) => (
                        <div
                          key={entry.time}
                          className="flex gap-4 border-t border-surface py-3 text-[14px]"
                        >
                          <span className="min-w-12 font-bold">{entry.time}</span>
                          <span className="text-slate">{entry.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="min-w-0 flex-[1_1_260px] rounded-2xl border border-hairline bg-white p-[22px] lg:flex-[1_1_300px]">
                    <p className="mb-4 text-[16px] font-bold">{preview.followUpsTitle}</p>
                    <div className="mb-3 rounded-xl bg-surface p-4">
                      <p className="mb-[6px] text-[13px] font-bold text-slate">
                        {preview.draft.label}
                      </p>
                      <p className="mb-[14px] text-[14px] leading-[1.5]">{preview.draft.text}</p>
                      <div className="flex gap-2">
                        <span className="rounded-full bg-ink px-[14px] py-2 text-[13px] font-bold text-white">
                          {preview.draft.send}
                        </span>
                        <span className="rounded-full border border-mist px-[13px] py-[7px] text-[13px] font-semibold">
                          {preview.draft.edit}
                        </span>
                      </div>
                    </div>
                    {preview.followUps.map((item) => (
                      <div
                        key={item.text}
                        className="flex justify-between gap-3 border-t border-surface py-[10px] text-[14px]"
                      >
                        <span>{item.text}</span>
                        <span className="whitespace-nowrap text-slate">{item.when}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-hairline bg-white p-[22px]">
                  <p className="mb-4 text-[16px] font-bold">{preview.pipelineTitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {preview.pipeline.map((stage, index) => (
                      <div
                        key={stage.label}
                        className={`flex-[1_1_110px] rounded-[10px] p-[14px] ${pipelineStyles[index].box}`}
                      >
                        <p className={`mb-1 text-[13px] ${pipelineStyles[index].label}`}>
                          {stage.label}
                        </p>
                        <p className="text-[22px] font-extrabold">{stage.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-10 md:mt-16">
          {dashboard.features.map((feature) => (
            <div key={feature.title} className="flex-[1_1_240px]">
              <h3 className="mb-[10px] text-[24px] font-bold tracking-[-0.025em]">
                {feature.title}
              </h3>
              <p className="text-[17px] leading-[1.55] text-slate">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
