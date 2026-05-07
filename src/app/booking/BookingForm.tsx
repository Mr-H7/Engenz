"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { vehicles, getVehicleBySlug } from "@/data/vehicles";
import { ArrowLeft, Phone, MessageCircle, Mail, MapPin, CheckCircle, Users, Fuel, Settings } from "lucide-react";
import { saveBooking } from "@/utils/bookingStore";
import { useLang } from "@/contexts/LanguageContext";

const LOCATIONS = [
  "Cairo — Heliopolis",
  "Cairo — Maadi",
  "Cairo — Nasr City",
  "Cairo — 6th of October City",
  "Cairo — New Cairo",
  "Cairo International Airport",
  "Giza — Dokki / Mohandessin",
  "Alexandria",
  "Sharm El-Sheikh",
  "Hurghada",
  "Ain Sokhna",
  "Other (please specify in notes)",
];

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  nationality: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  dropoffLocation: string;
  vehicle: string;
  notes: string;
};

export default function BookingForm() {
  const { t } = useLang();
  const b = t.booking;
  const searchParams = useSearchParams();
  const carSlug = searchParams.get("car") ?? "";

  const [form, setForm] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    nationality: "",
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
    dropoffLocation: "",
    vehicle: carSlug,
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (carSlug) setForm((f) => ({ ...f, vehicle: carSlug }));
  }, [carSlug]);

  const selectedVehicle = useMemo(
    () => (form.vehicle ? getVehicleBySlug(form.vehicle) : null),
    [form.vehicle]
  );

  const rentalDays = useMemo(() => {
    if (!form.pickupDate || !form.returnDate) return 0;
    const diff =
      (new Date(form.returnDate).getTime() - new Date(form.pickupDate).getTime()) /
      86400000;
    return Math.max(0, Math.round(diff));
  }, [form.pickupDate, form.returnDate]);

  const estimatedTotal = selectedVehicle
    ? rentalDays * selectedVehicle.pricePerDay
    : 0;

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveBooking({
      fullName: form.fullName,
      phone: form.phone,
      email: form.email,
      nationality: form.nationality,
      vehicle: form.vehicle,
      pickupDate: form.pickupDate,
      returnDate: form.returnDate,
      pickupLocation: form.pickupLocation,
      dropoffLocation: form.dropoffLocation,
      notes: form.notes,
      estimatedTotal: estimatedTotal,
    });
    setSubmitted(true);
  };

  if (submitted) {
    const msg = b.successMsg
      .replace("{name}", form.fullName || "valued customer")
      .replace("{phone}", form.phone);
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full rounded-2xl p-10 text-center" style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.2)" }}>
          <div className="text-5xl mb-6">✅</div>
          <h2 className="font-display font-bold mb-3" style={{ fontSize: "1.8rem", letterSpacing: "0.06em", color: "var(--text)" }}>
            {b.successTitle}
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
            {msg.split(form.phone)[0]}
            <span style={{ color: "var(--text)", fontWeight: 700 }}>{form.phone}</span>
            {msg.split(form.phone)[1]}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/fleet" className="btn-outline px-6 py-2.5 rounded-md text-xs font-bold tracking-widest" style={{ letterSpacing: "0.1em" }}>{b.exploreMore}</Link>
            <a href="https://wa.me/201152333633" target="_blank" rel="noopener noreferrer" className="btn-accent px-6 py-2.5 rounded-md text-xs font-bold tracking-widest flex items-center gap-2" style={{ letterSpacing: "0.1em" }}>
              <MessageCircle size={13} /> {b.whatsapp}
            </a>
          </div>
        </div>
      </div>
    );
  }

  const inputClass = "portal-input w-full px-4 py-3 rounded-md text-sm font-semibold tracking-wide";
  const labelClass = "block text-xs font-bold tracking-widest mb-2";
  const labelStyle = { color: "var(--text-muted)", letterSpacing: "0.12em" };

  return (
    <>
      {/* Page hero */}
      <section
        className="relative pt-32 pb-10 overflow-hidden"
        style={{ background: "var(--bg)" }}
      >
        {/* Luxury car background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/5/59/BMW_320i_M_Sport_(G20)_front.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.07,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, #040610 0%, rgba(7,8,16,0.9) 70%, var(--bg) 100%)" }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,180,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Link href="/fleet" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest mb-8 transition-colors hover:text-white" style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}>
            <ArrowLeft size={13} /> {b.backToFleet}
          </Link>
          <h1 className="font-display font-bold leading-none mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.04em", color: "var(--text)" }}>
            {b.title}
          </h1>
          <p className="text-sm leading-relaxed max-w-lg" style={{ color: "var(--text-muted)" }}>{b.sub}</p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Vehicle selector */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h2 className="font-display font-bold mb-5" style={{ fontSize: "1.1rem", letterSpacing: "0.08em", color: "var(--text)" }}>{b.selectedVehicle}</h2>

              {/* Vehicle preview */}
              {selectedVehicle && (
                <div
                  className="flex items-center gap-4 rounded-lg p-4 mb-4"
                  style={{
                    background: selectedVehicle.bgGradient,
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  <span className="text-5xl select-none">{selectedVehicle.emoji}</span>
                  <div>
                    <div
                      className="font-display font-bold text-white"
                      style={{ fontSize: "1.1rem", letterSpacing: "0.04em" }}
                    >
                      {selectedVehicle.name} {selectedVehicle.year}
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      {[
                        { icon: Settings, label: selectedVehicle.transmission },
                        { icon: Fuel, label: selectedVehicle.fuel },
                        { icon: Users, label: `${selectedVehicle.seats} Seats` },
                      ].map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-1">
                          <Icon size={10} style={{ color: "var(--text-dim)" }} />
                          <span className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div
                      className="font-display font-bold mt-2"
                      style={{ color: "var(--accent)", fontSize: "1rem" }}
                    >
                      {selectedVehicle.pricePerDay.toLocaleString("en-EG")} EGP/day
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className={labelClass} style={labelStyle}>{b.chooseVehicle}</label>
                <select
                  value={form.vehicle}
                  onChange={set("vehicle")}
                  required
                  className={inputClass}
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--text)" }}
                >
                  <option value="">{b.chooseVehiclePlaceholder}</option>
                  {vehicles.map((v) => (
                    <option key={v.slug} value={v.slug} style={{ background: "#070810" }}>
                      {v.name} {v.year} — {v.pricePerDay.toLocaleString("en-EG")} EGP/day
                      {!v.available ? " (Unavailable)" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Personal info */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h2 className="font-display font-bold mb-5" style={{ fontSize: "1.1rem", letterSpacing: "0.08em", color: "var(--text)" }}>{b.personalInfo}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} style={labelStyle}>{b.fullName}</label>
                  <input type="text" placeholder="Ahmed Mohamed" value={form.fullName} onChange={set("fullName")} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>{b.phone}</label>
                  <input type="tel" placeholder="+20 10 XXXX XXXX" value={form.phone} onChange={set("phone")} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>{b.email}</label>
                  <input type="email" placeholder="ahmed@example.com" value={form.email} onChange={set("email")} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>{b.nationality}</label>
                  <input type="text" placeholder="Egyptian" value={form.nationality} onChange={set("nationality")} className={inputClass} />
                </div>
              </div>
            </div>

            {/* Rental details */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h2 className="font-display font-bold mb-5" style={{ fontSize: "1.1rem", letterSpacing: "0.08em", color: "var(--text)" }}>{b.rentalDetails}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} style={labelStyle}>{b.pickupDate}</label>
                  <input type="date" value={form.pickupDate} onChange={set("pickupDate")} required className={inputClass} style={{ colorScheme: "dark" }} />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>{b.returnDate}</label>
                  <input type="date" value={form.returnDate} min={form.pickupDate || undefined} onChange={set("returnDate")} required className={inputClass} style={{ colorScheme: "dark" }} />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>{b.pickupLocation}</label>
                  <select value={form.pickupLocation} onChange={set("pickupLocation")} required className={inputClass} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--text)" }}>
                    <option value="">{b.selectLocation}</option>
                    {LOCATIONS.map((l) => (<option key={l} value={l} style={{ background: "#070810" }}>{l}</option>))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>{b.dropoff}</label>
                  <select value={form.dropoffLocation} onChange={set("dropoffLocation")} required className={inputClass} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--text)" }}>
                    <option value="">{b.selectLocation}</option>
                    {LOCATIONS.map((l) => (<option key={l} value={l} style={{ background: "#070810" }}>{l}</option>))}
                  </select>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h2 className="font-display font-bold mb-5" style={{ fontSize: "1.1rem", letterSpacing: "0.08em", color: "var(--text)" }}>{b.notes}</h2>
              <textarea placeholder={b.notesPlaceholder} value={form.notes} onChange={set("notes")} rows={4} className={`${inputClass} resize-none`} style={{ lineHeight: "1.6" }} />
            </div>

            <button type="submit" className="btn-accent w-full py-4 rounded-md font-display font-bold tracking-widest" style={{ fontSize: "1rem", letterSpacing: "0.15em", boxShadow: "0 0 30px rgba(0,212,255,0.25)" }}>
              {b.submitBtn}
            </button>

            <p className="text-xs text-center leading-relaxed" style={{ color: "var(--text-dim)" }}>{b.disclaimer}</p>
          </form>

          {/* Sidebar */}
          <div className="space-y-5 lg:self-start lg:sticky" style={{ top: "80px" }}>

            {/* Rental summary */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="font-display font-bold mb-5" style={{ fontSize: "1rem", letterSpacing: "0.08em", color: "var(--text)" }}>{b.summary}</h3>

              {selectedVehicle ? (
                <div className="space-y-3 mb-5">
                  {[
                    { label: b.summaryVehicle, value: `${selectedVehicle.name} ${selectedVehicle.year}` },
                    { label: b.summaryRate, value: `${selectedVehicle.pricePerDay.toLocaleString("en-EG")} EGP` },
                    { label: b.summaryDays, value: rentalDays > 0 ? `${rentalDays} days` : b.summarySelectDates },
                    { label: b.summaryPickup, value: form.pickupLocation || b.summaryNoLocation },
                    { label: b.summaryDropoff, value: form.dropoffLocation || b.summaryNoLocation },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex justify-between items-start gap-2"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.6rem" }}
                    >
                      <span
                        className="text-xs font-bold tracking-widest flex-shrink-0"
                        style={{ color: "var(--text-dim)", letterSpacing: "0.08em" }}
                      >
                        {label.toUpperCase()}
                      </span>
                      <span
                        className="text-xs font-semibold text-right"
                        style={{ color: "#8892a4" }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p
                  className="text-xs mb-5"
                  style={{ color: "var(--text-dim)" }}
                >
                  Select a vehicle to see the summary.
                </p>
              )}

              {estimatedTotal > 0 && (
                <div
                  className="rounded-lg p-4"
                  style={{
                    background: "rgba(0,212,255,0.08)",
                    border: "1px solid rgba(0,212,255,0.2)",
                  }}
                >
                  <div
                    className="text-xs font-bold tracking-widest mb-1"
                    style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}
                  >
                    {b.estimatedTotal}
                  </div>
                  <div className="font-display font-bold" style={{ fontSize: "1.8rem", color: "var(--accent)", letterSpacing: "-0.01em" }}>
                    {estimatedTotal.toLocaleString("en-EG")}
                    <span className="text-sm ml-1 font-bold" style={{ color: "var(--text-muted)" }}>EGP</span>
                  </div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-dim)" }}>{b.priceConfirm}</div>
                </div>
              )}

              {/* Checklist */}
              <div className="mt-5 space-y-2">
                {b.checks.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />
                    <span className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="font-display font-bold mb-4" style={{ fontSize: "1rem", letterSpacing: "0.08em", color: "var(--text)" }}>{b.contactTitle}</h3>
              <div className="space-y-3">
                {[
                  { icon: Phone, label: "+20 11 5233 3633", href: "tel:+201152333633" },
                  { icon: MessageCircle, label: "WhatsApp Chat", href: "https://wa.me/201152333633" },
                  { icon: Mail, label: "info@engenz.com", href: "mailto:info@engenz.com" },
                  { icon: MapPin, label: "Serving all of Egypt", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-xs font-semibold transition-colors hover:text-white"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Icon size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
