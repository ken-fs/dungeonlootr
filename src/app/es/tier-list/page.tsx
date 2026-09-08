import { LocalizedTierList } from "@/components/i18n-pages";
import { ES, i18nLanguages } from "@/data/i18n";
import { buildMeta } from "@/lib/meta";

export const metadata = buildMeta({
  title: ES.tierList.title,
  absoluteTitle: true,
  description: ES.tierList.description,
  path: "/es/tier-list/",
  languages: i18nLanguages("/tier-list/"),
});

export default function TierListEs() {
  return <LocalizedTierList t={ES} />;
}
