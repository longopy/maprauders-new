"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/solid";
import { useState } from "react";
import "../../../styles/sidebar.css";

export function SidebarComponent({ component }: { component: React.ReactNode}) {
  const [collapsed, setSidebarCollapsed] = useState(true);
  return (
    <div
      className={`flex fixed z-10 h-full transition-all ease-in-out duration-150 
    ${collapsed ? "translate-x-sidebar" : "translate-x-0"}`}
    >
      <div
        className="w-sidebar z-10 border-r border-accent h-full bg-dark overflow-y-auto"
      >
        <div className="mt-24">
          {component}
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
