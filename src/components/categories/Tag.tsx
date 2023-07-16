"use client";
import { useTranslation } from "@/i18n/client";
import SVG from "react-inlinesvg";

export function Tag({
  id,
  qty,
  lng,
}: {
  id: string;
  qty: number;
  lng: string;
}) {
  const { t } = useTranslation(lng, "categories");
  const iconSrc: string = `/images/icons/categories/${id}.svg`;
  const text: string = t(id);
  return (
    <div>
      <button className="bg-transparent hover:text-accent hover:bg-opacity-60 text-white py-2 px-4 rounded w-full text-xs uppercase text-left group">
        <span className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2">
            <SVG
              className="group-hover:scale-125"
              src={iconSrc}
              width="20"
              height="20"
              title={`${text} tag icon`}
            />
            {text}
          </span>
          <span className=" text-white text-xs font-medium rounded group-hover:text-accent">
            {qty}
          </span>
        </span>
      </button>
    </div>
  );
}
