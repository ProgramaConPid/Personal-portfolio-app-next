import { ButtonProps } from "@/interfaces/main"
import Link from "next/link"

const Button = ({leftIcon, children, rightIcon, link, background}: ButtonProps) => {
  return (
    <Link className={`${background} py-2 px-3 rounded-[.6rem] flex items-center justify-center gap-4`} href={link}>
      {leftIcon}
      <span>
        {children}
      </span>
      {rightIcon}
    </Link>
  )
}

export default Button;