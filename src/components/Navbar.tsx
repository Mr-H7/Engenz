"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Fleet", href: "#fleet" },
  {
    label: "Vehicles",
    href: "#",
    children: [
      { label: "Cars", href: "#cars" },
      { label: "Motorcycles", href: "#motorcycles" },
      { label: "SUVs", href: "#categories" },
      { label: "Luxury", href: "#categories" },
    ],
  },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#") return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <span className="text-white font-black text-sm tracking-tight">E</span>
              </div>
              <div className="absolute -inset-0.5 bg-blue-600 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity" />
            </div>
            <span className="text-white font-black text-xl tracking-wider">
              ENGENZ
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors nav-link font-medium">
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-44 glass-dark rounded-xl overflow-hidden shadow-2xl">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={(e) => handleLinkClick(e, child.href)}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors nav-link font-medium"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
            >
              +212 712-505-058
            </a>
            <a
              href="#fleet"
              onClick={(e) => handleLinkClick(e, "#fleet")}
              className="btn-shine flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/25 active:scale-95"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-xl border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div className="px-4 py-2 text-xs text-gray-500 font-semibold uppercase tracking-widest mt-2">
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={(e) => handleLinkClick(e, child.href)}
                      className="block px-6 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium"
                >
                  {link.label}
                </a>
              )
            )}
            <div className="pt-3 border-t border-white/5 mt-3">
              <a
                href="#fleet"
                onClick={(e) => handleLinkClick(e, "#fleet")}
                className="block w-full text-center px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
