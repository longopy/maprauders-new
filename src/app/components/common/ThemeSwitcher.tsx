"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from 'react';

const themeIcons = {
  light: <SunIcon className="h-5 w-5 text-white" />,
  dark: <MoonIcon className="h-5 w-5 text-white" />,
};

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  
  const getNextTheme = () => {
    return theme === "dark" ? "light" : "dark";
  };
  return (
    <span className="flex flex-col border-light border-2 rounded-full p-1">
      <button onClick={() => setTheme(getNextTheme())}>
        {themeIcons[getNextTheme()]}
      </button>
    </span>
  );
}
