"use client";

import ThemeSwitcher from "./ThemeSwitcher";
import { MdClose } from "react-icons/md";
import NavOptions from "./NavOptions";
import { FiMenu } from "react-icons/fi";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

export default function Navigation() {
  const [burgerOpen, setburgerOpen] = useState<boolean>(false);
  const hideRef = useRef() as MutableRefObject<HTMLDivElement>;
  const navRef = useRef() as MutableRefObject<HTMLSpanElement>;
  const floatingMenuRef = useRef() as MutableRefObject<HTMLElement>;
  const closeTimer = useRef() as MutableRefObject<NodeJS.Timeout>;

  useEffect(() => {
    closeTimer.current = setTimeout(() => {
      hideNav(navRef.current, setburgerOpen);
    }, 4000);
    hideRef.current.addEventListener("mouseenter", () => restart());
    navRef.current.addEventListener("mousemove", () => restart());
    floatingMenuRef.current.addEventListener("mousemove", () => restart());
    globalThis.addEventListener("scroll", () => restart());
  }, []);

  const restart = () => {
    showNav(navRef.current);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      hideNav(navRef.current, setburgerOpen);
    }, 3000);
  };

  const hideNav = (
    node: HTMLSpanElement | HTMLDivElement,
    setstate: Dispatch<SetStateAction<boolean>>
  ) => {
    node.classList.replace("nav_appear", "nav_disappear");
    setstate(false);
  };

  const showNav = (node: HTMLSpanElement | HTMLDivElement) =>
    node.classList.replace("nav_disappear", "nav_appear");

  return (
    <>
      <div
        ref={hideRef}
        className="fixed top-0 bg-transparent h-[1px] w-svw z-[100]"
      ></div>
      <span
        ref={navRef}
        className="fixed h-8 md:h-10 w-svw top-0 z-50 nav_appear"
      >
        <div className="mr-4 pr-4 h-10 md:h-10 w-svw px-2 py-1 flex items-center justify-between bg-gradient-to-br from-blue-200 to-blue-300 opacity-85 shadow-sm shadow-gray-500">
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
        className={`md:hidden shadow-sm shadow-gray-500 fixed flex flex-col items-start justify-around px-2 w-svw h-fit left-0 bg-blue-200/90 duration-200 ease-in-out transition-all z-40 ${
          burgerOpen ? "flex top-10" : "top-[-184px]"
        }`}
      >
        <NavOptions></NavOptions>
      </nav>
      {burgerOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-gray-500/25 z-30"
          onClick={() => setburgerOpen(false)}
        ></div>
      )}
    </>
  );
}
