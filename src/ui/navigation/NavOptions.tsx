import Link from "next/link";

export default function NavOptions() {
  return (
    <>
      <Link
        scroll={false}
        href="/"
        className="text-sm w-svw py-1.5 pl-1 hover:bg-gradient-to-r from-blue-200/75 to-blue-300/50 md:text-base md:w-fit md:h-fit md:hover:bg-none text-gray-800 antialiased hover:text_white_shadow duration-200 ease-out opacity-0 option_anim o_1"
      >
        Home
      </Link>
      <Link
        scroll={false}
        href="/bio"
        className="text-sm w-svw py-1.5 pl-1 hover:bg-gradient-to-r from-blue-200/75 to-blue-300/50 md:text-base md:w-fit md:h-fit md:hover:bg-none text-gray-800 antialiased hover:text_white_shadow duration-200 ease-out opacity-0 option_anim o_2"
      >
        Bio
      </Link>
      <Link
        scroll={false}
        href="/projects"
        className="text-sm w-svw py-1.5 pl-1 hover:bg-gradient-to-r from-blue-200/75 to-blue-300/50 md:text-base md:w-fit md:h-fit md:hover:bg-none text-gray-800 antialiased hover:text_white_shadow duration-200 ease-out opacity-0 option_anim o_3"
      >
        Projects
      </Link>
      <Link
        scroll={false}
        href="/contact"
        className="text-sm w-svw py-1.5 pl-1 hover:bg-gradient-to-r from-blue-200/75 to-blue-300/50 md:text-base md:w-fit md:h-fit md:hover:bg-none text-gray-800 antialiased hover:text_white_shadow duration-200 ease-out opacity-0 option_anim o_4"
      >
        Contact
      </Link>
    </>
  );
}
