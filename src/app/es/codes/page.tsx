import { LocalizedCodes } from "@/components/i18n-pages";
import { ES, i18nLanguages } from "@/data/i18n";
import { buildMeta } from "@/lib/meta";

export const metadata = buildMeta({
  title: ES.codes.title,
  absoluteTitle: true,
  description: ES.codes.description,
  path: "/es/codes/",
  languages: i18nLanguages("/codes/"),
});

export default function CodesEs() {
  return <LocalizedCodes t={ES} />;
}
