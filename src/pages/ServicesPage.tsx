import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function ServicesPage() {

    const { t: tCommon } = useTranslation("common");
    useDocumentTitle(tCommon("navbar.services"));

    return (
        <div className="flex flex-col">
        </div>
    );
}