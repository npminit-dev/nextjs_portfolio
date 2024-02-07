"use client";

import { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { theme } from "@/typedefs/Nav_Types";

export default function ThemeSwitcher() {
  const [theme, settheme] = useState<theme>('light');

  useEffect(() => {
    let localTheme = localStorage.getItem('theme')
    if(!localTheme) localStorage.setItem('theme', theme)
    else settheme(localTheme as theme)
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme)
    if(theme === 'light') document.documentElement.classList.remove('dark')
    else document.documentElement.classList.add('dark')
  }, [theme]);

  const handleThemeChange = () =>
    settheme(theme === "light" ? "dark" : "light");

  return (
    <div className="inline-block h-6 w-6 m-1 cursor-pointer antialiased">
      <button onClick={handleThemeChange} aria-label="Button to switch the color theme of the page" className="h-[100%] w-[100%]">
        {theme === "dark" ? (
          <IoMoonSharp className="h-[100%] w-[100%] text-gray-50 icon_appear"></IoMoonSharp>
        ) : (
          <MdSunny className="h-[100%] w-[100%] text-yellow-500 icon_appear"></MdSunny>
        )}
      </button>
    </div>
  );
}
