"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Zap, Sparkles, Calendar, Car } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { checkPortalAvailability } from "@/utils/bookingStore";

const EGYPT_GOVERNORATES = [
  "Cairo — Downtown",
  "Cairo — Heliopolis",
  "Cairo — Maadi",
  "Cairo — Nasr City",
  "Cairo — New Cairo",
  "Cairo — 6th of October",
  "Cairo International Airport",
  "Giza — Dokki / Mohandessin",
  "Giza — Sheikh Zayed",
  "Alexandria — City Centre",
  "Alexandria — Smouha",
  "Alexandria — Borg El Arab Airport",
  "Port Said",
  "Ismailia",
  "Suez",
  "Sharm El-Sheikh",
  "Hurghada",
  "Ain Sokhna",
  "Luxor",
  "Aswan",
  "Dahab",
  "Marsa Matrouh",
  "Tanta",
  "Mansoura",
  "Other (specify in notes)",
];

const TODAY = new Date().toISOString().split("T")[0];

export default function ZHero() {
  const { t } = useLang();
  const router = useRouter();

  const [vehicleType, setVehicleType] = useState<"supercars" | "motorbikes">("supercars");
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [checkStatus, setCheckStatus] = useState<"idle" | "available" | "unavailable" | "error">("idle");

  const featureIcons = [Zap, Sparkles, Calendar, Car];

  const handleCheck = () => {
    if (!location) { setCheckStatus("error"); return; }
    if (!pickupDate || !returnDate) { setCheckStatus("error"); return; }

    const result = checkPortalAvailability(vehicleType, location, pickupDate, returnDate);
    if (result.available) {
      setCheckStatus("available");
      setTimeout(() => {
        router.push(`/booking`);
      }, 1800);
    } else {
      setCheckStatus("unavailable");
    }
  };

  const statusMsg =
    checkStatus === "available"
      ? t.portal.available
      : checkStatus === "unavailable"
      ? t.portal.unavailable
      : checkStatus === "error"
      ? (!location ? t.portal.selectLocation : t.portal.selectDates)
      : null;

  const statusColor =
    checkStatus === "available" ? "#22c55e" :
    checkStatus === "unavailable" ? "#ef4444" :
    "#f59e0b";

  return (
    <section
      id="showroom"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Hero background: real car image with dark overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/5/59/BMW_320i_M_Sport_(G20)_front.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Heavy dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(4,6,16,0.93) 0%, rgba(7,8,22,0.88) 45%, rgba(5,7,18,0.92) 100%)",
        }}
      />
      {/* Edge feather — top */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #040610 0%, transparent 100%)" }}
      />
      {/* Edge feather — bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)" }}
      />
      {/* Edge feather — left */}
      <div
        className="absolute top-0 bottom-0 left-0 w-40 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(4,6,16,0.6) 0%, transparent 100%)" }}
      />
      {/* Edge feather — right */}
      <div
        className="absolute top-0 bottom-0 right-0 w-40 pointer-events-none"
        style={{ background: "linear-gradient(to left, rgba(4,6,16,0.6) 0%, transparent 100%)" }}
      />
      {/* Subtle cyan glow top-center */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 30% 0%, rgba(0,180,255,0.07) 0%, transparent 70%)",
        }}
      />
      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
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
            <div className="status-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 live-dot" />
              {t.hero.badge}
            </div>

            <h1 className="font-display font-bold leading-none mb-6" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
              <span className="block text-white tracking-wide" style={{ letterSpacing: "0.02em" }}>
                {t.hero.line1}
              </span>
              <span
                className="block italic"
                style={{
                  color: "var(--accent)",
                  letterSpacing: "0.02em",
                  textShadow: "0 0 40px rgba(0,212,255,0.35)",
                }}
              >
                {t.hero.line2}
              </span>
            </h1>

            <p className="text-base leading-relaxed mb-10 max-w-md" style={{ color: "#8892a4" }}>
              {t.hero.sub}
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => router.push("/booking")}
                className="btn-accent px-7 py-3 rounded-md text-sm font-bold tracking-wide"
                style={{ letterSpacing: "0.07em" }}
              >
                {t.hero.btnBook}
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("collection");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="btn-outline px-7 py-3 rounded-md text-sm font-bold tracking-wide"
                style={{ letterSpacing: "0.07em" }}
              >
                {t.hero.btnFleet}
              </button>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {t.hero.feats.map((label, i) => {
                const Icon = featureIcons[i];
                return (
                  <div key={label} className="feature-box rounded-md p-3 flex flex-col gap-2">
                    <Icon size={18} style={{ color: "var(--accent)", opacity: 0.85 }} />
                    <div
                      className="font-display font-bold text-xs leading-tight tracking-wide"
                      style={{ color: "var(--text)", letterSpacing: "0.06em" }}
                    >
                      {label}
                    </div>
                    <div className="w-6 h-px" style={{ background: "var(--accent)", opacity: 0.5 }} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right column — Fleet Portal ── */}
          <div id="fleet-portal">
            <div
              className="glass-card rounded-xl overflow-hidden"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.08)" }}
            >
              {/* Portal header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span
                  className="font-display font-bold text-sm tracking-widest"
                  style={{ color: "var(--text)", letterSpacing: "0.15em" }}
                >
                  {t.portal.title}
                </span>
                <div className="flex items-center gap-0.5">
                  {[3, 5, 7, 9].map((h, i) => (
                    <div
                      key={i}
                      className="w-px rounded-full"
                      style={{
                        height: `${h}px`,
                        background: i < 2 ? "rgba(0,212,255,0.4)" : "rgba(0,212,255,0.9)",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="px-5 py-5 space-y-4">
                {/* Vehicle type */}
                <div>
                  <label
                    className="block text-xs font-semibold tracking-widest mb-2"
                    style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
                  >
                    {t.portal.vehicleType}
                  </label>
                  <div
                    className="grid grid-cols-2 gap-1 p-1 rounded-md"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    {(["supercars", "motorbikes"] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => setVehicleType(type)}
                        className="vehicle-tab flex items-center justify-center gap-2 py-2.5 rounded text-xs font-bold tracking-wide"
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
                            {t.portal.supercars}
                          </>
                        ) : (
                          <>
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor" opacity="0.8">
                              <path d="M2,6 L2,4 L4,2 L7,2 L9,3 L11,3 L12,5 L11,6 L10,6 Q9.5,5 9,5 Q8.5,5 8,6 L4,6 Q3.5,5 3,5 Q2.5,5 2,6Z" />
                              <circle cx="3" cy="6.5" r="1.2" />
                              <circle cx="10" cy="6.5" r="1.2" />
                            </svg>
                            {t.portal.motorbikes}
                          </>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location dropdown */}
                <div>
                  <label
                    className="block text-xs font-semibold tracking-widest mb-2"
                    style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
                  >
                    {t.portal.location}
                  </label>
                  <div className="relative">
                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                      width="13" height="13" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 2C8 2 5 5 5 10c0 6 7 12 7 12s7-6 7-12c0-5-3-8-7-8z" />
                    </svg>
                    <select
                      value={location}
                      onChange={(e) => { setLocation(e.target.value); setCheckStatus("idle"); }}
                      className="portal-input w-full pl-9 pr-4 py-2.5 rounded-md text-xs font-semibold tracking-widest appearance-none"
                      style={{
                        letterSpacing: "0.08em",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: location ? "var(--text)" : "var(--text-muted)",
                      }}
                    >
                      <option value="" style={{ background: "#070810", color: "#6b7a99" }}>
                        {t.portal.locationPlaceholder}
                      </option>
                      {EGYPT_GOVERNORATES.map((gov) => (
                        <option key={gov} value={gov} style={{ background: "#070810", color: "#fff" }}>
                          {gov}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      className="block text-xs font-semibold tracking-widest mb-2"
                      style={{ color: "var(--text-muted)", letterSpacing: "0.12em", fontSize: "0.62rem" }}
                    >
                      {t.portal.pickupDate}
                    </label>
                    <input
                      type="date"
                      value={pickupDate}
                      min={TODAY}
                      onChange={(e) => {
                        setPickupDate(e.target.value);
                        if (returnDate && e.target.value > returnDate) setReturnDate("");
                        setCheckStatus("idle");
                      }}
                      className="portal-input w-full px-3 py-2.5 rounded-md text-xs font-bold"
                      style={{ colorScheme: "dark" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold tracking-widest mb-2"
                      style={{ color: "var(--text-muted)", letterSpacing: "0.12em", fontSize: "0.62rem" }}
                    >
                      {t.portal.returnDate}
                    </label>
                    <input
                      type="date"
                      value={returnDate}
                      min={pickupDate || TODAY}
                      onChange={(e) => { setReturnDate(e.target.value); setCheckStatus("idle"); }}
                      className="portal-input w-full px-3 py-2.5 rounded-md text-xs font-bold"
                      style={{ colorScheme: "dark" }}
                    />
                  </div>
                </div>

                {/* Status message */}
                {statusMsg && (
                  <div
                    className="rounded-md px-4 py-2.5 text-xs font-bold tracking-wide"
                    style={{
                      background: `${statusColor}18`,
                      border: `1px solid ${statusColor}40`,
                      color: statusColor,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {statusMsg}
                  </div>
                )}

                {/* CTA */}
                <button
                  onClick={handleCheck}
                  className="w-full py-3.5 rounded-md font-display font-bold text-sm tracking-widest transition-all"
                  style={{
                    background: "var(--accent)",
                    color: "#03060a",
                    letterSpacing: "0.12em",
                    boxShadow: "0 0 20px rgba(0,212,255,0.3)",
                  }}
                >
                  {t.portal.checkBtn}
                </button>

                {/* Trust strip */}
                <div
                  className="flex items-center gap-3 pt-1"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex -space-x-2">
                    {["#4f7cff", "#ff6b4f", "#4fff9f"].map((color, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                        style={{ background: color, borderColor: "var(--bg-card)", color: "#fff", fontSize: "0.6rem" }}
                      >
                        {["JK", "AM", "SR"][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-xs" style={{ color: "var(--text)" }}>
                      {t.portal.trusted}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-muted)", fontSize: "0.65rem" }}>
                      {t.portal.members}
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
