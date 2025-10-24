"use client"

import Link from "next/link"
import { FaRegMoon } from "react-icons/fa";
import { roboto, montserrat } from "@/app/font/fonts";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="nav py-5 bg-white w-full">
      <div className="container__nav container flex justify-between">
        <div className="nav__logo">
          <h2 className={`font-bold text-[1.3rem] ${montserrat.className}`}>Felipe Marin</h2>
        </div>
        <div className="nav__links flex gap-10 items-center">
          <ul className={`nav__list flex gap-5 ${roboto.className}`}>
            <Link className={`nav__link ${pathname === "/" ? "active" : "" }`} href={"/"}>
              Home
            </Link>
            <Link className={`nav__link ${pathname === "/about" ? "active" : "" }`} href={"/about"}>
              About
            </Link>
            <Link className={`nav__link ${pathname === "/projects" ? "active" : "" }`} href={"/projects"}>
              Projects
            </Link>
            <Link className={`nav__link ${pathname === "/contact" ? "active" : "" }`} href={"/contact"}>
              Contact
            </Link>
          </ul>
          <FaRegMoon className="nav__icon--theme font-bold cursor-pointer" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;