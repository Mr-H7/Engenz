"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "SHOWROOM", href: "#showroom", active: true },
  { label: "PERFORMANCE", href: "#performance" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONCIERGE", href: "#concierge" },
];

export default function ZNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("SHOWROOM");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(7,8,16,0.97)"
          : "rgba(7,8,16,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[60px] flex items-center justify-between gap-8">
        {/* Logo */}
        <a
          href="#showroom"
          onClick={(e) => { e.preventDefault(); scroll("#showroom"); }}
          className="font-display text-white font-bold text-lg tracking-wider whitespace-nowrap flex-shrink-0"
          style={{ letterSpacing: "0.15em" }}
        >
          ENGENZ
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setActive(link.label);
                scroll(link.href);
              }}
              className={`nav-link ${active === link.label ? "active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDark(!dark)}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#fleet-portal"
            onClick={(e) => { e.preventDefault(); scroll("#fleet-portal"); }}
            className="btn-accent hidden sm:flex items-center gap-2 px-5 py-2 rounded-md text-sm font-bold tracking-wide"
            style={{ letterSpacing: "0.05em" }}
          >
            BOOK A DRIVE
          </a>
        </div>
      </div>
    </nav>
  );
}
