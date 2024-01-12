import Link from "next/link";

export default function NavOptions() {
  return (
    <>
      <Link
        href="/"
        className="text-base md:text-lg text-blue-950 antialiased hover:scale-105 duration-[50] ease-out"
      >
        Home
      </Link>
      <Link
        href="/bio"
        className="text-base md:text-lg text-blue-950 antialiased hover:scale-105 duration-[50] ease-out"
      >
        Bio
      </Link>
      <Link
        href="/projects"
        className="text-base md:text-lg text-blue-950 antialiased hover:scale-105 duration-75 ease-out"
      >
        Projects
      </Link>
      <Link
        href="/contact"
        className="text-base md:text-lg text-blue-950 antialiased hover:scale-105 duration-75 ease-out"
      >
        Contact
      </Link>
    </>
  );
}
