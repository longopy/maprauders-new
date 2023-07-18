"use client";
import { useTranslation } from "@/i18n/client";
import SVG from "react-inlinesvg";


export function Category({ lng, id, selected}: { id: string; lng: string, selected: boolean }) {
  const { t } = useTranslation(lng, "categories");
  const iconSrc: string = `/images/icons/categories/${id}.svg`;
  const text: string = t(id);
  return (
    <button
      className={`bg-transparent hover:text-accent hover:bg-opacity-60 py-2 px-4 border-b border-${id}-tag rounded w-full text-xs uppercase text-left pl-6 inline-flex align-middle gap-2 items-center group ${selected ? 'text-white': 'text-gray-400 line-through'}`}
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
