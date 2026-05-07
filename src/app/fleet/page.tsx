"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { vehicles, type Category, type Transmission } from "@/data/vehicles";
import { Users, Fuel, Settings, ArrowRight, Search } from "lucide-react";
import ZNavbar from "@/components/ZNavbar";
import ZFooter from "@/components/ZFooter";
import VehicleImage from "@/components/VehicleImage";

type FilterKey = "All" | Category | Transmission;

const filters: FilterKey[] = [
  "All",
  "Economy",
  "Sedan",
  "SUV",
  "Luxury",
  "Automatic",
  "Manual",
];

export default function FleetPage() {
  const [active, setActive] = useState<FilterKey>("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      const matchFilter =
        active === "All" ||
        v.category === active ||
        v.transmission === active;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        v.name.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q);
      return matchFilter && matchSearch;
    });
  }, [active, search]);

  return (
    <>
      <ZNavbar />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

        {/* Hero */}
        <section
          className="relative pt-32 pb-20 overflow-hidden"
          style={{ background: "var(--bg)" }}
        >
          {/* Luxury car background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/4/49/2024_Mercedes-Benz_W206_C180_Avantgarde_in_Mojave_Silver%2C_front_right%2C_07-10-2024.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 35%",
              opacity: 0.08,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, #040610 0%, rgba(7,8,16,0.85) 60%, var(--bg) 100%)",
            }}
          />
          {/* grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,180,255,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <div className="status-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 live-dot" />
              {vehicles.filter((v) => v.available).length} VEHICLES AVAILABLE NOW
            </div>
            <h1
              className="font-display font-bold text-white leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "0.03em" }}
            >
              EXPLORE OUR FLEET
            </h1>
            <p
              className="text-base leading-relaxed max-w-xl mx-auto"
              style={{ color: "var(--text-muted)" }}
            >
              Choose from reliable, stylish, and comfortable rental cars
              available across Egypt — from Cairo to the Red Sea coast.
            </p>
          </div>
        </section>

        {/* Filter bar */}
        <div
          className="sticky top-[60px] z-40 py-4"
          style={{
            background: "rgba(7,8,16,0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className="px-4 py-1.5 rounded-sm text-xs font-bold tracking-widest transition-all"
                    style={
                      active === f
                        ? {
                            background: "var(--accent)",
                            color: "#03060a",
                            letterSpacing: "0.1em",
                          }
                        : {
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.09)",
                            color: "var(--text-muted)",
                            letterSpacing: "0.1em",
                          }
                    }
                  >
                    {f.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative flex-shrink-0">
                <Search
                  size={13}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--text-muted)" }}
                />
                <input
                  type="text"
                  placeholder="SEARCH VEHICLES..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="portal-input pl-8 pr-4 py-2 rounded-sm text-xs tracking-widest w-56"
                  style={{ letterSpacing: "0.08em" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
          {filtered.length === 0 ? (
            <div className="text-center py-24" style={{ color: "var(--text-muted)" }}>
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-sm tracking-widest font-bold">NO VEHICLES MATCH YOUR FILTER</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((v) => (
                <Link
                  key={v.slug}
                  href={`/fleet/${v.slug}`}
                  className="group block rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: v.bgGradient,
                    border: "1px solid rgba(255,255,255,0.07)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  {/* Car visual */}
                  <div className="relative h-44">
                    <VehicleImage
                      image={v.image}
                      emoji={v.emoji}
                      name={v.name}
                      bgGradient={v.bgGradient}
                      glowColor={v.glowColor}
                      className="h-44 w-full"
                      emojiSize="clamp(72px, 12vw, 100px)"
                    />
                    {/* availability badge */}
                    <div className="absolute top-3 left-3 z-10">
                      {v.available ? (
                        <span
                          className="px-2 py-0.5 rounded-sm text-xs font-bold tracking-widest"
                          style={{
                            background: "rgba(34,197,94,0.15)",
                            border: "1px solid rgba(34,197,94,0.3)",
                            color: "#22c55e",
                            letterSpacing: "0.08em",
                          }}
                        >
                          AVAILABLE
                        </span>
                      ) : (
                        <span
                          className="px-2 py-0.5 rounded-sm text-xs font-bold tracking-widest"
                          style={{
                            background: "rgba(239,68,68,0.15)",
                            border: "1px solid rgba(239,68,68,0.3)",
                            color: "#ef4444",
                            letterSpacing: "0.08em",
                          }}
                        >
                          RENTED
                        </span>
                      )}
                    </div>
                    {/* category badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span
                        className="px-2 py-0.5 rounded-sm text-xs font-bold tracking-widest"
                        style={{
                          background: "rgba(0,212,255,0.12)",
                          border: "1px solid rgba(0,212,255,0.25)",
                          color: "var(--accent)",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {v.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3
                      className="font-display font-bold text-white leading-tight mb-0.5"
                      style={{ fontSize: "1.1rem", letterSpacing: "0.04em" }}
                    >
                      {v.name}
                    </h3>
                    <p
                      className="text-xs font-semibold tracking-widest mb-3"
                      style={{ color: "var(--text-muted)", letterSpacing: "0.08em" }}
                    >
                      {v.year}
                    </p>

                    {/* Specs row */}
                    <div
                      className="flex items-center gap-3 mb-4 pb-3"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      {[
                        { icon: Settings, label: v.transmission },
                        { icon: Fuel, label: v.fuel },
                        { icon: Users, label: `${v.seats} Seats` },
                      ].map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-1">
                          <Icon size={11} style={{ color: "var(--text-dim)" }} />
                          <span
                            className="text-xs font-semibold tracking-wide"
                            style={{ color: "var(--text-muted)", fontSize: "0.68rem" }}
                          >
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-end justify-between">
                      <div>
                        <div
                          className="font-display font-bold text-white"
                          style={{ fontSize: "1.3rem", letterSpacing: "0.02em" }}
                        >
                          {v.pricePerDay.toLocaleString("en-EG")}
                          <span
                            className="text-xs font-semibold ml-1"
                            style={{ color: "var(--accent)" }}
                          >
                            EGP
                          </span>
                        </div>
                        <div
                          className="text-xs font-semibold tracking-widest"
                          style={{ color: "var(--text-muted)", fontSize: "0.65rem" }}
                        >
                          PER DAY
                        </div>
                      </div>
                      <div
                        className="flex items-center gap-1 text-xs font-bold tracking-widest group-hover:gap-2 transition-all"
                        style={{ color: "var(--accent)", letterSpacing: "0.08em" }}
                      >
                        VIEW <ArrowRight size={13} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Results count */}
          <p
            className="mt-8 text-center text-xs tracking-widest font-semibold"
            style={{ color: "var(--text-dim)", letterSpacing: "0.1em" }}
          >
            SHOWING {filtered.length} OF {vehicles.length} VEHICLES
          </p>
        </section>

        {/* Bottom CTA */}
        <section
          className="py-20"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2
              className="font-display font-bold text-white mb-3"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", letterSpacing: "0.04em" }}
            >
              NEED HELP CHOOSING THE RIGHT CAR?
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              Our team can help you select the best vehicle based on your budget,
              trip, and comfort needs — from Cairo airport pickups to week-long
              Red Sea adventures.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/booking"
                className="btn-accent px-8 py-3 rounded-md text-sm font-bold tracking-widest"
                style={{ letterSpacing: "0.1em" }}
              >
                BOOK NOW
              </Link>
              <a
                href="https://wa.me/201152333633"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-8 py-3 rounded-md text-sm font-bold tracking-widest"
                style={{ letterSpacing: "0.1em" }}
              >
                CONTACT US
              </a>
            </div>
          </div>
        </section>
      </main>
      <ZFooter />
    </>
  );
}
