"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Fleet", href: "#fleet" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "How It Works", href: "#how-it-works" },
  ],
  Vehicles: [
    { label: "City Cars", href: "#categories" },
    { label: "SUVs & MPVs", href: "#categories" },
    { label: "Luxury Cars", href: "#categories" },
    { label: "Motorcycles", href: "#categories" },
    { label: "Sport Bikes", href: "#categories" },
  ],
  Services: [
    { label: "Daily Rental", href: "#offers" },
    { label: "Weekly Plans", href: "#offers" },
    { label: "Monthly Plans", href: "#offers" },
    { label: "Corporate Rental", href: "#offers" },
    { label: "Event Rentals", href: "#contact" },
  ],
  Support: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "#contact" },
    { label: "Book Now", href: "#contact" },
    { label: "WhatsApp", href: "https://wa.me/6281234567890" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: "📸", href: "#" },
  { name: "Facebook", icon: "👤", href: "#" },
  { name: "Twitter/X", icon: "𝕏", href: "#" },
  { name: "TikTok", icon: "🎵", href: "#" },
  { name: "YouTube", icon: "▶️", href: "#" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("http") || href.startsWith("https")) return;
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative"
      style={{ background: "linear-gradient(180deg, #080808 0%, #050505 100%)" }}
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* CTA Banner */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d1a33 0%, #091022 100%)",
          borderBottom: "1px solid rgba(37,99,235,0.15)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-black text-2xl sm:text-3xl mb-1">
                Your Next Ride Awaits
              </h3>
              <p className="text-gray-400 text-sm">
                Book a premium car or motorcycle today. Fast, easy, and reliable.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/6281234567890?text=Hi%20Engenz!%20I%27d%20like%20to%20book%20a%20vehicle."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-green-600/25"
              >
                💬 WhatsApp
              </a>
              <button
                onClick={() => scrollToSection("#fleet")}
                className="btn-shine flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-blue-600/25"
              >
                Book Now <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">E</span>
              </div>
              <span className="text-white font-black text-xl tracking-wider">
                ENGENZ
              </span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs">
              Premium car and motorcycle rentals for every journey. Reliable,
              stylish, and always ready for the road.
            </p>

            {/* Contact quick info */}
            <div className="space-y-2.5">
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-sm"
              >
                <Phone size={13} className="text-blue-500" />
                +62 812-3456-7890
              </a>
              <a
                href="mailto:hello@engenz.id"
                className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-sm"
              >
                <Mail size={13} className="text-blue-500" />
                hello@engenz.id
              </a>
              <div className="flex items-start gap-2 text-gray-500 text-sm">
                <MapPin size={13} className="text-blue-500 mt-0.5 flex-shrink-0" />
                Jl. Sudirman No. 12, Jakarta Pusat
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 mt-6">
              {socialLinks.map(({ name, icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={name}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    {href.startsWith("http") ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                      >
                        {label}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(href)}
                        className="text-gray-500 hover:text-gray-300 text-sm transition-colors text-left"
                      >
                        {label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Engenz. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
