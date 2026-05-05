"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lock, LogOut, CheckCircle, XCircle, Clock, Trash2, ArrowLeft } from "lucide-react";
import { getBookings, updateBookingStatus, type Booking } from "@/utils/bookingStore";
import ZNavbar from "@/components/ZNavbar";

const ADMIN_PASSWORD = "engenz2026";

function formatDate(iso: string) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-EG", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function StatusBadge({ status }: { status: Booking["status"] }) {
  const cfg = {
    pending: { color: "#f59e0b", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)", icon: Clock, label: "PENDING" },
    confirmed: { color: "#22c55e", bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.3)", icon: CheckCircle, label: "CONFIRMED" },
    cancelled: { color: "#ef4444", bg: "rgba(239,68,68,0.12)", border: "rgba(239,68,68,0.3)", icon: XCircle, label: "CANCELLED" },
  }[status];

  const Icon = cfg.icon;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-bold tracking-widest"
      style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.color, letterSpacing: "0.08em" }}
    >
      <Icon size={11} /> {cfg.label}
    </span>
  );
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("engenz_admin_auth");
      if (saved === "1") {
        setAuthed(true);
        setBookings(getBookings());
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem("engenz_admin_auth", "1");
      setAuthed(true);
      setBookings(getBookings());
    } else {
      setPwError(true);
      setPw("");
      setTimeout(() => setPwError(false), 3000);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("engenz_admin_auth");
    setAuthed(false);
    setPw("");
  };

  const updateStatus = (id: string, status: Booking["status"]) => {
    updateBookingStatus(id, status);
    setBookings(getBookings());
  };

  const clearAll = () => {
    if (confirm("Delete ALL booking records? This cannot be undone.")) {
      localStorage.removeItem("engenz_bookings");
      setBookings([]);
    }
  };

  if (!authed) {
    return (
      <>
        <ZNavbar />
        <main
          className="min-h-screen flex items-center justify-center px-6"
          style={{ background: "var(--bg)" }}
        >
          <div
            className="w-full max-w-sm rounded-2xl p-8"
            style={{
              background: "rgba(13,15,26,0.9)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
            >
              <Lock size={22} style={{ color: "var(--accent)" }} />
            </div>
            <h1
              className="font-display font-bold text-white text-center mb-1"
              style={{ fontSize: "1.4rem", letterSpacing: "0.08em" }}
            >
              ADMIN ACCESS
            </h1>
            <p
              className="text-xs text-center mb-6 tracking-widest"
              style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}
            >
              ENGENZ BOOKINGS DASHBOARD
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  className="block text-xs font-bold tracking-widest mb-2"
                  style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}
                >
                  PASSWORD
                </label>
                <input
                  type="password"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="Enter admin password"
                  className="portal-input w-full px-4 py-3 rounded-md text-sm font-semibold"
                  style={{
                    borderColor: pwError ? "rgba(239,68,68,0.5)" : undefined,
                  }}
                  autoFocus
                />
                {pwError && (
                  <p className="mt-2 text-xs font-bold" style={{ color: "#ef4444" }}>
                    Incorrect password. Try again.
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="btn-accent w-full py-3 rounded-md font-display font-bold tracking-widest text-sm"
                style={{ letterSpacing: "0.12em" }}
              >
                UNLOCK DASHBOARD
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link
                href="/"
                className="text-xs font-bold tracking-widest transition-colors hover:text-white flex items-center justify-center gap-2"
                style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}
              >
                <ArrowLeft size={12} /> BACK TO SITE
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  const pending = bookings.filter((b) => b.status === "pending");
  const confirmed = bookings.filter((b) => b.status === "confirmed");
  const cancelled = bookings.filter((b) => b.status === "cancelled");

  return (
    <>
      <ZNavbar />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        {/* Header */}
        <section
          className="pt-24 pb-8"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="status-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-bold tracking-widest uppercase mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 live-dot" />
                  ADMIN DASHBOARD
                </div>
                <h1
                  className="font-display font-bold text-white"
                  style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", letterSpacing: "0.04em" }}
                >
                  BOOKING RECORDS
                </h1>
                <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                  {bookings.length} total — {pending.length} pending · {confirmed.length} confirmed · {cancelled.length} cancelled
                </p>
              </div>
              <div className="flex gap-3">
                {bookings.length > 0 && (
                  <button
                    onClick={clearAll}
                    className="btn-outline flex items-center gap-2 px-4 py-2 rounded-md text-xs font-bold tracking-widest"
                    style={{ letterSpacing: "0.08em", color: "#ef4444", borderColor: "rgba(239,68,68,0.3)" }}
                  >
                    <Trash2 size={13} /> CLEAR ALL
                  </button>
                )}
                <button
                  onClick={handleLogout}
                  className="btn-outline flex items-center gap-2 px-4 py-2 rounded-md text-xs font-bold tracking-widest"
                  style={{ letterSpacing: "0.08em" }}
                >
                  <LogOut size={13} /> SIGN OUT
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bookings */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          {bookings.length === 0 ? (
            <div className="text-center py-24" style={{ color: "var(--text-muted)" }}>
              <div className="text-5xl mb-4">📋</div>
              <p className="text-sm tracking-widest font-bold">NO BOOKINGS YET</p>
              <p className="text-xs mt-2" style={{ color: "var(--text-dim)" }}>
                Bookings submitted via the website will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {[...bookings].reverse().map((b) => (
                <div
                  key={b.id}
                  className="rounded-xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    {/* ID + status */}
                    <div className="flex-shrink-0 lg:w-44">
                      <div
                        className="font-display font-bold text-xs tracking-widest mb-2"
                        style={{ color: "var(--accent)", letterSpacing: "0.12em" }}
                      >
                        {b.id}
                      </div>
                      <StatusBadge status={b.status} />
                      <div
                        className="text-xs mt-2"
                        style={{ color: "var(--text-dim)", fontSize: "0.65rem" }}
                      >
                        {new Date(b.submittedAt).toLocaleString("en-EG", {
                          day: "2-digit", month: "short", year: "numeric",
                          hour: "2-digit", minute: "2-digit",
                        })}
                      </div>
                    </div>

                    {/* Customer info */}
                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
                      {[
                        { label: "CUSTOMER", value: b.fullName },
                        { label: "PHONE", value: b.phone },
                        { label: "EMAIL", value: b.email || "—" },
                        { label: "NATIONALITY", value: b.nationality || "—" },
                        { label: "VEHICLE", value: b.vehicle },
                        { label: "PICKUP DATE", value: formatDate(b.pickupDate) },
                        { label: "RETURN DATE", value: formatDate(b.returnDate) },
                        { label: "ESTIMATED TOTAL", value: `${b.estimatedTotal.toLocaleString("en-EG")} EGP` },
                        { label: "PICKUP LOCATION", value: b.pickupLocation },
                        { label: "DROP-OFF", value: b.dropoffLocation },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <div
                            className="text-xs font-bold tracking-widest mb-0.5"
                            style={{ color: "var(--text-dim)", letterSpacing: "0.1em", fontSize: "0.6rem" }}
                          >
                            {label}
                          </div>
                          <div className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
                            {value}
                          </div>
                        </div>
                      ))}
                      {b.notes && (
                        <div className="col-span-2 sm:col-span-3 lg:col-span-4">
                          <div
                            className="text-xs font-bold tracking-widest mb-0.5"
                            style={{ color: "var(--text-dim)", letterSpacing: "0.1em", fontSize: "0.6rem" }}
                          >
                            NOTES
                          </div>
                          <div className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
                            {b.notes}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-row lg:flex-col gap-2 flex-shrink-0">
                      {b.status !== "confirmed" && (
                        <button
                          onClick={() => updateStatus(b.id, "confirmed")}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold tracking-widest transition-all"
                          style={{
                            background: "rgba(34,197,94,0.1)",
                            border: "1px solid rgba(34,197,94,0.25)",
                            color: "#22c55e",
                            letterSpacing: "0.08em",
                          }}
                        >
                          <CheckCircle size={12} /> CONFIRM
                        </button>
                      )}
                      {b.status !== "cancelled" && (
                        <button
                          onClick={() => updateStatus(b.id, "cancelled")}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold tracking-widest transition-all"
                          style={{
                            background: "rgba(239,68,68,0.1)",
                            border: "1px solid rgba(239,68,68,0.25)",
                            color: "#ef4444",
                            letterSpacing: "0.08em",
                          }}
                        >
                          <XCircle size={12} /> CANCEL
                        </button>
                      )}
                      {b.status !== "pending" && (
                        <button
                          onClick={() => updateStatus(b.id, "pending")}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold tracking-widest transition-all"
                          style={{
                            background: "rgba(245,158,11,0.1)",
                            border: "1px solid rgba(245,158,11,0.25)",
                            color: "#f59e0b",
                            letterSpacing: "0.08em",
                          }}
                        >
                          <Clock size={12} /> PENDING
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
