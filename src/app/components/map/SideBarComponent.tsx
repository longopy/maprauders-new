"use client";
import { useTranslation } from "@/app/i18n/client";
import {
    ChevronLeftIcon,
    ChevronRightIcon
} from "@heroicons/react/24/solid";
import { Component, useState } from "react";
import { TagSelectorComponent } from '@/app/components/map/TagSelectorComponent';

export function SidebarComponent({lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const [collapsed, setSidebarCollapsed] = useState(true);
  return (
    <div
      className={`flex fixed z-10 h-full  transition-all ease-in-out duration-200 
    ${collapsed ? "-translate-x-96" : "translate-x-0"}`}
    >
      <div
        className="w-96 z-10 border-r border-accent h-full bg-dark"
      >
        <div className="mt-20 p-8">
          <TagSelectorComponent lng={lng} />
        </div>
      </div>
      <div className="mt-24 text-white z-20">
        <button
          className="bg-dark pl-1 pr-2 py-3 border-accent border-l-0 border rounded-r-lg scale-105 group"
          onClick={() => setSidebarCollapsed((prev) => !prev)}
        >
          {collapsed ? (
            <ChevronRightIcon className="w-6 h-6 group-hover:scale-125 group-hover:text-accent" />
          ) : (
            <ChevronLeftIcon className="w-6 h-6 group-hover:scale-125 group-hover:text-accent" />
          )}
        </button>
      </div>
    </div>
  );
}
