import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyPage, site } from "@/content";

export const metadata: Metadata = {
  title: `${privacyPage.title} — ${site.name}`,
  description: privacyPage.description,
};

export default function PrivacyPage() {
  return <LegalPage title={privacyPage.title} sections={privacyPage.sections} />;
}
