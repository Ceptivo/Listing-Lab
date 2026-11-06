import Link from "next/link";
import { footer, site } from "@/content";

const linkClass = "text-slate hover:text-ink";

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-hairline">
      <div className="page-container flex flex-wrap justify-between gap-6 pt-14 text-[15px] text-slate">
        <span>{site.copyright}</span>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {footer.socials.map((social) => (
            <a key={social.label} href={social.href} className={linkClass}>
              {social.label}
            </a>
          ))}
          <a href={`mailto:${site.contactEmail}`} className={linkClass}>
            {footer.contactLabel}
          </a>
          {footer.legal.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <p
        aria-hidden="true"
        className="mt-8 mb-[-0.18em] text-center text-[clamp(64px,13.5vw,210px)] leading-none font-extrabold tracking-[-0.06em] whitespace-nowrap text-ghost"
      >
        {footer.wordmark}
      </p>
    </footer>
  );
}
