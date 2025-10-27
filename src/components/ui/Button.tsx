// Import the ButtonProps interface for type safety
import { ButtonProps } from "@/interfaces/main";
// Import the Link component from Next.js for client-side navigation
import Link from "next/link";

/**
 * Reusable Button component for navigation and actions.
 * Accepts optional left and right icons, custom background, flex styles, and link destination.
 * @param leftIcon - Icon displayed on the left side of the button
 * @param children - Button label or content
 * @param rightIcon - Icon displayed on the right side of the button
 * @param link - Destination URL for navigation
 * @param background - Custom background classes
 * @param flex - Custom flex classes
 */
const Button = ({
  leftIcon,
  children,
  rightIcon,
  link,
  background,
  flex,
}: ButtonProps) => {
  return (
    // Render a styled Next.js Link as a button
    <Link
      className={`${background} py-2 px-3 rounded-[.6rem] flex items-center justify-center ${flex} gap-2.5 `}
      href={link}
    >
      {/* Optional left icon */}
      {leftIcon}
      {/* Button label or content */}
      <span>{children}</span>
      {/* Optional right icon */}
      {rightIcon}
    </Link>
  );
};

// Export the Button component for use in other parts of the app
export default Button;
