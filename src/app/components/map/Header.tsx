"use client";
import AppLogo from "@/app/components/common/AppLogo";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import ThemeChanger from "@/app/components/common/ThemeSwitcher";
import LangSwitcher from "@/app/components/common/LangSwitcher";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export function Header({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const headers: any = t("headers", { returnObjects: true });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap py-4 px-12 bg-transparent">
      <Link
        href="/"
        className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72"
      >
        <AppLogo />
      </Link>
    </nav>
  );
}
