"use client";
import { useTranslation } from "@/app/i18n/client";

export function TagSelectorComponent({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const tags: any = t("tags", { returnObjects: true })
  return (
    <div>
        <h1 className="text-white">{tags['title']}</h1>
    </div>
  );
}
