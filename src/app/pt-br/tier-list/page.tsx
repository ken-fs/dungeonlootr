import { LocalizedTierList } from "@/components/i18n-pages";
import { PT_BR, i18nLanguages } from "@/data/i18n";
import { buildMeta } from "@/lib/meta";

export const metadata = buildMeta({
  title: PT_BR.tierList.title,
  absoluteTitle: true,
  description: PT_BR.tierList.description,
  path: "/pt-br/tier-list/",
  languages: i18nLanguages("/tier-list/"),
});

export default function TierListPtBr() {
  return <LocalizedTierList t={PT_BR} />;
}
