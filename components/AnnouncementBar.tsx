import { announcement } from "@/content";

export function AnnouncementBar() {
  return (
    <a
      href={announcement.href}
      className="block bg-ink px-6 py-3 text-center text-[15px] font-semibold text-white"
    >
      {announcement.text}
    </a>
  );
}
