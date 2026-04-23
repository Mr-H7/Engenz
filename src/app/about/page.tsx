import Link from "next/link";
import {
  Shield,
  Gauge,
  HeadphonesIcon,
  CheckCircle,
  Star,
  Users,
  Car,
  MapPin,
} from "lucide-react";
import ZNavbar from "@/components/ZNavbar";
import ZFooter from "@/components/ZFooter";
import { vehicles } from "@/data/vehicles";

export const metadata = {
  title: "About ENGENZ — Premium Car Rental in Egypt",
  description:
    "ENGENZ is Egypt's modern premium car rental company. Driven by trust, powered by experience — serving Cairo, Alexandria, and across Egypt.",
};

const whyUs = [
  {
    icon: Car,
    title: "Reliable Vehicles",
    desc: "Every car in our fleet is regularly serviced, thoroughly cleaned, and fully inspected before each rental.",
  },
  {
    icon: Gauge,
    title: "Competitive Daily Rates",
    desc: "Transparent, all-inclusive pricing in EGP with no hidden fees — from economy sedans to luxury saloons.",
  },
  {
    icon: CheckCircle,
    title: "Easy Booking Process",
    desc: "Book in minutes online or by WhatsApp. Our team confirms your reservation within 2 hours.",
  },
  {
    icon: HeadphonesIcon,
    title: "Responsive Support",
    desc: "We are available by phone and WhatsApp during business hours to answer any question or concern.",
  },
  {
    icon: Shield,
    title: "Clean & Maintained Cars",
    desc: "Sanitised interiors, full A/C, and zero-compromise maintenance standards on every vehicle.",
  },
  {
    icon: MapPin,
    title: "Flexible Rental Options",
    desc: "Daily, weekly, or monthly rentals with pickup and drop-off across Greater Cairo and beyond.",
  },
];

const stats = [
  { value: `${vehicles.length}+`, label: "Fleet Vehicles" },
  { value: "500+", label: "Happy Rentals" },
  { value: "2hr", label: "Avg. Confirmation" },
  { value: "Egypt", label: "Nationwide Service" },
];

const timeline = [
  {
    year: "2019",
    event: "ENGENZ founded in Cairo with a 5-car starter fleet focused on corporate clients.",
  },
  {
    year: "2021",
    event: "Expanded to 30+ vehicles covering airport pickups, events, and inter-city travel.",
  },
  {
    year: "2023",
    event: "Launched online booking and introduced the luxury tier: Mercedes-Benz and BMW.",
  },
  {
    year: "2024",
    event: "Reached 500+ satisfied rentals and extended coverage to Alexandria and North Coast.",
  },
];

