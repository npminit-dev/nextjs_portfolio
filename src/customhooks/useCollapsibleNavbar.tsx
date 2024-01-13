import { useEffect, useRef, useState } from "react";

export default function useCollapsibleNavBar() {
  const [burgerOpen, setburgerOpen] = useState<boolean>(false);
  const hideRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLSpanElement | null>(null);
  const floatingMenuRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (navRef.current && hideRef.current && floatingMenuRef.current) {
      closeTimer.current = setTimeout(() => {
        navRef.current && hide(navRef.current);
      }, 5000);
      hideRef.current.addEventListener("mouseenter", () => restart());
      navRef.current.addEventListener("mousemove", () => restart());
      floatingMenuRef.current?.addEventListener("mousemove", () => restart());
      globalThis.addEventListener("scroll", () => restart());
    }
  }, []);

  const restart = () => {
    navRef.current && show(navRef.current);
    closeTimer.current && clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      navRef.current && hide(navRef.current);
    }, 4000);
  };

  const hide = (node: HTMLSpanElement | HTMLDivElement) => {
    node.classList.replace("nav_appear", "nav_disappear");
    setburgerOpen(false);
  };

  const show = (node: HTMLSpanElement | HTMLDivElement) => {
    node.classList.replace("nav_disappear", "nav_appear");
  };

  return {
    burgerOpen,
    setburgerOpen,
    hideRef,
    navRef,
    floatingMenuRef,
    restart,
  };
}
