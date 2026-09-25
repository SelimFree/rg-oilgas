import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { PageHeaderBlock } from "../components/blocks/PageHeaderBlock";
import { CareersContentBlock } from "../components/blocks/CareersContentBlock";
import CareersBgImage from "../assets/careers/careers_banner.png";

export default function CareersPage() {
    const { t } = useTranslation("careers");
    const { t: tCommon } = useTranslation("common");
    useDocumentTitle(tCommon("navbar.careers"));

    return (
        <div className="flex flex-col">
            <PageHeaderBlock
                title={t("careersPage.header.title")}
                subtitle={t("careersPage.header.subtitle")}
                backgroundImage={CareersBgImage}
            />

            <CareersContentBlock />
        </div>
    );
}