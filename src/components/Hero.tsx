"use client";

import { ArrowRight, Shield, Zap, Clock, Car } from "lucide-react";

const trustBadges = [
  { icon: Zap, label: "Fast Booking", sub: "Book in minutes" },
  { icon: Shield, label: "Trusted Vehicles", sub: "Fully insured fleet" },
  { icon: Clock, label: "Flexible Plans", sub: "Daily to monthly" },
  { icon: Car, label: "Cars & Bikes", sub: "100+ vehicles" },
];

export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black"
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-pattern opacity-60" />

      {/* Radial gradient spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(37,99,235,0.12) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Top-right corner glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 10%, rgba(37,99,235,0.18) 0%, transparent 60%)",
        }}
      />

      {/* Bottom-left glow */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 90%, rgba(37,99,235,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Horizontal accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />

      {/* SVG Car Silhouette - decorative */}
      <div className="absolute right-0 bottom-0 w-full lg:w-3/5 h-full opacity-[0.04] pointer-events-none overflow-hidden">
        <svg viewBox="0 0 800 400" className="w-full h-full" fill="white">
          <path d="M160,280 L120,220 L180,160 L280,140 L420,130 L540,140 L620,160 L660,220 L680,280 L650,295 L630,295 L600,260 Q580,230 540,230 Q500,230 480,260 L370,260 Q350,230 310,230 Q270,230 250,260 L190,260 L160,280 Z" />
          <rect x="200" y="205" width="130" height="60" rx="8" />
          <rect x="360" y="200" width="140" height="65" rx="8" />
          <circle cx="310" cy="295" r="35" />
          <circle cx="510" cy="295" r="35" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-4xl">
          {/* Tag line */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-8 fade-slide-up">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Premium Vehicle Rentals · Est. 2020
          </div>

          {/* Main headline */}
          <h1 className="fade-slide-up delay-100 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight mb-6">
            <span className="text-white block">Drive</span>
            <span className="gradient-text-blue block">Freedom</span>
            <span className="text-white block">with Engenz</span>
          </h1>

          {/* Subheadline */}
          <p className="fade-slide-up delay-200 text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
            Rent stylish, reliable cars and motorcycles with a fast booking
            experience, flexible options, and trusted service — tailored for
            every journey.
          </p>

          {/* CTA Buttons */}
          <div className="fade-slide-up delay-300 flex flex-wrap gap-4 mb-14">
            <button
              onClick={() => scrollToSection("#fleet")}
              className="btn-shine flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-blue-600/30 active:scale-95 text-base"
            >
              Book Now
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection("#fleet")}
              className="flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all hover:bg-white/5 active:scale-95 text-base"
            >
              View Fleet
            </button>
          </div>

          {/* Trust Badges */}
          <div className="fade-slide-up delay-400 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {trustBadges.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="glass rounded-xl p-3.5 flex items-center gap-3 group hover:border-blue-500/20 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                  <Icon size={16} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">{label}</div>
                  <div className="text-gray-500 text-xs">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {[
              { value: "500+", label: "Successful Rentals" },
              { value: "100+", label: "Vehicles Available" },
              { value: "24/7", label: "Customer Support" },
              { value: "5★", label: "Average Rating" },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-white font-black text-2xl">{value}</span>
                <span className="text-gray-500 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}
