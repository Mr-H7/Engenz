"use client";

import {
  Shield,
  Zap,
  Clock,
  Star,
  Headphones,
  DollarSign,
  Car,
  CheckCircle,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const reasons = [
  {
    icon: Car,
    title: "Wide Vehicle Range",
    description:
      "From compact city cars to premium SUVs and sport motorcycles — we have the right vehicle for every need and budget.",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Fully Insured & Safe",
    description:
      "Every vehicle in our fleet is fully insured, safety-checked, and professionally maintained for your peace of mind.",
    color: "emerald",
  },
  {
    icon: Zap,
    title: "Fast & Easy Booking",
    description:
      "Book your vehicle in under 3 minutes. Simple online process, instant confirmation, no complicated paperwork.",
    color: "amber",
  },
  {
    icon: Clock,
    title: "Flexible Rental Durations",
    description:
      "Daily, weekly, or monthly — rent for exactly as long as you need. No hidden extension fees or rigid contracts.",
    color: "purple",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Transparent, fair pricing with no surprise charges. What you see is what you pay. Special rates for long-term rentals.",
    color: "green",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Our team is always available via WhatsApp, phone, or email. Fast response, real help — whenever you need us.",
    color: "rose",
  },
  {
    icon: Star,
    title: "Premium Vehicles Only",
    description:
      "We curate only well-maintained, clean, and modern vehicles. No old or neglected cars — just quality rides.",
    color: "blue",
  },
  {
    icon: CheckCircle,
    title: "Trusted by Hundreds",
    description:
      "500+ completed rentals and consistently high ratings. Engenz is a brand built on trust, quality, and reliability.",
    color: "emerald",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  blue: {
    bg: "bg-blue-600/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    glow: "rgba(37,99,235,0.15)",
  },
  emerald: {
    bg: "bg-emerald-600/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    glow: "rgba(16,185,129,0.15)",
  },
  amber: {
    bg: "bg-amber-600/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    glow: "rgba(245,158,11,0.15)",
  },
  purple: {
    bg: "bg-purple-600/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    glow: "rgba(147,51,234,0.15)",
  },
  green: {
    bg: "bg-green-600/10",
    border: "border-green-500/20",
    text: "text-green-400",
    glow: "rgba(34,197,94,0.15)",
  },
  rose: {
    bg: "bg-rose-600/10",
    border: "border-rose-500/20",
    text: "text-rose-400",
    glow: "rgba(244,63,94,0.15)",
  },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 relative" style={{ background: "#0d0d0d" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/8 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Shield size={10} className="text-blue-400" />
            Why Choose Engenz
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            The Engenz <span className="gradient-text-blue">Difference</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We are not just another rental shop. Engenz is built around quality,
            convenience, and genuine customer care.
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ icon: Icon, title, description, color }, idx) => {
            const c = colorMap[color] || colorMap.blue;
            return (
              <AnimateOnScroll key={title} delay={idx * 60} direction="up">
              <div
                className="group relative p-6 rounded-2xl transition-all duration-400 hover:-translate-y-1 h-full"
                style={{
                  background: "linear-gradient(145deg, #141414, #111)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${c.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={22} className={c.text} />
                </div>

                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Bottom trust strip */}
        <div
          className="mt-12 p-6 rounded-2xl flex flex-wrap items-center justify-between gap-4"
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0.03) 100%)",
            border: "1px solid rgba(37,99,235,0.15)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
              <Shield size={20} className="text-blue-400" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">
                Every Rental Fully Protected
              </div>
              <div className="text-gray-500 text-xs">
                Comprehensive insurance on all vehicles
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              "Licensed & Registered",
              "Safety Inspected",
              "Fully Insured",
              "Clean & Sanitized",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5">
                <CheckCircle size={13} className="text-blue-400" />
                <span className="text-gray-300 text-xs font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
