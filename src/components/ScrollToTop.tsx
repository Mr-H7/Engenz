"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-24 right-6 z-40 w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 active:scale-95"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      }}
    >
      <ArrowUp size={16} className="text-gray-300" />
    </button>
  );
}
