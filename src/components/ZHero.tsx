"use client";

import { useState } from "react";
import { Zap, Sparkles, Calendar, Car } from "lucide-react";

const features = [
  { icon: Zap, label: "FAST BOOKING" },
  { icon: Sparkles, label: "CLEAN VEHICLES" },
  { icon: Calendar, label: "FLEXIBLE PLANS" },
  { icon: Car, label: "PREMIUM FLEET" },
];

export default function ZHero() {
  const [vehicleType, setVehicleType] = useState<"supercars" | "motorbikes">("supercars");

  const scroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="showroom"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Background layers */}
      {/* Dark gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #050710 0%, #08091a 40%, #0a0c18 100%)",
        }}
      />
      {/* Subtle top-center light beam */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 30% 0%, rgba(0,180,255,0.07) 0%, transparent 70%)",
        }}
      />
      {/* Bottom right glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 100% 100%, rgba(0,100,200,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Horizontal scan line */}
      <div
        className="absolute top-[72px] left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,212,255,0.12), transparent)",
        }}
      />
      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <div>
            {/* Live badge */}
            <div className="status-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 live-dot" />
              SYSTEM LIVE: 247 AVAILABLE UNITS
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold leading-none mb-6" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
              <span className="block text-white tracking-wide" style={{ letterSpacing: "0.02em" }}>
                RENT THE RIDE.
              </span>
              <span
                className="block italic"
                style={{
                  color: "var(--accent)",
                  letterSpacing: "0.02em",
                  textShadow: "0 0 40px rgba(0,212,255,0.35)",
                }}
              >
                OWN THE MOMENT.
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="text-base leading-relaxed mb-10 max-w-md"
              style={{ color: "#8892a4" }}
            >
              Premium car and motorcycle rentals with fast booking, flexible
              plans, and a fleet built for every journey. Engineered for the
              extraordinary.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => scroll("#fleet-portal")}
                className="btn-accent px-7 py-3 rounded-md text-sm font-bold tracking-wide"
                style={{ letterSpacing: "0.07em" }}
              >
                BOOK YOUR RIDE
              </button>
              <button
                onClick={() => scroll("#collection")}
                className="btn-outline px-7 py-3 rounded-md text-sm font-bold tracking-wide"
                style={{ letterSpacing: "0.07em" }}
              >
                EXPLORE FLEET
              </button>
            </div>

            {/* Feature boxes */}
            <div className="grid grid-cols-4 gap-2">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="feature-box rounded-md p-3 flex flex-col gap-2"
                >
                  <Icon
                    size={18}
                    style={{ color: "var(--accent)", opacity: 0.85 }}
                  />
                  <div
                    className="font-display font-bold text-xs leading-tight tracking-wide text-white"
                    style={{ letterSpacing: "0.06em" }}
                  >
                    {label}
                  </div>
                  {/* Accent underline */}
                  <div
                    className="w-6 h-px"
                    style={{ background: "var(--accent)", opacity: 0.5 }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — Fleet Portal ── */}
          <div id="fleet-portal">
            <div
              className="glass-card rounded-xl overflow-hidden"
              style={{
                boxShadow:
                  "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.08)",
              }}
            >
              {/* Portal header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span
                  className="font-display font-bold text-sm tracking-widest text-white"
                  style={{ letterSpacing: "0.15em" }}
                >
                  FLEET PORTAL
                </span>
                {/* Wireless icon */}
                <div className="flex items-center gap-0.5">
                  {[3, 5, 7, 9].map((h, i) => (
                    <div
                      key={i}
                      className="w-px rounded-full"
                      style={{
                        height: `${h}px`,
                        background:
                          i < 2
                            ? "rgba(0,212,255,0.4)"
                            : "rgba(0,212,255,0.9)",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="px-5 py-5 space-y-5">
                {/* Vehicle type */}
                <div>
                  <label
                    className="block text-xs font-semibold tracking-widest mb-2"
                    style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
                  >
                    VEHICLE TYPE
                  </label>
                  <div
                    className="grid grid-cols-2 gap-1 p-1 rounded-md"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    {(["supercars", "motorbikes"] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => setVehicleType(type)}
                        className={`vehicle-tab flex items-center justify-center gap-2 py-2.5 rounded text-xs font-bold tracking-wide`}
                        style={
                          vehicleType === type
                            ? { background: "var(--accent)", color: "#03060a", letterSpacing: "0.08em" }
                            : { color: "var(--text-muted)", letterSpacing: "0.08em" }
                        }
                      >
                        {type === "supercars" ? (
                          <>
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor" opacity="0.8">
                              <path d="M2,7 L1,5 L3,3 L6,2 L9,2 L12,3 L13,5 L12,7 L11,7 L10,6 Q9.5,5 8.5,5 Q7.5,5 7,6 L6,6 Q5.5,5 4.5,5 Q3.5,5 3,6 L2,7Z" />
                              <circle cx="3.5" cy="7.5" r="1.3" />
                              <circle cx="10.5" cy="7.5" r="1.3" />
                            </svg>
                            SUPERCARS
                          </>
                        ) : (
                          <>
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor" opacity="0.8">
                              <path d="M2,6 L2,4 L4,2 L7,2 L9,3 L11,3 L12,5 L11,6 L10,6 Q9.5,5 9,5 Q8.5,5 8,6 L4,6 Q3.5,5 3,5 Q2.5,5 2,6Z" />
                              <circle cx="3" cy="6.5" r="1.2" />
                              <circle cx="10" cy="6.5" r="1.2" />
                            </svg>
                            MOTORBIKES
                          </>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label
                    className="block text-xs font-semibold tracking-widest mb-2"
                    style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
                  >
                    LOCATION
                  </label>
                  <div className="relative">
                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 2C8 2 5 5 5 10c0 6 7 12 7 12s7-6 7-12c0-5-3-8-7-8z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="SELECT HUB"
                      className="portal-input w-full pl-9 pr-4 py-2.5 rounded-md text-xs font-semibold tracking-widest"
                      style={{ letterSpacing: "0.12em" }}
                    />
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "PICKUP DATE", placeholder: "10 OCT" },
                    { label: "RETURN DATE", placeholder: "15 OCT" },
                  ].map(({ label, placeholder }) => (
                    <div key={label}>
                      <label
                        className="block text-xs font-semibold tracking-widest mb-2"
                        style={{ color: "var(--text-muted)", letterSpacing: "0.12em", fontSize: "0.62rem" }}
                      >
                        {label}
                      </label>
                      <input
                        type="text"
                        defaultValue={placeholder}
                        className="portal-input w-full px-3 py-2.5 rounded-md text-sm font-bold text-center"
                      />
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="w-full py-3.5 rounded-md font-display font-bold text-sm tracking-widest"
                  style={{
                    background: "var(--accent)",
                    color: "#03060a",
                    letterSpacing: "0.12em",
                    boxShadow: "0 0 20px rgba(0,212,255,0.3)",
                  }}
                >
                  CHECK AVAILABILITY
                </button>

                {/* Trust strip */}
                <div
                  className="flex items-center gap-3 pt-1"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {/* Avatar stack */}
                  <div className="flex -space-x-2">
                    {["#4f7cff","#ff6b4f","#4fff9f"].map((color, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                        style={{
                          background: color,
                          borderColor: "var(--bg-card)",
                          color: "#fff",
                          fontSize: "0.6rem",
                        }}
                      >
                        {["JK","AM","SR"][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs">TRUSTED BY 12K+</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)", fontSize: "0.65rem" }}>
                      ELITE MEMBERS GLOBALLY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
