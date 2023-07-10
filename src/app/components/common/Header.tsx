"use client";
import AppLogo from "@/app/components/common/AppLogo";
import Link from "next/link";
import { useState } from 'react';
import { useTranslation } from '@/app/i18n/client'
import ThemeChanger from '@/app/components/common/ThemeSwitcher';
import LangSwitcher from '@/app/components/common/LangSwitcher';

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

export function Header({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const headers: any = t("headers", { returnObjects: true });
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4 bg-dark text-black dark:text-light align-middle">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <Link href="/" className="flex-none">
          <AppLogo />
        </Link>
        <ul className="flex gap-4 text-light">
          {links.map(({ id, route }) => (
            <li key={route}>
              <Link href={`/${lng}${route}`}>{headers[id]}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center gap-3 mt-5 sm:justify-end sm:mt-0 sm:pl-5 text-light">
          <ThemeChanger />
          <LangSwitcher lng={lng} />
        </div>
      </nav>
    </header>
  );
}
