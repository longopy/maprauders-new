"use client";
import { useTranslation } from "@/i18n/client";
import SVG from "react-inlinesvg";


export function Category({ id, lng }: { id: string; lng: string }) {
  const { t } = useTranslation(lng, "categories");
  const iconSrc: string = `/images/icons/categories/${id}.svg`;
  const text: string = t(id);
  return (
    <button
      className={`bg-transparent hover:text-accent hover:bg-opacity-60 text-white py-2 px-4 border-b border-${id}-tag rounded w-full text-xs uppercase text-left pl-6 inline-flex align-middle gap-2 items-center group`}
    >
      <SVG
        className="group-hover:scale-125"
        src={iconSrc}
        width="20"
        height="20"
        title={`${text} tag icon`}
      />
      {text}
    </button>
  );
}
