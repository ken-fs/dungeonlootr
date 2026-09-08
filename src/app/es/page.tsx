import type { Metadata } from "next";
import { LocalizedHome } from "@/components/i18n-pages";
import { ES, i18nLanguages } from "@/data/i18n";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: ES.home.title },
  description: ES.home.description,
  alternates: { canonical: "/es/", languages: i18nLanguages("/") },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: "/es/",
    title: ES.home.title,
    description: ES.home.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
  },
};

export default function HomeEs() {
  return <LocalizedHome t={ES} />;
}
