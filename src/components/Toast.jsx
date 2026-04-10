"use client";

import { useEffect } from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

export default function Toast({ type = "success", message, onClose, duration = 4000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const isSuccess = type === "success";

  return (
    <div className="fixed top-55 left-1/2 -translate-x-1/2 z-[9999] animate-toast-in">
      <div
        className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border backdrop-blur-xl shadow-2xl"
        style={{
          background: isSuccess
            ? "rgba(16, 185, 129, 0.08)"
            : "rgba(244, 63, 94, 0.08)",
          borderColor: isSuccess
            ? "rgba(16, 185, 129, 0.15)"
            : "rgba(244, 63, 94, 0.15)",
          boxShadow: isSuccess
            ? "0 8px 32px rgba(16, 185, 129, 0.12)"
            : "0 8px 32px rgba(244, 63, 94, 0.12)",
        }}
      >
        {/* Icon */}
        <div
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: isSuccess
              ? "rgba(16, 185, 129, 0.15)"
              : "rgba(244, 63, 94, 0.15)",
          }}
        >
          {isSuccess ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          ) : (
            <AlertCircle className="w-4 h-4 text-rose-400" />
          )}
        </div>

        {/* Message */}
        <span
          className="text-[13px] font-medium tracking-wide whitespace-nowrap"
          style={{ color: isSuccess ? "#6ee7b7" : "#fda4af" }}
        >
          {message}
        </span>

        {/* Close */}
        <button
          onClick={onClose}
          className="shrink-0 ml-1 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <style jsx>{`
        @keyframes toast-in {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-toast-in {
          animation: toast-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
