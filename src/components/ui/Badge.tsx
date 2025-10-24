import { roboto } from "@/app/font/fonts";

interface BadgeProps {
  text: string;
}

const Badge = ({text}:BadgeProps) => {
  return (
    <span className={`badge rounded-[.8rem] py-1 px-2 ${roboto.className}`}>
      {text}
    </span>
  )
}

export default Badge;