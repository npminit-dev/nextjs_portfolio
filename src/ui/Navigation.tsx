"use client";

import { useRef, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { MdMenu, MdClose } from "react-icons/md";
import NavOptions from "./NavOptions";

export default function Navigation() {
  const hideRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [burgerOpen, setburgerOpen] = useState<boolean>(false);

  return (
    <>
      <div
        ref={hideRef}
        className="absolute bg-transparent h-[1px] w-screen"
      ></div>
      <div
        ref={navRef}
        className="absolute h-12 w-screen mr-4 pr-4 top-0 px-2 py-1 flex items-center justify-between  bg-blue-100 z-50"
      >
        <nav className="hidden md:flex w-[100%] max-w-72 items-center justify-around z-50">
          <NavOptions></NavOptions>
        </nav>
        <label className="md:hidden h-7 w-7 cursor-pointer select-none z-50">
          {burgerOpen ? (
            <MdClose className="relative h-[100%] w-[100%] z-50"></MdClose>
          ) : (
            <MdMenu className="relative h-[100%] w-[100%] z-50"></MdMenu>
          )}
          <input
            type="checkbox"
            className="hidden"
            onClick={() => setburgerOpen(!burgerOpen)}
          ></input>
        </label>
        <ThemeSwitcher></ThemeSwitcher>
      </div>
      <nav
        className={`md:hidden fixed flex flex-col items-start justify-around px-2 w-screen h-30 top-[-176px] left-0 bg-blue-100 opacity-0 duration-200 ease-in-out z-40 ${
          burgerOpen && "flex top-12 opacity-100"
        }`}
      >
        <NavOptions></NavOptions>
      </nav>
    </>
  );
}
