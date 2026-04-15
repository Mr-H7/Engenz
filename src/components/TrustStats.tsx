"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Successful Rentals",
    sub: "Completed trips and counting",
    color: "blue",
  },
  {
    value: 100,
    suffix: "+",
    label: "Vehicles Available",
    sub: "Cars, SUVs, and motorcycles",
    color: "emerald",
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    sub: "Based on customer feedback",
    color: "amber",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support Available",
    sub: "Always here when you need us",
    color: "purple",
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  blue: { text: "text-blue-400", bg: "bg-blue-600/10", border: "border-blue-500/20" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-600/10", border: "border-emerald-500/20" },
  amber: { text: "text-amber-400", bg: "bg-amber-600/10", border: "border-amber-500/20" },
  purple: { text: "text-purple-400", bg: "bg-purple-600/10", border: "border-purple-500/20" },
};

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 50;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

export default function TrustStats() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #060b14 0%, #0a0f1e 50%, #060b14 100%)",
      }}
    >
      {/* Top/bottom accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="text-center mb-10">
          <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold">
            Numbers that speak for themselves
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(({ value, suffix, label, sub, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={label}
                className="relative p-6 rounded-2xl text-center"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {/* Number */}
                <div
                  className={`text-4xl sm:text-5xl font-black mb-1 ${c.text}`}
                >
                  <CountUp target={value} suffix={suffix} />
                </div>

                {/* Label */}
                <div className="text-white font-bold text-sm sm:text-base mb-1">
                  {label}
                </div>

                {/* Sub */}
                <div className="text-gray-500 text-xs">{sub}</div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full ${c.bg} border-t ${c.border}`}
                />
              </div>
            );
          })}
        </div>

        {/* Trust badges row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: "🏆", text: "Top-Rated Rental Service" },
            { icon: "✅", text: "Government Registered" },
            { icon: "🛡️", text: "Full Insurance Coverage" },
            { icon: "⭐", text: "5-Star Customer Reviews" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span className="text-base">{icon}</span>
              <span className="text-gray-400 text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
