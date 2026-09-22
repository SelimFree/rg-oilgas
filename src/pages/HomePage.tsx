import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { HeroBlock } from "../components/blocks/HeroBlock";
import { AboutTeaserBlock } from "../components/blocks/AboutTeaserBlock";
import { FeaturedServicesBlock } from "../components/blocks/FeaturedServicesBlock";
import { CompanyCompassBlock } from "../components/blocks/CompanyCompassBlock";

export default function HomePage() {

  const { t: tCommon } = useTranslation("common");
  useDocumentTitle(tCommon("navbar.home"));

  return (
    <div className="flex flex-col">
      <HeroBlock />
      <AboutTeaserBlock />
      <FeaturedServicesBlock />
      <CompanyCompassBlock />
    </div>
  );
}