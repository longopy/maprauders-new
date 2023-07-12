"use client";
import AppLogoComponent from "@/app/components/common/AppLogoComponent";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import ThemeSwitcherComponent from "@/app/components/common/ThemeSwitcherComponent";
import LangSwitcherComponent from "@/app/components/common/LangSwitcherComponent";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


const links = [
  {
    id: "maps",
    route: "/maps",
  },
  {
    id: "about",
    route: "/about",
  },
];

export function HeaderComponent({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const headers: any = t("headers", { returnObjects: true });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap py-4 px-14 bg-dark border-b dark:border-zinc-100 dark:border-opacity-20">
      <Link
        href="/"
        className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72"
      >
        <AppLogoComponent />
      </Link>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <Bars3Icon className={`fill-current text-white hover:text-accent h-8 w-8 ${isOpen ? "hidden" : "block"}`} />
          <XMarkIcon className={`fill-current text-white hover:text-accent h-8 w-8 ${isOpen ? "block" : "hidden"}`} />
        </button>
      </div>
      <div
        className={`w-full block lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow rounded border-black mr-4">
          {links.map(({ id, route }) => (
            <span
              key={route}
              className="block mt-6 lg:inline-block lg:mt-0 text-white-200 mr-6 align-middle lg:mt0 text-base text-light hover:text-accent font-medium underline-none hover:underline-offset-8 hover:underline"
            >
              <Link href={`/${lng}${route}`} >
                {headers[id]}
              </Link>
            </span>
          ))}
        </div>
        <div className="flex gap-3 text-white mt-2 lg:mt-0 mr-4 lg:mr-0 justify-end">
          <ThemeSwitcherComponent />
          <LangSwitcherComponent lng={lng} />
        </div>
      </div>
    </nav>
  );
}