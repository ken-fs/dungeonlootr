import type { Metadata } from "next";
import { LocalizedHome } from "@/components/i18n-pages";
import { PT_BR, i18nLanguages } from "@/data/i18n";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: PT_BR.home.title },
  description: PT_BR.home.description,
  alternates: { canonical: "/pt-br/", languages: i18nLanguages("/") },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: "/pt-br/",
    title: PT_BR.home.title,
    description: PT_BR.home.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
  },
};

export default function HomePtBr() {
  return <LocalizedHome t={PT_BR} />;
}
