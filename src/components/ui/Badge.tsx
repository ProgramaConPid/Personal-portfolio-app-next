// Import custom font for badge styling
import { roboto } from "@/app/font/fonts";
// Import BadgeProps type for props validation
import { BadgeProps } from "@/interfaces/main";

// Badge component for displaying skill or technology tags
const Badge = ({ text, textColor, background }: BadgeProps) => {
  return (
    // Render a styled span with dynamic color and background
    <span
      className={`badge badge__${textColor} badge__${background} rounded-[.8rem] py-1 px-2 ${roboto.className}`}
    >
      {text}
    </span>
  );
};

// Export Badge component as default
export default Badge;
