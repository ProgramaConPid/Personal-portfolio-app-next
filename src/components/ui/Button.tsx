import { ButtonProps } from "@/interfaces/main"
import Link from "next/link"

const Button = ({leftIcon, children, rightIcon, link, background, flex}: ButtonProps) => {
  return (
    <Link className={`${background} py-2 px-3 rounded-[.6rem] flex items-center justify-center ${flex} gap-2.5 `} href={link}>
      {leftIcon}
      <span>
        {children}
      </span>
      {rightIcon}
    </Link>
  )
}

export default Button;