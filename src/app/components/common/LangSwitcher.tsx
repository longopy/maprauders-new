"use client";
import { LanguageIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages } from "@/app/i18n/settings";

// @ts-ignore Parameter
export default function LangSwitcher({ lng }) {
  const pathname = usePathname();
  const getLngSelectable = () => {
    return languages.filter((lang) => lang !== lng)[0];
  };
  const lngSelectable = getLngSelectable();

  const getUrl = (lngSelectable: string) => {
    return pathname.replace(lng, lngSelectable);
  };

  return (
    <div>
    <Link className="border-light border-2 rounded-full p-1 text-light hover:bg-accent hover:border-accent bg-transparent group flex items-center" href={getUrl(lngSelectable)}>
      <span className="uppercase group-hover:text-dark text-xs font-bold">
        {lngSelectable}
      </span>
      <LanguageIcon className="h-5 w-5 text-white hover:text-accent inline-block group-hover:text-black" />
    </Link>
    </div>
  );
}
