import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { RiTiktokLine } from "react-icons/ri";
import { roboto } from "@/app/font/fonts";

const Footer = () => {
  return (
    <footer className="bg-[radial-gradient(circle_at_center,#0B0F19_0%,#020617_100%)] border-t border-[#1e293b] py-8 z-10 relative">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-between items-center gap-6 text-center sm:text-left">
        {/* Texto */}
        <p className={`text-slate-400 text-[0.95rem] hover:text-slate-100 transition-colors duration-300 ${roboto.className}`}>
          © 2025 Portfolio. All rights reserved.
        </p>

        {/* Redes sociales */}
        <div className="flex justify-center sm:justify-end items-center gap-5">
          <Link
            href="https://github.com/ProgramaConPid"
            target="_blank"
            className="text-slate-400 hover:text-indigo-500 transition-transform duration-300 hover:scale-110"
          >
            <LuGithub className="text-[1.3rem]" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="text-slate-400 hover:text-indigo-500 transition-transform duration-300 hover:scale-110"
          >
            <LuLinkedin className="text-[1.3rem]" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="text-slate-400 hover:text-indigo-500 transition-transform duration-300 hover:scale-110"
          >
            <RiTiktokLine className="text-[1.3rem]" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
