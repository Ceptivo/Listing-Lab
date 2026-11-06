"use client";

import { useEffect, useRef, useState } from "react";
import { nav } from "@/content";
import { Logo } from "./Logo";

export function Nav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white">
      <nav
        aria-label="Main"
        className="page-container flex items-center justify-between gap-4 py-3 lg:py-[22px]"
      >
        <a href="#top" className="flex-none">
          <Logo />
        </a>

        <div className="hidden items-center gap-7 text-[15px] font-medium lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={link.emphasised ? "font-bold text-ink" : "text-slate hover:text-ink"}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={nav.cta.href}
            className="hidden min-h-11 items-center rounded-full bg-ink px-5 py-3 text-[15px] font-bold text-white hover:bg-navy sm:flex"
          >
            {nav.cta.label}
          </a>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((current) => !current)}
            className="flex size-11 items-center justify-center rounded-full border border-silver lg:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-hairline bg-white lg:hidden"
      >
        <div className="page-container flex flex-col py-3">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`flex min-h-12 items-center text-[17px] ${
                link.emphasised ? "font-bold text-ink" : "font-medium text-slate"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            className="mt-3 mb-2 flex min-h-12 items-center justify-center rounded-full bg-ink px-5 py-3 text-[17px] font-bold text-white sm:hidden"
          >
            {nav.cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
