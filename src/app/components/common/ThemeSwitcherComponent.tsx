"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const classes = "h-4 w-4 text-white group-hover:text-black";

const themeIcons = {
  light: <SunIcon className={classes} />,
  dark: <MoonIcon className={classes} />,
};

export default function ThemeSwitcherComponent() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const getNextTheme = () => {
    return theme === "dark" ? "light" : "dark";
  };
  return (
    <div>
      <button
        className="border-light border-2 rounded-full bg-transparent hover:bg-accent hover:border-accent group p-1.5"
        onClick={() => setTheme(getNextTheme())}
      >
        {themeIcons[getNextTheme()]}
      </button>
    </div>
  );
}
