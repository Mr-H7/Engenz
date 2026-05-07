"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { raw: 500, suffix: "+", label: "AVAILABLE UNITS" },
  { raw: 15, suffix: "", label: "HUBS GLOBALLY" },
  { raw: 0.5, suffix: "s", label: "BOOKING LATENCY", decimal: true },
  { raw: 24, suffix: "/7", label: "LIVE CONCIERGE" },
];

function Counter({
  target,
  suffix,
  decimal,
}: {
  target: number;
  suffix: string;
  decimal?: boolean;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const steps = 50;
          const dur = 1600;
          let i = 0;
          const timer = setInterval(() => {
            i++;
            setVal(parseFloat(((target / steps) * i).toFixed(decimal ? 1 : 0)));
            if (i >= steps) { setVal(target); clearInterval(timer); }
          }, dur / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, decimal]);

  return (
    <span ref={ref}>
      {decimal ? val.toFixed(1) : Math.floor(val)}
      {suffix}
    </span>
  );
}

export default function ZStats() {
  return (
    <section
      style={{ background: "#040508", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x"
          style={{ "--tw-divide-opacity": "1" } as React.CSSProperties}
        >
          {stats.map(({ raw, suffix, label, decimal }, i) => (
            <div
              key={label}
              className="flex flex-col items-center lg:items-start lg:px-12 first:lg:pl-0 last:lg:pr-0"
            >
              <div
                className="font-display font-bold leading-none mb-2"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                  color: "var(--accent)",
                  textShadow: i === 0 ? "0 0 30px rgba(0,212,255,0.3)" : "none",
                  letterSpacing: "-0.02em",
                }}
              >
                <Counter target={raw} suffix={suffix} decimal={decimal} />
              </div>
              <div
                className="text-xs font-bold tracking-widest"
                style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
