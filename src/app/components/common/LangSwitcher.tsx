"use client";
import { LanguageIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages } from "../../i18n/settings";

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
    <div className="flex flex-col border-light border-2 rounded-full p-1 text-light">
      <Link href={getUrl(lngSelectable)}>
        <span className="align-middle uppercase">{lngSelectable}</span>{" "}
        <LanguageIcon className="h-4 w-4 text-white inline-block" />
      </Link>
    </div>
  );
}
