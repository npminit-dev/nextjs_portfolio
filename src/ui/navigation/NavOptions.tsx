import Link from "next/link";

export default function NavOptions() {
  return (
    <>
      <Link
        href="/"
        className="text-sm w-svw py-1.5 pl-1 hover:bg-gradient-to-r from-blue-200 to-blue-300 md:text-base md:w-fit md:h-fit md:hover:bg-none text-gray-800 antialiased hover:text_white_shadow duration-200 ease-out opacity-0 option_anim o_1"
      >
        Home
      </Link>
      <Link
        href="/projects"
        className="text-sm w-svw py-1.5 pl-1 hover:bg-gradient-to-r from-blue-200 to-blue-300 md:text-base md:w-fit md:h-fit md:hover:bg-none text-gray-800 antialiased hover:text_white_shadow duration-200 ease-out opacity-0 option_anim o_2"
      >
        Projects
      </Link>
      <Link
        href="/bio"
        className="text-sm w-svw py-1.5 pl-1 hover:bg-gradient-to-r from-blue-200 to-blue-300 md:text-base md:w-fit md:h-fit md:hover:bg-none text-gray-800 antialiased hover:text_white_shadow duration-200 ease-out opacity-0 option_anim o_3"
      >
        Bio
      </Link>
      <Link
        href="/contact"
        className="text-sm w-svw py-1.5 pl-1 hover:bg-gradient-to-r from-blue-200 to-blue-300 md:text-base md:w-fit md:h-fit md:hover:bg-none text-gray-800 antialiased hover:text_white_shadow duration-200 ease-out opacity-0 option_anim o_4"
      >
        Contact
      </Link>
    </>
  );
}
