"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const initial: React.CSSProperties = {
    opacity: 0,
    transform:
      direction === "up"
        ? "translateY(32px)"
        : direction === "left"
        ? "translateX(-32px)"
        : direction === "right"
        ? "translateX(32px)"
        : "none",
  };

  const animate: React.CSSProperties = {
    opacity: 1,
    transform: "translate(0)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(visible ? animate : initial),
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
