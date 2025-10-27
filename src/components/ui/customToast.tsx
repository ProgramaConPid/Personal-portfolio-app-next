// Import custom fonts for styling
import { montserrat, roboto } from "@/app/font/fonts";
// Import Lucide icons for toast types
import {
  LucideCheckCircle,
  LucideAlertTriangle,
  LucideInfo,
  LucideXCircle,
} from "lucide-react";

// Props for the CustomToast component
type CustomToastProps = {
  title: string; // Toast title
  message: string; // Toast message
  type?: "success" | "error" | "info" | "warning"; // Toast type
};

// Icon mapping for each toast type
const icons = {
  success: <LucideCheckCircle size={20} className="text-(--primary-color)" />,
  error: <LucideXCircle size={20} className="text-(--accent-color)" />,
  info: <LucideInfo size={20} className="text-(--secondary-color)" />,
  warning: <LucideAlertTriangle size={20} className="text-yellow-400" />,
};

// CustomToast component for displaying styled notifications
export const CustomToast = ({
  title,
  message,
  type = "info",
}: CustomToastProps) => {
  return (
    // Toast container with background, border, and shadow
    <div
      className={`flex items-start gap-3 p-4 rounded-2xl 
      bg-[#0B0F19]/80 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.15)]
      border border-[rgba(255,255,255,0.08)] text-(--text-foreground) max-w-sm`}
    >
      {/* Icon for the toast type */}
      <div className="pt-0.5">{icons[type]}</div>

      {/* Toast text content */}
      <div className="flex flex-col">
        <h4
          className={`${montserrat.className} font-semibold text-(--text-foreground)`}
        >
          {title}
        </h4>
        <p
          className={`${roboto.className} text-sm text-slate-400 leading-snug`}
        >
          {message}
        </p>
      </div>
    </div>
  );
};
