import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site, termsPage } from "@/content";

export const metadata: Metadata = {
  title: `${termsPage.title} — ${site.name}`,
  description: termsPage.description,
};

export default function TermsPage() {
  return <LegalPage title={termsPage.title} sections={termsPage.sections} />;
}
