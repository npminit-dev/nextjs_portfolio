"use client";

import { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { theme } from "@/typedefs/home";

export default function ThemeSwitcher() {
  const [theme, settheme] = useState<theme>(
    (localStorage.getItem("theme") as theme) || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "light") document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
  }, [theme]);

  const handleThemeChange = () =>
    settheme(theme === "light" ? "dark" : "light");

  return (
    <div className="inline-block h-6 w-6 m-1 border-[1px] cursor-pointer antialiased">
      <button onClick={handleThemeChange} className="h-[100%] w-[100%]">
        {theme === "dark" ? (
          <IoMoonSharp className="h-[100%] w-[100%] text-blue-950"></IoMoonSharp>
        ) : (
          <MdSunny className="h-[100%] w-[100%] text-blue-950"></MdSunny>
        )}
      </button>
    </div>
  );
}
