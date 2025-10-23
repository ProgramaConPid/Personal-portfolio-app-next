import Link from "next/link"
import { FaRegMoon } from "react-icons/fa";
import { roboto, montserrat } from "@/app/font/fonts";

const Navbar = () => {
  return (
    <nav className="nav py-5 bg-white border-b border-zinc-400 absolute top-0 left-0 w-full">
      <div className="container__nav container flex justify-between">
        <div className="nav__logo">
          <h2 className={`font-bold text-[1.3rem] ${montserrat.className}`}>Felipe Marin</h2>
        </div>
        <div className="nav__links flex gap-10 items-center">
          <ul className={`nav__list flex gap-5 ${roboto.className}`}>
            <Link href={"/"}>
              Home
            </Link>
            <Link href={"/about"}>
              About
            </Link>
            <Link href={"/projects"}>
              Projects
            </Link>
            <Link href={"/contact"}>
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