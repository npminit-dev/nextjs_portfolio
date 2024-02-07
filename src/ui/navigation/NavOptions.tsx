import Link from "next/link";
import { montserrat } from "@/utils/font_classes";

export default function NavOptions() {
  return (
    <>
      <Link
        scroll={false}
        href="/"
        className="text-sm font-medium w-svw py-1.5 pl-1 tracking-tight hover:bg-gradient-to-r from-blue-200/75 to-blue-300/50 
          md:text-base md:w-fit md:h-fit dark:from-blue-800/30 dark:to-blue-950 md:hover:bg-none text-gray-900 dark:text-slate-300 antialiased 
          hover:text_white_shadow duration-200 dark:hover:text_dark_shadow ease-out opacity-0 option_anim o_1"
        style={montserrat.style}
      >
        Home
      </Link>
      <Link
        scroll={false}
        href="/bio"
        className="text-sm font-medium w-svw py-1.5 pl-1 tracking-tight hover:bg-gradient-to-r from-blue-200/75 to-blue-300/50 
          md:text-base md:w-fit md:h-fit dark:from-blue-800/30 dark:to-blue-950 md:hover:bg-none text-gray-900 dark:text-slate-300 antialiased 
          hover:text_white_shadow duration-200 dark:hover:text_dark_shadow ease-out opacity-0 option_anim o_2"
        style={montserrat.style}
      >
        Bio
      </Link>
      <Link
        scroll={false}
        href="/projects"
        className="text-sm font-medium w-svw py-1.5 pl-1 tracking-tight hover:bg-gradient-to-r from-blue-200/75 to-blue-300/50 
          md:text-base md:w-fit md:h-fit dark:from-blue-800/30 dark:to-blue-950 md:hover:bg-none text-gray-900 dark:text-slate-300 antialiased 
          hover:text_white_shadow duration-200 dark:hover:text_dark_shadow ease-out opacity-0 option_anim o_3"
        style={montserrat.style}
      >
        Projects
      </Link>
      <Link
        scroll={false}
        href="/contact"
        className="text-sm font-medium w-svw py-1.5 pl-1 tracking-tight hover:bg-gradient-to-r from-blue-200/75 to-blue-300/50 
          md:text-base md:w-fit md:h-fit dark:from-blue-800/30 dark:to-blue-950 md:hover:bg-none text-gray-900 dark:text-slate-300 antialiased 
          hover:text_white_shadow duration-200 dark:hover:text_dark_shadow ease-out opacity-0 option_anim o_4"
        style={montserrat.style}
      >
        Contact
      </Link>
    </>
  );
}
