import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";
import { Text } from "./Text";

export function Loading({ className }: { className?: string }) {
  const { t } = useTranslation("common");

  return (
    <div className={cn("flex min-h-[60vh] w-full flex-col items-center justify-center bg-gray-50", className)}>
      <div className="flex flex-col items-center gap-6">

        <div className="flex items-center gap-3">
          <div className="h-3 w-3 animate-pulse rounded-sm bg-primary-900 [animation-delay:-0.3s]"></div>
          <div className="h-3 w-3 animate-pulse rounded-sm bg-secondary [animation-delay:-0.15s]"></div>
          <div className="h-3 w-3 animate-pulse rounded-sm bg-primary-900"></div>
        </div>

        <Text className="text-[10px] font-black tracking-[0.3em] text-primary-900 uppercase">
          {t("loading.message", "Loading...")}
        </Text>

      </div>
    </div>
  );
}