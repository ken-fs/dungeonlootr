import type { Metadata } from "next";
import { SITE } from "./site";

/**
 * Build complete, consistent page metadata. Centralizes canonical + Open Graph +
 * Twitter so every page emits a correct per-page og:url (not the homepage URL).
 */
export function buildMeta({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string; // e.g. "/codes/"
  /** Skip the layout "%s - Site Name" template when the full title already reads right and fits ~60 chars. */
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      url: path,
      title: absoluteTitle ? `${title} - ${SITE.name}` : title,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}
