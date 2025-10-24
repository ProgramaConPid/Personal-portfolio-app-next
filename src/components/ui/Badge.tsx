import { roboto } from "@/app/font/fonts";
import { BadgeProps } from "@/interfaces/main";

const Badge = ({text, textColor, background}:BadgeProps) => {
  return (
    <span className={`badge badge__${textColor} badge__${background} rounded-[.8rem] py-1 px-2 ${roboto.className}`}>
      {text}
    </span>
  )
}

export default Badge;