"use client";

import ThemeSwitcher from "./ThemeSwitcher";
import { MdClose } from "react-icons/md";
import NavOptions from "./NavOptions";
import { FiMenu } from "react-icons/fi";
import useCollapsibleNavBar from "@/customhooks/useCollapsibleNavbar";

export default function Navigation() {
  const {
    burgerOpen,
    setburgerOpen,
    navRef,
    hideRef,
    floatingMenuRef,
    restart,
  } = useCollapsibleNavBar();

  return (
    <>
      <div
        ref={hideRef}
        className="fixed top-0 bg-transparent h-[1px] w-dvw z-[100]"
      ></div>
      <span ref={navRef} className="fixed h-12 w-dvw top-0 z-50 nav_appear">
        <div className="mr-4 pr-4 h-12 w-dvw px-2 py-1 flex items-center justify-between bg-gradient-to-br from-blue-200 to-blue-300">
          <nav className="hidden pl-4 md:flex w-[100%] max-w-72 items-center justify-between z-50">
            <NavOptions></NavOptions>
          </nav>
          <label className="md:hidden h-6 w-6 cursor-pointer select-none z-50">
            {burgerOpen ? (
              <MdClose className="relative h-[100%] w-[100%] z-50 icon_appear"></MdClose>
            ) : (
              <FiMenu className="relative h-[100%] w-[100%] z-50 icon_appear"></FiMenu>
            )}
            <input
              type="checkbox"
              className="hidden"
              onClick={() => {
                setburgerOpen(!burgerOpen);
                restart();
              }}
            ></input>
          </label>
          <ThemeSwitcher></ThemeSwitcher>
        </div>
      </span>
      <nav
        ref={floatingMenuRef}
        onClick={() => setburgerOpen(false)}
        className={`md:hidden fixed flex flex-col items-start justify-around px-2 w-dvw h-fit left-0 bg-blue-200 duration-200 ease-in-out transition-all z-40 ${
          burgerOpen ? "flex top-12" : "top-[-184px]"
        }`}
      >
        <NavOptions></NavOptions>
      </nav>
      {burgerOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-gray-500/25"
          onClick={() => setburgerOpen(false)}
        ></div>
      )}
    </>
  );
}
