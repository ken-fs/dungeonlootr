import { LocalizedCodes } from "@/components/i18n-pages";
import { PT_BR, i18nLanguages } from "@/data/i18n";
import { buildMeta } from "@/lib/meta";

export const metadata = buildMeta({
  title: PT_BR.codes.title,
  absoluteTitle: true,
  description: PT_BR.codes.description,
  path: "/pt-br/codes/",
  languages: i18nLanguages("/codes/"),
});

export default function CodesPtBr() {
  return <LocalizedCodes t={PT_BR} />;
}