export default function AboutPage() {
  return (
    <>
      <ZNavbar />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

        {/* Hero */}
        <section
          className="relative pt-32 pb-20 overflow-hidden"
          style={{ background: "linear-gradient(180deg, #040610 0%, var(--bg) 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,180,255,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="status-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-bold tracking-widest uppercase mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 live-dot" />
                  SERVING EGYPT SINCE 2019
                </div>
                <h1
                  className="font-display font-bold text-white leading-none mb-6"
                  style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", letterSpacing: "0.03em" }}
                >
                  DRIVEN BY TRUST.
                  <br />
                  <span
                    className="italic"
                    style={{
                      color: "var(--accent)",
                      textShadow: "0 0 40px rgba(0,212,255,0.35)",
                    }}
                  >
                    POWERED BY
                    <br />
                    EXPERIENCE.
                  </span>
                </h1>
                <p
                  className="text-base leading-relaxed max-w-md"
                  style={{ color: "#8892a4" }}
                >
                  ENGENZ is a modern car rental company in Egypt focused on making
                  vehicle rental simple, reliable, and professional — from Cairo
                  airport pickups to week-long Red Sea adventures.
                </p>
              </div>

              {/* Brand visual */}
              <div
                className="relative rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #0a1020 0%, #121c35 50%, #080e1a 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  minHeight: "340px",
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(0,180,255,0.15) 0%, transparent 70%)",
                  }}
                />
                <div className="relative z-10 text-center px-8">
                  <div
                    className="font-display font-bold text-white mb-2"
                    style={{
                      fontSize: "clamp(3rem, 8vw, 5rem)",
                      letterSpacing: "0.18em",
                      textShadow: "0 0 60px rgba(0,212,255,0.3)",
                    }}
                  >
                    ENGENZ
                  </div>
                  <div
                    className="text-xs font-bold tracking-widest"
                    style={{ color: "var(--accent)", letterSpacing: "0.2em" }}
                  >
                    PREMIUM CAR RENTAL — EGYPT
                  </div>
                  <div
                    className="mt-4 h-px w-24 mx-auto"
                    style={{ background: "var(--accent)", opacity: 0.4 }}
                  />
                  <div
                    className="mt-4 flex items-center justify-center gap-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="currentColor"
                        style={{ color: "#d4af37" }}
                      />
                    ))}
                  </div>
                  <p
                    className="text-xs mt-2 tracking-widest font-semibold"
                    style={{ color: "var(--text-muted)", letterSpacing: "0.08em" }}
                  >
                    TRUSTED BY 500+ CUSTOMERS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section
          className="py-14"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center lg:items-start px-8 first:pl-0 last:pr-0 py-4"
                >
                  <div
                    className="font-display font-bold leading-none mb-2"
                    style={{
                      fontSize: "clamp(2rem, 5vw, 3rem)",
                      color: "var(--accent)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-xs font-bold tracking-widest"
                    style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
                  >
                    {label.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section
          className="py-20"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2
                  className="font-display font-bold text-white mb-6"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "0.04em" }}
                >
                  OUR STORY
                </h2>
                <div
                  className="mb-5 h-[2px] w-10"
                  style={{ background: "var(--accent)" }}
                />
                <div className="space-y-4" style={{ color: "#8892a4" }}>
                  <p className="text-sm leading-relaxed">
                    ENGENZ was born in Cairo in 2019 with a straightforward vision: make car
                    rental in Egypt genuinely professional. No paper-chase queues, no vague
                    pricing, no poorly maintained cars handed over with crossed fingers.
                  </p>
                  <p className="text-sm leading-relaxed">
                    We built our fleet carefully — selecting vehicles that Egyptians actually
                    drive and trust — and invested in the maintenance routines and customer
                    service standards that the market was missing.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Today, ENGENZ serves individual travellers, business teams, families
                    heading to the North Coast, and visitors arriving at Cairo International
                    Airport. Every rental carries the same promise: a clean, reliable car and
                    a team that picks up the phone.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h2
                  className="font-display font-bold text-white mb-6"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "0.04em" }}
                >
                  OUR JOURNEY
                </h2>
                <div
                  className="mb-5 h-[2px] w-10"
                  style={{ background: "var(--accent)" }}
                />
                <div className="space-y-0">
                  {timeline.map(({ year, event }, i) => (
                    <div key={year} className="flex gap-5">
                      {/* Connector */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                          style={{ background: "var(--accent)", boxShadow: "0 0 12px rgba(0,212,255,0.5)" }}
                        />
                        {i < timeline.length - 1 && (
                          <div
                            className="w-px flex-1 mt-1"
                            style={{ background: "rgba(255,255,255,0.08)", minHeight: "40px" }}
                          />
                        )}
                      </div>
                      <div className="pb-8">
                        <div
                          className="font-display font-bold mb-1"
                          style={{ fontSize: "1rem", color: "var(--accent)", letterSpacing: "0.08em" }}
                        >
                          {year}
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "#8892a4" }}
                        >
                          {event}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Vision */}
        <section
          className="py-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  tag: "MISSION",
                  title: "Simple. Reliable. Professional.",
                  desc: "To provide Egyptian customers and visiting travellers with a car rental experience that is completely hassle-free — from the first message to the moment the keys are returned.",
                  color: "rgba(0,212,255,0.08)",
                  borderColor: "rgba(0,212,255,0.18)",
                },
                {
                  tag: "VISION",
                  title: "Egypt's Preferred Rental Brand.",
                  desc: "To become Egypt's most trusted name in car rental by combining a world-class fleet, transparent pricing, and a customer-first culture that sets the standard for the industry.",
                  color: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.08)",
                },
              ].map(({ tag, title, desc, color, borderColor }) => (
                <div
                  key={tag}
                  className="rounded-xl p-8"
                  style={{ background: color, border: `1px solid ${borderColor}` }}
                >
                  <span
                    className="px-3 py-1 rounded-sm text-xs font-bold tracking-widest inline-block mb-4"
                    style={{
                      background: "rgba(0,212,255,0.12)",
                      border: "1px solid rgba(0,212,255,0.25)",
                      color: "var(--accent)",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {tag}
                  </span>
                  <h3
                    className="font-display font-bold text-white mb-3"
                    style={{ fontSize: "1.4rem", letterSpacing: "0.04em" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8892a4" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section
          className="py-20"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2
                className="font-display font-bold text-white mb-3"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "0.04em" }}
              >
                WHY CHOOSE ENGENZ?
              </h2>
              <div
                className="h-[2px] w-10 mx-auto"
                style={{ background: "var(--accent)" }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(0,212,255,0.1)",
                      border: "1px solid rgba(0,212,255,0.2)",
                    }}
                  >
                    <Icon size={20} style={{ color: "var(--accent)" }} />
                  </div>
                  <h3
                    className="font-display font-bold text-white mb-2"
                    style={{ fontSize: "1rem", letterSpacing: "0.06em" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="py-20"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2
              className="font-display font-bold text-white mb-3"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "0.04em" }}
            >
              READY TO HIT THE ROAD?
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              Browse our full fleet of Egyptian-market vehicles and book the one
              that fits your journey — daily rates from 900 EGP.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/fleet"
                className="btn-accent px-8 py-3 rounded-md text-sm font-bold tracking-widest"
                style={{ letterSpacing: "0.1em" }}
              >
                EXPLORE FLEET
              </Link>
              <a
                href="https://wa.me/201152333633"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-8 py-3 rounded-md text-sm font-bold tracking-widest flex items-center gap-2"
                style={{ letterSpacing: "0.1em" }}
              >
                <Users size={14} /> CONTACT US
              </a>
            </div>
          </div>
        </section>
      </main>
      <ZFooter />
    </>
  );
}
