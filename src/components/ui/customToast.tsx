import { montserrat, roboto } from "@/app/font/fonts";
import { LucideCheckCircle, LucideAlertTriangle, LucideInfo, LucideXCircle } from "lucide-react";

type CustomToastProps = {
  title: string;
  message: string;
  type?: "success" | "error" | "info" | "warning";
};

const icons = {
  success: <LucideCheckCircle size={20} className="text-(--primary-color)" />,
  error: <LucideXCircle size={20} className="text-(--accent-color)" />,
  info: <LucideInfo size={20} className="text-(--secondary-color)" />,
  warning: <LucideAlertTriangle size={20} className="text-yellow-400" />,
};

export const CustomToast = ({
  title,
  message,
  type = "info",
}: CustomToastProps) => {
  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-2xl 
      bg-[#0B0F19]/80 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.15)]
      border border-[rgba(255,255,255,0.08)] text-(--text-foreground) max-w-sm`}
    >
      <div className="pt-0.5">{icons[type]}</div>

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
