import { toast } from "react-toastify";
import { CustomToast } from "../components/ui/customToast";

// Custom notifications using react-toastify library
export const customNotification = (
  title: string,
  message: string,
  type: "success" | "error" | "info" | "warning" = "info"
) => {
  toast(<CustomToast title={title} message={message} type={type} />, {
    position: "top-right",
    autoClose: 4000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};
