"use client";
import { useTranslation } from "@/i18n/client";
import SVG from "react-inlinesvg";

export function Tag({
  lng,
  id,
  qty,
  selected
}: {
  lng: string;
  id: string;
  qty: number;
  selected: boolean;
}) {
  const { t } = useTranslation(lng, "categories");
  const iconSrc: string = `/images/icons/categories/${id}.svg`;
  const text: string = t(id);
  return (
    <div>
      <button className="bg-transparent hover:text-accent hover:bg-opacity-60py-2 px-4 rounded w-full text-xs uppercase text-left group">
        <span className="flex items-center justify-between">
          <span className={`inline-flex items-center gap-2 ${selected ? 'text-white': 'text-gray-400 line-through'}`}>
            <SVG
              className="group-hover:scale-125"
              src={iconSrc}
              width="20"
              height="20"
              title={`${text} tag icon`}
            />
            {text}
          </span>
          <span className={`text-xs font-medium rounded group-hover:text-accent ${selected ? 'text-white': 'text-gray-400'}`}>
            {qty}
          </span>
        </span>
      </button>
    </div>
  );
}
