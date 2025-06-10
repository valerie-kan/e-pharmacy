import { toast } from "react-hot-toast";

export const SuccessToast = (message) => {
  toast.success(message, {
    duration: 2000,
    style: {
      background: "#D7E3FF",
      color: "#407BFF",
      padding: "10px 16px",
      borderRadius: "8px",
      cursor: "pointer",
    },
  });
};
