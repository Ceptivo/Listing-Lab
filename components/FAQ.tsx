import { faq } from "@/content";

export function FAQ() {
  return (
    <section id="faq" className="border-t border-hairline">
      <div className="page-container flex flex-wrap gap-x-20 gap-y-12 py-20 md:py-[120px]">
        <h2 className="flex-[1_1_300px] text-[clamp(40px,4.4vw,64px)] leading-none font-extrabold tracking-[-0.045em]">
          {faq.headline}
        </h2>
        <div className="flex flex-[1.6_1_520px] flex-col border-b border-silver">
          {faq.items.map((item) => (
            <details key={item.question} className="group border-t border-silver">
              <summary className="flex list-none items-center justify-between gap-6 py-7 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[22px] font-bold tracking-[-0.02em]">{item.question}</h3>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="flex-none transition-transform group-open:rotate-45 motion-reduce:transition-none"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="-mt-[18px] pr-10 pb-7 text-[17px] leading-[1.6] text-slate">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
