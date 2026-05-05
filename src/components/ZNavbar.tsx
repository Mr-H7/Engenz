"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { useLang } from "@/contexts/LanguageContext";

export default function ZNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.fleet, href: "/fleet" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.booking, href: "/booking" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isDark = theme === "dark";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? isDark ? "rgba(7,8,16,0.97)" : "rgba(240,244,255,0.97)"
          : isDark ? "rgba(7,8,16,0.6)" : "rgba(240,244,255,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)"}`
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[60px] flex items-center justify-between gap-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-bold text-lg tracking-wider whitespace-nowrap flex-shrink-0"
          style={{ letterSpacing: "0.15em", color: "var(--text)" }}
        >
          ENGENZ
        </Link>

        {/* Nav links — desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 rounded-sm text-xs font-bold tracking-widest transition-all border"
            style={{
              background: "rgba(0,212,255,0.08)",
              borderColor: "rgba(0,212,255,0.2)",
              color: "var(--accent)",
              letterSpacing: "0.1em",
              minWidth: "40px",
            }}
            aria-label="Toggle language"
          >
            {lang === "en" ? "عر" : "EN"}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center transition-colors"
            style={{ color: isDark ? "#6b7a99" : "#4a5875" }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Link
            href="/booking"
            className="btn-accent hidden sm:flex items-center gap-2 px-5 py-2 rounded-md text-sm font-bold tracking-wide"
            style={{ letterSpacing: "0.05em" }}
          >
            {t.nav.bookDrive}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center transition-colors"
            style={{ color: isDark ? "#6b7a99" : "#4a5875" }}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-5 pt-2 flex flex-col gap-4"
          style={{
            borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)"}`,
            background: isDark ? "rgba(7,8,16,0.97)" : "rgba(240,244,255,0.97)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`nav-link text-sm py-1 ${isActive(link.href) ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            className="btn-accent px-5 py-2.5 rounded-md text-sm font-bold tracking-wide text-center mt-2"
            style={{ letterSpacing: "0.07em" }}
          >
            {t.nav.bookDrive}
          </Link>
        </div>
      )}
    </nav>
  );
}
