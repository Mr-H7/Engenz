"use client";

import { ArrowRight, Share2, Globe, Phone, Mail } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const services = [
  { label: "DAILY RENTALS", href: "/fleet" },
  { label: "CORPORATE TRAVEL", href: "/booking" },
  { label: "AIRPORT PICKUPS", href: "/booking" },
  { label: "PRIVATE EVENTS", href: "/booking" },
];

const navigation = [
  { label: "HOME", href: "/" },
  { label: "FLEET", href: "/fleet" },
  { label: "ABOUT US", href: "/about" },
  { label: "BOOK NOW", href: "/booking" },
];

export default function ZFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer
      style={{
        background: "#040508",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display font-bold text-white text-xl tracking-widest mb-4 block"
              style={{ letterSpacing: "0.18em" }}
            >
              ENGENZ
            </Link>
            <p
              className="text-sm leading-relaxed mb-4 max-w-[220px]"
              style={{ color: "var(--text-muted)" }}
            >
              Premium car rental in Egypt. Reliable vehicles, transparent pricing,
              and professional service.
            </p>
            {/* Contact */}
            <div className="space-y-2 mb-5">
              <a
                href="tel:+201152333633"
                className="flex items-center gap-2 text-xs font-semibold transition-colors hover:text-white"
                style={{ color: "var(--text-dim)" }}
              >
                <Phone size={11} /> +20 11 5233 3633
              </a>
              <a
                href="mailto:info@engenz.com"
                className="flex items-center gap-2 text-xs font-semibold transition-colors hover:text-white"
                style={{ color: "var(--text-dim)" }}
              >
                <Mail size={11} /> info@engenz.com
              </a>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[Share2, Globe].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-md flex items-center justify-center transition-all hover:border-white/20"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "var(--text-muted)",
                  }}
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div
              className="text-xs font-bold tracking-widest mb-5"
              style={{ color: "var(--text-muted)", letterSpacing: "0.18em" }}
            >
              SERVICES
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-xs font-semibold tracking-widest transition-colors hover:text-white"
                    style={{ color: "#3d4a63", letterSpacing: "0.1em" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <div
              className="text-xs font-bold tracking-widest mb-5"
              style={{ color: "var(--text-muted)", letterSpacing: "0.18em" }}
            >
              NAVIGATION
            </div>
            <ul className="space-y-3">
              {navigation.map((n) => (
                <li key={n.label}>
                  <Link
                    href={n.href}
                    className="text-xs font-semibold tracking-widest transition-colors hover:text-white"
                    style={{ color: "#3d4a63", letterSpacing: "0.1em" }}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div
              className="text-xs font-bold tracking-widest mb-5"
              style={{ color: "var(--text-muted)", letterSpacing: "0.18em" }}
            >
              STAY UPDATED
            </div>
            <p className="text-xs mb-4 leading-relaxed" style={{ color: "var(--text-dim)" }}>
              Receive offers, new fleet arrivals, and rental tips.
            </p>
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="portal-input flex-1 px-3 py-2.5 rounded-l-md text-xs tracking-widest min-w-0"
                style={{ letterSpacing: "0.1em", borderRight: "none" }}
              />
              <button
                className="px-3 py-2.5 rounded-r-md flex-shrink-0"
                style={{ background: "var(--accent)" }}
              >
                <ArrowRight size={14} color="#03060a" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span
            className="text-xs tracking-widest"
            style={{ color: "var(--text-dim)", letterSpacing: "0.1em" }}
          >
            © 2025 ENGENZ EGYPT. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center gap-6">
            {["PRIVACY POLICY", "TERMS OF USE"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-xs tracking-widest transition-colors hover:text-white"
                style={{ color: "var(--text-dim)", letterSpacing: "0.1em" }}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
