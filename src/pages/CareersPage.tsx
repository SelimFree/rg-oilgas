import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function CareersPage() {

    const { t: tCommon } = useTranslation("common");
    useDocumentTitle(tCommon("navbar.careers"));

    return (
        <div className="flex flex-col">
        </div>
    );
}