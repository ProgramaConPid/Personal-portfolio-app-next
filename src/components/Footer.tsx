import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { RiTiktokLine } from "react-icons/ri";
import { roboto } from "@/app/font/fonts";

const Footer = () => {
  return (
    <footer className="footer py-5 flex items-center justify-between lg:absolute lg:bottom-0 lg:left-0 w-full bg-white border-t border-zinc-400">
      <div className="footer__content container flex justify-between items-center">
        <div className="footer__copy">
          <p className={`${roboto.className} text-[--dark-color]`}>
            © 2025 Portfolio. All rights reserved.
          </p>
        </div>
        <div className="footer__social--media flex gap-5">
          <Link className="cursor-pointer" href={"https://github.com/ProgramaConPid"} target="_blank">
            <LuGithub className="text-[1.3rem]" />
          </Link>
          <Link className="cursor-pointer" href={"#"} target="_blank">
            <LuLinkedin className="text-[1.3rem]" />
          </Link>
          <Link className="cursor-pointer" href={"#"} target="_blank">
            <RiTiktokLine className="text-[1.3rem]" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;