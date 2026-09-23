import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function ContactPage() {

    const { t: tCommon } = useTranslation("common");
    useDocumentTitle(tCommon("navbar.contact"));

    return (
        <div className="flex flex-col">
        </div>
    );
}