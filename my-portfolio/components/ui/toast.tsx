import * as React from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type = "info", duration = 3000 }) => {
  // simple implementation
  return (
    <div className={`toast toast-${type}`}>
      {message}
    </div>
  );
};

export default Toast;