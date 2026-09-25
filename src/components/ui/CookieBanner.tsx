import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "./Button";
import { Text } from "./Text";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation("common");

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    return (
        <div
            className={cn(
                "fixed bottom-0 left-0 right-0 z-50 w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                // Slides up smoothly from the exact bottom edge
                isVisible ? "translate-y-0" : "translate-y-full pointer-events-none"
            )}
        >
            {/* Full-width corporate bar with rigid top border */}
            <div className="bg-primary-950 border-t-4 border-secondary shadow-[0_-10px_40px_rgba(0,0,0,0.25)] p-4 sm:p-6 w-full">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                    <div className="flex items-center gap-5 flex-1">
                        {/* Rigid square icon container replacing the soft circle */}
                        <div className="bg-white/10 p-3 hidden sm:block shrink-0 border border-white/20">
                            <Cookie className="h-6 w-6 text-secondary" />
                        </div>

                        <div className="space-y-1.5 pr-6">
                            <Text className="text-white uppercase font-black text-xs tracking-widest">
                                {t("cookieBanner.title", "Privacy & Cookies")}
                            </Text>
                            <Text className="text-gray-400 text-sm leading-relaxed max-w-4xl font-medium">
                                {t("cookieBanner.body", "We use cookies to ensure optimal functionality and an enhanced user experience on our platform.")}
                            </Text>
                        </div>
                    </div>

                    {/* Action buttons aligned to the right on desktop */}
                    <div className="flex items-center gap-6 shrink-0 w-full md:w-auto">
                        <Button 
                            size="sm" 
                            onClick={acceptCookies} 
                            // Heavy industrial button styling
                            className="bg-secondary text-primary-950 hover:bg-secondary-500 rounded-sm px-8 py-5 font-black tracking-widest uppercase transition-colors flex-1 md:flex-none cursor-pointer"
                        >
                            {t("cookieBanner.accept", "Accept")}
                        </Button>
                        
                        <Link 
                            to="/cookies" 
                            onClick={() => setIsVisible(false)} 
                            className="text-[10px] font-black text-gray-400 hover:text-white uppercase tracking-widest underline underline-offset-4 whitespace-nowrap transition-colors"
                        >
                            {t("cookieBanner.more", "Learn More")}
                        </Link>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="text-gray-500 hover:text-white transition-colors ml-2 cursor-pointer p-2"
                            aria-label="Close"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}